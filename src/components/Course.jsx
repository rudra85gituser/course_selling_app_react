import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography, TextField, Button } from '@mui/material';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

// Atom definition for courses state
const coursesState = atom({
    key: 'coursesState',
    default: [],
});

function Course() {
    const { courseID } = useParams();  // Fetch course ID from route params
    const setCourses = useSetRecoilState(coursesState);  // Set Recoil state for courses
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/admin/courses/", {
            method: "GET", 
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setCourses(data.courses);  // Assuming API response has 'courses' field
                setLoading(false);  // Data fetched, stop loading
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);  // Stop loading even on error
            });
    }, [setCourses]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <CourseCard courseID={courseID} />
            <UpdateCard courseID={courseID} />
        </>
    );
}

function UpdateCard({ courseID }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const courses = useRecoilValue(coursesState);  // Get courses from Recoil state
    const setCourses = useSetRecoilState(coursesState);  // Set Recoil state

    const handleUpdate = () => {
        // Using your loop approach
        let updatedCourses = [];
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].id === courseID) {
                updatedCourses.push({
                    id: courseID,
                    title: title || courses[i].title,
                    description: description || courses[i].description,
                    imageLink: image || courses[i].imageLink,
                });
            } else {
                updatedCourses.push(courses[i]); 
            }
        }

        fetch(`http://localhost:3000/admin/courses/${courseID}`, {
            method: "PUT",
            body: JSON.stringify({
                title,
                description,
                imageLink: image,
                published: true
            }),
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then(() => {
                setCourses(updatedCourses);
                alert("Course updated successfully!");
            })
            .catch((err) => console.error(err));
    };

    return (
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <Card variant="outlined" style={{ width: 400, padding: 15 }}>
                <Typography>Update course</Typography>
                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    label="Title"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    label="Description"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    fullWidth
                    label="Image link"
                    variant="outlined"
                    margin="normal"
                />
                <Button size="large" variant="contained" onClick={handleUpdate}>
                    Update Course
                </Button>
            </Card>
        </div>
    );
}

function CourseCard({ courseID }) {
    const courses = useRecoilValue(coursesState);  // Fetch courses from Recoil state

    // Your original loop approach to find the course
    let course = null;
    for (let i = 0; i < courses.length; i++) {
        if (String(courses[i].id) === String(courseID)) {
            course = courses[i];
            break;
        }
    }

    if (!course) return <p>Course not found!</p>;

    return (
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <Card
                style={{
                    border: "2px solid black",
                    margin: 10,
                    width: 300,
                    color: '#AA336A',
                    minHeight: 200,
                }}
            >
                <Typography textAlign={"center"} variant="h6">{course.title}</Typography>
                <Typography textAlign={"center"} variant="h6">{course.description}</Typography>
                <img src={course.imageLink} alt={course.title} style={{ width: 230 }} />
            </Card>
        </div>
    );
}

export default Course;

import { Typography, Card } from '@mui/material';
import { useEffect, useState } from 'react';

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        function callback2(data) {
            setCourses(data.courses); // Assuming the API response has a 'courses' field
            console.log(data.courses);
        }

        function callback1(res) {
            res.json().then(callback2);
        }

        fetch("http://localhost:3000/admin/courses/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
        }).then(callback1);
    }, []);

    return (
        <div style={{ display: "flex", flexWrap: "wrap", color: '#AA336A' }}>
            Courses

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {courses.map(course => {
                    // Added a unique key
                    return <Course course={course} key={course.id || course._id} />;
                })}
            </div>
        </div>
    );
}

export function Course(props) {
    return (
        <div>
            <Card
                style={{
                    border: "2px solid black",
                    margin: 10,
                    width: 300,
                    color: '#AA336A',
                    minHeight: 200,
                }}
            >
                <Typography textAlign={"center"} variant="h6">
                    {props.course.title}
                </Typography>

                <Typography textAlign={"center"} variant="h6">
                    {props.course.description}
                </Typography>

                {/* Added alt attribute for accessibility */}
                <img src={props.course.imageLink} style={{ width: 150 }} alt={props.course.title} />
            </Card>
        </div>
    );
}

export default Courses;

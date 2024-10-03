import { Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function Courses() 
{
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


       
       // {JSON.stringify(courses)} 
       // Corrected to display the 'courses' data 
    return (
        <div style={{ display: "flex" , flexWrap: "wrap" , color: '#AA336A' }}>
            Courses
         
            <div  style={{display: "flex" , flexWrap: "wrap" }}>
            {courses.map(course => {
                return <Course course={course} key={course.id} />; {/* Added a unique key */}
            })}
            </div>
        </div>
    );
}

function Course(props) {
    return (
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

            <img src= {props.course.imageLink} style= {{width: 180}}></img>

             

        </Card>
    );
}

export default Courses;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Course()
{  
    const { courseID } = useParams();

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
let course =null;
for(let i=0; i<courses.length;i++)
{
    if(courses[i].id == courseID)
    {
        course =courses[i]
    }
}

if(!course)
{
    return 
    <div>
        loading..... 
    </div>
}

        
    return <div style={{  color: '#AA336A' }}>
        {JSON.stringify(courses)}
        <br></br>
        Course ID: {courseID}
        <br></br>
        <br></br> 
        {JSON.stringify(course)}
        </div>
}
export default Course;
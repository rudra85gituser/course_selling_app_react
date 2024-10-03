
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState , useEffect } from 'react';

function Addcourse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const handleAddCourse = () => {
        // Do something with title and description
        console.log("Title:", title);
        console.log("Description:", description);
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <Card variant="outlined" style={{ width: 400, padding: 15 }}>
                    <TextField
                    value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth={true}
                        id="title"
                        label="Title"
                        variant="outlined"
                        margin="normal"
                    />
                    <br /><br />
                    <TextField
                    value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth={true}
                        id="description"
                        label="Description"
                        variant="outlined"
                        margin="normal"
                    />
                    <br /><br />


                    <TextField
                    value={image}
                        onChange={(e) => setImage(e.target.value)}
                        fullWidth={true}
                        id="image"
                        label="Image link"
                        variant="outlined"
                        margin="normal"
                    />
                    <br /><br />


                <Button size="large" variant="contained" 
                   onClick={() => {

                    function callback2(data)
                    {
                        //lacalstorage.setItem("token" . data.token)
                        alert("courses added !");
                    }

                    function callback1(res){
                      
                        res.json().then(callback2)
                    }

                    fetch("http://localhost:3000/admin/courses" ,{
                        method: "POST",
                        body:JSON.stringify({
                            title: title,
                            description: description ,
                            imageLink: image, 
                            published: true
                        }),
                        headers:
                        {
                            "Content-type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    })
                    .then(callback1)
                }}>
                        Add Course
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default Addcourse;

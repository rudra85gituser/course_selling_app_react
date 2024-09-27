import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from 'react';

function Addcourse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

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
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth={true}
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                    />
                    <br /><br />
                    <TextField
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth={true}
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                    />
                    <br /><br />
                    <Button size="large" variant="contained" 
                   onClick={() => {
                    function callback2(data){
                        res.json().then(callback2)
                    }
                    function callback1(res){
                        lacalstorage.setItem("token" . data.token)
                    }
                    fetch("http://localhost:3000/admin/signup" ,{
                        method: "POST",
                        body:JSON.stringify({
                            username: email,
                            password: password
                        }),
                        headers:
                        {
                            "Content-type": "application/json"
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

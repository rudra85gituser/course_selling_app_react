import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from 'react';


function Signup()
    {
        const[email , setEmail] = useState()
        const[password , setPassword] = useState()
        return (
        <div style={{padding: 180}}>
            
            
            <div style={{
                display: "flex" ,
                justifyContent: 'center',
                color: 'darkblue',
                paddingtop: 150,
                marginBottom: 10,
            }}> 
             
            <Typography varient={"h6"}>
                Welcome to the Courseera. Sign-up below.
            </Typography>
            
            </div>
          
           
            <div style={{display: "flex" , justifyContent: 'center'}}>
            <Card varient={"outlined"} style={{width:400 , padding:15}}>

            <TextField onChange={(e)=>{
                setEmail(e.target.value);
            }}
            fullWidth={true} id="outlined-basic" label="Email" variant="outlined" /> 

            <br/><br/>

            <TextField onChange={(e)=>{
                setEmail(e.target.value);
            }}
            
            fullWidth={true} id="outlined-basic" label="Password" variant="outlined" />  
            <br/><br/>
            <Button size={"large"} variant="contained"
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
            }}
            >Sign-up</Button>
            </Card>
            </div>
            
            </div>
            
        );
    }
//we are using the material ui for frontend
export default Signup
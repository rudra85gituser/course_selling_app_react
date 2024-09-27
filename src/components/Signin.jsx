import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';


function Signin()
    {
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
                Welcome to the Courseera again. Sign-in below.
            </Typography>
            
            </div>
          
           
            <div style={{display: "flex" , justifyContent: 'center'}}>
            <Card varient={"outlined"} style={{width:400 , padding:15}}>
            <TextField fullWidth={true} id="outlined-basic" label="Email" variant="outlined" />        
            <br/><br/>
            <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined" />  
            <br/><br/>
            <Button size={"large"} variant="contained">Sign-in</Button>
            </Card>
            </div>
            
            </div>
            
        );
    }
//we are using the material ui for frontend
export default Signin
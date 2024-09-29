import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';


function Signin()
    {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleSignin = ()=>{
        // Implement your sign-in logic here
        console.log('Signing in with:', email, password);
        };


        return (
        <div style={{padding: 180}}>
            
            
            <div style={{
                display: "flex" ,
                justifyContent: 'center',
                color: 'darkblue',
                paddingtop: 150,
                marginBottom: 10,
            }}> 
             
            <Typography variant={"h6"}>
                Welcome to the Coursera again. Sign-in below.
            </Typography>
            
            </div>
          
           
            <div style={{display: "flex" , justifyContent: 'center'}}>
            <Card varient={"outlined"} style={{width:400 , padding:15}}>

            <TextField 
            fullWidth={true} 
            id="email" 
            label="Email" 
            variant="outlined"  
            margin="normal" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>        
            <br/><br/>

            <TextField 
            fullWidth={true} 
            id="password" 
            label="Password" 
            variant="outlined" 
            type="password"  
            margin="normal" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>  
            <br/><br/>

            <Button size={"large"} variant="contained">Sign-in</Button>
            </Card>
            </div>
            
            </div>
            
        );
    }
//we are using the material ui for frontend
export default Signin
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { lightGreen } from '@mui/material/colors';

function Appbar()
{
    return(
        <div style={{ display: 'flex' , justifyContent: 'space-between' , padding:9 }}>


            <div style={{ color: 'darkblue' , fontWeight: 'bold'}}>
                <Typography varient={"h6"}>COURSERA</Typography>
            </div>


            <div style={{display: 'flex'}}>
                <div style={{marginRight: 10}}>

                <Button onClick={()=>
                {
                    window.location = "/Signin"
                }}
                size={"large"} variant="contained">Sign-in</Button>
                </div>
                <div>

                <Button onClick={()=>
                    {
                        window.location = "/Signup"
                    }}
                size={"large"} variant="contained">Sign-up</Button>
                </div>
            </div>
        </div>
    )
}
export default Appbar
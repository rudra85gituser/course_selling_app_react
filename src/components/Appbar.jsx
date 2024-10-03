import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Appbar() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(null);
     
    // This hook fetches user info when the component loads
    useEffect(() => {
        function callback2(data) {
            if (data.username) {
                setUserEmail(data.username);
                
            }
            console.log(data);
        }

        function callback1(res) {
            res.json().then(callback2);
        }

        fetch("http://localhost:3000/admin/me", {
            headers: 
            {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
        }).then(callback1);
    }, []);


    // If the user is logged in (userEmail is set), display a logout option
    if (userEmail) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 9 }}>
                <div style={{ color: 'darkblue', fontWeight: 'bold' }}>
                    <Typography variant={"h6"}>COURSERA</Typography>
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{color: '#AA336A'}}>{userEmail}</div>

                    <div style={{ marginRight: 10 }}>
                        <Button
                            onClick={() => {
                                localStorage.removeItem("token" , null); // Remove token properly
                                //setUserEmail(null); // Clear user state
                                //navigate("/Appbar"); // Redirect to Signin
                                window.location="/"; 
                            }}
                            size={"large"} variant="contained">
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
else{
    // If the user is not logged in, display sign-in and sign-up options
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 9 }}>
            <div style={{ color: 'darkblue', fontWeight: 'bold' }}>
                <Typography variant={"h6"}>COURSERA</Typography>
            </div>

            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: 10 }}>
                    <Button onClick={() => navigate("/Signup")} size={"large"} variant="contained">
                        Sign-up
                    </Button>
                </div>
                <div>
                    <Button onClick={() => navigate("/Signin")} size={"large"} variant="contained">
                        Sign-in
                    </Button>
                </div>
            </div>
        </div>
    );}
}

export default Appbar;

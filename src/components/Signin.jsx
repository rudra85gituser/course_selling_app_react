import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from 'react';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = () => {
        // Implement your sign-in logic here
        console.log('Signing in with:', email, password);

        // Add your API logic here to handle the sign-in request
        fetch("http://localhost:3000/admin/signin", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                console.log("Sign-in successful!");
                // Redirect or perform other actions after successful sign-in
            } else {
                console.error("Sign-in failed:", data.message);
            }
        })
        .catch(error => console.error("Error during sign-in:", error));
    };

    return (
        <div style={{ padding: 50 }}>
            <div style={{
                display: "flex",
                justifyContent: 'center',
                color: 'darkblue',
                paddingTop: 150, // Corrected 'paddingtop' to 'paddingTop'
                marginBottom: 10,
            }}>
                <Typography variant="h6">
                    Welcome to Coursera again. Sign-in below.
                </Typography>
            </div>

            <div style={{ display: "flex", justifyContent: 'center' }}>
                <Card variant="outlined" style={{ width: 400, padding: 15 }}>
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br /><br />

                    <TextField
                        fullWidth
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br /><br />

                    <Button
                        size="large"
                        variant="contained"
                        onClick={handleSignin} // Added handleSignin as the onClick handler
                    >
                        Sign-in
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default Signin;

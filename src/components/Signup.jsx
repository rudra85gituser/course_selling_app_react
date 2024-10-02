import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <div style={{ padding: 50 }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "darkblue",
                    paddingTop: 150, // Fix typo from "paddingtop" to "paddingTop"
                    marginBottom: 10,
                }}
            >
                <Typography variant="h6">Welcome to Coursera. Sign up below.</Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card variant="outlined" style={{ width: 400, padding: 15 }}>
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth={true}
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={email} // Controlled input
                    />
                    <br />
                    <br />

                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth={true}
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password} // Controlled input
                    />
                    <br />
                    <br />

                    <Button
                        size="large"
                        variant="contained"
                        onClick={() => {
                            function callback2(data) {
                                console.log("Signup response:", data);
                                if (data.token) {
                                    localStorage.setItem("token", data.token); // Fixed typo in localStorage
                                    navigate("/"); // Navigate after successful signup
                                } else {
                                    console.log("Signup failed:", data.message); // Error handling
                                }
                            }

                            function callback1(res) {
                                res.json().then(callback2); // Fetch response handling
                            }

                            fetch("http://localhost:3000/admin/signup", {
                                method: "POST",
                                body: JSON.stringify({
                                    username: email,
                                    password: password,
                                }),
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            }).then(callback1).catch((error) => {
                                console.error("Error during signup:", error); // Error handling
                            });
                        }}
                    >
                        Sign-up
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default Signup;

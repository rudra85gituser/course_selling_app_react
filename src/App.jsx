import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import Appbar from "./components/Appbar.jsx";
import Addcourse from "./components/Addcourse.jsx";


function App() {
  return (
    <div style={{ width: "100vw" , height: "100vh" , backgroundColor: "#eeeeee"}}>
    <Appbar></Appbar>
    <Router>
            <Routes>
                <Route path="/Addcourse" element={<Addcourse />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Admin/me" element={<Admin/me />} />
               
               
            </Routes>
        </Router>
        </div>
  );
}

export default App;

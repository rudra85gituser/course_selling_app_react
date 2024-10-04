import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import Appbar from "./components/Appbar.jsx";
import Addcourse from "./components/Addcourse.jsx";
import Courses from "./components/Courses.jsx";
import Course from "./components/Course.jsx";
import { RecoilRoot } from 'recoil';


function App() {
  return (
    <RecoilRoot>
    <Router>
      <div style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}>
        <Appbar />
        <Routes>
          <Route path="/addcourse" element={<Addcourse />} />
          <Route path="/course/:courseID" element={<Course />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
         
        </Routes>
      </div>
    </Router>
    </RecoilRoot>
  );
}

export default App;

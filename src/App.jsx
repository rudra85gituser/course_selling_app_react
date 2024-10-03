import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import Appbar from "./components/Appbar.jsx";
import Addcourse from "./components/Addcourse.jsx";
import Courses from "./components/Courses.jsx";
import Course from "./components/CourseData.jsx";


function App() {
  return (
    <Router>
      <div style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}>
        <Appbar />
        <Routes>
          <Route path={"/Addcourse"} element={<Addcourse />} />
          <Route path={"/Course/:courseID"} element={<Course />} />
          <Route path={"/Courses"} element={<Courses />} />
          <Route path={"/Signup"} element={<Signup />} />
          <Route path={"/Signin"} element={<Signin />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
// import app components
import Navigation from './components/blog/Navigation'
// import main pages
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';
import BlogPage from './Pages/BlogPage';
import CreatePostPage from './Pages/CreatePostPage';



export default function App() {
  return (
    <div className='application'>
        <Navigation/>
      <main>
        <Routes>
          <Route index                element = {<HomePage/>} />
          <Route path = "/"           element = {<HomePage/>}/>
          <Route path = "/contact"    element = {<ContactPage/>}/>
          <Route path = "/projects"   element = {<ProjectsPage/>}/>
          <Route path = "/blog/*"     element = {<BlogPage/>}/>
          <Route path = "/register"   element = {<RegisterPage/>}/>
          <Route path = "/createPost" element = {<CreatePostPage/>}/>
        </Routes>
      </main>
    </div>
  );
}


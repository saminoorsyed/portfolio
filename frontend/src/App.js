import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
// import app components
import Navigation from './components/homeComponents/Navigation'
// import main pages
import MessagesPage from './Pages/MessagesPage'
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';
import BlogPage from './Pages/BlogPage';
import CreatePostPage from './Pages/CreatePostPage';
import CreateProjectPage from './Pages/CreateProjectPage';
import Footer from './components/homeComponents/Footer';



export default function App() {
  return (
    <div className='application'>
        <Navigation/>
      <main>
        <Routes>
          <Route index                    element = {<HomePage/>} />
          <Route path = "/"               element = {<HomePage/>}/>
          <Route path='/messages'         element = {<MessagesPage/>}/>
          <Route path = "/contact"        element = {<ContactPage/>}/>
          <Route path = "/projects"       element = {<ProjectsPage/>}/>
          <Route path = "/createProject"  element = {<CreateProjectPage/>}/>
          <Route path = "/blog/*"         element = {<BlogPage/>}/>
          <Route path = "/register"       element = {<RegisterPage/>}/>
          <Route path = "/createPost"     element = {<CreatePostPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}


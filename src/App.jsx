import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='app-container'>
      <Sidebar></Sidebar>
      <div className='content'>
        <Header />
        <CreatePost />
        <Posts></Posts>
        <Footer/>
      </div>
    </div>
  )
}

export default App;
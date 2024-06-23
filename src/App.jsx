import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <Header></Header>
      <div className="sidebar"><Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar></div>
      <div className="content" style={{padding: '10px 50px', backgroundColor: '#dbe8ff'}}>{selectedTab === "Home" ? <Posts></Posts> : <CreatePost />}</div>
      <Footer></Footer>
    </PostListProvider>
  )
}

export default App;
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./components/home/Header/Home"
import Entry from "./components/entry/Entry"
import HomeHeader from "./components/home/Header/HomeHeader"
import EntryHeader from "./components/entry/EntryHeader"
import { Navigate } from "react-router-dom"
import { Blog } from "./Context/Context"
import { ToastContainer } from "react-toastify"
import Profile from "./components/home/Profile/Profile"
import Write from "./components/home/Write/Write"
import SinglePost from "./components/Common/posts/SinglePost"
import EditPost from "./components/Common/posts/EditPost";
import FilterPost from "./components/Demo/FilterPost";
function App() {
  const { currentUser } = Blog();



  return (
    <>
      {currentUser ? <HomeHeader /> : <EntryHeader />}
      <ToastContainer />
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path="/entry" element={<Entry />} />}
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/editPost/:postId" element={<EditPost />} />
        <Route path="/filter/:tag" element={<FilterPost />} />
        <Route path="*" element={<Navigate to={!currentUser ? "/entry" : "/"} />} />
      </Routes>
    </>
  )
}

export default App

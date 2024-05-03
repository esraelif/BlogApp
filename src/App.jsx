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
        <Route path="*" element={<Navigate to={!currentUser ? "/entry" : "/"} />} />
      </Routes>
    </>
  )
}

export default App

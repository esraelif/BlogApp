import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Entry from "./components/entry/Entry"
import HomeHeader from "./components/home/HomeHeader"
import EntryHeader from "./components/entry/EntryHeader"
import { Navigate } from "react-router-dom"
import { Blog } from "./Context/Context"
import { ToastContainer } from "react-toastify"
function App() {
  const { currentUser } = Blog();



  return (
    <>
      {currentUser ? <HomeHeader /> : <EntryHeader />}
      <ToastContainer />
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path="/entry" element={<Entry />} />}
        <Route path="*" element={<Navigate to={!currentUser ? "/entry" : "/"} />} />
      </Routes>
    </>
  )
}

export default App

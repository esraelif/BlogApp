import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Entry from "./components/entry/Entry"
import HomeHeader from "./components/home/HomeHeader"
import EntryHeader from "./components/entry/EntryHeader"
import { Navigate } from "react-router-dom"

function App() {
  const currentUser = false



  return (
    <>
      {currentUser ? <HomeHeader /> : <EntryHeader />}
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path="/entry" element={<Entry />} />}
        <Route path="*" element={<Navigate to={!currentUser ? "/entry" : "/"} />} />
      </Routes>
    </>
  )
}

export default App

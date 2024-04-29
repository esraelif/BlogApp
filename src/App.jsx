import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Entry from "./components/entry/Entry"
import HomeHeader from "./components/home/HomeHeader"
import EntryHeader from "./components/entry/EntryHeader"

function App() {
  const auth = false



  return (
    <>
      {auth ? <HomeHeader /> : <EntryHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entry" element={<Entry />} />
      </Routes>
    </>
  )
}

export default App

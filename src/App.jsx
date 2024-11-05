
import { Outlet } from "react-router-dom"
import Header from "./components/layout/header"
import axios from "./util/axios.customize"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/`)
      console.log("check response", response)
      // const data = await response.json()
      // console.log
    }

    fetchData()
  }, [])

  return (
    <>
      <div>
        <Header />
        <Outlet />  {/* Outlet is a placeholder for child routes */}
      </div>
    </>
  )
}

export default App

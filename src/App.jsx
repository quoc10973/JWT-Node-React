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
        hello world
      </div>
    </>
  )
}

export default App

import axios from "axios"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/`)
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

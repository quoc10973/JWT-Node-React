
import { Outlet } from "react-router-dom"
import Header from "./components/layout/header"
import axios from "./util/axios.customize"
import { useContext, useEffect } from "react"
import { getAccountAPI } from "./util/api"
import { AuthContext } from "./components/context/authContext"
import { Spin } from "antd"

function App() {

  const { setAuth, appLoading, setAppLoading } = useContext(AuthContext)
  useEffect(() => {
    const fetchAccount = async () => {
      setAppLoading(true)
      const response = await getAccountAPI()
      if (response) {
        setAuth({
          isAuthenticated: true,
          user: {
            email: response.email,
            name: response.name,
          }
        })
      }
      setAppLoading(false);
    }
    fetchAccount()
  }, [])

  return (
    <>
      <div>
        {appLoading === true ?
          <>
            <div style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
            >
              <Spin size="large" />
            </div>
          </>
          : <>
            <Header />
            <Outlet />
          </>
        }
        {/* Outlet is a placeholder for child routes */}
      </div>
    </>
  )
}

export default App


import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router"

import Navbar from "./components/navbar"
import LoginForm from "./pages/signin"
import Footer from "./components/footer"
import NotFound from "./pages/NotFound"
import RegisterForm from "./pages/register"
import Account from "./pages/account"
import Dashboard from "./pages/Rent/dashboard"
import Manage from "./pages/Rent/manage"
import { useNavigate } from "react-router"
import { ReactNode, useEffect, useState } from "react"

function LocationWrapper(props: {
  children: ReactNode
}) {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user") || null;

    if(location.pathname === "/") {
      if(user) {
        navigate("/account")
      }else {
        navigate("/login")
      }
    }
    

    if (user) {
      setIsLogged(true);
    }

  }, [location])

  return (
    <>
      <Navbar isLogged={isLogged} />
      {props.children}
      <Footer />
    </>
  )
}

function App() {
  
  return (
    <>
      <Router>
        <LocationWrapper>
          <Routes>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/register" element={<RegisterForm />}></Route>

            <Route path="/account" element={<Account />}></Route>

            <Route path="/rent/:id/dashboard" element={<Dashboard />}></Route>
            <Route path="/rent/:id/manage" element={<Manage />}></Route>


            <Route path="*" element={<NotFound />}></Route>

          </Routes>
        </LocationWrapper>
      </Router>
    </>
  )
}

export default App

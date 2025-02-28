
import { BrowserRouter as Router, Routes, Route } from "react-router"

import Navbar from "./components/navbar"
import LoginForm from "./pages/signin"
import Home from "./pages/home"
import Footer from "./components/footer"
import NotFound from "./pages/NotFound"
import RegisterForm from "./pages/register"
import Account from "./pages/account"
import Dashboard from "./pages/Rent/dashboard"
import Manage from "./pages/Rent/manage"

function App() {
 

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>

          <Route path="/account" element={<Account />}></Route>

          <Route path="/rent/:id/dashboard" element={<Dashboard />}></Route>
          <Route path="/rent/:id/manage" element={<Manage />}></Route>


          <Route path="*" element={<NotFound />}></Route>

        </Routes>
          <Footer />
      </Router>
    </>
  ) 
}

export default App

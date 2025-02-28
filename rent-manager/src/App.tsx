
import { BrowserRouter as Router, Routes, Route } from "react-router"

import Navbar from "./components/navbar"
import LoginForm from "./pages/form"

import Footer from "./components/footer"

function App() {
 

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>

          <Route path="*" element={<h1>Not found</h1>}></Route>

        </Routes>
          <Footer />
      </Router>
    </>
  ) 
}

export default App

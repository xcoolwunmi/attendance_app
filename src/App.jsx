import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./component/Footer"
import Head from "./component/Head"
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

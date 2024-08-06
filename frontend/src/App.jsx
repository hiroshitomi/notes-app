import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import LoadingState from "./components/LoadingState/LoadingState"

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<LoadingState/>} />
      <Route path="/login" exact element={<Login/>} />
      <Route path="/dashboard" exact element={<Home/>} />
      <Route path="/signup" exact element={<SignUp/>} />
    </Routes>
  </Router>
)

const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App
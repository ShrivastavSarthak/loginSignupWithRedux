import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;

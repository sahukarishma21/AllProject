import Signup from "./Components/Signup/Signup.jsx";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn.js";
import Home from "./Components/Home/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./Components/SignInForm/registrationForm.js";
import { Provider } from "react-redux";
import store from './Components/stores/index.js'

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/registrationForm" element={<RegistrationPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;

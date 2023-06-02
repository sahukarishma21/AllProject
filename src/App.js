import Signup from "./Components/Signup/Signup.jsx";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./Components/SignInForm/registrationForm.js";
import { Provider } from "react-redux";
import store from "./Components/stores/index.js";
import Protected from "./Components/protected/protected.js";
import Home from "./Components/Home/home.js";
import DummyHome from "./Components/Dummy home Page/DummyHome.jsx";
import SearchBar from "./Components/Rightsidebar/Searchbar/Searchbar.js";

import Twitterdata from './Components/Rightsidebar/data/User.json';
import Topics from './TrendsKeyword/TrendsKeyword';
import TopicItem from './TopicItem/TopicItem';
import Twitterdata from "./Components/Rightsidebar/data/User.json";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/registrationForm" element={<RegistrationPage />} />
            {/* <Route path="/sidebar" element={<Sidebar />} /> */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/DummyhomePage" element={<DummyHome />} />
          </Routes>
        </Router>
      </Provider>

      <SearchBar placeholder="search twitter" data={Twitterdata}/>
      <Topics/>
     <TopicItem/>
      

    </div>
  );
}

export default App;


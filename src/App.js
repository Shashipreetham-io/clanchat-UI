import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RegistrationComponent } from './Components/RegistrationComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { LoginComponent } from './Components/LoginComponent';
import { LandingComponent } from './Components/LandingComponent';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<RegistrationComponent/>} ></Route>
          <Route exact path="/login" element={<LoginComponent/>}></Route>
          <Route exact path="/landingPage/:uid" element={<LandingComponent/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import logo from '../logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import DashboardComponent from "../Dashboard/DashboardComponent";
import LoginScreen from "../loginScreen/LoginScreen";

function App() {
  return (
    <div className="App">
      <Route path="/" component={LoginScreen} />
      <Route path="/dashboard" component={DashboardComponent} />
    </div>
  );
}

export default App;
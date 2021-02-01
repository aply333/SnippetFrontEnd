import Login from "./pages/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';
import './sharedComponents/SharedStyles.css'
import UserDashboard from "./pages/userdashboar";
import PrivateRoute from "./sharedComponents/privateRoute";

function App() {
  
  return (
    <Router>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/dashboard" component={UserDashboard}/>
    </Router>
  );
}

export default App;

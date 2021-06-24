import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// IMPORT BOOTSTRAP
// import "bootstrap/dist/css/bootstrap.min.css";
// IMPORT PAGES
import Login from "./pages/Login";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Searches from "./pages/Searches";

function App() {
  return (
    <Router className="App">
      <main>
        {/* <Route exact path="/" component={Main} /> */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* <Route path="/searches" component={Searches} /> */}
        <Route exact path="/" component={Searches} />
      </main>
    </Router>
  );
}

export default App;

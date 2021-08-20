import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import List from "./components/List";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/Amiibos" exact component={List}></Route>
          <Route path="/Checkout" exact component={Checkout}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

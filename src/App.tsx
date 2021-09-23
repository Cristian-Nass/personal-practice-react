import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Home from "./components/Home";
import CustomSearch from "./components/customsearch/CustomSearch";
import TableToExcel from "./components/TableToExcel";
import Navbar from "./components/Navbar";
import PasswordGenerators from "./components/PasswordGenerators";
// import PasswordGenerators from "./components/PasswordGenerators";

function App() {
  return (
    <div className='App'>
      {/* <PasswordGenerators /> */}
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/custom-search' component={CustomSearch} />
          <Route path='/password-generators' component={PasswordGenerators} />
          <Route path='/table' component={TableToExcel} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

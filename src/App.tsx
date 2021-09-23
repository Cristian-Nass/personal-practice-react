import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import CustomSearch from "./components/customsearch/CustomSearch";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
// import PasswordGenerators from "./components/PasswordGenerators";

function App() {
  return (
    <div className='App'>
      {/* <PasswordGenerators /> */}
      <BrowserRouter>
        <Navbar />
        <Route path='/custom-search' component={CustomSearch} />
        <Route path='/table' component={Table} />
      </BrowserRouter>
    </div>
  );
}

export default App;

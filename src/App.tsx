import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import CustomSearch from "./components/customsearch/CustomSearch";
// import PasswordGenerators from "./components/PasswordGenerators";

function App() {
  return (
    <div className='App'>
      {/* <PasswordGenerators /> */}
      <CustomSearch />
    </div>
  );
}

export default App;

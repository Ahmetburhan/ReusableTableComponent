import React from "react";
import ReactDOM from "react-dom";
import Table from "../src/components/Table";
import SmsTable from "../src/components/smsTable";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <Table /> */}
      <SmsTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

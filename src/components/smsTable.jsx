import React from "react";
import dataValue from "../components/AllTemplatesResponse.json";
import TableComponent from "../components/Table";
const SmsTable = props => {
  return (
    <div>
      <h1>hi</h1>
      <TableComponent data={dataValue} />
    </div>
  );
};

export default SmsTable;

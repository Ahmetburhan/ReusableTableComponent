import React from "react";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;
const columns = [
  {
    dataField: "templateId",
    text: "Template ID"
  },
  {
    dataField: "templateName",
    text: "Template Name"
  },
  {
    dataField: "title",
    text: "Title"
  },
  {
    dataField: "body",
    text: "Body Message"
  },
  {
    dataField: "status",
    text: "Status"
  }
];

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.data;
    console.log(data);
    return (
      <div>
        <ToolkitProvider keyField="id" data={data} columns={columns} search>
          {props => (
            <div>
              <SearchBar {...props.searchProps} />
              <hr />
              <BootstrapTable {...props.baseProps} />
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

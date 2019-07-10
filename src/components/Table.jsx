import React from "react";
export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.data;
    console.log(data);
    return (
      <div>
        <h1>Table Here</h1>
      </div>
    );
  }
}

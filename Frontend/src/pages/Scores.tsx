import PropTypes from "prop-types";
import React, { Component } from "react";

interface State {
  data: any;
}

interface Props {
  numberPerPage: number;
}

export default class extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  fetchData = async () => {
    await fetch("http://localhost:3001" + "/" + "list", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
      });
  };

  componentDidMount(): void {
    this.fetchData();
  }

  render() {
    return <div>Scores</div>;
  }
}

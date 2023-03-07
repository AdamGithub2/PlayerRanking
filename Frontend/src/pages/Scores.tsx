import React from "react";

interface State {
  data: any;
  page: number;
}

interface Props {
  numberPerPage: number;
}

export default class Scores extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: null,
      page: 1,
    };
  }

  fetchData = async () => {
    await fetch(
      "http://localhost:3001/list" +
        "?page=" +
        this.state.page +
        "&numberPerPage=" +
        this.props.numberPerPage,
      {
        method: "GET",
      }
    )
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

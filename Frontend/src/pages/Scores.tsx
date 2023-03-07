import React from "react";
import { TableComponent } from "../components/TableComponent";
import { Player } from "../models/player.model";

interface State {
  data: Player[] | null;
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
        this.setState({ data });
      });
  };

  componentDidMount(): void {
    this.fetchData();
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <h1>Scores</h1>
        <div></div>
        <div style={{ width: "100%" }}>
          <TableComponent data={data} />
        </div>
      </>
    );
  }
}

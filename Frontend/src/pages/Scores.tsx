import React from "react";
import { TableComponent } from "../components/TableComponent";
import { Player } from "../models/player.model";

interface State {
  data: Player[] | null;
  page: number;
  activePage: number;
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
      activePage: 1,
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
    setInterval(() => {
      this.fetchData();
    }, 5000);
  }

  paginationItem = () => {
    return <div></div>;
  };

  handleOnClick = (page: number) => {
    this.setState({ page: page }, () => this.fetchData());
  };

  pagination = () => {
    let pages = [];
    for (let i = 1; i < 4; i++) {
      pages.push(
        <button
          onClick={() => this.handleOnClick(i)}
          style={
            this.state.page === i
              ? { color: "white", backgroundColor: "gray" }
              : { color: "gray" }
          }
          key={i}
        >
          {i}
        </button>
      );
    }

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>{pages}</div>
    );
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <h1>Scores</h1>
        <div></div>
        <div style={{ width: "100%" }}>
          <TableComponent data={data} />
          {this.pagination()}
        </div>
      </>
    );
  }
}

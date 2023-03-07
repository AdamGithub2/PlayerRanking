import React from "react";
import { TableComponent } from "../components/TableComponent";
import { Player } from "../models/player.model";

interface State {
  data: Player[] | null;
  page: number;
  totalItems: number;
  interval: any;
}

interface Props {
  numberPerPage: number;
  refreshing: number;
  nick: string;
}

export default class Scores extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: null,
      page: 1,
      totalItems: 1,
      interval: null,
    };
  }

  fetchData = async () => {
    await fetch(
      "http://localhost:3001/list" +
        "?page=" +
        this.state.page +
        "&numberPerPage=" +
        this.props.numberPerPage +
        "&nick=" +
        this.props.nick,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data.data);
        this.setState({
          data: data.data,
          totalItems: data.lenght,
        });
      });
  };

  componentDidMount(): void {
    this.fetchData();
    console.log("component did mount");
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.refreshing !== this.props.refreshing) {
      console.log("componentDidUpdate");
      clearInterval(this.state.interval);
      if (this.props.refreshing > 0) {
        this.setState({
          interval: setInterval(() => {
            this.fetchData();
          }, this.props.refreshing * 1000),
        });
      }
    }
    if (prevProps.nick !== this.props.nick) {
      this.fetchData();
    }
  }

  paginationItem = () => {
    return <div></div>;
  };

  handleOnClick = (page: number) => {
    this.setState({ page: page }, () => this.fetchData());
  };

  pagination = () => {
    let pages = [];
    const pagesCount = Math.ceil(
      this.state.totalItems / this.props.numberPerPage
    );
    for (let i = 1; i <= pagesCount; i++) {
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

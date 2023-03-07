import React from "react";
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
        <div>Scores</div>
        <div>
          {data?.map((item: Player) => {
            return (
              <h5>
                {item.nick} {"  "}
                {item.color}
                {"  "}
                {item.score}
              </h5>
            );
          })}
        </div>
      </>
    );
  }
}

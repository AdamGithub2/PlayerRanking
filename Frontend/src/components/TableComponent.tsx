import { Player } from "../models/player.model";

type Props = { data: Player[] | null };

export const TableComponent = ({ data }: Props) => (
  <table style={{ width: "100%" }}>
    <thead
      style={{
        backgroundColor: "gray",
        borderWidth: 2,
        borderColor: "white",
        borderBlockStyle: "double",
      }}
    >
      <tr>
        <th>Nick</th>
        <th>Color</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {data?.map((item: Player) => (
        <tr key={item.nick}>
          <td>{item.nick}</td>
          <td>{item.color}</td>
          <td>{item.score}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

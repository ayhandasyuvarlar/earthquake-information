import React from "react";
import style from "./card.module.scss";
const Table = ({ date, lat, lng, mag, depth }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Enlem</th>
          <th>Boylam</th>
          <th>Derinlik</th>
          <th>Büyüklük</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{lat}</td>
          <td>{lng}</td>
          <td>{depth}</td>
          <td>{mag}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

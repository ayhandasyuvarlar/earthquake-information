import React from "react";
import style from "./card.module.scss";
const Table = ({lat, lng, mag, depth ,geojson}) => {
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
          <td>{geojson.coordinates[0]}</td>
          <td>{geojson.coordinates[1]}</td>
          <td>{depth}</td>
          <td>{mag}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

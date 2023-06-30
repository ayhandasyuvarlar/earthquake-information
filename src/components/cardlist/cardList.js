"use client";
import { Avatar, Card, Skeleton } from "antd";
import { useState } from "react";
import Modals from "./modal";
import style from "./cardlist.module.scss";
const { Meta } = Card;

const CardList = ({
  loading,
  title,
  date,
  earthquake_id,
  lat,
  lng,
  mag,
  depth,
  geojson ,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <Card
        id={earthquake_id}
        className={style.card}
        onClick={() => {
          setIsHidden(isHidden === true ? false : true);
        }}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar shape="square">{mag} </Avatar>}
            title={title}
            description={
              <Modals
                title={title}
                date={date}
                lat={lat}
                lng={lng}
                mag={mag}
                depth={depth}
                geojson = {geojson}
              />
            }
            className={style.card__body}
            style={{ color: "white" }}
          />
        </Skeleton>
      </Card>
    </>
  );
};
export default CardList;

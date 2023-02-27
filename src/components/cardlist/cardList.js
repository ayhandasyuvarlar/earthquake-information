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
            avatar={
              <Avatar src="https://cdn.abcotvs.com/dip/images/2731229_120317-wtvd-earthquake-generic-shutterstock-img.jpg" />
            }
            title={title}
            description={
              <Modals
                title={title}
                date={date}
                lat={lat}
                lng={lng}
                mag={mag}
                depth={depth}
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

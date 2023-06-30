/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import style from "./card.module.scss";
import Table from "./table";
const Card = ({ data }) => {
  return (
    <main className={style.container}>
      <div className={style.head}>
        <h1>Son Deprem</h1>
      </div>
      <article className={style.card}>
        {/* {loading && (
          <>
            <div className={style.loading}>
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
          </>
        )} */}
        {data.slice(0, 1).map((item) => (
          <div key={item.earthquake_id} className={style.item}>
            <div className={style.item__left}>
              <div className={style.item__left__body}>
                <div className={style.item__left__body__titleanddate}>
                  <h1>{item.title}</h1> <p>{item.date}</p>
                </div>
                <Table {...item} />
                <div></div>
              </div>
            </div>
            <div className={style.item__right}>
              <img
                src="https://cdn.abcotvs.com/dip/images/2731229_120317-wtvd-earthquake-generic-shutterstock-img.jpg"
                alt=""
              />
            </div>
          </div>
        ))}
      </article>
    </main>
  );
};

export default Card;

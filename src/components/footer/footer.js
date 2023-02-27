"use client";
import moment from "moment/moment";
import Link from "next/link";
import React, { useState } from "react";
import style from "./footer.module.scss";
const Footer = () => {
  const [data, setData] = useState([]);
  const getData = fetch("https://api.github.com/users/ayhandasyuvarlar/repos")
    .then((res) => res.json())
    .then((res) => setData(res));
  const dataSearch = data.filter((item) => item.id === 607105295);
  console.log(dataSearch);
  return (
    <div className={style.footer}>
      {dataSearch.map((item) => (
       <>
       <div className={style.footer__item} key={item.id}>
          Son güncelleme :	&nbsp;
          {moment(item.updated_at).format("DD MM YYYY hh:mm:ss")}
        </div>
        <div>
        Yapımcı ve tasarım &nbsp;
            <Link href={'https://www.linkedin.com/in/ayhandasyuvarlar/'} target={'_blank'}>
            Ayhan Daşyuvarlar
            </Link>
        </div>
       </>
      ))}
    </div>
  );
};

export default Footer;

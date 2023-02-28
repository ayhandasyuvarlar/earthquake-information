"use client";
import moment from "moment/moment";
import Link from "next/link";
import style from "./footer.module.scss";
const Footer = () => {
  
  return (
    <div className={style.footer}>
      <div>
        Yapımcı ve tasarım &nbsp;
            <Link href={'https://www.linkedin.com/in/ayhandasyuvarlar/'} target={'_blank'}>
            Ayhan Daşyuvarlar
            </Link>
        </div>
    </div>
  );
};

export default Footer;

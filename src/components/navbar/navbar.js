"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdReorder ,MdOutlineClose } from "react-icons/md";
import styles from "./navbar.module.scss";
const Navbar = () => {
  const getData = fetch("https://deprembilgi-plum.vercel.app/api/navbar").then((res) =>
    res.json()
  );
  const [isHidden, setIsHidden] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData.then((res) => {
      setData(res);
    });
  }, [getData]);
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__left}>
        <Link href={"/"} className={styles.nav__left__url}>
          deprem<span>bilgi.com</span>
        </Link>
      </div>
      <div className={styles.nav__right}>
        {data.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className={styles.nav__right__link}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className={styles.nav__mobileRight}>
        {!isHidden && <MdReorder size={"25px"} onClick={()=>{
           setIsHidden(isHidden === true ? false : true)
        }} />}
      </div>
      {isHidden && (
          <div className={styles.navbar}>
            <>
              <div><MdOutlineClose size={'25px'} style={{marginBottom:'40px'}} onClick={()=>{
           setIsHidden(isHidden === true ? false : true)
        }}/></div>
              {data.map((item) => (
                <Link
                  href={item.url}
                  key={item.url}
                  className={styles.nav__right__link}
                >
                  {item.name}
                </Link>
              ))}
            </>
          </div>
        )}
    </nav>
  );
};

export default Navbar;

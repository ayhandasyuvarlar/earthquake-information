"use client";
import Head from "./head";
import styles from "./page.module.scss";
import img from "../../public/0672cc7baf92cc95c0f143467b1ead40.png";
import Image from "next/image";
import Card from "@/components/card/card";
import CardList from "@/components/cardlist/cardList";
import { useEffect, useState } from "react";
import style from "../components/card/card.module.scss";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const GETDATAURL = "https://api.orhanaydogdu.com.tr/deprem/kandilli/live";
  useEffect(() => {
    setTimeout(() => {
      fetch(GETDATAURL)
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setData(res.result);
        })
        .catch((err) => {
          setData(err.message);
        });
    }, 1300);
  }, []);
  return (
    <>
      <Head title={"Deprem Bilgilendirme"} />
      <main className={styles.container}>
        <div className={styles.header}>
          <Image src={img} heigh={""} width={""} alt={"eart"} />
          <div className={styles.header__body}>
            <h1 className={styles.header__body__title}>Deprem Bilgilendirme</h1>
            <p className={styles.header__body__content}>
              deprembilgi.com depremle ilgili bilgilerin tek bir noktadan
              paylaşılabileceği, rafine ve kaliteli datanın toplanabileceği bir
              web sitesidir.
            </p>
          </div>
        </div>
        {loading && (
          <>
            <div className={style.loading}>
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
          </>
        )}
        {!loading && (
          <>
            <Card data={data} />
            <h1 className={styles.title}>Tüm Olan Depremler</h1>
            <div className={styles.cardList}>
              {data.slice(0, 24).map((item) => (
                <section
                  key={item.earthquake_id}
                  style={{ width: "30%" }}
                  className={styles.cardItem}
                >
                  <CardList
                    {...item}
                    loading={loading}
                    setLoading={setLoading}
                  />
                </section>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}

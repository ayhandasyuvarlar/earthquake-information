import { Button, Modal } from "antd";
const Modals = ({ title, lat, date, lng, mag, depth, geojson }) => {
  function info() {
    Modal.info({
      title: "Bu bilgi deprem yerine ait olan detaylı bilgilerdir",
      okText: "Kapat",
      content: (
        <div>
          <p>
            Tarih : <span>{date}</span>{" "}
          </p>
          <p>
            Enlem : <span>{geojson.coordinates[0]}</span>{" "}
          </p>
          <p>
            Boylam : <span>{geojson.coordinates[1]}</span>{" "}
          </p>
          <p>
            Derinlik : <span>{depth}</span>{" "}
          </p>
          <p>
            Büyüklük : <span>{mag}</span>{" "}
          </p>
        </div>
      ),
      onOk() {},
    });
  }
  return (
    <>
      <Button type="primary" onClick={info}>
        Daha Fazla
      </Button>
    </>
  );
};
export default Modals;

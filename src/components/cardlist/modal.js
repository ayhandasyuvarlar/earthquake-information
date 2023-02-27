import { Button, Modal } from "antd";
import { useState } from "react";
const Modals = ({ title, lat, date, lng, mag, depth }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Daha Fazla
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Tarih : <span>{date}</span>{" "}
        </p>
        <p>
          Enlem : <span>{lat}</span>{" "}
        </p>
        <p>
          Boylam : <span>{lng}</span>{" "}
        </p>
        <p>
          Derinlik : <span>{depth}</span>{" "}
        </p>
        <p>
          Büyüklük : <span>{mag}</span>{" "}
        </p>
      </Modal>
    </>
  );
};
export default Modals;

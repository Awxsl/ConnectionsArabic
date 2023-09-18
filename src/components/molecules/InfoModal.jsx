import React from "react";
import Modal from "../atoms/Modal";

function InfoModal({isModalOpen}) {
  return (
    <Modal title="معلومات" isModalOpen={isModalOpen}>
      <h1 className="text-6xl text-center font-bold my-10">تحت التطوير</h1>
    </Modal>
  );
}

export default InfoModal;

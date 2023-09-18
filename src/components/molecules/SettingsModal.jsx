import React from "react";
import Modal from "../atoms/Modal";

function SettingsModal({ isModalOpen }) {
  return (
    <Modal title="الاعدادات" isModalOpen={isModalOpen}>
      <h1 className="text-6xl text-center font-bold my-10">تحت التطوير</h1>
    </Modal>
  );
}

export default SettingsModal;

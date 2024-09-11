import React, { useState } from "react";
import BookForm from "./BookForm";

const CallWhatsapp = () => {
  const [modalType, setModalType] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (type, title) => {
    if (!isModalOpen) {
      setModalType(type);
      setModalTitle(title);
      const modalElement = document.getElementById("bookFormModal");
      const modalTrigger = new window.bootstrap.Modal(modalElement);
      modalTrigger.show();
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="row d-flex justify-content-between">
      <div id="call-now">
        <a
          href="#"
          onClick={() => openModal("call", "Contact Number")}
          className="d-flex align-items-center"
        >
          <i className="fa fa-phone"></i>
        </a>
      </div>
      <div id="whatsapp-now">
        <a
          href="#"
          onClick={() => openModal("whatsapp", "Whatsapp Message")}
          className="d-flex align-items-center"
        >
          <i className="fa-brands fa-whatsapp text-light"></i>
        </a>
      </div>

      {/* Book Form Modal */}
      <div
        className="modal fade"
        id="bookFormModal"
        tabIndex="-1"
        aria-labelledby="bookFormModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <BookForm
            title={modalTitle}
            btn="Close"
            type={modalType}
            onClose={handleModalClose} // Pass handleModalClose correctly
          />
        </div>
      </div>
    </div>
  );
};

export default CallWhatsapp;

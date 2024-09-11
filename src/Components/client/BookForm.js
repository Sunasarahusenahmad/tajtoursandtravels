import React, { useEffect } from "react";

const BookForm = ({ title, btn, type, onClose }) => {
  useEffect(() => {
    const modalElement = document.getElementById("bookFormModal");
    
    const handleModalHide = () => {
      if (typeof onClose === 'function') {
        onClose();
      }
    };

    if(modalElement) {
      // Attach event listener for modal hide
      modalElement.addEventListener("hide.bs.modal", handleModalHide);
    }

    // Clean up the event listener on component unmount
    return () => {
      if(modalElement) {
        modalElement.removeEventListener("hide.bs.modal", handleModalHide);
      }
    };
  }, [onClose]);
  
  return (
    <>
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="scrollableModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              {type === "call" ? (
                <>
                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Number 1 :</label>
                      <a
                        href="tel:+91 99257 15013"
                        className="form-control"
                        style={{
                          display: "block",
                          padding: "10px 15px",
                          textDecoration: "none",
                        }}
                      >
                        +91 99257 15013
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Number 2 :</label>
                      <a
                        href="tel:+91 79872 44428"
                        className="form-control"
                        style={{
                          display: "block",
                          padding: "10px 15px",
                          textDecoration: "none",
                        }}
                      >
                        +91 79872 44428
                      </a>
                    </div>
                  </div>
                </>
              ) : type === "whatsapp" ? (
                <>
                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Number 1 :</label>
                      <a
                        href="https://wa.me/+919925715013"
                        className="form-control"
                        style={{
                          display: "block",
                          padding: "10px 15px",
                          textDecoration: "none",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +91 99257 15013
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-set">
                      <label> Number 2 :</label>
                      <a
                        href="https://wa.me/+917987244428"
                        className="form-control"
                        style={{
                          display: "block",
                          padding: "10px 15px",
                          textDecoration: "none",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +91 79872 44428
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <form
                    name="contactForm"
                    id="contact_form"
                    className="form-border"
                    method="post"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="field-set">
                          <label>Name :</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="field-set">
                          <label>Contact Number :</label>
                          <input
                            type="tel"
                            maxLength={10}
                            name="contact"
                            id="contact"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="field-set">
                          <label>Address :</label>
                          <textarea
                            rows={4}
                            name="address"
                            id="address"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="field-set">
                          <label>From :</label>
                          <input
                            type="text"
                            name="from"
                            id="from"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="field-set">
                          <label>To :</label>
                          <input
                            type="text"
                            name="to"
                            id="to"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="field-set">
                          <label>Date :</label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="field-set">
                          <label>Time :</label>
                          <input
                            type="time"
                            name="time"
                            id="time"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div id="submit" class="pull-left">
                          <input
                            type="submit"
                            id="send_message"
                            value="Register Now"
                            class="btn-main color-2"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-main" data-bs-dismiss="modal">
              {btn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookForm;

import { Col } from "react-bootstrap";
import { useState } from "react";

export const CertificateCard = ({ title, description, imgUrl, url }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} onClick={handleOpenModal} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={url} target="_blank" rel="noopener noreferrer" onClick={handleOpenModal}>Click to view</a>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={imgUrl} alt={title} />
            <span className="close" onClick={handleCloseModal}>X</span>
          </div>
        </div>
      )}
    </Col>
  );
};

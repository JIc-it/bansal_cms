import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ViewImage({ open, setOpen,imageUrl,name }) {
  console.log(imageUrl,name)
  return (
    <Modal
      show={open}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        onClick={() => {
          setOpen(false);
        }}
      >
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <img src={imageUrl.id_verification.image} width={200} height={200} alt="image" />
        <span>{name}</span>
      </Modal.Body>
    </Modal>
  );
}

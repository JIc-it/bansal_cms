import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ViewImage({ open, setOpen,imageUrl,name }) {
  const imageLink = String(imageUrl);
  const baseurl = "https://bansal.jicitsolution.com";
  const image=baseurl+imageLink
  return (
    <Modal
      show={open}
      size="lg"
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
        <img src={image} width={'100%'} height={350} alt="image" />
        <br></br>
        {/* <span>{name}</span> */}
      </Modal.Body>
    </Modal>
  );
}

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch } from "../../redux/hooks";
import { DeleteUser } from "../../redux/users/user.slice";
import { toast } from "react-toastify";

const ModalDelete = (props: any) => {
  const { show, setShow, dataDelete } = props;
  const [email, setEmail] = useState<string>("");
  const dispatch = useAppDispatch();
  const id = dataDelete.id;

  useEffect(() => {
    if (dataDelete) {
      setEmail(dataDelete.email);
    }
  }, [dataDelete]);

  const handleClose = () => {
    setShow(false);
    setEmail("");
  };
  const handleSubmit = () => {
    dispatch(DeleteUser({ id }));
    handleClose();
    toast.success("Delete success");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Delete this user?Email= {email}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;

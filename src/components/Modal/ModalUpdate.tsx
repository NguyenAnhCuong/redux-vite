import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { UpdateUser } from "../../redux/users/user.slice";
import { toast } from "react-toastify";

const ModalUpdate = (props: any) => {
  const { show, setShow, dataUpdate } = props;
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();
  const id = dataUpdate.id;

  useEffect(() => {
    if (dataUpdate) {
      setEmail(dataUpdate.email || "");
      setName(dataUpdate.name || "");
    }
  }, [dataUpdate]);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setName("");
  };
  const handleSubmit = () => {
    dispatch(UpdateUser({ email, name, id }));
    handleClose();
    toast.success("Update success");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdate;

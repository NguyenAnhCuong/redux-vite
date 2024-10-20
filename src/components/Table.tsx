import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchListUser } from "../redux/users/user.slice";
import { toast } from "react-toastify";
import ModalCreate from "./Modal/ModalCreate";
import ModalUpdate from "./Modal/ModalUpdate";
import ModalDelete from "./Modal/ModalDelete";

const UserTable = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.listUser);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  const handleModalUpdate = () => {
    setShowModalUpdate(true);
  };

  const handleModalDelete = () => {
    setShowModalDelete(true);
  };

  useEffect(() => {
    dispatch(fetchListUser());
  }, []);

  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => setShowModalCreate(true)}
      >
        Add new
      </button>
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleModalUpdate()}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleModalDelete()}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <ModalCreate show={showModalCreate} setShow={setShowModalCreate} />
      <ModalUpdate show={showModalUpdate} setShow={setShowModalUpdate} />
      <ModalDelete show={showModalDelete} setShow={setShowModalDelete} />
    </>
  );
};

export default UserTable;

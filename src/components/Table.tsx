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
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  const handleModalUpdate = (u: any) => {
    setShowModalUpdate(true);
    setDataUpdate(u);
  };

  const handleModalDelete = (u: any) => {
    setShowModalDelete(true);
    setDataDelete(u);
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
      <Table striped className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => {
            return (
              <tr key={`row-${index + 1}`}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleModalUpdate(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-warning mx-3"
                    onClick={() => handleModalDelete(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalCreate show={showModalCreate} setShow={setShowModalCreate} />
      <ModalUpdate
        show={showModalUpdate}
        setShow={setShowModalUpdate}
        dataUpdate={dataUpdate}
      />
      <ModalDelete
        show={showModalDelete}
        setShow={setShowModalDelete}
        dataDelete={dataDelete}
      />
    </>
  );
};

export default UserTable;

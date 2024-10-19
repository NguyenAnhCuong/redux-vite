import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useAppDispatch } from "../redux/hooks";
import { fetchListUser } from "../redux/users/user.slice";

interface IUser {
  id: number;
  name: string;
  email: string;
}

const UserTable = () => {
  const [user, setUser] = useState<IUser[]>([]);

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  // const fetchUser = async () => {
  //   const res = await fetch("http://localhost:8000/users");
  //   const data = await res.json();
  //   setUser(data);
  // };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListUser());
  }, []);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {user?.map((user) => {
          return (
            <>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UserTable;

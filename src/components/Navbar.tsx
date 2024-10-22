import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Form from "react-bootstrap/Form";
import { changeMode } from "../redux/app/app.slice";
import { useEffect } from "react";

const NavbarWithText = () => {
  const users = useAppSelector((state) => state.user.listUser);
  const mode = useAppSelector((state) => state.app.mode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Redux-Starter</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              defaultChecked={mode === "light" ? false : true}
              onChange={(e) => {
                dispatch(
                  changeMode(e.target.checked === true ? "dark" : "light")
                );
              }}
              id="custom-switch"
              label={
                mode === "light" ? (
                  <Navbar.Text>Light</Navbar.Text>
                ) : (
                  <Navbar.Text>Dark</Navbar.Text>
                )
              }
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarWithText;

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UserTable from "./Table";

const TabContent = () => {
  return (
    <Tabs
      defaultActiveKey="user"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="user" title="Users">
        <UserTable />
      </Tab>
      <Tab eventKey="blog" title="Blogs">
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default TabContent;

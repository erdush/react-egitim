import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LoginPanel from "../shared/login";
import { useState } from "react";
import Post from "../shared/post";

const TabMain = () => {
  const [formStatus, setFormStatus] = useState<boolean>(false);
  const [postStatus, setPostStatus] = useState<boolean>(false);

  const btnEnableDisable_Click = () => {
    setFormStatus(!formStatus);
  };

  const onTab_Change = (key) => {
    setPostStatus(key==="profile");
  };

  return (
    <Tabs
      onSelect={onTab_Change}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <LoginPanel password="deneme" email="deneme@deneme.com" status={true} />
        <Button variant="primary" onClick={btnEnableDisable_Click}>
          Enable / Disable Form
        </Button>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        {postStatus ? <Post /> : ""}
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
        <Button variant="danger">My Danger</Button>
      </Tab>
    </Tabs>
  );
};

export default TabMain;
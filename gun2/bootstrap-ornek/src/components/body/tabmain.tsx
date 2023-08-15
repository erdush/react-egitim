import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LoginPanel from "../shared/login";
import { useState } from "react";
import Post from "../shared/post";
import ContactForm from "./contact-form";

const TabMain = () => {
  const [formStatus, setFormStatus] = useState<boolean>(false);
  const [postStatus, setPostStatus] = useState<boolean>(false);

  const btnEnableDisable_Click = () => {
    setFormStatus(!formStatus);
  };

  const onTab_Change = (key : string|null) => {
    setPostStatus(key==="profile");
  };

  return (
    <Tabs
      onSelect={onTab_Change}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <LoginPanel password="deneme" email="deneme@deneme.com" status={formStatus} />
        <Button variant="primary" onClick={btnEnableDisable_Click}>
          Enable / Disable Form
        </Button>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        {postStatus ? <Post /> : ""}
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <ContactForm email="iii@iii.com" name="iiii" surname="iiii" phone="iiii"/>
      </Tab>
    </Tabs>
  );
};

export default TabMain;
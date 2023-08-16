import { Form, Button } from "react-bootstrap";
import { IContactModel } from "../models/contact-model";
import { ChangeEvent, FormEvent, useState } from "react";

const ContactForm = () => {
  const [formModel, setFormModel] = useState<IContactModel>({
    email: "",
    name: "",
    phone: "",
    surname: "",
  });

  const input_Changed = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormModel((values) => ({ ...values, [name]: value }));
  };

  const form_Submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formModel);
  };

  return (
    <Form onSubmit={form_Submit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          onChange={input_Changed}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Surname"
          onChange={input_Changed}
          name="surname"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>E-Mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="EMail"
          onChange={input_Changed}
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone"
          onChange={input_Changed}
          name="phone"
        />
      </Form.Group>
      <Button type="submit">Kaydet</Button>
    </Form>
  );
};
export default ContactForm;

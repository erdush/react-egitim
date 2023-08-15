import { Button, Card, Form } from "react-bootstrap";
import { ContactModel } from "../../models/contactmodel";
import { FunctionComponent } from "react";

const ContactForm: FunctionComponent<ContactModel> = (model) => {
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={model.name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" value={model.surname} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control type="email" value={model.email} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" value={model.phone} />
            </Form.Group>
          </fieldset>

          <Button type="submit">Gönder</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;

import { FunctionComponent } from "react";
import { Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ILoginModel } from "../../models/loginmodel";

const LoginPanel: FunctionComponent<ILoginModel> = (model) => {

console.log(model);

  return (
    <Card >
      <Card.Body>
        <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Kullanıcı Adı</Form.Label>
            <Form.Control 
            type="email" disabled={!model.status} placeholder="name@example.com" 
            value={model.email}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Şifre</Form.Label>
            <Form.Control disabled={!model.status} type="password" value={model.password} />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginPanel;

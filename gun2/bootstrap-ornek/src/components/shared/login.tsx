import { FunctionComponent, useState } from "react";
import { Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ILoginModel } from "../../models/loginmodel";

const LoginPanel: FunctionComponent<ILoginModel> = (model) => {
  const [inputText, setInputText] = useState<string>(model.password);

  const txtPassword_Change = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Card>
      <Card.Body>
        <Form>
          <fieldset disabled={!model.status}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Kullanıcı Adı</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={model.email}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                value={inputText}
                onChange={txtPassword_Change}
              />
            </Form.Group>
          </fieldset>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginPanel;

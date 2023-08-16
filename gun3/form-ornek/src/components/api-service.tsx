import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { IPostModel } from "../models/post-model";

const ApiService = () => {
  const [postModel, setPostModel] = useState<IPostModel[]>([
    { body: "", id: 0, title: "", userId: 0 },
  ]);

  const btnGetPosts_Click = () => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostModel(data);
      });
  };
  return (
    <>
      <Button id="btnGetPost" onClick={btnGetPosts_Click}>
        Postları Getir
      </Button>

      {postModel.map((item, key) => {
        return (
          <Alert
            key={key}
            variant="info"
            style={{ marginTop: 30, marginLeft: 30, marginRight: 30 }}
          >
            {item.title}
          </Alert>
        );
      })}
    </>
  );
};

export default ApiService;

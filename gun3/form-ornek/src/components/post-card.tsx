import { Button, Card } from "react-bootstrap";
import { IPhotoModel } from "../models/photo-model";

const PostCard: React.FunctionComponent<IPhotoModel | null> = (model) => {
  if (model === null) return;

  return (
    <Card style={{ width: "18rem" }} key={model.id}>
      <Card.Img variant="top" src={model.url} />
      <Card.Body>
        <Card.Title>{model.title}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;

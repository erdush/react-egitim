import { useEffect, useState } from "react";
import PostCard from "./components/post-card";
import { IPhotoModel } from "./models/photo-model";
import axios from "axios";

function App() {
  const [photoModels, setPhotoModel] = useState<IPhotoModel[] | null>();

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/photos").then((res) => {
      setPhotoModel(res.data);
    });
  }, []);

  return (
    <>
      {photoModels?.map((item, key) => {
        return (
          <>
            <PostCard
              id={item.id}
              albumId={item.albumId}
              thumbnailUrl={item.thumbnailUrl}
              url={item.url}
              title={item.title}
              key={key}
            />
            <br />
          </>
        );
      })}
    </>
  );
}

export default App;

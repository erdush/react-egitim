import { useParams } from "react-router-dom";

const UserDetail = () => {

    const { userId } = useParams();
  return (
    <div>
      <h2>Kullanıcı Detay</h2>
      <div>Kullanıcı = {userId}</div>
    </div>
  );
};

export default UserDetail;

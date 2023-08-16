import { useParams } from "react-router-dom";

function Users() {
  const { userId } = useParams();

  return (
    <div>
      <h2>Kullanıcılar</h2>
      <div>Kullanıcılar sayfası {userId}</div>
    </div>
  );
}

export default Users;
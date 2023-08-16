import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link to="/">Anasayfa</Link>
      </li>
      <li>
        <Link to="/about">Hakkında</Link>
      </li>
      <li>
        <Link to="/contact">İletişim</Link>
      </li>
      <li>
        <Link to="/users/5">Kullanıcı bilgileri için tıklayın.</Link>
      </li>
    </ul>
  );
}

export default Menu;

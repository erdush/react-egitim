import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Users from "./components/users";
import Menu from "./components/menu";
import Bidi from "./components/bidi";
import UserDetail from "./components/user-detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users  />}>
          <Route path=":userId" element={<Users />} />
        </Route>
        <Route path="/userdetail" element={<UserDetail />}>
          <Route path=":userId" element={<UserDetail  />} />
        </Route>

      </Routes>
      
      <Menu />
      <Bidi/>
    </BrowserRouter>
  );
}

export default App;
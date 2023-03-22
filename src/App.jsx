import { Link, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages";
import PostsPage from "./pages/Posts";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </div>
  );
};

export default App;

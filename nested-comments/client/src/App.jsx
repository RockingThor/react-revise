import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../components/Home";
import Post from "../components/Post";
import { PostProvider } from "../context/PostContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/posts/:id"
          element={
            <PostProvider>
              <Post />
            </PostProvider>
          }
        />
      </Routes>
    </>
  );
}

export default App;

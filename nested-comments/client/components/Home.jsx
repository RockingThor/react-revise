import { Link } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPosts } from "../services/posts";

const Home = () => {
  const { loading, error, value } = useAsync(getPosts, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="container">
      {value.map((post) => (
        <div key={post.id}>
          <h1>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Home;

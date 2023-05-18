import { useParams } from "react-router-dom";

export default () => {
  const { genre } = useParams();

  return (
    <div className='genrepage'>
      <h2>{genre} Page</h2>
      {/* Add genre-specific content here */}
    </div>
  );
};

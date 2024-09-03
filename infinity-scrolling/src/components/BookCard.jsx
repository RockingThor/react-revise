const BookCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { author_name, first_publish_year, ratings_average, title } = data;
  return (
    <div className="book__card">
      <div className="title">{title}</div>
      <div className="author">{author_name}</div>
      <div className="year">{first_publish_year}</div>
      <div className="rating">{ratings_average}</div>
    </div>
  );
};

export default BookCard;

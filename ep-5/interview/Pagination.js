import ContentBox from "./PaginationContentBox";

const { useEffect, useState } = require("react");

const Pagination = () => {
  const [data, setData] = useState(null);
  const [dataToShow, setDataToSHow] = useState(null);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const d = await response.json();
    setData(d);
    let arr = Array.from({ length: Math.ceil(d.length / 10) }, (_, i) => i + 1);
    setPagination(arr);
    setDataToSHow(d.slice(0, 10));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data === null) return;
    setDataToSHow(data.slice((page - 1) * 10, page * 10));
  }, [page]);

  if (!dataToShow) {
    return <h1>Loading data...</h1>;
  }
  return (
    <>
      <div className="pagination__card">
        {dataToShow.map((item) => (
          <ContentBox key={item.id} content={item} />
        ))}
      </div>
      <div className="pagination">
        {page !== 1 && (
          <p
            className="pagination__item"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            {"⬅️"}
          </p>
        )}
        {pagination.map((item) => (
          <div
            key={item}
            className={`pagination__item ${
              item === page ? "current__page" : ""
            }`}
            onClick={() => {
              setPage(item);
            }}
          >
            <p>{item}</p>
          </div>
        ))}
        {page !== pagination.length && (
          <p
            className="pagination__item"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            {"➡️"}
          </p>
        )}
      </div>
    </>
  );
};

export default Pagination;

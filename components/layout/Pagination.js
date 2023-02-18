const Pagination = ({ itemsPerPage, totalItems, paginateHandler }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((num) => (
        <button key={num} onClick={() => paginateHandler(num)}>
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

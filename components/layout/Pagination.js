import styles from "../../styles/Pagination.module.scss";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginateHandler,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={+currentPage === num ? styles.active : ""}
          onClick={() => paginateHandler(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

import styles from "../../styles/SearchBar.module.scss";

const SearchBar = ({ setSearchText }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className={styles.searchInput}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default SearchBar;

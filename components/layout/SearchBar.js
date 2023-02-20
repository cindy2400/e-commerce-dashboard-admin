import styles from "../../styles/SearchBar.module.scss";

const SearchBar = ({ value, setSearchText }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search"
      className={styles.searchInput}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default SearchBar;

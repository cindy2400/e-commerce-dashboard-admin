import styles from "../../styles/Dropdown.module.scss";

const Dropdown = ({ items, filter, onChangeHandler }) => {
  return (
    <select
      className={styles.select}
      value={filter}
      onChange={(e) => onChangeHandler(e.target.value)}
    >
      <option value="">All</option>
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

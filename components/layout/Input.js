import styles from "../../styles/Input.module.scss";

const Input = ({ type, placeholder, value, onChangeHandler }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={styles.input}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );
};

export default Input;

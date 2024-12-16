import PropTypes from "prop-types";
import styles from "./Options.module.css";

const Options = ({ options, onLeaveFeedback, onResetFeedback, total }) => (
  <div className={styles.options}>
    {options.map((option) => (
      <button
        key={option}
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
    {total > 0 && (
      <button
        type="button"
        className={`${styles.button} ${styles.reset}`}
        onClick={onResetFeedback}
      >
        Reset
      </button>
    )}
  </div>
);

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onResetFeedback: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Options;

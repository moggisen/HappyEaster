import PropTypes from "prop-types";
import Button from "./Button";

const Result = ({ score, total, onRestart }) => (
  <div className="result">
    <h2>
      Du fick {score} av {total} rätt!
    </h2>
    <button onClick={onRestart}>Spela igen</button>
  </div>
);

Result.propTypes = {
  score: PropTypes.number.isRequired,
  total: Proptypes.number.isReauired,
  onRestart: PropTypes.func.isRequired,
};

export default Result;

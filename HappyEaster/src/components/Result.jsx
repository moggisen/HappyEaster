import PropTypes from "prop-types";
import Button from "./Button";

const Result = ({ score, total, onRestart }) => (
  <div className="result">
    <h2>
      Du fick {score} av {total} rätt!
    </h2>
    <button className="quiz-button" onClick={onRestart}>Spela igen</button>
  </div>
);

Result.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isReauired,
  onRestart: PropTypes.func.isRequired,
};

export default Result;

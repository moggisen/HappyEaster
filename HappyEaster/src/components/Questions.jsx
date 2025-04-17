import PropTypes from "prop-types";

const Question = ({ question, options, onAnswer }) => (
  <div className="card">
    <h2>{question}</h2>
    {options.map((option, index) => (
      <Button key={index} onClick={() => onAnswer(option)}>
        {option}
      </Button>
    ))}
  </div>
);

Question.PropTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default Question;

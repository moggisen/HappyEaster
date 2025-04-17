import PropTypes from "prop-types";

const Button = ({ children, onClick }) => (
  <button className="quiz-button" onClick={onClick}>
    {children}
  </button>
);

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

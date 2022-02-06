import proptypes from 'prop-types';

export const Button = ({ text, onClick }) => {
  return (
    <button className="button_element" onClick={onClick}>
      {text}
    </button>
  );
};

Button.proptypes = {
  text: proptypes.string.isRequired,
  onClick: proptypes.func.isRequired
};

import propTypes from 'prop-types';

export const Wording = ({ text }) => {
  return <h3>{text}</h3>;
};

Wording.propTypes = {
  text: propTypes.string.isRequired
};

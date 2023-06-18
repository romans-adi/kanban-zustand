import PropTypes from 'prop-types';

const Column = ({ state }) => {
return (
  <div className="state">{state}</div>
  )
}

Column.propTypes = {
  state: PropTypes.string.isRequired,
};

export default Column;

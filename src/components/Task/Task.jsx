import PropTypes from 'prop-types';
import './Task.scss'

const STATUS = 'PLANNED';

const Task = ( {title} ) => {
  return (
    <div className="task">
      <div>{title}</div>
    <div className="bottom-wrapper">
    <div className=""/>
    <div className="STATUS">{ STATUS }</div>
    </div>
    </div>
  )
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Task;

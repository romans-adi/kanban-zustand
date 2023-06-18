import PropTypes from 'prop-types';
import './Task.scss'
import classNames from 'classnames';

const STATUS = 'ONGOING';

const Task = ( {title} ) => {
  return (
    <div className="task">
      <div>{title}</div>
    <div className="bottom-wrapper">
    <div className=""/>
    <div className={classNames("status", STATUS)}>{ STATUS }</div>
    </div>
    </div>
  )
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Task;

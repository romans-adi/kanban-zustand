import './App.scss';
import { Row, Col } from 'antd';
import Task from './components/Task/Task';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={8} className="custom-col">
          PLANNED
          <Task title='Todo' />
        </Col>
        <Col span={8} className="custom-col">
          ONGOING
          <Task title='Todo' />
        </Col>
        <Col span={8} className="custom-col">
          DONE
          <Task title='Todo' />
        </Col>
      </Row>
    </div>
  );
}

export default App;

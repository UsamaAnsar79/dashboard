
 import Sidebar from "./component/Sidebar";
import Navbar from "./component/navbar/Navbar";
import AdminNavbar from './component/navbar/SearchBox';
import LineChart from './Mainchart';
import  LineBarChart from './component/charts/linebarchart'
import DetailBoxes from "./component/card/DetailBoxes"; 
import { Container, Row, Col } from 'reactstrap';
import TaskTable from './TaskTable';
import SimpleTable from './SimpleTable';
function App() {
  return (
    <div className="main">
       <Navbar /> 
      <Sidebar />
      <AdminNavbar />
      <div className="home">
       <LineChart/>
      <DetailBoxes/>

      <div className="charts">
      < LineBarChart />
      </div>
      <Container className="tables"> 
        <Row>
          {/* <Col lg="6" md="12"> */}
            <TaskTable />
          {/* </Col> */}
          {/* <Col lg="6" md="12"> */}
            <SimpleTable />
          {/* </Col> */}
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;

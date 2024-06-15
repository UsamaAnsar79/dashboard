// src/components/TaskTable.js
import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip
} from 'reactstrap';

const TaskTable = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Update the Documentation', description: 'Dwuamish Head, Seattle, WA 8:47 AM', completed: false },
    { id: 2, name: 'GDPR Compliance', description: 'The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.', completed: false },
    { id: 3, name: 'Solve the issues', description: 'Fifty percent of all respondents said they would be more likely to shop at a company', completed: true },
    { id: 4, name: 'Release v2.0.0', description: 'Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM', completed: false },
    { id: 5, name: 'Export the processed files', description: 'The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs.', completed: false },
    { id: 6, name: 'Arival at export process', description: 'Capitol Hill, Seattle, WA 12:34 AM', completed: false },
  ]);

  return (
    <Card className="card-tasks">
      <CardHeader className='cardheader'>
        <h6 className="title d-inline">Tasks(5)</h6>
        <p className="card-category d-inline"> today</p>
        <UncontrolledDropdown>
          <DropdownToggle
            caret
            className="btn-icon"
            color="link"
            data-toggle="dropdown"
            type="button"
          >
            <i className="bi bi-gear" />
          </DropdownToggle>
          <DropdownMenu aria-labelledby="dropdownMenuLink" right className='dropdownmenu'>
            <DropdownItem className='link' href="#pablo" onClick={(e) => e.preventDefault()}>Action</DropdownItem>
            <DropdownItem className='link' href="#pablo" onClick={(e) => e.preventDefault()}>Another action</DropdownItem>
            <DropdownItem className='link' href="#pablo" onClick={(e) => e.preventDefault()}>Something else</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody>
        <div className="table-full-width table-responsive">
          <Table>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>
                    <FormGroup check className="task-checkbox">
                      <Label check>
                        <Input type="checkbox" defaultChecked={task.completed} />
                        <span className="form-check-sign">
                          <span className="check" />
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                  <td>
                    <p className="title">{task.name}</p>
                    <p className="text-muted">{task.description}</p>
                  </td>
                  <td className="td-actions text-right">
                    <Button color="link" className="btn-icon" id={`tooltip${task.id}`} title="" type="button">
                      <i className="bi bi-pencil" />
                    </Button>
                    <UncontrolledTooltip className='tooltip' delay={0} target={`tooltip${task.id}`} placement="left">
                      Edit Task
                    </UncontrolledTooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default TaskTable;



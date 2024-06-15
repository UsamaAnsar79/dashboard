// src/components/SimpleTable.js
import React from 'react';
import { Card, CardHeader, CardBody, Table } from 'reactstrap';

const SimpleTable = () => {
  const data = [
    { name: 'Dakota Rice', country: 'Niger', city: 'Oud-Turnhout', salary: '$36,738' },
    { name: 'Minerva Hooper', country: 'Curaçao', city: 'Sinaai-Waas', salary: '$23,789' },
    { name: 'Sage Rodriguez', country: 'Netherlands', city: 'Baileux', salary: '$56,142' },
    { name: 'Philip Chaney', country: 'Korea, South', city: 'Overland Park', salary: '$38,735' },
    { name: 'Doris Greene', country: 'Malawi', city: 'Feldkirchen in Kärnten', salary: '$63,542' },
    { name: 'Mason Porter', country: 'Chile', city: 'Gloucester', salary: '$78,615' },
    { name: 'Jon Porter', country: 'Portugal', city: 'Gloucester', salary: '$98,615' },
  ];

  return (
    <Card>
      <CardHeader>
        <h4>Simple Table</h4>
      </CardHeader>
      <CardBody>
        <Table className="tablesorter" responsive>
          <thead className="text-primary">
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>City</th>
              <th className="text-center">Salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.country}</td>
                <td>{row.city}</td>
                <td className="text-center">{row.salary}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default SimpleTable;

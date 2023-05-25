import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";

class DashboardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                CPU: 0,
                RAM: 0,
                Disk: 0,
            }
        };
    };

    handleChange (event) {
        this.setState({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <h1>Dashboard Component</h1>
                <div>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>CPU</td>
                            <td>{data.CPU}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{data.RAM}</td>
                        </tr>
                        <tr>
                            <td>Disk</td>
                            <td>{data.Disk}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Line
                        data={[
                            { x: [1, 2, 3, 4, 5], y: [10, 20, 30, 40, 50] },
                        ]}
                        options={{
                            title: {
                                text: "CPU Usage",
                            },
                        }}
                    />
                </div>
                <div>
                    <Bar
                        data={[
                            { x: ["A", "B", "C", "D", "E"], y: [10, 20, 30, 40, 50] },
                        ]}
                        options={{
                            title: {
                                display: true,
                                text: "RAM Usage",
                            },
                        }}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="cpu"
                        value={data.CPU}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="ram"
                        value={data.RAM}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="disk"
                        value={data.Disk}
                        onChange={handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default DashboardComponent;
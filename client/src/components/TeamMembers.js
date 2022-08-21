import "./TeamMembers.css";
import app from "../firebase-config";
import React from "react";
import { ref, onValue } from "firebase/database";
import { Table } from "react-bootstrap";

// Import the realtime database feature
import { getDatabase } from "firebase/database";

const db = getDatabase(app);

export class TeamMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }
  // Get the data from database
  componentDidMount() {
    // Get the reference of Company's data
    const dbRef = ref(db, "Group");
    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }
  render() {
    return (
      <Table>
        <h3>Your Team Members</h3>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
        </tr>

        <tbody>
          {this.state.tableData.map((row, index) => {
            return (
              <tr key="">
                <td>{index}</td>
                <td>{row.key}</td>
                <td>{row.data.MemberEmail}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

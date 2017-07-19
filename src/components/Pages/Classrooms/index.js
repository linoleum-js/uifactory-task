import React, { Component } from 'react';

import NavBar from 'components/NavBar';
import Dashboard from "components/Dashboard";
import { getClassroomAvatar } from 'utils/classroomAvatar';

const classrooms = [
  { _id: "1", name: "React basics" },
  { _id: "2", name: "Higher Order Components" },
  { _id: "3", name: "Composition in React" },
  { _id: "4", name: "State management" }
];

export default class Classrooms extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onSelect(selectedItem) {
    this.setState({ selectedItem });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Dashboard
          list={classrooms}
          baseUrl="classrooms"
          getAvatar={getClassroomAvatar}
          title="Classes"
          redirect={false}
          selectedItem={this.state.selectedItem}
          onSelect={this.onSelect.bind(this)}
        />
      </div>
    );
  }
}
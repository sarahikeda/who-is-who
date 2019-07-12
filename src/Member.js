import React, { Component } from 'react';
import './Member.css';
import employee from './Sarah.jpeg';

class Member extends Component {
  render() {
    return <div class="team-member">
        <img src={employee} className="employee-pic" alt="employee-pic" />
    </div>
  }
}

export default Member;    
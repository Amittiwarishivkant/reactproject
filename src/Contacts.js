import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Contact extends Component {
  render() {
  return (
    <div>
      <li key={this.props.contact.id}>
            <Link to={`/edit/${this.props.contact.id}`}>{this.props.contact.title}</Link>
      </li>
      <p>{this.props.contact.message}</p>
    </div>
  );
 }
}
export default Contact;
import React, { Component } from 'react';
import { connect } from "react-redux";
import Contact from "./Contacts";
import { Link } from 'react-router-dom'

class AllContact extends Component {
    render() {
        return (
            <div>
                <h1>All Contacts</h1>
                <h1>
                    <Link to='/add'>Add Contacts</Link>
                </h1>
                {this.props.contacts.map((cont) => <Contact key={cont.id} contact={cont} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state
    }
}

export default connect(mapStateToProps)(AllContact);
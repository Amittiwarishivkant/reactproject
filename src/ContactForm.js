import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = { contactId: parseInt(this.props.match.params.id), title: '', message: '' }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const address = this.getAddress.value;
        const data = {
            id: this.state.contactId,
            title,
            message,
            address
        }
        console.log("data=", data)

        this.props.dispatch({
            type: this.state.contactId ? 'UPDATE_CONTACT' : 'ADD_CONTACT',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    componentDidMount() {
        this.props.contacts.filter((obj) => {
            console.log('id', this.state.contactId)
            if (obj.id === this.state.contactId) {
                console.log('obj', obj)
                this.setState({
                    title: obj.title,
                    message: obj.message,
                    address:obj.address
                })
            }
            return obj;
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>
                        <Link to='/'>All Contacts</Link>
                    </h1>
                </div>
                <div>
                    <h1>Edit Contact {this.state.contactId}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input required type="text" ref={(input) => this.getTitle = input}
                            placeholder="Enter Post Title" defaultValue={this.state.title} />
                        <br /><br />
                        <textarea required rows="5" ref={(input) => this.getMessage = input} cols="28"
                            placeholder="Enter Post" defaultValue={this.state.message} />
                        <textarea required rows="5" ref={(input) => this.getAddress = input} cols="28"
                            placeholder="Enter Post" defaultValue={this.state.address} />
                        <br /><br />
                        {this.state.contactId ? <button>update</button> : <button>Add</button>}
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        contacts: state
    }
}

export default connect(mapStateToProps)(ContactForm);
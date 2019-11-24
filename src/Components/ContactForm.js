import React from 'react'
import '../App.css'

class ContactForm extends React.Component {
  constructor() {
    super()
    this.state= {
      name: '',
      email: '',
      message: '',
      active: ''
    }
    this.handleActiveField = this.handleActiveField.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
  }

  handleActiveField = e => {
    const target = e.target;
    const name = target.name;

    this.setState({
      active: name
    })
  }

  handleFieldChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="contactBackground">
        <div className="contactContain">
          <h1 className="contactTitle">Contact</h1>
          <form className="contactCard">
            <div className="inputContain">
              <h4 className="inputTitle">Name:</h4>
              <input
                type="text"
                name="name"
                onFocus={this.handleActiveField}
                onInput={this.handleFieldChange}
                value={this.state.name}
                placeholder="Jane Doe"
                className={this.state.active === 'name' ? 'input active' : 'fade input'}
              />
            </div>
            <div className="inputContain">
              <h4 className="inputTitle">Email:</h4>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onFocus={this.handleActiveField}
                onInput={this.handleFieldChange}
                placeholder="example@email.com"
                className={this.state.active === 'email' ? 'input active' : 'fade input'}
              />
            </div>
            <div className="inputContain">
              <h4 className="inputTitle">Message:</h4>
              <textarea
                value={this.state.message}
                name="message"
                onFocus={this.handleActiveField}
                onInput={this.handleFieldChange}
                placeholder="Nice to meet ya!"
                className={this.state.active === 'message' ? 'input messageInput active' : 'fade input messageInput'}
              />
            </div>
            <input type="submit" value="Submit" className='button contactSubmit'/>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;

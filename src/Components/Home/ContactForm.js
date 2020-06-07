import React from 'react'
import BartAsset from '../../Assets/Bart.svg'
import '../../App.css'

class ContactForm extends React.Component {
  constructor() {
    super()
    this.state= {
      name: '',
      email: '',
      message: '',
      active: '',
      status: ''
    }
    this.handleActiveField = this.handleActiveField.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.submitForm = this.submitForm.bind(this);
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

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200 && this.state.name != '' && this.state.email != '' && this.state.message != '') {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    this.setState({ active: "" });
    xhr.send(data);
  }

  render() {
    return (
      <div className="contactBackground">
        <div className="contactContain">
          <h1 className="contactTitle">Contact</h1>
          <h3 className="contactDetails">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
          <form onSubmit={this.submitForm} action="https://formspree.io/maypopad" method="post" encType="text/plain">
            <div className="contactForm">
              {
                this.state.status === "SUCCESS"
                ?
                <div className='successMessageBackground'>
                  <div className="successMessageContain">
                    <h2 className='successMessage'>Thank you kindly :D</h2>
                  </div>
                  <img src={BartAsset} className='bartAsset' />
                </div>
                :
                null
              }
              <div className="inputContain nameInputContain">
                <h4 className="inputTitle">Name:</h4>
                <input
                  type="text"
                  name="name"
                  onFocus={this.handleActiveField}
                  onInput={this.handleFieldChange}
                  value={this.state.name}
                  placeholder="Jane Doe"
                  className={this.state.active === 'name' ? 'input active' : 'input'}
                />
              </div>
              <div className="inputContain emailInputContain">
                <h4 className="inputTitle">Email:</h4>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onFocus={this.handleActiveField}
                  onInput={this.handleFieldChange}
                  placeholder="example@email.com"
                  className={this.state.active === 'email' ? 'input active' : 'input'}
                />
              </div>
              <div className="inputContain messageInputContain">
                <h4 className="inputTitle">Message:</h4>
                <textarea
                  value={this.state.message}
                  name="message"
                  onFocus={this.handleActiveField}
                  onInput={this.handleFieldChange}
                  placeholder="Nice to meet ya!"
                  className={this.state.active === 'message' ? 'input messageInput active' : 'input messageInput'}
                />
              </div>
              <input type="submit" value="Submit" className='fade button contactSubmit'/>
            </div>
            {this.state.status === "ERROR" ? <h5 className='errorMessage'>Please enter all fields.</h5> : null}
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;

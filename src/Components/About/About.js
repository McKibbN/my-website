import React from 'react';
import Splash from './Splash.js'
import SkillList from './SkillList.js'
import ContactForm from './ContactForm.js'
import '../../App.css';

class About extends React.Component {

  componentDidMount() {
    let ScrollOptions = {
      left: 0,
      top: 0,
      behavior: 'smooth'
    }
    window.scrollTo(ScrollOptions);
  }

  render() {
    return (
        <div className='homeBackground'>
          <Splash />
          <SkillList />
          <ContactForm />
        </div>
    );
  }
}

export default About;

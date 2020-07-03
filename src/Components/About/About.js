import React from 'react';
import Splash from './Splash.js'
import SkillList from './SkillList.js'
import ContactForm from './ContactForm.js'
import '../../App.css';

class About extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
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

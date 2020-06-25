import React from 'react';
import Splash from './Splash.js'
import ProjectSelect from '../Projects/ProjectSelect.js'
import SkillList from './SkillList.js'
import ContactForm from './ContactForm.js'
import '../../App.css';

class About extends React.Component {
  constructor() {
    super();
  }

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

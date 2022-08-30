import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { sideDrawerAction } from '../Redux/Actions/sideDrawerController.js'
import { ReactComponent as Cross } from '../Assets/cross.svg'

class SideDrawer extends React.Component {
  constructor() {
    super()
    this.state = {
      shouldRender: true
    }
    this.toggleRender = this.toggleRender.bind(this)
  }

  toggleRender() {
    if (this.props.isSideDrawerOpen) {
      this.setState({shouldRender: false})
    };
  }

  render() {
    return (
      <div className='drawerBackground'>
        <div
          className='drawerContain'
          style={{ animation: `${this.state.shouldRender ? "fadeRightStart" : "fadeRightEnd"} 0.4s cubic-bezier(.21,.07,.3,.97)` }}
        >
          <div className='crossContain'>
            <Cross className='exitMenuIcon'
              onAnimationEnd={this.state.shouldRender === false ? () => this.props.sideDrawerAction(false) : null}
              onClick={() => this.toggleRender()}
            />
          </div>
          <div
            className='menuListMobile'
            style={{ animation: `${this.state.shouldRender ? "fadeRightStart" : "fadeRightEnd"} 0.75s cubic-bezier(.21,.07,.3,.97)` }}
          >
            <Link onClick={() => this.toggleRender()} className='mobileTab' to='/'>
              <h2 className='mobileTabItem'>About</h2>
            </Link>
            <Link onClick={() => this.toggleRender()} className='mobileTab' to='/resume'>
              <h2 className='mobileTabItem'>Resume</h2>
            </Link>
          </div>
        </div>
        <div
          className='backdrop'
          style={{ animation: `${this.state.shouldRender ? "fadeStart" : "fadeEnd"} 0.4s cubic-bezier(.21,.07,.3,.97)` }}
          onAnimationEnd={this.state.shouldRender === false ? () => this.props.sideDrawerAction(false) : null}
          onClick={() => this.toggleRender()}>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isSideDrawerOpen: state.sideDrawerReducer.isSideDrawerOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sideDrawerAction: modalState => dispatch(sideDrawerAction(modalState))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);

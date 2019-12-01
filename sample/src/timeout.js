import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IdleTimer from 'react-idle-timer';
import { DashboardPage } from './home/home'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class Layout extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            timeEnd:1000 * 5 * 1,
            showModal: false,
            userLoggedIn: false,
            isTimedOut: false
        }

        this.idleTimer = null
    }

    onUserAction = (e) => {
      
      this.setState({isTimedOut: false})
    }
   
    onUserActive = (e) =>  {
     
      this.setState({isTimedOut: false})
    }
   
    onUserIdle = (e) => {
    
      const isTimedOut = this.state.isTimedOut
      if (isTimedOut) {
          this.props.history.push('/')
      } else {
        this.setState({showModal: true})
        this.idleTimer.reset();
        this.setState({isTimedOut: true})
      }
      
    }

    handleClose =() => {
      this.setState({showModal: false})
    }

    handleLogout=()=> {
      this.setState({showModal: false})
      this.props.history.push('/')
    }

    render(){
      const { match } = this.props
      return(
        <>
          <IdleTimer
            ref={ref => { this.idleTimer = ref }}
            element={document}
            onActive={this.onUserActive}
            onIdle={this.onUserIdle}
            onAction={this.onUserAction}
            debounce={500}
            timeout={this.state.timeEnd} />

            <div className="">
                <Switch>
                    <Route 
                        exact path={`${match.path}home`}
                        render={(props) => <DashboardPage {...props} /> }/>
                    />
                </Switch>    
                <Modal
                  title="TIME OUT!"
                  visible={this.state.showModal}
                  onOk={this.handleLogout}
                  onCancel={this.handleClose}
                 >
                <p>your session is end. you want stay here?</p>
              </Modal>
            </div>
        </>
      )
   }

 }

 Layout.propTypes = {
     match: PropTypes.any.isRequired,
     history: PropTypes.func.isRequired
 }

export default Layout
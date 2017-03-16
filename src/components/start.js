import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timeIsUp } from '../actions/index';

 class Start extends Component {
   constructor(props) {
     super(props);
     this.state = {
       timer: 10
     }
   }

   displayTimeLeft(seconds) {
     this.setState({ timer: seconds });
   }

   componentDidMount() {
     this.props.timeIsUp(false);
     let seconds = 10;
     const now = Date.now();
     const then = now + seconds * 1000;

     this.interval = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it!
        if(secondsLeft < 0) {
          this.props.timeIsUp(true);
          clearInterval(this.interval);
          return;
        }
        // display it
        this.displayTimeLeft(secondsLeft);
      }, 1000);

   }

   componentWillUnmount() {
     clearInterval(this.interval);
   }

   render() {
     //console.log(this.props.isRoundOver);
     return (
       <div>
         <p>TimeLeft: {this.state.timer}s</p>
       </div>
     )
   }
 }

 function mapStateToProps(state) {
   return {
     isRoundOver: state.isRoundOver
   }
 }

 export default connect(mapStateToProps, { timeIsUp })(Start);

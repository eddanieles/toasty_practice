import React, { Component } from 'react';

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
     let seconds = 10;
     const now = Date.now();
     const then = now + seconds * 1000;

     this.interval = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it!
        if(secondsLeft < 0) {
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
     return (
       <div>
         <p>TimeLeft: {this.state.timer}</p>
       </div>
     )
   }
 }

 export default Start;

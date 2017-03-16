import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPoint } from '../actions/index';
import { bindActionCreators } from 'redux';
import Sound from 'react-sound';

class Holes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: -1,
      playSound: false
    }
  }

  randomInteger(min, max) {
    var rand = Math.round(min + Math.random() * (max - min));
    return rand;
  }

  setNewTarget() {
    if (this.props.isRoundOver) {
      this.setState({
        randomIndex: -1
      });
      return clearInterval(this.interval);
    }
    let lastIndex = this.state.randomIndex;
    this.setState({
      randomIndex: this.randomInteger(0, 5)
    });
    if (lastIndex === this.state.randomIndex) {
      this.setNewTarget();
      //console.log('thats the same one');
    }
  }

  hit() {
    this.props.addPoint(this.props.score + 1);
    this.setState({
      playSound: true
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.setNewTarget.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const holes = ["hole1", "hole2", "hole3", "hole4", "hole5", "hole6"];
    var renderHoles = holes.map((hole, index) => {
      let classes = "mole " + hole;
      if (index === this.state.randomIndex) {
        classes += " up";
      }
      return (
        <div className="hole" key={index}>
          <div className={classes}>
            <img
              alt="TOASTY"
              onClick={this.hit.bind(this)}
              src="http://images.uncyc.org/pt/thumb/2/26/Toasty.png/130px-Toasty.png"/>
              <Sound
                url="http://www.leedberg.com/MotaroFTP/sounds/toasty.wav"
                playStatus={this.state.playSound ? Sound.status.PLAYING : Sound.status.STOPPED}
                onFinishedPlaying={() => this.setState({ playSound: false})}/>
          </div>
        </div>
      );
    });

    return (
      <div className="hole_component">
        {renderHoles}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    score: state.score,
    isRoundOver: state.isRoundOver
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPoint: addPoint}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Holes);

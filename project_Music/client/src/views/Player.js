import React from 'react'
import styles from './keysounds.module.css';

export default class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.audio = React.createRef()
  }
  playAudio = () => {
    this.audio.current.play()
  }
  toggleActiveState = () => {
    this.setState({
      active: !this.state.active,
    })
  }
  render() {
    return (
      <div
        className={styles.player}
        style={
          this.state.active
            ? {background: 'yellow', color: 'orange'}
            : {background: 'white', color: 'black'}
        }
        ref={this.ref}
        id={this.props.id}
        onClick={this.props.clicked}>

        <audio
          ref={this.audio}
          src={this.props.url}
          onEnded={this.toggleActiveState}
        />

        {this.props.keyTrigger}
      </div>
    )
  }
}
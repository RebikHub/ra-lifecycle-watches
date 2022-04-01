import React from 'react';

export default class WatchesPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.getCurrentTime(this.props.clock.time)
    };
  };


  getCurrentTime = (timeZone) => {
    const curTz = new Date().getTimezoneOffset() * 60 * 1000;
    const tz = timeZone * 60 * 60 * 1000 + curTz;
    const mSeconds = new Date().getTime() + tz;
    return new Date(mSeconds).toLocaleTimeString();
  };

  timeOut = () => {
    this.setState({
      date: this.getCurrentTime(this.props.clock.time)
    });
  };

  componentDidMount() {
    this.timer = setInterval(() => this.timeOut(), 1000);
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  };

  render() {
    return (
      <div className='watches'>
        <div className='wathes-head'>
          <h5 className='title'>{this.props.clock.name}</h5>
          <span className='clock-remove'
            onClick={() => this.props.handleRemove(this.props.clock.id)}></span>
        </div>
        <div className='clock'>
          {this.state.date}
        </div>
      </div>
    );
  };
};

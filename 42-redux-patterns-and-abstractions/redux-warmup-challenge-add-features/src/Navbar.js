import React from 'react';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black'
];

class Navbar extends React.Component {

  state = { color: this.randomColor() }


  handleChangeClick = () => {
    this.setState({ color: this.randomColor() });
  }

  randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  render() {

    return (
      <div className={`ui inverted ${this.state.color} menu`}>
        <a className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </a>
        <div className="right aligned item">
          <div onClick={this.handleChangeClick} className="ui floated button">
            Change Color
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

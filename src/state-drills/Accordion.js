import React, { Component } from "react";
import "./Accordion.css"

export default class Accordion extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);

    this.state = {
      currentSectionIndex: null,
    };
  }
  renderContent(index,content){
    if (index === this.state.currentSectionIndex) {
      return <p>{content}</p>
    }
  }

  handleClick = (index) => {
    const newState = this.state.currentSectionIndex !== index? index: null;
    this.setState({ currentSectionIndex: newState });
  };


  render() {
    const sections = this.props.sections?.map(({ title, content }, index) => {
      return (
        <li key={index}>
          <button
            onClick={() => {
              this.handleClick(index);
            }}
          >
            {title}
          </button>
          {this.renderContent(index,content)}
        </li>
      );
    });

    return <ul className="Accordion">{sections || <li/>}</ul>;
  }
}

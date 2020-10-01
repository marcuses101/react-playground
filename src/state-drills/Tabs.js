import React, { Component } from "react";

export default class Tabs extends Component {
  static defaultProps = { tabs: [] };
  constructor(props) {
    super(props);

    this.state = {
      currentTabIndex: 0,
    };
  }

  handleButtonClick = (index) => {
    console.log("button clicked", index)
    this.setState({currentTabIndex: index})
  }

  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={()=>{this.handleButtonClick(index)}}>{tab.name}</button>
    ));
  }

  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex];
    return (
      <div className="content">{currentTab.content}</div>
    )
  }

  render() {
    const buttons = this.props.tabs.map((tab, index) => {
      return <button key={index}>{tab.name}</button>;
    });
    const currentTab = this.props.tabs[0];

    return (
      <div>
        {this.renderButtons()}
        {!!this.props.tabs.length && this.renderContent()}
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Project extends Component {
  state = {
    showInfo: false,
  };

  hundelInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    //console.log(this.props);
    //destructuring
    let { name, languagesIcons, source, info, picture } = this.props.item;
    return (
      <div classname="projects">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.hundelInfo} />
        <span className="infos" onClick={this.hundelInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
              </div>

              <div className="button return" onClick={this.handelInfos}>
                Retouner sur la page !
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

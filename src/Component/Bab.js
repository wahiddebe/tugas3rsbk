import React, { Component } from "react";

import "./CSS/style.css";

class Bab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modul: 1,
      status: "Tersedia",
    };
  }

  TombolNext = () => {
    this.setState({
      modul: this.state.modul + 1,
    });

    if (this.state.modul > -1 && this.state.modul < 5) {
      this.setState({
        status: "Tersedia",
      });
    } else {
      this.setState({
        status: "Mentok Gan! Modul tidak Tersedia",
      });
    }
  };

  TombolPrev = () => {
    this.setState({
      modul: this.state.modul - 1,
    });

    if (this.state.modul < 7 && this.state.modul > 1) {
      this.setState({
        status: "Tersedia",
      });
    } else {
      this.setState({
        status: "Mentok Gan! Modul tidak Tersedia",
      });
    }
  };

  shouldComponentUpdate(nextState) {
    return window.confirm("Bukan modul ini yang anda sukai?");
  }

  render() {
    return (
      <div className="wrapper2">
        <h1>
          <b>KOMPONEN 2</b>
        </h1>
        <h2>{this.props.judul}</h2>
        <img src="logo512.png" alt="" />
        <p>{this.state.status}</p>
        <p>Modul ke {this.state.modul}</p>
        <button className="btn-click" onClick={this.TombolPrev}>
          Prev
        </button>{" "}
        | |{" "}
        <button className="btn-click" onClick={this.TombolNext}>
          Next
        </button>
      </div>
    );
  }
}

export default Bab;

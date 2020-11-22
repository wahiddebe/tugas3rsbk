import React, {Component} from 'react';

import './CSS/style.css';

class Asisten extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title,
            nama: this.props.nama,
            modul: this.props.modul,
            judulModul:this.props.judulModul
        }
    }
    modul1 = () => {
        this.setState ({
            nama: "Wahyu Aji S",
            modul: "Modul 1",
            judulModul: "Pengenalan Java Script dan React"
        })
    }

    modul2 = () => {
        this.setState ({
            nama: "Anggara D",
            modul: "Modul 2",
            judulModul: "React Components, Props, and Styled Components"
        })
    }

    modul3 = () => {
        this.setState ({
            nama: "M. Sayyidus S. Y",
            modul: "Modul 3",
            judulModul: "React State and Lifecycle"
        })
    }

    modul4 = () => {
        this.setState ({
            nama: "Rama F",
            modul: "Modul 4",
            judulModul: "React Hooks"
        })
    }

    modul5 = () => {
        this.setState ({
            nama: "Muslim",
            modul: "Modul 5",
            judulModul: "React lists, Mengambil Data dari Server dan Cara Memakai API."
        })
    }

    shouldComponentUpdate(nextState) {
        return window.confirm('Anda yakin akan mengganti asisten favorit?');
        }
        

    render() {
        return (
            <div className="wrapper">
                <h1><b>KOMPONEN 3</b></h1>
                <h2>{this.state.title}</h2>
                <h2>{this.state.nama}</h2>
                <p>{this.state.modul}</p>
                <p>{this.state.judulModul}</p>
                <button className="btn-click" onClick={this.modul1}>Modul 1</button> |
                | <button className="btn-click" onClick={this.modul2}>Modul 2</button> |
                | <button className="btn-click" onClick={this.modul3}>Modul 3</button>
                <p></p>
                <button className="btn-click" onClick={this.modul4}>Modul 4</button> |
                | <button className="btn-click" onClick={this.modul5}>Modul 5</button>
            </div>
        )
    }
}

export default Asisten;
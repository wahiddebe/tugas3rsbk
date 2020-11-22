import React, { Component } from "react";

import "./CSS/style.css";

class Produk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: this.props.stock,
      sub: "Booking",
      status: "Tersedia",
      disabled: false,
    };
  }
  TombolBeli = () => {
    this.setState({
      stock: this.state.stock - 1,
    });

    if (this.state.stock === 1) {
      this.setState({
        status: "Habis",
        disabled: true,
        sub: "Tidak Dapat Membooking",
      });
    } else {
    }
  };
  componentDidUpdate(prevState) {
    alert(`Sisa tiket di-Update!`);
  }

  shouldComponentUpdate(nextState) {
    return window.confirm("Anda yakin membeli barang ini?");
  }

  render() {
    return (
      <div className="wrapper">
        <h1>
          <b>Booking Tiket</b>
        </h1>
        <h2>{this.props.nama}</h2>
        <img
          src="https://img.okezone.com/content/2020/10/09/406/2290986/gunung-semeru-sudah-full-book-sampai-akhir-oktober-hanya-120-orang-bisa-naik-uHpzpb9xZV.jpg"
          alt=""
        />
        <p>
          <b>Rp. {this.props.harga}</b>
        </p>
        <p>Jumlah Sisa Tiket : {this.state.stock}</p>
        <button
          className="btn-click"
          onClick={this.TombolBeli}
          disabled={this.state.disabled}
        >
          {this.state.sub}
        </button>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default Produk;

import React, { Component } from "react";
import axios from "axios";

export default class gorevliEkle extends Component {
    constructor(props) {
        super(props);


        this.state = {
            adSoyad: "",
            email: "",
            tckn: "",
            password: "",
        }
    }

    addRequest() {
        const body = {
            adSoyad: this.state.adSoyad,
            email: this.state.email,
            tckn: this.state.tckn,
            password: this.state.password,
        };

        axios.post('http://localhost:8080/api/gorevli/', body)
            .then(response => {
                if (response.data.adSoyad == -1) {
                    alert("BU GÖREVLİ EKLİ TEKRAR EKLENEMEZ")
                } else {
                    alert("GÖREVLİ EKLEME BAŞARILI")
                    this.props.history.push("/gorevli");
                }
            })
    }

    changeemail = (e) => {
        this.setState({ email: e.target.value });
    }

    changeadSoyad = (e) => {
        this.setState({ adSoyad: e.target.value });
    }

    changepassword = (e) => {
        this.setState({ password: e.target.value });
    }

    changetckn = (e) => {
        this.setState({ tckn: e.target.value });
    }

    componentDidMount() {
    }

    render() {

        const {
            email,
            adSoyad,
            password,
            tckn
        } = this.state;
        return (
            <div className="auth-inner">
                <div className="form-group">
                    <label>Ad-Soyad</label>
                    <input type="text" className="form-control" placeholder="Adınız ve soyadınız" onChange={this.changeadSoyad} value={adSoyad} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="*******@gmail.com" onChange={this.changeemail} value={email} />
                </div>
                <div className="form-group">
                    <label>TC numarası</label>
                    <input type="text" className="form-control" placeholder="TC numarası giriniz " onChange={this.changetckn} value={tckn} />
                </div>
                <div className="form-group">
                    <label>şifre</label>
                    <input type="password" className="form-control" placeholder="*******" onChange={this.changepassword} value={password} />
                </div>
                <button type="submit" className="buttons" onClick={() => this.addRequest()}>Kaydet</button>
            </div>
        )

    }
}

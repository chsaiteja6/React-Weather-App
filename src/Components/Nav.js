import React, { Component } from 'react'
import disaster from './disaster.png'
import './Style.css'

export default class Navbar extends Component {


    constructor() {
        super()
        this.state = {
            arr: {},
            curr: {},
            city: 'delhi',
            loader:false
        }
    }
    handlechange = (e) => {
        this.setState({ city: e.target.value, count: this.state.count + 1 })
    }
    handleclick = async (e) => {
        e.preventDefault()
        const url = `https://api.weatherapi.com/v1/astronomy.json?q=${this.state.city}&key=2c29280b10974ced88f130312231310`
        const url_curr = `https://api.weatherapi.com/v1/current.json?q=${this.state.city}&key=2c29280b10974ced88f130312231310`
        const data = await fetch(url)
        const parsed_data = await data.json()
        const data_curr = await fetch(url_curr)
        const parsed_curr = await data_curr.json()

        this.setState({ arr: parsed_data.astronomy.astro, curr: parsed_curr.current })

    }



    render() {
        
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">

                    <div className="container-fluid">
                        <img src={disaster} height={40} width={45} />
                        <a className="navbar-brand" href="#">Weather App</a>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>

                            </ul>
                            <form className="d-flex" role="search" >
                                <input className="form-control me-2" type="text" onChange={this.handlechange} placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" onClick={this.handleclick}  >Search</button>
                            </form>

                        </div>
                    </div>
                </nav>
               
                
                <center><h3>Today's weather forecast in {this.state.city}</h3></center>

                <div className="d-flex justify-content-evenly my-4" >
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://static.toiimg.com/photo/msid-66081026,width-96,height-65.cms" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sunrise</h5>
                            <p className="card-text">sun rise time:{this.state.arr ? this.state.arr.sunrise : ""}.</p>

                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sun set</h5>
                            <p className="card-text">sun set time:{this.state.arr ? this.state.arr.sunset : ""}</p>

                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://t3.ftcdn.net/jpg/04/77/92/84/360_F_477928473_MYlIHZkjZRfYnEgdijTYUoJfW9XPZ2Ir.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Moon rise</h5>
                            <p className="card-text">moon rise time:{this.state.arr ? this.state.arr.moonrise : ""}.</p>

                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://media.istockphoto.com/id/540964262/photo/silhouettes-of-woods-and-beautiful-moonrise-bright-full-moon-wo.jpg?b=1&s=612x612&w=0&k=20&c=78MYhuck1ARNfLgOM9nPcbTxD-5-FNsIAq-IQSTyO2Q=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Moon Set</h5>
                            <p className="card-text">moonset time:{this.state.arr ? this.state.arr.moonset : ""}.</p>

                        </div>
                    </div>
                </div>
                
                    <div className="d-flex justify-content-evenly my-4 current"  >
                        <div className="card" style={{ width: "18rem",height:"18rem" }}>
                            <img src="https://media4.giphy.com/media/26FL3uMhARSAvIZZS/200.webp?cid=ecf05e47wqgnvdxwqsmumg5uo2b0d6jhtucb4xfazv4i40jl&ep=v1_gifs_search&rid=200.webp&ct=g" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Temparature</h5>
                                <p className="card-text">Temparature in {this.state.city} is:{this.state.curr.temp_c}.</p>

                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem",height:"18rem" }}>
                            <img src="https://media4.giphy.com/media/WSqsdbIH6mLrHe78tJ/200w.webp?cid=ecf05e47tazfcq5p0saqrkpyyqjok4tl1nm2k6fwgtajdisf&ep=v1_gifs_search&rid=200w.webp&ct=g"  height="210rem" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Windspeed</h5>
                                <p className="card-text">Wind speed in {this.state.city}:{this.state.curr.wind_mph}.</p>

                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.gifer.com/7I8S.gif" height="210rem" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Atmospheric Pressure</h5>
                                <p className="card-text">Atmospheric Pressure:{this.state.curr.pressure_mb}.</p>

                            </div>
                        </div>
                       
                        <div className="card" style={{ width: "18rem",height:"18rem" }}>
                            <img src="https://i.makeagif.com/media/2-14-2023/6IecqC.gif" height="210rem" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Wind direction</h5>
                                <p className="card-text">The wind direction is:{this.state.curr.wind_dir}.</p>

                            </div>
                        </div>
                    </div>
               
                
                    <div className="d-flex justify-content-evenly my-4 current">
                        
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.kym-cdn.com/photos/images/original/000/775/647/842.gif" height="210rem" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Precipitation</h5>
                                <p className="card-text">Precipitation:{this.state.curr.precip_mm}.</p>

                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://gray-wave-prod.cdn.arcpublishing.com/resizer/0O4z_vgJFRMIpIHr510Lx61xaLQ=/980x0/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/IMWBZCTO2JCIZP353XN75TNYVI.gif" height="210rem" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Humidity</h5>
                                <p className="card-text">current Humidity:{this.state.curr.humidity}.</p>

                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" ,height:"18rem"}}>
                            <img src="https://teachengineering.org/content/cub_/activities/cub_energy2/cub_energy2_lesson07_activity1_image1new.gif" height="210rem" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Wind degree</h5>
                                <p className="card-text">current day's wind degree is:{this.state.curr.wind_degree}.</p>

                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.gifer.com/81DL.gif" height="210rem" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">UV radiation</h5>
                                <p className="card-text">UV content:{this.state.curr.uv}.</p>

                            </div>
                        </div>
                    </div>
                
                
            </div>
        )
    }
}


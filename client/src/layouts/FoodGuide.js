import React from 'react'
import "../css/FoodGuide.css"
function FoodGuide() {
  return (
    <div >
        <div className="title">
        <h1 >food <span style={{color:'#FFCB74',}}> Guide</span> </h1>
        </div>
        <div className="layout">
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services1.svg" alt="foodGuide" />
                    <h1 className="meal" >Healthy meal</h1>
                    <h5><p> Make a reservation for your meal for a get experience</p></h5>
                </div>
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services2.svg" alt="foodGuide" />
                    <h1 className="meal" >Fast Food</h1>
                    <h5><p > Make a reservation for your meal for a get experience</p></h5>
                </div>
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services3.svg" alt="foodGuide" />
                    <h1 className="meal" >Drinks</h1>
                    <h5><p > Make a reservation for your meal for a get experience</p></h5>
                </div>

        </div>
    </div>
  )
}

export default FoodGuide

// style={{backgroundColor:"#198754"}}
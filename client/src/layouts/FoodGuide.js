import React from 'react'
import "../css/FoodGuide.css"
function FoodGuide() {
  return (
    <div style={{backgroundColor:"#198754"}}>
        <div className="title">
            <h2  
            >Food Guide</h2>
        </div>
        <div className="layout">
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services1.svg" alt="foodGuide" />
                    <h1 className="meal" >Healthy meal</h1>
                    <p > Make a reservation for your meal for a get experience</p>
                </div>
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services2.svg" alt="foodGuide" />
                    <h1 className="meal" >Fast Food</h1>
                    <p > Make a reservation for your meal for a get experience</p>
                </div>
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services3.svg" alt="foodGuide" />
                    <h1 className="meal" >Drinks</h1>
                    <p > Make a reservation for your meal for a get experience</p>
                </div>

        </div>
    </div>
  )
}

export default FoodGuide
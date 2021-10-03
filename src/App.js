import React from 'react'
import './App.scss'
import Navbar from './components/Navbar'
//  images import 
import Iphone from "./img/iPhone.png"
import Bitcoin from './img/Bitcoin.png'
import Crypto from './img/Crypto.png'
import Ethereum from './img/Ethereum.png'
import Litecoin from './img/Litecoin.png'
import Ripple from './img/Ripple.png'
import Dogecoin from './img/Dogecoin.png'



const shape_1 = <svg  className="shape_1" xmlns="http://www.w3.org/2000/svg" width="1141.959" height="1056.871" viewBox="0 0 1141.959 1056.871">
<path id="Path_2" data-name="Path 2" d="M665.289,154.08c115.275-14.77,252.534,4.18,327.058,93.3,73.5,87.9,25.568,219.418,30.155,333.872,3.142,78.406,4.646,152.007-7.575,229.52-14.835,94.1,7.045,215.042-71.111,269.579-78.361,54.68-183.2-18.764-278.528-25.6-85.622-6.141-176.969,31.191-250.921-12.371-76.375-44.99-106.716-136.111-140.324-218.1-36.4-88.789-83.78-180.71-61.41-274.02,23.09-96.314,106.783-160.96,181.336-226.213,82.312-72.043,162.789-156.063,271.319-169.969" transform="translate(-200.781 952.393) rotate(-74)" fill="rgb(107, 87, 166,0.45)"/>
</svg>
const shape_2 = <svg   className="shape_2" xmlns="http://www.w3.org/2000/svg" width="1141.959" height="1056.871" viewBox="0 0 1141.959 1056.871">
<path id="Path_3" data-name="Path 3" d="M665.289,154.08c115.275-14.77,252.534,4.18,327.058,93.3,73.5,87.9,25.568,219.418,30.155,333.872,3.142,78.406,4.646,152.007-7.575,229.52-14.835,94.1,7.045,215.042-71.111,269.579-78.361,54.68-183.2-18.764-278.528-25.6-85.622-6.141-176.969,31.191-250.921-12.371-76.375-44.99-106.716-136.111-140.324-218.1-36.4-88.789-83.78-180.71-61.41-274.02,23.09-96.314,106.783-160.96,181.336-226.213,82.312-72.043,162.789-156.063,271.319-169.969" transform="translate(-200.781 952.393) rotate(-74)" fill="rgb(92, 134, 147,80)" opacity="0.48"/>
</svg>

function App() {
    return (
        <div className="hero-container">
            <Navbar/>
            <div className="svg-container">
                {shape_1}
                {shape_2}
            </div>
            <div className="container-wrapper">
                <div className="text-wrapper">
                    <h1>Cryptocurrency Exchange</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                    <a className="button-hero" href="">Get Started</a>
                </div>
                <div className="img-wrapper">
                    <img src={Iphone} alt=""/>

                </div>
                
            </div>
            <div className="footer">
                <div><img src={Bitcoin} alt="" /> <p>Bitcoin</p></div>
                <div><img src={Crypto} alt="" /> <p>Crypto</p></div>
                <div><img src={Ethereum} alt="" /> <p>Ethereum</p></div>
                <div><img src={Litecoin} alt="" /> <p>Litecoin</p></div>
                <div><img src={Ripple} alt="" /><p>Ripple</p></div>
                <div><img src={Dogecoin} alt="" /><p>Dogecoin</p></div>
            </div>

                    
            
            
        </div>
    )
}

export default App

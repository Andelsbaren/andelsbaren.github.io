import img1 from './images/svenskaspel_square.avif' 
import img2 from './images/atg-money-icon-rect-60x60-01 (2).svg'

import img3 from './svenskaatg.png';

import React, { Component } from 'react';
class Home extends Component {
  render() {
    return (
        <div className="servicespage">
  <p className="kophome2">Köp andelar</p>
        {/* <img
      className="navbar-logo"
      src={img1}/> */}
<p className="textnormal2"><br/><br/><br/></p>
    {/* Andelsbaren är aktiv på de två dominerande spelplattformarna ATG
    Tillsammans samt Svenska Spels Spela Tillsammans. */}
    <p className="textnormal3">
Klicka på någon av länkarna nedan för att komma dirket till
    Andelsbarens portaler.
  </p>
  <div className="container"> 
 <section className='svenska-button'> 
  <a
    href="https://spela.svenskaspel.se/spela-tillsammans/ombudslag/23563-andelsbaren---spelhornan"
    target="_blank" >
    <img
      className="svenska-button"
      src={img1}/>
  </a>
       </section>
       <div className="container2"> 
       <section className='atg-button'>

  <a href="https://www.atg.se/spelhornansurahammar" target="_blank">
    <img
      className="atg-button"
      src={img2}/>
  </a>
     </section>
     </div>    </div><br/>

</div>
        )
    }
}
    export default Home
    
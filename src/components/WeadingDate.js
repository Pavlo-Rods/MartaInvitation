import React from 'react';
import boda from '../images/boda.png';
import hearths from '../images/hearth.png';
import flores from '../images/flores.png';
import edificio from '../images/edificio.png';
import '../WeadingDate.css';
import "@fontsource/pinyon-script";

const WeadingDate = () => {
    return (
        <div className="main-slider">
            <img src={flores} alt='flores' style={{
                        width: '200vw',
                        right: 1,
                        zIndex: -1,
                        position: 'absolute',
                    }}/>
            <img src={edificio} alt='edificio' style={{
                position: 'absolute',
                bottom: 0,
                width: '150vw',
                zIndex: -1,
                left: 0,
                height:  'auto'
            }}/>
            <div className="display-table center-text">
                <div className="display-table-cell">
                    
                    <div className="slider-content">

                        <h5 className="date" style={{fontFamily: 'Pinyon Script', color: '#5e0416'}}>13 de Septiembre del 2025</h5>
                        <h1 className="title" style={{fontFamily: 'Pinyon Script', color: '#5e0416'}}>Marta   <img className="sindur-dan" src={hearths} alt="hearths"/> Jaime</h1>
                        <h3 className="pre-title" style={{fontSize: '6vw', fontFamily: 'Pinyon Script', color: '#5e0416', textAlign:'left', marginLeft: '2vw'}}>
                            Y de repente llegará alguien que baile contigo,
                            </h3>
                            <h3 className="pre-title" style={{fontSize: '6vw', fontFamily: 'Pinyon Script', color: '#5e0416', textAlign:'left',marginLeft: '2vw'}}>Aunque no le guste bailar,</h3>
                            <h3 className="pre-title" style={{fontSize: '6vw', fontFamily: 'Pinyon Script', color: '#5e0416', textAlign:'left', marginLeft: '2vw'}}>Y lo haga porque es contigo y nada mas</h3>
                            <h3 className="pre-title" style={{fontSize: '5vw', fontFamily: 'Pinyon Script', color: '#5e0416', textAlign:'right', marginRight: '2vw'}}>~ Jorge Luis Borges</h3>

                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;
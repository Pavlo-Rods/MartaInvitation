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

                        <img className="sindur-dan" src={boda} alt="couple" style={{marginLeft: '15%'}}/>
                        <h5 className="date" style={{fontFamily: 'Pinyon Script'}}>13 de Septiembre del 2025</h5>
                        <h1 className="title" style={{fontFamily: 'Pinyon Script'}}>Marta   <img className="sindur-dan" src={hearths} alt="hearths"/> Jaime</h1>
                        <h3 className="pre-title" style={{fontSize: '6vw', fontFamily: 'Pinyon Script'}}>
                            Y de pronto llegará alguien que baile contigo aunque no le guste bailar y lo haga porque es contigo y nada mas
                            </h3>

                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;
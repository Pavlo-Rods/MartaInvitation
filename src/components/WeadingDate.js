import React from 'react';
import boda from '../images/boda.png';
import hearths from '../images/hearth.png';
import flores from '../images/flores.png';
import edificio from '../images/edificio.png';
import '../WeadingDate.css';

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

                        <img className="sindur-dan" src={boda} alt="couple"/>
                        <h5 className="date">13 de Septiembre del 2025</h5>
                        <h3 className="pre-title">Guarda la fecha</h3>
                        <h1 className="title">Marta   <img className="sindur-dan" src={hearths} alt="hearths"/> Jaime</h1>

                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;
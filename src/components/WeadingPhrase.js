import React from 'react';
import flores from '../images/flores.png';
import edificio from '../images/edificio.png';
import "@fontsource/pinyon-script";

const WeadingPhrase = () => {
    return (
        <div className="main-slider" style={{backgroundColor:'white', color:'white'}}>
            <img src={flores} alt='flores' style={{
                        width: '200vw',
                        right: 1,
                        zIndex: 1,
                        position: 'absolute',
                    }}/>
            <div className="display-table center-text" style={{backgroundColor:'white', color:'white'}}>
                <div className="display-table-cell" style={{backgroundColor:'white', color:'white'}}>
                    
                    <div className="slider-content" style={{backgroundColor:'white'}}>
                        <h3 className="pre-title" style={{fontSize: '6vw', fontFamily: 'Pinyon Script', color: '#5e0416',}}>
                            Sin vosotros esto no sería igual.
                            </h3>
                            <h3 className="pre-title" style={{fontSize: '6vw', fontFamily: 'Pinyon Script', color: '#5e0416'}}>Gracias por vuestra compañía en esta nueva etáà que comenzamos</h3>
                            <h3 className="pre-title" style={{fontSize: '6vw', fontFamily: 'Pinyon Script', color: '#5e0416'}}>El regalo es opcional. La asistencia obligatoria</h3>
                            <h3 className="pre-title" style={{fontSize: '5vw', fontFamily: 'Pinyon Script', color: '#5e0416'}}>Pero si queréis tener un detalle con nosotros,</h3>
                            <h3 className="pre-title" style={{fontSize: '5vw', fontFamily: 'Pinyon Script', color: '#5e0416'}}>¡Sumad kilómetros a nuestro viaje!</h3>


                            <h4 style={{fontSize: '4vw', fontFamily: 'Pinyon Script', color: '#5e0416', marginTop: '2vh'}}>ES05 2100 8436 4702 0114 7428</h4>

                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingPhrase;
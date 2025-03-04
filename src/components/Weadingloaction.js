import React from 'react';

const Weadingloaction = () => {
    return ( <section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Wedding & Reception Details</h2>
						<span className="heading-bottom"><i className="icon icon-star"></i></span>
					</div>
					
					<div className="wedding-details margin-bottom">
						
						<div className="w-detail right">
							<i className="icon icon-ciurclke"></i>
							<h4 className="title">CEREMONIA</h4>
                            <p>Hora  12:00</p>
                            <p>Salón Colón, ayuntamiento de Sevilla</p>
                            <p>
							<div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5331.29668825994!2d-5.990950380977709!3d37.38963433526055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c108a004ae3%3A0x4ad7669e0eee2dd1!2sAyuntamiento%20de%20Sevilla!5e0!3m2!1ses!2ses!4v1740834361092!5m2!1ses!2ses" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                            </div>
							</p>

						</div> 
						
						<div className="w-detail left">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">CELEBRACIÓN</h4>
							<p>Hora 13:30</p>
							<p>Palacio de los 7 balcones</p>
							<p>
							<div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.1031744083475!2d-6.055405288036125!3d37.387392234262876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126d8cea574147%3A0xc097a34ea2eb54b6!2sPalacio%207%20Balcones!5e0!3m2!1ses!2ses!4v1740834898539!5m2!1ses!2ses" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                                </div>
								</p>
						</div> 
						
					</div>
					
				</div>
			</div>
		</div>
    </section>    
    );
}

export default Weadingloaction;
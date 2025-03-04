import React from 'react';
import wp from '../images/w.png'

const Contact = () => {
    return ( 
<footer>
		<div className="container center-text">
			<ul className="social-icons">
				<li><i className="icon icon-facebook"></i></li>
				<li><i className="icon icon-twitter"></i></li>
				<li><a href="https://wa.me/601298123" target="_blank" rel="noopener noreferrer"><img alt="WP" src={wp} /></a></li>
			</ul>
		</div>
	</footer>
        );
    }
    
    export default Contact;
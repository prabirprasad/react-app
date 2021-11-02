import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';

function Carousel() {
    return (
        <div>
            <ReactBootStrap.Carousel>
                <ReactBootStrap.Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="c.jpg"
                    alt="JORHAT INSTITUTE OF SCIENCE & TECHNOLOGY"
                    />
                    <ReactBootStrap.Carousel.Caption>
                    <h3>JORHAT INSTITUTE OF SCIENCE & TECHNOLOGY</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="d.jpg"
                    alt="Second slide"
                    />
                    <ReactBootStrap.Carousel.Caption>
                    <h3>PLAYGROUND</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>
            </ReactBootStrap.Carousel>
        </div>
    )
}

export default Carousel;

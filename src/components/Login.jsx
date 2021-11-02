import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';

function Login() {
    return (
        <div>
            <br /><br />
            <ReactBootStrap.Container>
            <ReactBootStrap.Form>
                <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicEmail">
                    <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control type="email" placeholder="Enter email" />
                    <ReactBootStrap.Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </ReactBootStrap.Form.Text>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicPassword">
                    <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control type="password" placeholder="Password" />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Button variant="primary" type="submit">
                    Submit
                </ReactBootStrap.Button>
            </ReactBootStrap.Form>
            </ReactBootStrap.Container>
            <br /><br />
        </div>
    )
}

export default Login;

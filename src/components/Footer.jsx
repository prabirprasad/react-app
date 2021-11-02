import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <div>
             <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>MY FIRST REACT APP</h4>
            <h1 className="list-unstyled">
              <li>91 7002 7002</li>
              <li>JORHAT</li>
              <li>ASSAM, INDIA</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>OTHERS</h4>
            <ui className="list-unstyled">
              <li>COLLEGE WEBSITE</li>
              <li>ADMINISTRATION</li>
              <li>ACADEMIC</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>CONATCT US</h4>
            <ui className="list-unstyled">
              <li>OFFICE</li>
              <li>TPC CELL</li>
              <li>COMMON ROOM</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} MY FIRST REACT APP | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
        </div>
    )
};

export default Footer;

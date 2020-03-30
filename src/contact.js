import React from "react";


export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
                <h1 className="pageHeader">Contact Us</h1>
          <br />
          <div className="Container-fluid row">
            <div className="col-sm-6 ">
              <h3 className="ContactHead"> Head Office </h3>
              <br />

              <p className="contactPar"> Louw & Heyl Building Property Park </p>

              <p className="contactPar"> 389C Ontdekkers Rd, </p>
              <p className="contactPar">Roodepoort </p>
              <p className="contactPar"> Johannesburg, 1709 </p>
              <p className="contactPar"> Tel: +27 11 673 0955 </p>
              <p className="contactPar"> Mobile: +27 72 481 5792 </p>
            </div>

            <div className=" col-sm-6">
              <h3 className="ContactHead"> Cape Town </h3>
              <br />

              <p className="contactPar"> 74 Hibiscus Street </p>

              <p className="contactPar"> Gordons Bay </p>
              <p className="contactPar">Cape Town, 7140</p>
              <p className="contactPar"> </p>
              <p className="contactPar"> Tel: +27 11 673 0955 </p>
              <p className="contactPar"> Mobile: +27 79 490 8518 </p>
            </div>
          </div>
            </div>

            <br/>
        <img
          className="landinImg"
          src="https://cdn.pixabay.com/photo/2018/04/07/13/13/handshake-3298455_960_720.jpg"
        />{" "}
      </div>
    );
  }
}

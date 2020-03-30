
// import components and dependencies
import React from "react";
import Image from "react-bootstrap/Image";

export default class Team extends React.Component
{// render the team component
  render() 
    {
    return (
      <div className="container">
        <h2 className="pageHeader">Our Team</h2>
        <p className="landingPar">
          Our strength lies in our multifaceted team of professional consultants
          holding credentials of being highly specialized and experienced in the
          industry\sectors they serve. We are associated with the best of
          talent, which can harness a new pool of talents. Our workforce culture
          is equipped with new technology and techniques to maintain reliable
          quality assurance. Being a leading HR firm, we understand our
          responsibility to change our mechanism from time to time to keep pace
          with the changing employment scenario and skill sets demand. Hence our
          team is oriented towards taking timely demand and needs analysis,
          available and upcoming skill set in the market, talent review etc. to
          provide unparalleled quality service to our clients.{" "}
        </p>
        <Image
          className="landinImg"
          src="https://cdn.pixabay.com/photo/2018/04/07/13/13/handshake-3298455_960_720.jpg" />
      </div>
    );
    }
}

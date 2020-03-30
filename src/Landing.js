import React from "react";
import Image from 'react-bootstrap/Image'

// render & export the Landing component
export default class Landing extends React.Component {
  render() {
    return (
        
      <div className="container">
        <h1 className="pageHeader">Who we Are</h1>

        <p className="landingPar">
          {" "}
          Human Capital South Africa Solutions has established itself as a
          renowned name in the HR realm by providing a wide range of recruitment
          and selection services to diverse companies. Our team of expert
          consultants are dedicated towards leveraging the business potential of
          our clients by offering strategic HR services. Moreover, our national
          presence in SA and Africa gives us a benchmark to stand among one of
          the leading HR firms.
        </p>
        <p className="landingPar">
          {" "}
          We partner with our clients to expand their business potential by
                providing solutions in Executive Search & Selection, Middle Management
                Hiring, Project Based Hiring and Recruitment Process Outsourcing
                through integrated suite of leadership services. With our decade long
                knowledge expertise in the domain we have been successfully able to
                deliver solutions for all kind of global and local business industry
                specific demands. We have the ability to align diversified and
                intricate HR needs of our clients by providing reliable and strategic
                staffing solutions. By understanding the significance of aligning
                talent strategy with business strategy we tend to offer workforce
                solution that drive businesses forward. Our capability in fast
                delivery has gained us the reputation of being a reliable and
                efficient executive search firm.
        </p>
            <h2 className="landingHeader">Service Quality</h2>
            <p className="landingPar">We at HCSA believe in ensuring a valuable service quality. Through our affirmative approach and practices, we have been able to add value propositions in our services. We aim towards improving our service quality through comprehensive research to reach innovative results.
Our strong R&D supports us in connecting the right talent to ensure positive results. Our focused methodologies towards workforce solutions foster competent recruiting process and improvising on talent quality delivery across a wide variety of industries. </p>
            <Image className="landinImg" src="https://cdn.pixabay.com/photo/2018/04/07/13/13/handshake-3298455_960_720.jpg" roundedCircle/>

        </div>
    );
  }
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import EmailLink from '../components/Contact/EmailLink';
// import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const [location, setLocation] = useState("Allahabad");
  const [link, setLink] = useState(`https://maps.google.com/maps?hl=en&q=${location}&t=&z=17&ie=UTF8&iwloc=B&output=embed`);
  function handleSubmit(e){
      e.preventDefault();
      setLink(`https://maps.google.com/maps?hl=en&q=${location}&t=&z=17&ie=UTF8&iwloc=B&output=embed`);
    }
  return (
  
  <article className="post" id="contact">
    <div className="email-at">
      <div
        className="row"
        style={
          {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0px',
          }
        }
        data-aos="fade-in"
      >
        <div>
          <form action="" method="post">
          <input type="text" name="" id="" value={location} onChange={(e)=>{setLocation(e.target.value)}} />
          <button type="submit" value="submit" onClick={handleSubmit}> Submit </button>
          </form>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch">
          <div style={{ width: '100%' }}>
            <iframe title="location" src={link} frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen />
          </div>
        </div>

      </div>
    </div>
  </article>
)};

export default Contact;

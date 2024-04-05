import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
// import EmailLink from '../components/Contact/EmailLink';
// import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [place, setPlace] = useState("");
  const locations = useLocation();
  const searchParams = new URLSearchParams(locations.search);
  const disease = searchParams.get('disease');
  console.log(disease);
  const [location, setLocation] = useState(`${disease} specialists near ${place}`);
  const [link, setLink] = useState(`https://maps.google.com/maps?hl=en&q=${location}&t=&z=12&ie=UTF8&iwloc=B&output=embed`);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          // Extract latitude and longitude from position object
          // const { latitude, longitude } = position.coords;
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log(longitude)
          console.log(latitude)
          // setLoc({ latitude, longitude });
          // console.log(loc)
          const fetchPlaces = async () => {
            try {
              const data = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=275513e9c51040e4a6364ca300fd206c`);
              console.log(data)
              // setPlace(`${data.data.features[0].properties.city} ${data.data.features[0].properties.district} ${data.data.features[0].properties.country}`)
              // setPass(data.data.data[0]);
              setLocation(`${disease} specialists near ${data.data.features[0].properties.city}`);
              setLink(`https://maps.google.com/maps?hl=en&q=${location}&t=&z=12&ie=UTF8&iwloc=B&output=embed`);
            } catch (error) {
              console.error('Error fetching location', error);
            }
          };
      
          fetchPlaces();
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [place, location]);
  return (
  
  // <article className="post" id="contact">
  //   <div className="email-at">
  //     <div
  //       className="row"
  //       style={
  //         {
  //           display: 'flex',
  //           justifyContent: 'space-between',
  //           padding: '0px',
  //         }
  //       }
  //       data-aos="fade-in"
  //     >
  //       <div>
  //         <form action="" method="post">
  //         <input type="text" name="" id="" value={location} onChange={(e)=>{setLocation(e.target.value)}} />
  //         <button type="submit" value="submit" onClick={handleSubmit}> Submit </button>
  //         </form>
  //       </div>
  //       <div className="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch">
  //         <div style={{ width: '100%' }}>
  //           <iframe title="location" src={link} frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen />
  //         </div>
  //       </div>

  //     </div>
  //   </div>
  // </article>
  <div>
      <Navbar />
      <article className="post" id="contact">
        <div className="email-at">
          <div
            className="row"
            style={
              {
                display: 'flex',
                justifyContent: 'space-around',
                padding: '0px',
              }
            }
            data-aos="fade-in"
          >
            <div className="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch justify-content-around">
              <div style={{ width: '100%' }}>
                <iframe title="location" src={link} frameBorder={0} style={{ border: 0, width: "70vw", height: 530, marginBottom: 15, marginLeft:"auto", marginRight:"auto" }} allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
)};

export default Contact;

import React from 'react';
import { Zoom } from 'react-reveal';
import img from '../../img/banner1.jpg';
import img1 from '../../img/banner2.jpg';
import img2 from '../../img/banner3.jpg';
import img3 from '../../img/banner4.jpg';
import img4 from '../../img/banner5.jpg';
const Iteams = () => {
    return (
        <div class="container">
            <h2 className='text-center mb-4 fw-bold mt-5'>Kedarnath Itinerary</h2>

        <div class="row g-2">
        
            <div class="col-6">
            <div class="p-3 ">
                <img className='img-fluid rounded' src={img} alt="" />
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 ">
            <Zoom>
                <h2>Day 0 : Departure From Delhi</h2>
                <ul>
                    <li>
                   <p>
                   We meet at Kaushambi Metro Station in Delhi at 6PM and Start out trip with full zeal and excitement.
                   </p>
                    </li>
                    <li>
                   <p>
                   Pit Stop in between for Dinner (not on us) at around 11 PM.
                   </p>
                    </li>
                </ul>
                </Zoom>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 ">
                <img className='img-fluid rounded' src={img1} alt="" />
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 ">
            <Zoom>
                <h2>Day 0 : Departure From Delhi</h2>
                <ul>
                    <li>
                   <p>
                   We meet at Kaushambi Metro Station in Delhi at 6PM and Start out trip with full zeal and excitement.
                   </p>
                    </li>
                    <li>
                   <p>
                   Pit Stop in between for Dinner (not on us) at around 11 PM.
                   </p>
                    </li>
                </ul>
                </Zoom>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 ">
                <img className='img-fluid rounded' src={img2} alt="" />
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 ">
            <Zoom>
                <h2>Day 0 : Departure From Delhi</h2>
                <ul>
                    <li>
                   <p>
                   We meet at Kaushambi Metro Station in Delhi at 6PM and Start out trip with full zeal and excitement.
                   </p>
                    </li>
                    <li>
                   <p>
                   Pit Stop in between for Dinner (not on us) at around 11 PM.
                   </p>
                    </li>
                </ul>
                </Zoom>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 ">
                <img className='img-fluid rounded' src={img3} alt="" />
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 ">
            <Zoom>
                <h2>Day 0 : Departure From Delhi</h2>
                <ul>
                    <li>
                   <p>
                   We meet at Kaushambi Metro Station in Delhi at 6PM and Start out trip with full zeal and excitement.
                   </p>
                    </li>
                    <li>
                   <p>
                   Pit Stop in between for Dinner (not on us) at around 11 PM.
                   </p>
                    </li>
                </ul>
                </Zoom>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 ">
                <img className='img-fluid rounded' src={img4} alt="" />
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 ">
                <Zoom>
                <h2>Day 0 : Departure From Delhi</h2>
                <ul>
                    <li>
                   <p>
                   We meet at Kaushambi Metro Station in Delhi at 6PM and Start out trip with full zeal and excitement.
                   </p>
                    </li>
                    <li>
                   <p>
                   Pit Stop in between for Dinner (not on us) at around 11 PM.
                   </p>
                    </li>
                </ul>
                </Zoom>
            </div>
          </div>
        </div>
       
      </div>
    );
};

export default Iteams;
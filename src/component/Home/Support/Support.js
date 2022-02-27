import React from 'react';
import { Zoom } from 'react-reveal';
import logo from '../../../img//logo/logo1.png';
import logo1 from '../../../img//logo/logo2.png';
import logo2 from '../../../img//logo/logo3.png';

const Support = () => {
    return (
        <div class="container">
  <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
    <div class="col">
      <div class="p-3 text-center">
          <Zoom>
          <div>
              <img className='img-fluid img-thumbnail w-' src={logo} alt="" />
          </div>
          <div className='mt-2 p-2'>
              <h6>Transportation</h6>
          </div>
          </Zoom>
      </div>
    </div>
    <div class="col">
      <div class="p-3 text-center">
          <Zoom>
          <div>
              <img className='img-fluid img-thumbnail' src={logo1} alt="" />
          </div>
          <div className='mt-2 p-2'>
              <h6>Transportation</h6>
          </div>
          </Zoom>
      </div>
    </div>
    <div class="col">
      <div class="p-3 text-center">
          <Zoom>
          <div>
              <img className='img-fluid img-thumbnail' src={logo2} alt="" />
          </div>
          <div className='mt-2 p-2'>
              <h6>Transportation</h6>
          </div>
          </Zoom>
      </div>
    </div>
  </div>
</div>
    );
};

export default Support;
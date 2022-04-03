import React from 'react';
import './Inputs.css';
import { useState } from 'react';

function Inputs(props) {
   


  const [wifiName, setWifiName] = useState('');
  const [password, setPassword] = useState(''); 



const   clickButtonDetect = () => {
 
    const options = {
  method: 'POST',
  headers: {
    Accept: 'image/svg+xml',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'ab8e2ff0-ddbb-4d46-b168-1073df4266a0'
  },
  body: JSON.stringify({
    data: {
      ssid: this.state.wifiName,
      password: this.state.input,
      security: 'WPA',
      hidden: false
    },
    image: {uri: 'icon://appstore', modules: true},
    style: {
      module: {color: 'black', shape: 'default'},
      inner_eye: {shape: 'default'},
      outer_eye: {shape: 'default'}
    },
    size: {width: 200, quiet_zone: 4, error_correction: 'M'},
    output: {filename: 'qrcode', format: 'svg'}
  })
};

fetch('https://qrcode3.p.rapidapi.com/qrcode/wifi', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
	return(
<div className=''>
<div className=" ">
<form>
	<div className="user-details">
              <div className="input-box">
                <span className="details">WifiName</span>
                <input type="text" placeholder="Enter your WifiName"  value={wifiName}
                   onChange={event => setWifiName(event.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your Password" value={password}
                    onChange={event => setPassword(event.target.value)} required/>
              </div>
              </div>

              <button> Submit
               </button>
</form>
</div>
</div>





		)

}

export default Inputs;
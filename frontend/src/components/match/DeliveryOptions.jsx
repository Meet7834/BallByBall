import React from 'react';
import './styles/deliveryOptions.css'

const DeliveryOptions = ({ onDeliveryResult }) => { 
  const handleDeliveryClick = (result) => {
    onDeliveryResult(result); 
  };

  return (
    <div className="delivery-options"> 
      {/* Run Buttons */}
      <div className="run-options">
        <button onClick={() => handleDeliveryClick(0)}>0</button>
        <button onClick={() => handleDeliveryClick(1)}>1</button>
        <button onClick={() => handleDeliveryClick(2)}>2</button>
        <button onClick={() => handleDeliveryClick(3)}>3</button>
        <button onClick={() => handleDeliveryClick(4)}>4</button>
        <button onClick={() => handleDeliveryClick(6)}>6</button>
      </div>

      {/* Extra Buttons */}
      <div className="extra-options">
        <button onClick={() => handleDeliveryClick('byes')}>Byes</button>
        <button onClick={() => handleDeliveryClick('legByes')}>Leg Byes</button>
        <button onClick={() => handleDeliveryClick('wide')}>Wide</button>
        <button onClick={() => handleDeliveryClick('noBall')}>No Ball</button>
        {/* ... Maybe more extras if needed */}
      </div>

      {/* Dismissal Options */}
      <div className="dismissal-options">
        <button onClick={() => handleDeliveryClick('bowled')}>Bowled</button>
        <button onClick={() => handleDeliveryClick('lbw')}>LBW</button>
        <button onClick={() => handleDeliveryClick('caught')}>Caught</button>
        <button onClick={() => handleDeliveryClick('runOut')}>Run Out</button>
        {/* ... Other dismissals (caught, run out, etc.) */}
      </div>
    </div>
  );
};

export default DeliveryOptions;
import React, { useEffect, useState } from 'react';
import './SkipSelector.css';

const SkipSelector = () => {
  const [skips, setSkips] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then(response => response.json())
      .then(data => setSkips(data))
      .catch(error => console.error('Error fetching skip data:', error));
  }, []);

  const handleCardClick = (index) => {
    if(selectedIndex!==index)setSelectedIndex(index);
    else setSelectedIndex(null)
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="selector-wrapper">
      <h2 className="title">Choose Your Skip Size</h2>
      <p className="subtitle">Select the size that best suits your needs</p>
      <div className="skip-grid">
        {skips.map((skip, index) => (
          <div
            key={index}
            className={`skip-card ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className='relative'>
              <div className="skip-header">
                <span>{skip.size} Yards</span>
              </div>
              <img
                src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg"
                alt="Skip Bin"
                className="skip-img"
              />
              {!skip.allowed_on_road && (
                <div className="road-status">🚫 Not Allowed on the Road</div>
              )}
            </div>
            <div className="skip-info">
              <p><strong>Hire Period:</strong> {skip.hire_period_days} days</p>
              <p><strong>Price:</strong> £{skip.price_before_vat}</p>
            </div>
            {selectedIndex === index && <div className="badge">✔</div>}
          </div>
        ))}
      </div>

      {showOverlay && selectedIndex !== null && (
        <div className="overlay">
          <div className="overlay-content">
          <p className="disclaimer">
                Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
              </p>
            <div className="overlay-info">           
              <p><strong>Size:</strong> {skips[selectedIndex].size} Yards</p>
              <p><strong>Hire Period:</strong> {skips[selectedIndex].hire_period_days} days</p>
              <p>£{skips[selectedIndex].price_before_vat}</p>              
              <div className="overlay-buttons">
                <button onClick={handleCloseOverlay} className="btn back">Back</button>
                <button className="btn continue">Continue</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipSelector;

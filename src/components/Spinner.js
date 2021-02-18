import React, { useState } from 'react'

export const Spinner = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const spinning = selectedItem !== null ? 'spinning' : '';


    const wheelVars = {
        '--nb-item': items.length,
        '--selected-item': selectedItem,
      };
    const handleItem = () => {
        setSelectedItem(Math.floor(Math.random() * items.length));
      }
    return (
        <>
        <div className="wheel-top">
            <div className="wheel-upper"></div>
            <div className="wheel-triangle"></div>
        </div>
        <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={handleItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
        </div>
      </div>
      </>
    )
}

export default Spinner;

import React, { useState } from 'react';
import item from "./MenuItems.json";

const MenueItems = () => {
    // console.log("MenuItems",MenuItems)
  const [selectedOptions, setSelectedOptions] = useState({});
  const [totalCost, setTotalCost] = useState(item.price);

  const handleOptionChange = (optionName, subOptionName, price) => {
    const newSelectedOptions = { ...selectedOptions };
    newSelectedOptions[optionName] = { name: subOptionName, price };
    setSelectedOptions(newSelectedOptions);

    // Recalculate total cost
    let newTotalCost = item.price;
    Object.values(newSelectedOptions).forEach(option => {
      newTotalCost += option.price;
    });
    setTotalCost(newTotalCost);
  };

  return (
    <div>
      <h2>{item.itemName}</h2>
      <p>Price: ${totalCost.toFixed(2)}</p>

      {Object.keys(item.options).map(optionName => (
        <div key={optionName}>
          <h3>{optionName}</h3>
          {Object.entries(item.options[optionName].options).map(([subOptionName, subOptionPrice]) => (
            <div key={subOptionName}>
              {item.options[optionName].minPermitted > 0 && (
                <input
                  type="checkbox"
                  checked={selectedOptions[optionName]?.name === subOptionName}
                  onChange={() => handleOptionChange(optionName, subOptionName, subOptionPrice)}
                />
              )}
              <label>{subOptionName} (+${subOptionPrice.toFixed(2)})</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenueItems;

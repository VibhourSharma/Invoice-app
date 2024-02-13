import React from "react";

const ItemList = ({ formData, setFormData }) => {
  const handleItemNameChange = (index, event) => {
    const updatedItems = [...formData.items];
    updatedItems[index].name = event.target.value;
    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const handleQuantityChange = (index, event) => {
    const updatedItems = [...formData.items];
    const newQuantity = parseInt(event.target.value) || "";
    updatedItems[index].quantity = newQuantity;
    updatedItems[index].total = newQuantity * updatedItems[index].price;
    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const handlePriceChange = (index, event) => {
    const updatedItems = [...formData.items];
    const newPrice = parseFloat(event.target.value) || "";
    updatedItems[index].price = newPrice;
    updatedItems[index].total = updatedItems[index].quantity * newPrice;
    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { name: "", quantity: "", price: "", total: "" },
      ],
    });
  };

  const handleRemoveItem = (index) => {
    if (formData.items.length > 1) {
      const updatedItems = [...formData.items];
      updatedItems.splice(index, 1);
      setFormData({
        ...formData,
        items: updatedItems,
      });
    }
  };

  return (
    <div className="item-form">
      <h2>Name Items</h2>
      {formData.items.map((item, index) => (
        <div key={index} className="item-row">
          <label htmlFor={`name-${index}`}>Name:</label>
          <input
            type="text"
            id={`name-${index}`}
            value={item.name}
            onChange={(event) => handleItemNameChange(index, event)}
          />

          <label htmlFor={`quantity-${index}`}>Quantity:</label>
          <input
            type="number"
            id={`quantity-${index}`}
            min={0}
            value={item.quantity}
            onChange={(event) => handleQuantityChange(index, event)}
          />

          <label htmlFor={`price-${index}`}>Price:</label>
          <input
            type="number"
            id={`price-${index}`}
            min={0}
            value={item.price}
            onChange={(event) => handlePriceChange(index, event)}
          />

          <span name>Total: {item.total}</span>

          <button type="button" onClick={() => handleRemoveItem(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAddItem}>
        Add Item
      </button>
    </div>
  );
};

export default ItemList;

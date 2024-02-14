import React from "react";
import deleteLogo from "../../assets/icon-delete.svg";

const FormItemList = ({ formData, setFormData }) => {
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
    <div className="flex flex-col">
      <span className="text-slate-500 font-bold text-2xl mb-2">Item List</span>
      {formData.items.map((item, index) => (
        <div key={index} className="flex gap-3">
          <div className="flex flex-col">
            <label className="text-slate-500" htmlFor={`name-${index}`}>
              Name:
            </label>
            <input
              className="w-36 border rounded-md p-2 mt-2 my-6 focus:outline-none"
              type="text"
              id={`name-${index}`}
              defaultValue={item.name}
              onChange={(event) => handleItemNameChange(index, event)}
              placeholder="Item Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-slate-500" htmlFor={`quantity-${index}`}>
              Qty:
            </label>
            <input
              className="w-28 border rounded-md p-2 mt-2 my-6 focus:outline-none"
              type="number"
              id={`quantity-${index}`}
              min={0}
              defaultValue={item.quantity}
              onChange={(event) => handleQuantityChange(index, event)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-slate-500" htmlFor={`price-${index}`}>
              Price:
            </label>
            <input
              className="w-28 border rounded-md p-2 mt-2 my-6 focus:outline-none"
              type="number"
              id={`price-${index}`}
              min={0}
              defaultValue={item.price}
              onChange={(event) => handlePriceChange(index, event)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-slate-500" htmlFor="total">
              Total:
            </label>
            <input
              className="w-28 border rounded-md p-2 mt-2 my-6 focus:outline-none"
              type="number"
              id="totalValue"
              min={0}
              value={item.total}
              name="total"
              readOnly
            />
          </div>

          <button type="button" onClick={() => handleRemoveItem(index)}>
            <img src={deleteLogo} alt="remove" />
          </button>
        </div>
      ))}

      <button
        type="button"
        className="p-3 rounded-3xl text-[#7E88C3] font-bold hover:bg-[#DFE3FA]"
        onClick={handleAddItem}
      >
        +Add New Item
      </button>
    </div>
  );
};

export default FormItemList;

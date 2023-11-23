const AddItems = () => {
  return (
    <div className="">
      <p className="">Item List</p>
      <ul className="">
        (
        <>
          <li className="">
            <p className="">Item Name</p>

            {items.map((item, id) => (
              <input
                name="name"
                className=""
                value={item.name || ""}
                key={id}
              ></input>
            ))}
          </li>

          <li className="">
            <p className="">Qty.</p>

            {items.map((item, id) => (
              <input
                name="quantity"
                className=""
                value={item.quantity || ""}
                key={id}
              ></input>
            ))}
          </li>

          <li className="">
            <p className="">Price</p>

            {items.map((item, id) => (
              <input
                name="price"
                className=""
                value={item.price || ""}
                key={id}
              ></input>
            ))}
          </li>

          <li className="">
            <p className="">Total</p>

            {items.map((item, id) => (
              <div className="" key={id}>
                <input
                  name="total"
                  className=""
                  value={item.total || ""}
                  disabled
                ></input>
              </div>
            ))}
          </li>
        </>
        ) : ( items.map((item, id) => (
        <li className="" key={id}>
          <div className="">
            <p className="">Item Name</p>
            <input name="name" className="" value={item.name || ""}></input>
          </div>

          <div className="">
            <div className="">
              <p className="">Qty.</p>
              <input
                name="quantity"
                className=""
                value={item.quantity || ""}
              ></input>
            </div>

            <div className="">
              <p className="">Price</p>
              <input name="price" className="" value={item.price || ""}></input>
            </div>

            <div className="">
              <p className="">Total</p>
              <input
                disabled
                name="quantity"
                className=""
                value={item.total || ""}
              ></input>
            </div>
            <i className=""></i>
          </div>
        </li>
        )) )
      </ul>

      <button type="button" className="">
        + Add New Item
      </button>
    </div>
  );
};
export default AddItems;

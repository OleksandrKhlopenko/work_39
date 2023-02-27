import { useState } from "react";

function ItemForm({ onAdd }) {
    const [name, setName] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onAdd(name);
      setName('');
    };
  
    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
export default ItemForm;  
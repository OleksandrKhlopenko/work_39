
import './App.css';
import ItemForm from './components/ItemForm';
import Item from './components/item';
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (name) => {
    setItems([...items, { name }]);
  };

  const handleRemove = (index) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  return (
    <div className='container'>
      <h1>user name</h1>
      <ItemForm onAdd={handleAdd} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Item name={item.name} onRemove={() => handleRemove(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}




export default App;


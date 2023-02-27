
function Item({ name, onRemove }) {
    return (
      <div>
        {name}
        <button onClick={onRemove}>Delete</button>
      </div>
    );
  }

  export default Item;
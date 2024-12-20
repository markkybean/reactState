function ShoppingListItems({ item, quantity, completed }) {
  const styles = {
    color: completed ? "grey" : "red",
    textDecoration: completed ? "Line-through" : "none ",
  };
  return (
    <li style={styles}>
      {item} - {quantity}
    </li>
  );
}
export default ShoppingListItems;

import ShoppingListItems from "./ShoppingListItems";
function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        // <ShoppingListItems
        //   key={i.id}
        //   item={i.item}
        //   quantity={i.quantity}
        //   completed={i.completed}
        // />
        <ShoppingListItems key={i.id} {...i} />
      ))}
    </ul>
  );
}
export default ShoppingList;

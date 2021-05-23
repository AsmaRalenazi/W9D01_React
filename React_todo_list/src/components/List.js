import React from "react";
import ListItem from "./ListItem";
const List = ({ todoList }) => {
  const allTodo = { todoList }.map((elem, i) => {
    return <ListItem key={i} taskTitle={elem} order={i} />;
  });
  return (
    <>
      <ul>{todoList}.id </ul>
      {allTodo}
    </>
  );
};
export default List;

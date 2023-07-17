//  import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { trash } from "./../helper/icons";

const TodoList = ({ complete, value, id, todo, setTodo }) => {
  const handleDelete = (id) => {
    setTodo(todo.filter((trash) => trash.id !== id));
  };
  const handleTodo = (id) => {
    const newTodos = todo.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodo(newTodos);
  };

  return (
    <Row className="mt-3 m-auto">
      <Card className="m-auto bounce-top" style={{ width: "100%" }}>
        <Card.Body
          className="d-flex justify-content-between"
          onDoubleClick={() => handleTodo(id)}
        >
          <li
            className={complete ? "text-decoration-line-through" : ""}
            style={{ listStyleType: "none" }}
            key={id}
          >
            {value}
          </li>
          <button onClick={() => handleDelete(id)} className="trash">
            {trash}
          </button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default TodoList;

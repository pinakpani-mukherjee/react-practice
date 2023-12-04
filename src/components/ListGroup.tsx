function ListGroup() {
  const items: string[] = ["NYC", "San Fransisco", "Tokyo", "London", "Mumbai"];

  //Event Handler
  const handleClick = (event: React.MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

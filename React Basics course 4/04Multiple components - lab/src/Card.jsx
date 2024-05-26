function Card(props) {
  return (
    <div className="card">
      <h2>this is some random h2 element {props.h2}</h2>
      <h3>this is some random h3 element {props.h3}</h3>
    </div>
  );
}

export default Card;

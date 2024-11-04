function Child({ data1}) {
  const {name, age, Education} = data1;
  return (
    <div>
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
      <p>Eduaction:{Education}</p>
    </div>
  );
}

export default Child;

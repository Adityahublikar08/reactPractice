export const EventProps = () => {
  const handleClick = (user) => {
    alert(`hey ${user} how are you`);
  };
  const handleHover = () => {
    console.log("hovered");
  };
  return (
    <Welcome onclick={() => handleClick("Aditya")} onHover={handleHover} />
  );
};

export const Welcome = (props) => {
  return (
    <>
      <button onClick={props.onclick}>Click me</button>
      <button onMouseEnter={props.onHover}>Hover Me</button>
    </>
  );
};

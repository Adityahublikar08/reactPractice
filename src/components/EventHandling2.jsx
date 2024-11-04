import "../index.css";
export const EventHandling2 = () => {
  const handleMouseEnter = () => {
    alert("mouse entered");
  };
  const handleMouseLeave = () => {
    alert("mouse Leaved");
  };
  //
  {
    /* <div style={{height:"200px",width:"200px",backgroundColor:"yellow"}}   */
  }
  return (
    <div
      className="text-5xl p-2 border-x-2  border-y-2 font-bold h-10 flex justify-center items-center bg-orange-300 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hii
    </div>
  );
};

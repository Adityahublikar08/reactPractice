import { useContext} from "react";
import { Context } from "./Home";

function Index() {
  const { name, age } = useContext(Context);
  return (
    <div>
      <h1>Hiii {name}</h1>
      <h2>Age is {age}</h2>
    </div>
  );
}


//custom hook
export const useCustomHook=()=>{
  const myContext=useContext(Context)
  return myContext;
}
export default Index;

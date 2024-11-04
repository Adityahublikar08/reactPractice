import { useReducer } from "react";

// function Reducer() {
//     const [state, dispatch] = useReducer((state, action) => {
//         switch (action.type) {
//             case 'INCREMENT':
//                 return { count: state.count + 1 };
//                 case 'DECREMENT':
//                     return { count: state.count - 1 };
//                     default:
//                         return state;
//                         }
//                         }, { count: 0 });
//                         return (
//                             <div>
//                                 <p>Count: {state.count}</p>
//                                 <button onClick={() => dispatch({ type: 'INCREMENT' })}>
//                                     Increment</button>
//                                     <button onClick={() => dispatch({ type: 'DECREMENT' })}>
//                                         Decrement</button>

//                             </div>
//                             );
//                         }

function Reducer() {
  const reducer = (count, action) => {
    switch (action.type) {
      case "INCREMENT":
        return count + 1;
      case "DECREMENT":
        return count > 0 ? count - 1 : 0;
      default:
        return count;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </div>
  );
}

export default Reducer;

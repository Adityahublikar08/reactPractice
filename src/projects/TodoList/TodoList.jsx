import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

function TodoList({index,data,onHandleDelete}) {
  return (
<li key={index} className="todo-item">
                <span>{data}</span>
                <button className="check-btn">
                  <IoMdCheckmarkCircle />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => onHandleDelete(data)}
                >
                  <MdDeleteForever />
                </button>
              </li>
  )
}

export default TodoList

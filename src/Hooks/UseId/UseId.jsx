import { useId } from 'react'

function UseId() {
    const id=useId();
  return (
    <div>
        <form >
            <label htmlFor={id+"userName"}>Usename</label>
            <input type="text"  id={id+"userName"} />
            <br />
            <label htmlFor={id+"password"}>Password</label>
            <input type="text"  id={id+"password"} />
            <button >Submit</button>
        </form>
      
    </div>
  )
}

export default UseId

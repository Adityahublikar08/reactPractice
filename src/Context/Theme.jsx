import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Theme() {
const light="skyblue"
const dark="gray"
    const {theme,setTheme}=useContext(ThemeContext)
    const handleClick=()=>{
        setTheme(!theme)
    }
  return (
    <div style={{ backgroundColor: theme ? light : dark,height:"200px",width:"200px"}}>
<h1>cdjbhf</h1>
      <button onClick={handleClick}>
        {theme?"blue":"black"}
      </button>
    </div>
  )
}

export default Theme

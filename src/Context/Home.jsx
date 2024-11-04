import { useContext } from 'react'
import { BioContext } from './Index'

function Home() {
    const{myName,age}=useContext(BioContext)
  return (
    <div>
      My name is {myName} and im {age} yr old
    </div>
  )
}

export default Home

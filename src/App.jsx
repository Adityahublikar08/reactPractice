//  import Datafetch1 from './Axios/Datafetch1'
//  import DataFetch from './Axios/DataFetch'
// import Datafetch2 from "./Axios/Datafetch2"
// import Datafetch3 from "./Axios/Datafetch3"
// // import Index from './Axios/Index'
// function App() {
//   return (
//     <div>
//       {/* <Index/> */}
//       <DataFetch/>
//       {/* <Datafetch1/> */}
//       {/* <Datafetch2/> */}
//       {/* <Datafetch3/> */}
//     </div>
//   )
// }

///----------------------------------------------------------------------------------------------


import React from 'react'
import DataAccess from './AxiosCrud/DataAccess'
import DataAcccess2 from './AxiosCrud/DataAcccess2'
import DataAccessTodo from './AxiosCrud/DataAccessTodo'
import DataAccessUsers from './AxiosCrud/DataAccessUsers'
import DataAccessAlbum from './AxiosCrud/DataAccessAlbum'
import DataAccesPokemon from './AxiosCrud/DataAccesPokemon'

function App() {
  return (
    <div>
      {/* <DataAccess/> */}
      {/* <DataAcccess2/> */}
      {/* <DataAccessTodo/> */}
      {/* <DataAccessUsers/> */}
      {/* <DataAccessAlbum/> */}
      <DataAccesPokemon/>
    </div>
    
  )
}

export default App

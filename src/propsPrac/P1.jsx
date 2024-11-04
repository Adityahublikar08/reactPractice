import seriesData from '../api/seriesData.json'
import {P2} from './P2.jsx';

// export const P1=()=>{
//     return(
//         <>
//         <div>
//             {
//                 Series.map((cunt)=>{
//                     return(

//                     <P2 key={cunt.id} cunt={cunt}/>
//                     );
//                 })
//             }
//         </div>
//         </>

//     );
// }

export const P1 = () => {
    return (
      <>
        <div>
          {
            seriesData.map((series) => {
              return (
                <P2 key={series.id} series={series} />
              );
            })
          }
        </div>
      </>
    );
  };
  
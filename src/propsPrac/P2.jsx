// export const P2=(props)=>
// {
//     return(
//         <div>
//             <img src={props.cunt.img_url} alt="" />
//             <h1>{props.cunt.name}</h1>
//             <h2>{props.cunt.rating}</h2>
//         </div>
//     );
// }

export const P2 = (props) => {
    const { img_url, name, description, genre, rating } = props.series;
  
    return (
      <div>
        <img src={img_url} alt={name} style={{ height: '200px', width: '150px' }} />
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Genre: {genre}</p>
        <p>Rating: {rating}</p>
      </div>
    );
  };
  
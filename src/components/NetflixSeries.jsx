import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./List";
export const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-cols">
      {seriesData.map((curElem) => {
        return <SeriesCard key={curElem.id} curElem={curElem} />;
      })}
    </ul>
  );
};

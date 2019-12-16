import React from "react";

const ObjectOneEarth = props => {

const {spaceData, selectedOptionEarth, objectOneEarth} = props;

return(
  <div className="compare-left">
    {spaceData.map(data => data.name === objectOneEarth && selectedOptionEarth === 'mass' ? (data.mass === null ? 'oops, try another object' : <div>{data.name} <br /> {data.mass} lbs.</div>) : null)}
    {spaceData.map(data => data.name === objectOneEarth && selectedOptionEarth === 'surface area' ? (data.surface_area === null ? 'oops, try another object' : <div>{data.name} <br /> {data.surface_area} sq. mi.</div>) : null)}
    {spaceData.map(data => data.name === objectOneEarth && selectedOptionEarth === 'temperature' ? (data.temperature === null ? 'oops, try another object' : <div>{data.name} <br /> {data.temperature} deg. F</div>) : null)}
  </div>
)};

export default ObjectOneEarth;
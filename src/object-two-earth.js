import React from "react";

const ObjectTwoEarth = props => {

const {earthData, selectedOptionEarth, objectTwoEarth} = props;
 
return(
  <div className="compare-right" id="earthTwo">
    {earthData.map(data => data.name === objectTwoEarth && selectedOptionEarth === 'mass' ? (data.mass === null ? 'oops, try another object' : <div>{data.name} <br /> {data.mass} lbs.</div>) : null)}
    {earthData.map(data => data.name === objectTwoEarth && selectedOptionEarth === 'surface area' ? (data.surface_area === null ? 'oops, try another object' : <div>{data.name} <br /> {data.surface_area} sq. mi..</div>) : null)}
    {earthData.map(data => data.name === objectTwoEarth && selectedOptionEarth === 'temperature' ? (data.temperature === null ? 'oops, try another object' : <div>{data.name} <br /> {data.temperature} deg. F</div>) : null)}
  </div>
)};

export default ObjectTwoEarth;
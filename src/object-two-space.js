import React from "react";

const ObjectTwoSpace = props => {

const {spaceData, selectedOptionSpace, objectTwoSpace} = props;
 
return(
  <div>
    <div className="compare-right">
      {spaceData.map(data => data.name === objectTwoSpace && selectedOptionSpace === 'mass' ? (data.mass === null ? 'oops, try another object' : <div>{data.name} <br /> {data.mass} lbs.</div>) : null)}
      {spaceData.map(data => data.name === objectTwoSpace && selectedOptionSpace === 'temperature' ? (data.temperature === null ? 'oops, try another object' : <div>{data.name} <br /> {data.temperature} deg. F</div>) : null)}
      {spaceData.map(data => data.name === objectTwoSpace && selectedOptionSpace === 'surface area' ? (data.surface_area === null ? 'oops, try another object' : <div>{data.name} <br /> {data.surface_area} sq. mi.</div>) : null)}
      {spaceData.map(data => data.name === objectTwoSpace && selectedOptionSpace === 'luminosity' ? (data.luminosity === null ? 'oops, try another object' : <div>{data.name} <br /> {data.luminosity} watts</div>) : null)}
      {spaceData.map(data => data.name === objectTwoSpace && selectedOptionSpace === 'distance from Earth' ? (data.distance_from_earth === null ? 'oops, try another object' : <div>{data.name} <br /> {data.distance_from_earth} mi.</div>) : null)}
    </div>
  
  </div>
)};

export default ObjectTwoSpace;
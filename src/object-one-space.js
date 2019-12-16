import React from "react";

const ObjectOneSpace = props => {

const {spaceData, selectedOptionSpace, objectOneSpace} = props;

return(
  <div className="compare-left">
    {spaceData.map(data => data.name === objectOneSpace && selectedOptionSpace === 'mass' ? (data.mass === null ? 'oops, try another object' : <div>{data.name} <br /> {data.mass} lbs.</div>) : null)}
    {spaceData.map(data => data.name === objectOneSpace && selectedOptionSpace === 'temperature' ? (data.temperature === null ? 'oops, try another object' : <div>{data.name} <br /> {data.temperature} deg. F</div>) : null)}
      {spaceData.map(data => data.name === objectOneSpace && selectedOptionSpace === 'surface area' ? (data.surface_area === null ? 'oops, try another object' : <div>{data.name} <br /> {data.surface_area} sq. mi.</div>) : null)}
      {spaceData.map(data => data.name === objectOneSpace && selectedOptionSpace === 'luminosity' ? (data.luminosity === null ? 'oops, try another object' : <div>{data.name} <br /> {data.luminosity} watts</div>) : null)}
      {spaceData.map(data => data.name === objectOneSpace && selectedOptionSpace === 'distance from Earth' ? (data.distance_from_earth === null ? 'oops, try another object' : <div>{data.name} <br /> {data.distance_from_earth} mi.</div>) : null)}
  </div>
)};

export default ObjectOneSpace;
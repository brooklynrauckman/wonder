import React from "react";

const ObjectOneSpace = props => {

const {spaceData, selectedOptionSpace, objectOneSpace} = props;

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

return(
  <div className="compare-left">
    {spaceData.map(data => data.name === objectOneSpace && selectedOptionSpace === 'mass' ? (data.mass === null ? `sorry, no mass for ${data.name}` : <div><b>{data.name}</b> <br /> {numberWithCommas(data.mass)} lbs.</div>) : null)}
    {spaceData.map(data => data.name === objectOneSpace && selectedOptionSpace === 'temperature' ? (data.temperature === null ? `sorry, no temp for ${data.name}` : <div><b>{data.name}</b> <br /> {numberWithCommas(data.temperature)} deg. F</div>) : null)}
      {spaceData.map(data => data.name === objectOneSpace && selectedOptionSpace === 'surface area' ? (data.surface_area === null ? `sorry, no area for ${data.name}` : <div><b>{data.name}</b> <br /> {numberWithCommas(data.surface_area)} sq. mi.</div>) : null)}
      {spaceData.map(data => data.name === objectOneSpace && selectedOptionSpace === 'luminosity' ? (data.luminosity === null ? `sorry, no luminosity for ${data.name}` : <div><b>{data.name}</b> <br /> {numberWithCommas(data.luminosity)} watts</div>) : null)}
      {spaceData.map(data => data.name === objectOneSpace && selectedOptionSpace === 'distance from Earth' ? (data.distance_from_earth === null ? `sorry, no distance for ${data.name}` : <div><b>{data.name}</b> <br /> {numberWithCommas(data.distance_from_earth)} mi.</div>) : null)}
  </div>
)};

export default ObjectOneSpace;

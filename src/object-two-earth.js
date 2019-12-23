import React from "react";

const ObjectTwoEarth = props => {

const {earthData, selectedOptionEarth, objectTwoEarth} = props;

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

return(
  <div className="compare-right" id="earthTwo">
    {earthData.map(data => data.name === objectTwoEarth && selectedOptionEarth === 'mass' ? (data.mass === null ? `sorry, no mass for ${data.name}` : <div><b>{data.name}</b> <br /> {numberWithCommas(data.mass)} lbs.</div>) : null)}
    {earthData.map(data => data.name === objectTwoEarth && selectedOptionEarth === 'surface area' ? (data.surface_area === null ? `sorry, no area for ${data.name}` : <div><b>{data.name}</b> <br /> {numberWithCommas(data.surface_area)} sq. mi.</div>) : null)}
    {earthData.map(data => data.name === objectTwoEarth && selectedOptionEarth === 'temperature' ? (data.temperature === null ? `sorry, no temp for ${data.name}` : <div><b>{data.name}</b> <br /> {numberWithCommas(data.temperature)} deg. F</div>) : null)}
  </div>
)};

export default ObjectTwoEarth;

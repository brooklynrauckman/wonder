import React from "react";
import ObjectOneSpace from "./object-one-space.js";
import ObjectTwoSpace from "./object-two-space.js";

const SpaceToSpace = props => {

  var scientificToDecimal = function (num) {
    var nsign = Math.sign(num);
    //remove the sign
    num = Math.abs(num);
    //if the number is in scientific notation remove it
    if (/\d+\.?\d*e[\+\-]*\d+/i.test(num)) {
        var zero = '0',
                parts = String(num).toLowerCase().split('e'), //split into coeff and exponent
                e = parts.pop(), //store the exponential part
                l = Math.abs(e), //get the number of zeros
                sign = e / l,
                coeff_array = parts[0].split('.');
        if (sign === -1) {
            l = l - coeff_array[0].length;
            if (l < 0) {
              num = coeff_array[0].slice(0, l) + '.' + coeff_array[0].slice(l) + (coeff_array.length === 2 ? coeff_array[1] : '');
            } 
            else {
              num = zero + '.' + new Array(l + 1).join(zero) + coeff_array.join('');
            }
        } 
        else {
            var dec = coeff_array[1];
            if (dec)
                l = l - dec.length;
            if (l < 0) {
              num = coeff_array[0] + dec.slice(0, l) + '.' + dec.slice(l);
            } else {
              num = coeff_array.join('') + new Array(l + 1).join(zero);
            }
        }
    }

    return nsign < 0 ? '-'+num : num;
};

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

const {options, spaceData, selectedOptionSpace, updateSelectedOptionSpace, objectOneSpace, objectTwoSpace, updateObjectOneSpace, updateObjectTwoSpace} = props;

const spaceOptions = 
  options.filter(function(item){
    return (item.key === "earth" || item.key === "space");
});

const massTwo = spaceData.map(data => data.name === objectTwoSpace && data.mass !== null && selectedOptionSpace === 'mass' ? data.mass : null);
const massValueTwo = Object.values(massTwo).reduce((t, n) => t + n);
const massValueTwoExpand = scientificToDecimal(massValueTwo);
const massOne = spaceData.map(data => data.name === objectOneSpace && data.mass !== null && selectedOptionSpace === 'mass' ? data.mass : null);
const massValueOne = Object.values(massOne).reduce((t, n) => t + n);
const massValueOneExpand = scientificToDecimal(massValueOne);
const divideOneIsGreater = `${massValueOneExpand/massValueTwoExpand}`;
const divideTwoIsGreater = `${massValueTwoExpand/massValueOneExpand}`;
const massRoundedFactorOne = Math.round(divideOneIsGreater);
const massRoundedFactorTwo = Math.round(divideTwoIsGreater);
const massFactorOneFormated = numberWithCommas(massRoundedFactorOne);
const massFactorTwoFormated = numberWithCommas(massRoundedFactorTwo);

const areaTwo = spaceData.map(data => data.name === objectTwoSpace && data.surface_area !== null && selectedOptionSpace === 'surface area' ? data.surface_area : null);
const areaValueTwo = Object.values(areaTwo).reduce((t, n) => t + n, 0);
const areaValueTwoExpand = scientificToDecimal(areaValueTwo);
const areaOne = spaceData.map(data => data.name === objectOneSpace && data.surface_area !== null && selectedOptionSpace === 'surface area' ? data.surface_area : null);
const areaValueOne = Object.values(areaOne).reduce((t, n) => t + n, 0);
const areaValueOneExpand = scientificToDecimal(areaValueOne);
const areaDivideOneIsGreater = `${areaValueOneExpand/areaValueTwoExpand}`;
const areaDivideTwoIsGreater = `${areaValueTwoExpand/areaValueOneExpand}`;
const areaRoundedFactorOne = Math.round(areaDivideOneIsGreater);
const areaRoundedFactorTwo = Math.round(areaDivideTwoIsGreater);
const areaFactorOneFormated = numberWithCommas(areaRoundedFactorOne);
const areaFactorTwoFormated = numberWithCommas(areaRoundedFactorTwo);

const tempTwo = spaceData.map(data => data.name === objectTwoSpace && data.temperature !== null && selectedOptionSpace === 'temperature' ? data.temperature : null);
const tempValueTwo = Object.values(tempTwo).reduce((t, n) => t + n, 0);
const tempValueTwoExpand = scientificToDecimal(tempValueTwo);
const tempOne = spaceData.map(data => data.name === objectOneSpace && data.temperature !== null && selectedOptionSpace === 'temperature' ? data.temperature : null);
const tempValueOne = Object.values(tempOne).reduce((t, n) => t + n, 0);
const tempValueOneExpand = scientificToDecimal(tempValueOne);
const tempSubtractOneIsGreater = `${tempValueOneExpand-tempValueTwoExpand}`;
const tempSubtractTwoIsGreater = `${tempValueTwoExpand-tempValueOneExpand}`;
const tempRoundedDiffOne = Math.round(tempSubtractOneIsGreater);
const tempRoundedDiffTwo = Math.round(tempSubtractTwoIsGreater);
const tempDiffOneFormated = numberWithCommas(tempRoundedDiffOne);
const tempDiffTwoFormated = numberWithCommas(tempRoundedDiffTwo);

const lumTwo = spaceData.map(data => data.name === objectTwoSpace && data.luminosity !== null && selectedOptionSpace === 'luminosity' ? data.luminosity : null);
const lumValueTwo = Object.values(lumTwo).reduce((t, n) => t + n, 0);
const lumValueTwoExpand = scientificToDecimal(lumValueTwo);
const lumOne = spaceData.map(data => data.name === objectOneSpace && data.luminosity !== null && selectedOptionSpace === 'luminosity' ? data.luminosity : null);
const lumValueOne = Object.values(lumOne).reduce((t, n) => t + n, 0);
const lumValueOneExpand = scientificToDecimal(lumValueOne);
const lumDivideOneIsGreater = `${lumValueOneExpand/lumValueTwoExpand}`;
const lumDivideTwoIsGreater = `${lumValueTwoExpand/lumValueOneExpand}`;
const lumRoundedFactorOne = Math.round(lumDivideOneIsGreater);
const lumRoundedFactorTwo = Math.round(lumDivideTwoIsGreater);

const distTwo = spaceData.map(data => data.name === objectTwoSpace && data.distance_from_earth !== null && selectedOptionSpace === 'distance from Earth' ? data.distance_from_earth : null);
const distValueTwo = Object.values(distTwo).reduce((t, n) => t + n, 0);
const distValueTwoExpand = scientificToDecimal(distValueTwo);
const distOne = spaceData.map(data => data.name === objectOneSpace && data.distance_from_earth !== null && selectedOptionSpace === 'distance from Earth' ? data.distance_from_earth : null);
const distValueOne = Object.values(distOne).reduce((t, n) => t + n, 0);
const distValueOneExpand = scientificToDecimal(distValueOne);
const distDivideOneIsGreater = `${distValueOneExpand/distValueTwoExpand}`;
const distDivideTwoIsGreater = `${distValueTwoExpand/distValueOneExpand}`;
const distRoundedFactorOne = Math.round(distDivideOneIsGreater);
const distRoundedFactorTwo = Math.round(distDivideTwoIsGreater);
const distDiffOneFormated = numberWithCommas(distRoundedFactorOne);
const distDiffTwoFormated = numberWithCommas(distRoundedFactorTwo);


return(
  <React.Fragment>
    <div className="question">

      {(selectedOptionSpace === '' || objectOneSpace === '' || objectTwoSpace === '') ? null :
        <div>
          <div className="factor">
              {massValueOneExpand > massValueTwoExpand ? (massValueTwoExpand === 0 ? '' : <div>{massFactorOneFormated} times</div>) : null}
              {massValueOneExpand < massValueTwoExpand ? (massValueOneExpand === 0 ? '' : <div>{massFactorTwoFormated} times</div>) : null}
              {areaValueOneExpand > areaValueTwoExpand ? (areaValueTwoExpand === 0 ? '' : <div>{areaFactorOneFormated} times</div>) : null}
              {areaValueOneExpand < areaValueTwoExpand ? (areaValueOneExpand === 0 ? '' : <div>{areaFactorTwoFormated} times</div>) : null}
              {tempValueOneExpand > tempValueTwoExpand ? (tempValueTwoExpand === 0 || tempValueOneExpand === 0 ? '' : <div>{tempDiffOneFormated} deg. difference</div>) : null}
              {tempValueOneExpand < tempValueTwoExpand ? (tempValueTwoExpand === 0 || tempValueOneExpand === 0 ? '' : <div>{tempDiffTwoFormated} deg. difference</div>) : null}
              {lumValueOneExpand > lumValueTwoExpand ? (lumValueTwoExpand === 0 ? '' : <div>{lumRoundedFactorOne} times</div>) : null}
              {lumValueOneExpand < lumValueTwoExpand ? (lumValueOneExpand === 0 ? '' : <div>{lumRoundedFactorTwo} times</div>) : null}
              {distValueOneExpand > distValueTwoExpand ? (distDiffTwoFormated === 0 ? '' : <div>{distDiffOneFormated} times</div>) : null}
              {distValueOneExpand < distValueTwoExpand ? (distDiffOneFormated === 0 ? '' : <div>{distDiffTwoFormated} times</div>) : null}
          </div>  
          <div className="compare"> 
            <ObjectOneSpace selectedOptionSpace={selectedOptionSpace} objectOneSpace={objectOneSpace} spaceData={spaceData} />
            <ObjectTwoSpace selectedOptionSpace={selectedOptionSpace} objectTwoSpace={objectTwoSpace} spaceData={spaceData}/>
          </div>
        </div>
      }
      <div className="dropdowns">
        <select className={objectOneSpace.length ? "dropdown on" : "dropdown"}
                onChange={(e) => updateObjectOneSpace(e.target.value)}
        >
            <option className="dd-list-item" disabled selected hidden>space object</option>
          {spaceData.map(item => 
            <option className="dd-list-item">{item.name}</option>
          )}
        </select>
        <div className="vs">
          vs.
        </div>
        <select className={objectTwoSpace.length ? "dropdown on" : "dropdown"}
                onChange={(e) => updateObjectTwoSpace(e.target.value)}
        >
            <option className="dd-list-item" disabled selected hidden>space object</option>
          {spaceData.map(item => 
            <option className="dd-list-item">{item.name}</option>
          )}
        </select>
      </div>
        <div className="options">
        {spaceOptions.map(item => 
          <button className={selectedOptionSpace === item.title ? 'option-select on' : 'option-select'}
                  onClick={(e) => {updateSelectedOptionSpace(item.title);}}
          >
            {item.title}
          </button>
         )}
        </div>
    </div>

  </React.Fragment>
)};

export default SpaceToSpace;
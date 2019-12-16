import React from "react";
import ObjectOneEarth from "./object-one-earth.js";
import ObjectTwoEarth from "./object-two-earth.js";

const SpaceToEarth = props => {

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

const {options, spaceData, earthData, selectedOptionEarth, updateSelectedOptionEarth, objectOneEarth, objectTwoEarth, updateObjectOneEarth, updateObjectTwoEarth, compareOneEarth, 
        compareTwoEarth, 
        updateCompareOneEarth, 
        updateCompareTwoEarth} = props;

 const earthOptions = 
  options.filter(function(item){
    return item.key === "earth";
  });

const massSpaceData = 
  spaceData.filter(function(item){
  return item.mass !== null;
  });

const massTwo = earthData.map(data => data.name === objectTwoEarth && data.mass !== null && selectedOptionEarth === 'mass' ? data.mass : null);
const valueTwo = Object.values(massTwo).reduce((t, n) => t + n, 0);
const valueTwoExpand = scientificToDecimal(valueTwo);
const massOne = massSpaceData.map(data => data.name === objectOneEarth && selectedOptionEarth === 'mass' ? data.mass : null);
const valueOne = Object.values(massOne).reduce((t, n) => t + n, 0);
const valueOneExpand = scientificToDecimal(valueOne);
const divideOneIsGreater = `${valueOneExpand/valueTwoExpand}`;
const divideTwoIsGreater = `${valueTwoExpand/valueOneExpand}`;
const roundedFactorOne = Math.round(divideOneIsGreater);
const roundedFactorTwo = Math.round(divideTwoIsGreater);
const factorOneFormated = numberWithCommas(roundedFactorOne);
const factorTwoFormated = numberWithCommas(roundedFactorTwo);

const areaTwo = earthData.map(data => data.name === objectTwoEarth && data.surface_area !== null && selectedOptionEarth === 'surface area' ? data.surface_area : null);
const areaValueTwo = Object.values(areaTwo).reduce((t, n) => t + n, 0);
const areaValueTwoExpand = scientificToDecimal(areaValueTwo);
const areaOne = spaceData.map(data => data.name === objectOneEarth && data.surface_area !== null && selectedOptionEarth === 'surface area' ? data.surface_area : null);
const areaValueOne = Object.values(areaOne).reduce((t, n) => t + n, 0);
const areaValueOneExpand = scientificToDecimal(areaValueOne);
const areaDivideOneIsGreater = `${areaValueOneExpand/areaValueTwoExpand}`;
const areaDivideTwoIsGreater = `${areaValueTwoExpand/areaValueOneExpand}`;
const areaRoundedFactorOne = Math.round(areaDivideOneIsGreater);
const areaRoundedFactorTwo = Math.round(areaDivideTwoIsGreater);
const areaFactorOneFormated = numberWithCommas(areaRoundedFactorOne);
const areaFactorTwoFormated = numberWithCommas(areaRoundedFactorTwo);

const tempTwo = earthData.map(data => data.name === objectTwoEarth && data.temperature !== null && selectedOptionEarth === 'temperature' ? data.temperature : null);
const tempValueTwo = Object.values(tempTwo).reduce((t, n) => t + n, 0);
const tempValueTwoExpand = scientificToDecimal(tempValueTwo);
const tempOne = spaceData.map(data => data.name === objectOneEarth && data.temperature !== null && selectedOptionEarth === 'temperature' ? data.temperature : null);
const tempValueOne = Object.values(tempOne).reduce((t, n) => t + n, 0);
const tempValueOneExpand = scientificToDecimal(tempValueOne);
const tempSubtractOneIsGreater = `${tempValueOneExpand-tempValueTwoExpand}`;
const tempSubtractTwoIsGreater = `${tempValueTwoExpand-tempValueOneExpand}`;
const tempRoundedDiffOne = Math.round(tempSubtractOneIsGreater);
const tempRoundedDiffTwo = Math.round(tempSubtractTwoIsGreater);
const tempDiffOneFormated = numberWithCommas(tempRoundedDiffOne);
const tempDiffTwoFormated = numberWithCommas(tempRoundedDiffTwo);

return(
  <React.Fragment>
    <div className="question">

      {(selectedOptionEarth === '' || objectOneEarth === '' || objectTwoEarth === '') ? '' :
        <div>
          <div className="factor">
            {valueOneExpand > valueTwoExpand ? (valueTwoExpand === 0 ? '' : <div>{factorOneFormated} times</div>) : null}
            {valueOneExpand < valueTwoExpand ? (valueOneExpand === 0 ? '' : <div>{factorTwoFormated} times</div>) : null}
            {areaValueOneExpand > areaValueTwoExpand ? (areaValueTwoExpand === 0 ? '' : <div>{areaFactorOneFormated} times</div>) : null}
            {areaValueOneExpand < areaValueTwoExpand ? (areaValueOneExpand === 0 ? '' : <div>{areaFactorTwoFormated} times</div>) : null}
            {tempValueOneExpand > tempValueTwoExpand ? (tempValueTwoExpand === 0 || tempValueOneExpand === 0 ? '' : <div>{tempDiffOneFormated} deg. difference</div>) : null}
            {tempValueOneExpand < tempValueTwoExpand ? (tempValueTwoExpand === 0 || tempValueOneExpand === 0 ? '' : <div>{tempDiffTwoFormated} deg. difference</div>) : null}
          </div>
          <div className="compare">
            <ObjectOneEarth selectedOptionEarth={selectedOptionEarth} objectOneEarth={objectOneEarth} spaceData={spaceData} compareOneEarth={compareOneEarth}
                      updateCompareOneEarth={updateCompareOneEarth}
                      />
            <ObjectTwoEarth updateCompareTwoEarth={updateCompareTwoEarth} compareTwoEarth={compareTwoEarth} selectedOptionEarth={selectedOptionEarth} objectTwoEarth={objectTwoEarth} earthData={earthData} />
          </div>
        </div>
      } 
      <div className="dropdowns">
        <select className={objectOneEarth.length ? "dropdown on" : "dropdown"}
                onChange={(e) => {updateObjectOneEarth(e.target.value);
                }}
        >
            <option className="dd-list-item" disabled selected hidden>space object</option>
          {spaceData.map(item => 
            <option className="dd-list-item">{item.name}</option>
          )}
        </select>
        <div className="vs">vs.</div>
        <select className={objectTwoEarth.length ? "dropdown on" : "dropdown"}
                onChange={(e) => updateObjectTwoEarth(e.target.value)}
        >
            <option className="dd-list-item" disabled selected hidden>earth object</option>
          {earthData.map(item => 
            <option className="dd-list-item">{item.name}</option>
          )}
        </select>
      </div>
      <div className="options">
      {earthOptions.map(item => 
        <button className={selectedOptionEarth === item.title ? 'option-select on' : 'option-select'}
                onClick={(e) => {updateSelectedOptionEarth(item.title);}}
        >
          {item.title}
        </button>
        )}
      </div>
    </div>

  </React.Fragment>
)};

export default SpaceToEarth;
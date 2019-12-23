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
const massFactorOneFormated = Number(Number(divideOneIsGreater).toFixed(6));
const massFactorTwoFormated = Number(Number(divideTwoIsGreater).toFixed(6));
const massFactorOne = massFactorOneFormated.toString().length > 9 ? massFactorOneFormated.toExponential(2) : numberWithCommas(massFactorOneFormated);
const massFactorTwo = massFactorTwoFormated.toString().length > 9 ? massFactorTwoFormated.toExponential(2) : numberWithCommas(massFactorTwoFormated);

const areaTwo = spaceData.map(data => data.name === objectTwoSpace && data.surface_area !== null && selectedOptionSpace === 'surface area' ? data.surface_area : null);
const areaValueTwo = Object.values(areaTwo).reduce((t, n) => t + n, 0);
const areaValueTwoExpand = scientificToDecimal(areaValueTwo);
const areaOne = spaceData.map(data => data.name === objectOneSpace && data.surface_area !== null && selectedOptionSpace === 'surface area' ? data.surface_area : null);
const areaValueOne = Object.values(areaOne).reduce((t, n) => t + n, 0);
const areaValueOneExpand = scientificToDecimal(areaValueOne);
const areaDivideOneIsGreater = `${areaValueOneExpand/areaValueTwoExpand}`;
const areaDivideTwoIsGreater = `${areaValueTwoExpand/areaValueOneExpand}`;
const areaFactorOneFormated = Number(Number(areaDivideOneIsGreater).toFixed(6));
const areaFactorTwoFormated = Number(Number(areaDivideTwoIsGreater).toFixed(6));
const areaFactorOne = areaFactorOneFormated.toString().length > 9 ? areaFactorOneFormated.toExponential(2) : numberWithCommas(areaFactorOneFormated);
const areaFactorTwo = areaFactorTwoFormated.toString().length > 9 ? areaFactorTwoFormated.toExponential(2) : numberWithCommas(areaFactorTwoFormated);

const tempTwo = spaceData.map(data => data.name === objectTwoSpace && data.temperature !== null && selectedOptionSpace === 'temperature' ? data.temperature : null);
const tempValueTwo = Object.values(tempTwo).reduce((t, n) => t + n, 0);
const tempValueTwoExpand = scientificToDecimal(tempValueTwo);
const tempOne = spaceData.map(data => data.name === objectOneSpace && data.temperature !== null && selectedOptionSpace === 'temperature' ? data.temperature : null);
const tempValueOne = Object.values(tempOne).reduce((t, n) => t + n, 0);
const tempValueOneExpand = scientificToDecimal(tempValueOne);
const tempSubtractOneIsGreater = `${tempValueOneExpand-tempValueTwoExpand}`;
const tempSubtractTwoIsGreater = `${tempValueTwoExpand-tempValueOneExpand}`;
const tempDiffOneFormated = Number(Number(tempSubtractOneIsGreater).toFixed(6));
const tempDiffTwoFormated = Number(Number(tempSubtractTwoIsGreater).toFixed(6));
const tempDiffOne = tempDiffOneFormated.toString().length > 9 ? tempDiffOneFormated.toExponential(2) : numberWithCommas(tempDiffOneFormated);
const tempDiffTwo = tempDiffTwoFormated.toString().length > 9 ? tempDiffTwoFormated.toExponential(2) : numberWithCommas(tempDiffTwoFormated);

const lumTwo = spaceData.map(data => data.name === objectTwoSpace && data.luminosity !== null && selectedOptionSpace === 'luminosity' ? data.luminosity : null);
const lumValueTwo = Object.values(lumTwo).reduce((t, n) => t + n, 0);
const lumValueTwoExpand = scientificToDecimal(lumValueTwo);
const lumOne = spaceData.map(data => data.name === objectOneSpace && data.luminosity !== null && selectedOptionSpace === 'luminosity' ? data.luminosity : null);
const lumValueOne = Object.values(lumOne).reduce((t, n) => t + n, 0);
const lumValueOneExpand = scientificToDecimal(lumValueOne);
const lumDivideOneIsGreater = `${lumValueOneExpand/lumValueTwoExpand}`;
const lumDivideTwoIsGreater = `${lumValueTwoExpand/lumValueOneExpand}`;
const lumFactorOneFormated = Number(Number(lumDivideOneIsGreater).toFixed(6));
const lumFactorTwoFormated = Number(Number(lumDivideTwoIsGreater).toFixed(6));
const lumFactorOne = lumFactorOneFormated.toString().length > 9 ? lumFactorOneFormated.toExponential(2) : numberWithCommas(lumFactorOneFormated);
const lumFactorTwo = lumFactorTwoFormated.toString().length > 9 ? lumFactorTwoFormated.toExponential(2) : numberWithCommas(lumFactorTwoFormated);

const distTwo = spaceData.map(data => data.name === objectTwoSpace && data.distance_from_earth !== null && selectedOptionSpace === 'distance from Earth' ? data.distance_from_earth : null);
const distValueTwo = Object.values(distTwo).reduce((t, n) => t + n, 0);
const distValueTwoExpand = scientificToDecimal(distValueTwo);
const distOne = spaceData.map(data => data.name === objectOneSpace && data.distance_from_earth !== null && selectedOptionSpace === 'distance from Earth' ? data.distance_from_earth : null);
const distValueOne = Object.values(distOne).reduce((t, n) => t + n, 0);
const distValueOneExpand = scientificToDecimal(distValueOne);
const distDivideOneIsGreater = `${distValueOneExpand/distValueTwoExpand}`;
const distDivideTwoIsGreater = `${distValueTwoExpand/distValueOneExpand}`;
const distDiffOneFormated = Number(Number(distDivideOneIsGreater).toFixed(6));
const distDiffTwoFormated = Number(Number(distDivideTwoIsGreater).toFixed(6));
const distDiffOne = distDiffOneFormated.toString().length > 9 ? distDiffOneFormated.toExponential(2) : numberWithCommas(distDiffOneFormated);
const distDiffTwo = distDiffTwoFormated.toString().length > 9 ? distDiffTwoFormated.toExponential(2) : numberWithCommas(distDiffTwoFormated);

console.log(distDiffOneFormated);
console.log(distDiffTwoFormated);

return(
  <div className="question">
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
        <a href="#space-comparison">
        <button className={selectedOptionSpace === item.title ? 'option-select on' : 'option-select'}
                onClick={(e) => {updateSelectedOptionSpace(item.title);}}
        >
          {item.title}
        </button>
        </a>
       )}
      </div>
      {(selectedOptionSpace === '' || objectOneSpace === '' || objectTwoSpace === '') ? null :
        <div className="space-to-space" id="space-comparison">
          <div className="factor">
              {massValueOneExpand > massValueTwoExpand ? (massValueTwoExpand === 0 ? '' : <div><span className="factor-number">{massFactorOne}</span> times</div>) : null}
              {massValueOneExpand < massValueTwoExpand ? (massValueOneExpand === 0 ? '' : <div><span className="factor-number">{massFactorTwo}</span> times</div>) : null}
              {areaValueOneExpand > areaValueTwoExpand ? (areaValueTwoExpand === 0 ? '' : <div><span className="factor-number">{areaFactorOne}</span> times</div>) : null}
              {areaValueOneExpand < areaValueTwoExpand ? (areaValueOneExpand === 0 ? '' : <div><span className="factor-number">{areaFactorTwo}</span> times</div>) : null}
              {tempValueOneExpand > tempValueTwoExpand ? (tempValueTwoExpand === 0 || tempValueOneExpand === 0 ? '' : <div><span className="factor-number">{tempDiffOne}</span> deg. difference</div>) : null}
              {tempValueOneExpand < tempValueTwoExpand ? (tempValueTwoExpand === 0 || tempValueOneExpand === 0 ? '' : <div><span className="factor-number">{tempDiffTwo}</span> deg. difference</div>) : null}
              {lumValueOneExpand > lumValueTwoExpand ? (lumValueTwoExpand === 0 ? '' : <div><span className="factor-number">{lumFactorOne}</span> times</div>) : null}
              {lumValueOneExpand < lumValueTwoExpand ? (lumValueOneExpand === 0 ? '' : <div><span className="factor-number">{lumFactorTwo}</span> times</div>) : null}
              {distValueOneExpand > distValueTwoExpand ? (distValueTwoExpand === 0 ? '' : <div><span className="factor-number">{distDiffOne}</span> times</div>) : null}
              {distValueOneExpand < distValueTwoExpand ? (distValueOneExpand === 0 ? '' : <div><span className="factor-number">{distDiffTwo}</span> times</div>) : null}
          </div>
          <div className="compare">
            <ObjectOneSpace selectedOptionSpace={selectedOptionSpace} objectOneSpace={objectOneSpace} spaceData={spaceData} />
            <ObjectTwoSpace selectedOptionSpace={selectedOptionSpace} objectTwoSpace={objectTwoSpace} spaceData={spaceData}/>
          </div>
        </div>
      }
  </div>
)};

export default SpaceToSpace;

import React from "react";
import SpaceToEarth from "./space-to-earth.js";
import SpaceToSpace from "./space-to-space.js";

const Question = props => {

const {options, spaceData, earthData, earthToggle, spaceToggle, selectedOptionEarth, updateSelectedOptionEarth, selectedOptionSpace, updateSelectedOptionSpace, objectOneEarth, objectTwoEarth, objectOneSpace, objectTwoSpace, updateObjectOneEarth, updateObjectTwoEarth, updateObjectOneSpace, updateObjectTwoSpace} = props;

return(
  <React.Fragment>
    {(earthToggle === true) ?
       <SpaceToEarth selectedOptionEarth={selectedOptionEarth}
                      updateSelectedOptionEarth={updateSelectedOptionEarth}
                      updateObjectOneEarth={updateObjectOneEarth}
                      objectOneEarth={objectOneEarth}
                      objectTwoEarth={objectTwoEarth}
                      updateObjectTwoEarth={updateObjectTwoEarth}
                      options={options}
                      spaceData={spaceData}
                      earthData={earthData}
                      earthToggle={earthToggle}
      />
      : ('')
    }
    {(spaceToggle === true) ?
       <SpaceToSpace selectedOptionSpace={selectedOptionSpace}
                      updateSelectedOptionSpace={updateSelectedOptionSpace}
                      updateObjectOneSpace={updateObjectOneSpace}
                      objectOneSpace={objectOneSpace}
                      objectTwoSpace={objectTwoSpace}
                      updateObjectTwoSpace={updateObjectTwoSpace}
                      options={options}
                      spaceData={spaceData}
                      spaceToggle={spaceToggle}
       />
       : ('')
    }
  </React.Fragment>
)};

export default Question;

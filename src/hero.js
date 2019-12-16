import React from "react";
import RandomColor from "./random-color.js";

const postGuestList = async function postGuestList(url = '', data = {}) {
  // try {
  //   const data = await postData('http://example.com/answer', { answer: 42 });
  //   console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
  // } catch (error) {
  //   console.error(error);
  // }
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}



const Hero = (props) => {

const {listToggle, updateListToggle, inputToggle, updateInputToggle, guestToggle, updateGuestToggle, guestList, updateGuestList} = props;

// const colorList = [{color: "#FF0000"}, {color: "#FF7F00"}, {color: "#FFFF00"}, {color: "#00FF00"}, {color: "#0000FF"}, {color: "#2E2B5F"}, {color: "#8B00FF"} ];
// const randomColor = colorList.map((i) => {return i.color});
// const getOneColor = () => { for(i=0; i < randomColor.length; i++) {

// }
// };



return(
  <div className="hero-wrapper">
    <div className="Hero">
      <div className="post">
        <button className={inputToggle === true ? 'guest-list on' : 'guest-list'}
                onClick={() => updateInputToggle(!inputToggle)}
        >Join Guest Galaxy</button>
        {inputToggle === true ?
        <input className="guest-list input" type="text" placeholder="Add your name..." name="name"
              onKeyUp={(e) => {if (e.key === 'Enter') { updateListToggle(true); updateInputToggle(false); updateGuestToggle(true); postGuestList('https://i4jio.sse.codesandbox.io/users', {name: e.target.value}); updateGuestList([...guestList, {name: e.target.value}]);};
              }}
        ></input>
          : ''}
      </div>
      {guestToggle === true ?
      <div className="show-hide">
        <button className="guest-list"
                onClick={() => updateListToggle(!listToggle)}
        >{listToggle === false ? 'Show Guest Galaxy' : 'Hide Guest Galaxy'}
        </button>
      </div>
      : ''
      }
      {guestToggle === true && listToggle === true ?
        <div className="side-scroll">
          
          {guestList.map((user) => 
          <div className="guest">
            <RandomColor />
            <div className="guest-name">{user.name}</div>
          </div>
       
          )
          }
        </div>
        : ''
        }
      <h1 className="title">I wonder ...</h1>
      </div>
  </div>
)};

export default Hero;
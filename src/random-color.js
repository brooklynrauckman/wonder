import React from 'react'

function RandomColor() {
  let rgb = []
  for (var i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 256)
    rgb.push(r)
  }
  var styles = {
    backgroundColor: `rgb(${rgb})`,
  };
  console.log(styles);
  return (
      <div className="dot" style={styles}></div>
  )
}
export default RandomColor;

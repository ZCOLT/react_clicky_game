import React from 'react';

const ImgComp = (props) => {
  return (
    <div className="col-sm-3">
      <img onClick={props.handleClick} id={props.imgId} src={props.image} style={props.imgStyles} alt="rick and morty"/>
    </div>
  );
};

export default ImgComp;
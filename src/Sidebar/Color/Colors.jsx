import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

function Colors({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title color-title">color</h2>
      <label className="sidebar-lable-container">
        <input onChange={handleChange} type="radio" value="" name="test3" />
        <span className="checkmark all"></span>All
      </label>
      <Input handleChange={handleChange} value='black' title='Black' name='test1' color='black' />
      <Input handleChange={handleChange} value='blue' title='Blue' name='test1' color='blue' />
      <Input handleChange={handleChange} value='red' title='Red' name='test1' color='red' />
      <Input handleChange={handleChange} value='green' title='Green' name='test1' color='green' />
      <label className="sidebar-lable-container">
        <input type="radio" onCanPlay={handleChange} value='white' />
        <span className="checkmark" style={{backgroundColor:'white', border:"2px solid black"}}></span>White
      </label>   
    </div>
  );
}

export default Colors;

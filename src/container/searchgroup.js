import React from "react";
import InputGroup from  "./inputgroup";


export default function SearchGroup({
  className,
  style,
  enabled,
  label,
  name,
  value,
  type,
  onChange,
  placeHolder,
  id,
  onClick,
  star,
  onBlur,
  onKeyDown,
  required,
  tabIndex,
  onkeyup,
  src,
  width,
  onFocus,
  
}) {
  return (
    <div className={`search-group  position-relative ${className}`}>
      <InputGroup
        className="form-group w-100"
        style={style}
        label={label}
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        type={type}
        placeHolder={placeHolder}
        star={star}
        enabled={enabled}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        required={required}
        tabIndex={tabIndex}
        onkeyup={onkeyup}
        onFocus={onFocus}
        
      />
 <div  className='' type='button' style={{    position: "absolute",
    right: "1rem",
    top: "1.3rem",
    width: "2rem",
    height: "1.8rem",
    cursor: "pointer"}} onClick={onClick}   ><img className="" width={width} style={{        
          margin:"-1.5rem 1.0rem 0.3rem 1.3rem"}}  src={src} alt="" />  </div> 
      {/* <img
        className="icon-search"
        src="/assets/images/icons/search-icon.png"
        alt="Search"
        onClick={onClick}
      /> */}
    </div>
  );
}

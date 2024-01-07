import React from "react";
import InputGroup from "./inputgroup";

const SearchInput = ({ placeholder, value, onChange, imageUrl,className,onClick }) => {
  return (
    <div className={`search-group  position-absolute ${className}`}>
      {/* <img src={imageUrl} alt="Search" className="search-icon" /> */}
      <InputGroup
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // style={{ width: "97.5%",height:"40%" }} 
      />
       <button  className='' type='button' style={{    position: "relative",
    // right: "-89rem",
    // top: "2.4rem",
    // width: "2rem",
    // height: "1.8rem",
    cursor: "pointer"}} onClick={onClick}><img className="crossSymbol" width="25" 
    style={{        
          margin:""}}  src={imageUrl} alt="" />  </button>
    </div>
  );
};

export default SearchInput;

import React from "react";

export default function Button({label, onClick, className,enabled, id,style, tabIndex, type,datatoggle,datatarget,spin}) {
    return (
        <button disabled={enabled} className={`${className ? className : ''}`} type={type} id={id} style={style} tabIndex={tabIndex} onClick={onClick} data-bs-toggle={datatoggle} data-bs-target={datatarget}>{label}{spin}</button>
    )
}
import React from 'react'

export default function HDiv({children, className, onClick, style,hidden}) {
    return (
        <div className={`flex ${className ? className : ''}`} onClick={onClick} hidden={hidden} style={style? style : {}}>
            {children}
        </div>
    )
}
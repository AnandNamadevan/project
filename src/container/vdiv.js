import React from 'react'

export default function VDiv({children , className, onClick, hidden, style,key}) {
    return (
        <div key={key} style={style ? style : null} className={`${className ? className : ''}`} hidden={hidden} onClick={onClick}>
            {children}
        </div>
    )
}
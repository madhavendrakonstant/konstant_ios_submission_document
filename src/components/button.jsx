import React from "react";

const Button = (props) => {
    return (

            <button className={'py-' + props.spacingy + ' ' + 'px-' + props.spacingx  + ' bg-' + props.color + ' text-white inline-block rounded-custom-sm shadow-inner-sm font-semibold capitalize ' + props.margin}>
                {props.children}
            </button>
            
    )
}

export default Button;
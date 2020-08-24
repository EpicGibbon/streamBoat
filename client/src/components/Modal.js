import React from "react";

const Modal = () => {
 
    return ( 
        <>
    <h1>{this.props.children}</h1>
    <br/>
    <br/>
    <div>{this.props.content}</div>
</>
    )
}
export default Modal;
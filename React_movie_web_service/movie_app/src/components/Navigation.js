import React from "react";
import { Link } from "react-router-dom"     //href는 html이므로 새로고침하지만 link를 이용하면 새로고침 하지 않고 인터렉션됨

function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
    /*link는 router안에 있어야함*/
}

export default Navigation;
import React from "react";
import "./PageLayout.scss";

const PageLayout = (props) => {
    return (<div className={"layout layout--light"}>
                <div className="layout__inner">
                    {
                        props.children
                    }
                </div>
            </div>);
}

export default PageLayout;
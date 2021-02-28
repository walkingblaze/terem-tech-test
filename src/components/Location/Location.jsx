import React from 'react';
import gpsLocation from "../../media/gpsLocation.svg";
import "./Location.scss"

const Location  = ({title, location}) => {
      return (
        <div className="location">
            <div className={"title"}>{title}</div>
            <div className={"gps"}>
                <div className={"gps__icon"}>
                    <img className={"image"} src={gpsLocation} alt="" />
                </div>
                <div className={"gps__location"}>{location}</div>
            </div>
        </div>
    );
}

export default Location;
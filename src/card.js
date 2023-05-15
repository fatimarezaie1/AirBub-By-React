import React from "react";


export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="profile" />
            <div className="card--stats">
                <img src={props.star} className="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
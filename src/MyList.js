import React from "react";
import './MyListe.css';


function Liste(props) {

    return (
        <div className="h1">
            <h1 className="h2">Liste :</h1>
            <ul>
                {props.data.map(user => (
                    <li className="user">
                        <p className="userName">Nom : {user.name}</p>
                        <p className="userAge">Âge : {user.age} ans</p>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default Liste;
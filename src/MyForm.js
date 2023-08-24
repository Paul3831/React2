import './App.css';
import { useState, useEffect } from "react";
import Formulaire from './MyList';




function Form() {

    //Appelle de toutss les variables 

    const [user, setUser] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(false);


    //VOIR SI LES CHAMPS SONT REMPLI

    useEffect(() => {
        if (name !== '' && age !== '') {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [name, age]);


    //Récupérer l'heure
    var displayHours = document.getElementById('displayHours');
    var displayMinutes = document.getElementById('displayMinutes');
    var currentTime = new Date();
    var heure = currentTime.getHours();
    var min = currentTime.getMinutes();
    //Ajouter un 0 devant les chiffres pour avoir le format ex 21:05 au lieu de 21:5.
    if (min < 10) {
        min = "0" + min;
    };

    function submitForm(x) {
        x.preventDefault();
        if (!name) {
            setError('Nom est requis');
            console.log("Nom est requis");
        } else if (!age) {
            setError('Age est requis');
            console.log("Age est requis");
        } else {
            setError('');
            console.log("Nom : " + name);
            console.log("Age : " + age);
        }
        setUser([...user, { name: name, age: age }]);
        setName('');
        setAge('');
    }

    return (
        <div className="App">
            <header className="App-header">
                <form className="Auth" onSubmit={submitForm}>
                    <label>
                        Nom :
                        <input type="text" placeholder="Indiquez votre nom" value={name} onChange={e => setName(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Age :
                        <input type="number" min="0" placeholder="Indiquez votre âge" value={age} onChange={e => setAge(e.target.value)} />
                    </label>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <br /><br /><input type="submit" hidden={!isValid} value="S'enregistrer" />
                </form>
                <Formulaire data={user} />
            </header>
        </div>
    );
}

export default Form;


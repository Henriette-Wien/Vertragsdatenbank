import React, {useEffect, useState} from 'react';


function AlleVertraege() {
    const [vertraege, setVertrag] = useState([{
        name: '',
        bedingung: '',
        kosten: ''
    }])

    useEffect(() => {
        fetch("/Vertrag").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setVertrag(jsonRes));
    })

    return <div className='container'>
        <h1>Alle Verträge</h1>

        {vertraege.map(vertrag =>
            <div>
                <h1>{vertrag.name}</h1>
                <p>{vertrag.bedingung}</p>
                <p>{vertrag.kosten}</p>
            </div>
        )}

    </div>

}

export default AlleVertraege;
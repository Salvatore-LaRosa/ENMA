import { useState } from "react"

export const rimborsoSpese = [
    {
        commessa: 'Edison',
        categoria: 'Trasporti',
        data: new Date(),
        costo: 20,
        note: String,
    }
]

function RimborsoSpese() {
    const [rimborso, setRimborso] = useState([]);

    function newRimborso(commessa, categoria, data, costo, note) {
        const newRimborso = {
            commessa: commessa,
            categoria: categoria,
            data: data,
            costo: costo,
            note: note,
        };
        setRimborso([...rimborso, newRimborso]);
    }
}
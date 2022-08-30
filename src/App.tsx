import React from 'react';

import jsonData from "./politiche_2022.json";

const params: any = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop as string),
});

let item:any = null;
if(params.id_dep) {
  item = jsonData.find((el) => el.id_dep == params.id_dep);
} else {
  item = jsonData[Math.floor(Math.random()*jsonData.length)];
}

function App() {
  const [open, setOpen] = React.useState(false);




  if(!item) {
    return <p>ooopps....</p>
  }

  const openProgramma = (e: any) => {
    setOpen(true);
  }

  return (
    <>
      <img src={`./logos/${item.f_contr}`} alt=""/>

      <p>{item.partito}</p>
      {item.nome_c && (
          <p><span>con a capo:</span>&nbsp;{item.nome_c} {item.cogn_c}</p>
      )}

      <p className="link">
        <button onClick={openProgramma}>GUARDA IL PROGRAMMA</button>
      </p>

      {open && (
          <div>
            <ul>
              <li>+ Lavoro, - Tasse</li>
              <li>Si al <b>BungaBeach 2023</b></li>
              <li>Yo soy Giorgia, soy una mujer, soy una madre, soy cristiana!!!!</li>
              <li>SI sul ponte sullo stretto.<br/>(...ma solo se è molto stretto)</li>
              <li>Si a Capezzone come Clint Eastwood</li>
              <li>Pensioni + alte per dare + soldi ai nipoti disoccupati</li>
              <li>Sblocchiamo le graduatorie (qualunque cosa significhi)</li>
              <li>Ristabiliamo l'ordine a suon di <b>"scusi, lei spaccia?"</b></li>
              <li>No al "Quando c'era lui..."</li>
              <li>Crediamo in un Di Maio x altri 10 mandati</li>
              <li>supportiamo l'hashtag <b>#escilexcivati</b></li>
            </ul>
          </div>
      )}

      <p className="permalink">
        <a href={`?id_dep=${item.id_dep}`}>permalink</a>
      </p>




    </>
  );
}

export default App;

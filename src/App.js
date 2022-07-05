import './App.css';
import { STATE_OBJECT } from "./state";
import React, { useState, useEffect } from "react";
import { FusionTable } from "@ironsource/fusion-ui/react";

const rows = [
  {
    id1: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org',
    checkbox: false,
  },
  {
    id1: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
    checkbox: true,
  },
  {
    id1: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
    checkbox: true,
  },
  {
    id1: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
    checkbox: false,
  },
  {
    id1: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
    checkbox: true,
  },
  {
    id1: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
    checkbox: false,
  },
  {
    id1: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
    checkbox: false,
  },
  {
    id1: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
    checkbox: false,
  },
  {
    id1: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
    checkbox: false,
  },
  {
    id1: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
    checkbox: false,
  },
];

export function App() {
  const [state, setTableState] = useState(STATE_OBJECT);

  useEffect(() => {
    setTimeout(() => {
      setTableState(() => {

        return {
          ...state,
          table: {
            ...state.table,
            rows: rows,
            loading:0
          }
        }
      })
    }, 2000);

  }, [])

  return (
    <div className="App">
      <FusionTable config={state.table}></FusionTable>
    </div>
  );
}

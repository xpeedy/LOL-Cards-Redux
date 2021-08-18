import ChampForm from './components/champForm';
import Champion from './components/champ';
import Styled from "styled-components";
import { useState } from 'react';

function App() {
  const [cardOn,setCardOn] = useState()
  
  return (
    <MainDiv  className="App">
      
        <ChampForm />
        <Champion />
        
    </MainDiv >
  );
}

export default App;

const MainDiv = Styled.div`
display: flex;
flex-direction:column;
/* justify-content: center; */
align-items: center;
border: solid black;
;
background: url("https://cdna.artstation.com/p/assets/images/images/002/441/052/large/joon-ahn-ionia-castle-nov-2014-03.jpg?1461775019") no-repeat;
background-size: cover;
/* padding:21.5%; */


`
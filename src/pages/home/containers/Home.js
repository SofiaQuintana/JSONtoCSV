import React from 'react';
import { Button, ButtonsContainer, ErrorLabel, MainContainer, TextArea } from '../components/styles/Home.styles';
import { Header } from '../components/Header';
import { useConversor } from '../../../hooks/useConversor';

function Home() {

  const {
    input,
    output,
    rowsInput,
    colsInput,
    rowsOutput,
    colsOutput,
    incorrectInput,
    setInput,
    JSONToCSV,
    toJSON,
    clean } = useConversor();

  return (
    <MainContainer>
      <Header/>
      <TextArea 
      cols={colsInput} 
      rows={rowsInput}
      onChange={(e) => setInput(e.target.value)}
      value={input}
      />
      {
        incorrectInput !== '' 
        &&
        <ErrorLabel>{incorrectInput}</ErrorLabel>
      }

      <ButtonsContainer>
        <Button onClick={JSONToCSV}>to CSV</Button>
        <Button onClick={toJSON}>to JSON</Button>
        <Button onClick={clean}>Clear</Button>
      </ButtonsContainer>
      <TextArea 
      cols={colsOutput} 
      rows={rowsOutput}
      value={output}
      />
    </MainContainer>
  );
}

export default Home;
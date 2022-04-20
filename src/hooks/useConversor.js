import { useState } from 'react'

export const useConversor = () => {

    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [incorrectInput, setIncorrectInput] = useState('');

    //text area input and output rows and columns
    const defaultRows = 10;
    const defaultColumns = 75;
    const [rowsInput] = useState(defaultRows);
    const [colsInput] = useState(defaultColumns);
    const [rowsOutput, setRowsOutput] = useState(defaultRows);
    const [colsOutput] = useState(defaultColumns);

    const setRowsSize = (size, setRow) =>{
        if (size < 10) {
            setRow(10)
        } else {
            setRow(size +1)
        }
    }

    const JSONToCSV = () =>{
        if (input !== '') {
            const formattedText = analyze(input);
            const formattedCSV = analyzeContent(formattedText);
            setRowsSize(formattedCSV.split("\n").length, setRowsOutput);
            setOutput(formattedCSV);
        } else {
            setIncorrectInput('The text above is empty. Please enter a valid JSON input.');
        }
    };
  
    const analyze = (input) =>{
        try {
            let formattedInput = JSON.parse(input);
            formattedInput = JSON.stringify(formattedInput, null, 2);
            setIncorrectInput('');
            return formattedInput;
        } catch (error) {
            setIncorrectInput('The JSON is not correct. Something is missing or there is a miss input');
            return input;
        }
    };

    const analyzeContent = (text) =>{
        try {
            let input = JSON.parse(text);
            const keys = Object.keys(input[0]);
            const areAllEqual = input.every( inputKeys =>  arrayEquals(Object.keys(inputKeys), keys));
            if (areAllEqual) {
                setIncorrectInput('');
                const JSONToCSV = convertToCSV(input);
                return JSONToCSV;
            } else {
                setIncorrectInput('not all keys in this JSON are equal. Please verify all keys are the some to make convert from JSON to CSV');
                return '';
            }
        } catch (error) {
            setIncorrectInput('Something went wrong.');
            return '';
        }
    };

    const arrayEquals = (a, b) => {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    };
    
    const convertToCSV = (obj) =>{
        const keys = Object.keys(obj[0]);
        let CSV = appendKeysAndValues(keys);
        obj.forEach( val => {
            CSV += appendKeysAndValues(Object.values(val));
        })
        
        return CSV;
    };
    
    const appendKeysAndValues = (items) =>{
        let concatString = '';
        for (let index = 0; index < items.length; index++) {
            if (index !== items.length - 1) {
                concatString += items[index] + ",";
            }else{
                concatString += items[index] + "\n";
            }
        }
        return concatString;
    }

    const toJSON = () =>{
        if (input !== '') {
            const formattedJSON = analyze(input);
            setInput(formattedJSON);
        } else {
            setIncorrectInput('The text above is empty. Please enter a valid JSON input.');
        }
    }
    
    const clean = () =>{
        setInput('');
        setOutput('');
    }

  return {
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
        clean
  }
}

export default useConversor;

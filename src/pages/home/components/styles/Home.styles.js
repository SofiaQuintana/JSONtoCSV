import styled from "styled-components";

export const MainContainer = styled.main`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    gap: 20px;
`

export const Button = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 25px;
    background: rgb(58 64 136);
    color: rgb(255 255 255);
    font-size: 1.1em;
    padding: 12px 60px;
    margin-right: 50px;
    margin-bottom: 20px;
    box-shadow: 3px 2px 5px rgb(0 0 0 / 56%);
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly
`

export const ErrorLabel = styled.label`
    color: red;
`

export const TextArea = styled.textarea`
    width: 100%;
    padding: 2% 7px;
	margin-top: 3%;
	margin-bottom: 3%;
    border: rgb(80 190 188 / 33%) 3.5px solid;
    border-radius: 15px;
    box-shadow: 2px 2px 3px rgb(80 190 188 / 33%);
`
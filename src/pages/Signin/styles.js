import styled from 'styled-components';

export const Container = styled.section`
  form {
    display: flex;
    width: 100%;
    max-width: 430px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 452px;
    margin: 7% auto;
    border: 1px solid #4f4f4f;
    background-color: rgba(120, 120, 150, 0.5);
    box-shadow: 0px 0px 5px black;
    @media (max-width: 600px) 
      {
        border: none;
        background: none;
        box-shadow: none;
        
      }

    img {
      margin-bottom: 30px;
    }
    .MuiFormControl-root {
      border: 10;
      margin: 5px;
      display: inline-flex;
      padding: 0;
      position: relative;
      width: 80%;
      }

    h1 {
      margin-bottom: 10px;
      font-size: 25px;
      color: #333;
      width: 100%;
      max-width: 350px;
      text-align: center;
      text-transform: uppercase;
    }
    input {
      padding: 10px;
      margin-top: 10px;
      width: 100%;
      max-width: 350px;
    }

    .eye {
      position: absolute;
      top: 10;
      right: 10;
      margin-top: 66px;
      margin-left: 96px;
      cursor: pointer;
      transition: 0.2s ease-out;
    }
    .eye:hover {
      opacity: 0.5;
    }
    .button {
      width: 70%;
      max-width: 350px;
      margin-top: 20px;
      -webkit-transition: 0.2s;
      transition: 0.2s;
      color: #000000;
      background: #808080	

    }
    h3 {
        margin-top: 5px;
    }

    .link:hover {
        text-decoration: underline;
    }

    }
    button:hover {
      filter: brightness(90%);
    }
    .link svg {
      margin-right: 8px;
      margin-top: 5px;
      align-items: center;
    }
  }

`;

// background-image: url(https://www.dicasdemulher.com.br/wp-content/uploads/2012/01/diferentes-maneiras-de-ser-solidario.jpg)

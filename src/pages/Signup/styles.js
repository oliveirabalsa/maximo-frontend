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
    box-shadow: 0px 0px 10px black;

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
      border: 0;
      margin: 4;
      display: inline-flex;
      padding: 0;
      position: relative;
      width: 80%;
      }

    h1 {
      margin-bottom: 10px;
      font-size: 22px;
      color: #333;
      width: 100%;
      max-width: 350px;
      text-align: center;
      text-transform: uppercase;
    }
    input {
      padding: 10px;
      margin-top: 5px;
      width: 100%;
      max-width: 350px;
    }
    .eye {
      position: absolute;
      top: 10;
      right: 10;
      margin-top: 90px;
      margin-left: 96px;
      cursor: pointer;
      transition: 0.2s ease-out;
    }
    .eye:hover {
      opacity: 0.5;
    }
    button {
      width: 80%;
      max-width: 350px;
      margin-top: 20px;
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

    button:hover {
      filter: brightness(90%);
    }
    .link svg {
      margin-right: 8px;
      margin-top: 5px;
      align-items: center;
    }
  }
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    background: url('https://live.mrf.io/statics/i/ps/amenteemaravilhosa.com.br/wp-content/uploads/2018/04/como-ajudar-a-um-idoso-que-esta-triste.jpg');
    background-size: 100% 100%;
    background-position: center;
    opacity: 1.0;
`;

// background-image: url(https://www.dicasdemulher.com.br/wp-content/uploads/2012/01/diferentes-maneiras-de-ser-solidario.jpg)

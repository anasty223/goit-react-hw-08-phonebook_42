import styled from "styled-components";

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  margin: 0;

  &:input:focus {
    background: #fff;
  }

  &input:hover {
    background: rgba(148, 175, 101, 1);
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.3);
  }
`;

export const Span = styled.span`
  display: block;

  padding: 2px 5px;
  color: #666;
`;

export const Label = styled.label`
 
    color: #999;
    font-size: 16px;
    display: inline-block;
    padding: 4px 10px;
    font-weight: 400;
    background-color: rgba(255,255,255,0);
    // @include transition(color .3s, top .3s, background-color .8s);
    
	}
`;
export const ButtonEnter = styled.button`
  border-radius: 4px;
  padding: 3px 24px;
  background-color: rgba(148, 186, 101, 0.7);
  color: grey;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1.6em;
  margin: 2em 0 0;
  outline: none;
  // padding: 0.8em 0;
  text-shadow: 0 1px #68b25b;
`;
export const Form = styled.form`

  background: #fff;
  padding: 4em 4em 2em;
  max-width: 400px;
  margin: 50px auto 0;
  box-shadow: 0 0 1em #222;
  border-radius: 2px;
  h2 {
    margin:0 0 50px 0;
    padding:10px;
    text-align:center;
    font-size:30px;
    // color:darken(#e5e5e5, 50%);
    // // border-bottom:solid 1px #e5e5e5;
`;

export const P = styled.p`
  margin: 0 0 3em 0;
  position: relative;
`;

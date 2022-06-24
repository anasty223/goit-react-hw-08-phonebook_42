import { useState } from "react";
import {
  Form,
  Label,
  Input,
  ButtonEnter,
  Span,
  P,
} from "../styles/LoginViews.styles";

export default function RegisterView() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "login":
        return setLogin(value);
      case "password":
        return setPassword(value);
      case "name":
        return setName(value);
      default:
        return;
    }
  };

  return (
    <Form>
      <h2>Sign Up</h2>

      <P>
        <Label htmlFor="name" className="floatLabel">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="name"
          value={name}
          onChange={handleChange}
        />
      </P>
      <P>
        <Label htmlFor="login" className="floatLabel">
          Email
        </Label>
        <Input
          id="login"
          name="login"
          type="login"
          value={login}
          onChange={handleChange}
        />
      </P>

      <P>
        <Label htmlFor="password" className="floatLabel">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <Span>Enter a password longer than 8 characters</Span>
      </P>

      <P>
        <ButtonEnter type="submit">Create My Account</ButtonEnter>
      </P>
    </Form>
  );
}

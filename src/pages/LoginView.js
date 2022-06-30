import { useState } from "react";
import { logIn } from "../redux/auth/auth-operation";
import { useDispatch } from "react-redux";
import {
  Form,
  Label,
  Input,
  ButtonEnter,
  Span,
  P,
} from "../styles/LoginViews.styles";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <P>
          <Label htmlFor="email" className="floatLabel">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
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
          <ButtonEnter type="submit">Enter</ButtonEnter>
        </P>
      </Form>
    </>
  );
}

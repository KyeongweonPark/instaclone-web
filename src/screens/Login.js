import styled from "styled-components";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "./routes";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "./BottomBox";
// import { darkModeVar, isLoggedInVar } from "../apollo";


const FasebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Login = () => {
  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log In" />
        </form>
        <Separator />
        <FasebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          <span>Log in with Facebook</span>
        </FasebookLogin>
      </FormBox>
      <BottomBox cta="Don't have an account?" link={routes.signUp} linkText="Sign Up" />
    </AuthLayout>
  );
};
export default Login;

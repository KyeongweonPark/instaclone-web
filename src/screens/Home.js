import {isLoggedInVar} from "../apollo";

const Home = () => (
  <div>
    <h1>My Love</h1>
    <button onClick={() => isLoggedInVar(false)}>Log out now!</button>
  </div>
);
export default Home;

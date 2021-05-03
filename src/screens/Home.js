import {logUserOut} from "../apollo";

const Home = () => (
  <div>
    <h1>Welcome we did it</h1>
    <button onClick={() => logUserOut()}>Log out now!</button>
  </div>
);
export default Home;

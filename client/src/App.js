import Callback from "./components/Callback";
import { ContextConsumer } from "./components/ContextReducer";

const App = () => {
  const { state, dispatch } = ContextConsumer();
 
  return (
    <div>
      <h2>This is applciation</h2>
     
     <Callback/>
    </div>
  );
};
export default App;

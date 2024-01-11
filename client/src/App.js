import Callback from "./components/Callback";
import { ContextConsumer } from "./components/ContextReducer";
import Memo from "./components/Memo";

const App = () => {
  const { state, dispatch } = ContextConsumer();
 
  return (
    <div>
      <h2>This is applciation</h2>
     
     <Callback/>
     <Memo/>
    </div>
  );
};
export default App;

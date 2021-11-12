import { info } from './api/Info';
import { AccountInfo } from './components/AccountInfo';

function App() {
  return (
    <AccountInfo info={info}/>
  );
}

export default App;

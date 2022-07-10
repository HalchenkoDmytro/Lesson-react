//import './App.css';
import './styles/main.scss';
import InputText from './component/Input';
import ButtonSearch from './component/Button';
import List from './component/List';
//import Card from './component/Card';

function App() {
  return (
      <div className="App">
        <h1 className='title'>Search Image in Pexels.com</h1>
        <InputText />
        <ButtonSearch />
        <List />
        {/* <Card /> */}

      </div>
  );
}

export default App;

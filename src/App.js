import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import StoreNavigation from './components/storeNavigation/storeNavigation';

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <StoreNavigation></StoreNavigation>
    </div>
  );
}

export default App;

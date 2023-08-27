import './App.css';
import { Artists } from './layouts/artists/Artists';
import { Community } from './layouts/community/Community';
import { Header } from './layouts/header/Header';
import { Main } from './layouts/main/Main';
import { Market } from './layouts/market/Market';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Market/>
            <Community/>
            <Artists/>
        </div>
    );
}

export default App;


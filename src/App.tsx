import './App.css';
import { Artists } from './layouts/artists/Artists';
import { Collections } from './layouts/collections/Collections';
import { Community } from './layouts/community/Community';
import { Footer } from './layouts/footer/Footer';
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
            <Collections/>
            <Footer/>
        </div>
    );
}


export default App;


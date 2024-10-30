import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoCards from './components/InfoCards';
import LocationList from './components/LocationList';

function App() {
  return (
    <div className="App">
        <Header />
        <InfoCards />
        <h1 id="countriesTag">Countries with Express Food</h1>
        <LocationList />
        <Footer />
    </div>
  );
}

export default App;

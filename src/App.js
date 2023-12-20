import logo from './logo.svg';
import "./assets/styles/style.css"
import Header from './components/Header';
import Banner from './components/Banner';
import DownloadApp from './components/DownloadApp';
import Products from './components/Products';
import Merchants from './components/Merchants';
import Benefits from './components/Benefits';
import Promotions from './components/Promotions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <DownloadApp />
      <Products />
      <Merchants />
      <Benefits />
      <Promotions />
      <Footer />
    </div>
  );
}

export default App;

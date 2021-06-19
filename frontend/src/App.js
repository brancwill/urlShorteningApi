import './styles/styles.css'
import Navigation from './Navigation'
import LinkShortener from './components/LinkShortener'
import GetStarted from './GetStarted';
import About from './About';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
      <GetStarted />
      <LinkShortener />
      <About />
      <Footer />
    </div>
  );
}

export default App;

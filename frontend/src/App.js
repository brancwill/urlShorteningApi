import './styles/styles.css'
import Navigation from './Navigation'
import GetStarted from './GetStarted';
import About from './About';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
      <GetStarted />
      <About />
      <Footer />
    </div>
  );
}

export default App;

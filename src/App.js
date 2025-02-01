import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar';

// const Home = () => <h2 className="text-center mt-10">Home Page</h2>;
// const Product = () => <h2 className="text-center mt-10">Product Page</h2>;
// const Client = () => <h2 className="text-center mt-10">Client Page</h2>;
// const Contacts = () => <h2 className="text-center mt-10">Contacts Page</h2>;
// const About = () => <h2 className="text-center mt-10">About Page</h2>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/client" element={<Client />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
      </Router>

      </header>
    </div>
  );
}

export default App;

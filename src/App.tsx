import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Connect from './components/Connect';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen max-w-full overflow-x-hidden font-quicksand text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default App;

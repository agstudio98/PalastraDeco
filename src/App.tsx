import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/home/Home'
import Catalog from './sections/catalog/Catalog'
import Soporte from './sections/soporte/Soporte'
import './App.css'
import './index.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'catalog':
        return <Catalog />;
      case 'soporte':
        return <Soporte />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="main-content">
        {renderSection()}
      </main>
      <Footer onSectionChange={setCurrentSection} />
    </div>
  );
}

export default App

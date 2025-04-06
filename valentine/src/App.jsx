import { useState } from 'react'
import videoBg from './assets/Hearts.mp4'
import FirstPage from './components/FirstPage'
import ImagePage from './components/ImagePage'

function App() {
  const [showFirstPage, setShowFirstPage] = useState(true); // Controla se a primeira página é exibida

  const handleSimClick = () => {
    setShowFirstPage(false); // Ao clicar "Sim", oculta a FirstPage
  };

  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted></video>
      {showFirstPage ? (
        <FirstPage onSimClick={handleSimClick} />
      ) : (
        <ImagePage />
      )}
    </div>
  );
}

export default App;

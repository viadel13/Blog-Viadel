import { Toaster } from 'react-hot-toast';
import Accueil from "../Accueil/Index";



function App() {
  return (
    <div>
      <Accueil />
      <Toaster 
        toastOptions={{
          className: '',
          style: {
            padding: '5px',
            color: '#713200',
          },
        }}
      />
    </div>
  );
}

export default App;

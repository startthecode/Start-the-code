import './App.css';
import { UpdateTitle } from './hooks/UpdateTitle';
import { Header,Footer } from './components';
import { AllRoutes } from './routes/AllRoutes';

function App() {
UpdateTitle('Home page')

  return (
<>
<Header />
<AllRoutes/>
<Footer />

</>
  )
}

export default App;

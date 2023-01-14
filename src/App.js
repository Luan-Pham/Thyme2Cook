import { Box } from '@mui/system';
import ResponsiveAppBar from './components/AppBar';
import Searchbar from './components/Search';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Searchbar />
        <Home />
        <Pages />
      </BrowserRouter>
    </Box>
  );
}

export default App;

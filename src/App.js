import { Box } from '@mui/system';
import ResponsiveAppBar from './components/AppBar';
import Searchbar from './components/Search';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/material';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Container>
          <Searchbar />
          <Pages />
        </Container>
      </BrowserRouter>
    </Box>
  );
}

export default App;

import { Box } from '@mui/system';
import ResponsiveAppBar from './components/AppBar';
import Pages from './pages/Pages';

function App() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Pages />
    </Box>
  );
}

export default App;

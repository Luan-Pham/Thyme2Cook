import { Box } from '@mui/system';
import ResponsiveAppBar from './components/AppBar';
import Searchbar from './components/Search';
import Directions from './components/Directions';
import Ingredients from './components/Ingredients';
import { Stack } from '@mui/material';

function App() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Searchbar />
      <Stack direction="row">
        <Directions />
        <Ingredients />
      </Stack>
    </Box>
  );
}

export default App;

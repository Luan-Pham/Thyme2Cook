import { Box } from '@mui/material';

function Searchbar() {

  const RecipeContext = React.createContext({
    ingredients: [],
    addIngredient: ()
  })
  return (
    <Box
      sx={{
        height: 300,
        width: '100%',
        bgcolor: 'black',
      }}
    >
      Search bar here
    </Box>
  );
}

export default Searchbar;

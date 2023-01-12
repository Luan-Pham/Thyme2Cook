import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  styled,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  Stack,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Random() {
  const [random, setRandom] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    getRandom();
  }, []);

  const limit = 10;
  const key = process.env.REACT_APP_SPOON;

  const getRandom = async () => {
    const check = localStorage.getItem('random');
    if (check) {
      setRandom(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=${limit}`
      );
      const data = await api.json();
      localStorage.setItem('random', JSON.stringify(data.recipes));
      console.log(data);
      setRandom(data.recipes);
    }
  };
  return (
    <Stack
      sx={{
        display: 'inline-flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {random.map((recipe) => {
        return (
          <Card sx={{ maxWidth: 400, margin: 2 }} key={recipe.id}>
            <CardHeader title={recipe.title} />
            <CardMedia
              component="img"
              height="194"
              image={recipe.image}
              alt={recipe.title}
            />
            <CardActions disableSpacing>
              <IconButton aria-label="Summary">
                <ExpandMoreIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Instructions:</Typography>
                <Typography
                  paragraph
                  dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                ></Typography>
              </CardContent>
            </Collapse>
            {/* <CardContent>
              <Typography variant="body2" color="text.secondary">
                {recipe.summary.replace(/(<([^>]+)>)/gi, '')}
              </Typography>
            </CardContent> */}
          </Card>
        );
      })}
    </Stack>
  );
}

export default Random;

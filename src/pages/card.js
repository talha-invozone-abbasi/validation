import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

export const Cardd = ({ post }) => {
  const { name, id, username, address } = post;
  const navigate = useNavigate();
  console.log(post);
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='140'
          image={`https://picsum.photos/200/300?random=${id}`}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {address?.city}
            {username}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button onClick={() => navigate(`/${id}`)} size='small'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

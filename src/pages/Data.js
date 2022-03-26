import React from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Data = ({ data }) => {
  const id = useParams().id;
  const post = data && data.filter((e) => e.id == id);

  return (
    <>
      {post && (
        <Card sx={{ maxWidth: '500px' }}>
          <CardMedia
            component='img'
            height='500px'
            image={`https://picsum.photos/200/300?random=${post[0]?.id}`}
            alt={post[0]?.name}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {post[0]?.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {post[0]?.address?.city}
              {post[0]?.username}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Data;

import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import useStyles from './style';

const APage = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.pageImage || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
  
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)} ><MoreHorizIcon fontSize="default" /></Button>
      </div>
      
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.volume}</Typography>
      
    </Card>
  );
};

export default APage;

import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector, Provider } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createPages , updatePages } from '../../actions/anecdote';

const AnecdoteForm = ({ currentId, setCurrentId }) => {
  const [PageData, setPageData] = useState({ volume: '', issue: '',tags: '', pageImage: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPageData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPageData({ volume: '',issue: '',tags: '', pageImage: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPages(PageData));
      clear();
    }
     else {
      dispatch(updatePages(currentId, PageData));
      clear();
    }
  };

  return (
    <div>
      <br/>
      <br/>
    <Paper className={classes.paper}>
      
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        {/* <Typography variant="h6">{currentId ? `Editing "${post.volume}"` : 'Add Page Post'}</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={PageData.creator} onChange={(e) => setPageData({ ...PageData, creator: e.target.value })} />
        <TextField name="volume" variant="outlined" label="Title" fullWidth value={PageData.volume} onChange={(e) => setPageData({ ...PageData, volume: e.target.value })} />
        <TextField name="caption" variant="outlined" label="Caption" fullWidth multiline rows={4} value={PageData.caption} onChange={(e) => setPageData({ ...PageData, caption: e.target.value })} />
        <TextField name="issue" variant="outlined" label="Writer" fullWidth value={PageData.issue} onChange={(e) => setPageData({ ...PageData, issue: e.target.value })} />
        <TextField name="designer" variant="outlined" label="Designer" fullWidth value={PageData.designer} onChange={(e) => setPageData({ ...PageData, designer: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={PageData.tags} onChange={(e) => setPageData({ ...PageData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPageData({ ...PageData, pageImage: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
     
        <TextField name="volume" variant="outlined" label="Volume" fullWidth value={PageData.volume} onChange={(e) => setPageData({ ...PageData, volume: e.target.value })} />
        <TextField name="issue" variant="outlined" label="Issue" fullWidth value={PageData.issue} onChange={(e) => setPageData({ ...PageData, issue: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={true} onDone={({ base64 }) => setPageData({ ...PageData, pageImage: base64 })} /></div>
        <TextField name="tags" variant="outlined" label="Content (coma separated)" fullWidth value={PageData.tags} onChange={(e) => setPageData({ ...PageData, tags: e.target.value.split(',') })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
     
      </form>
    </Paper>
    </div>
    
  );
};

export default AnecdoteForm;

import React, {useState, useEffect} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPages } from "../../actions/anecdote"
import useStyles from './styles';
import Modal from "./PopupWindow/Modal";
import APage from './Anecdote';

const AnecdoteView = ({ setCurrentId }) => {
 
  const pages = useSelector((state) => state.newsletters);
  const classes = useStyles();
  const [temp, setTemp] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPages());
  }, [setCurrentId, dispatch]);

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  
  return (
    // 
    // !pages.length ? <CircularProgress /> : (
    <div className="projectsview">
      <div ><h1> Hiiiiii </h1></div>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {pages.map((page) => (
          <Grid key={page._id} item xs={12} sm={6} md={4}>
            <div className="singleProject" onClick={() => { setModalOpen(true); setName(page.volume); setImg(page.pageImage);  setDescription(page.issue); }}>
              <APage page={page} setCurrentId={setCurrentId} />
          </div>
          </Grid>
        ))}
      </Grid>
      {/* {modalOpen && <Modal setOpenModal={setModalOpen} name={name} image={img} caption={description} />} */}
     </div>
    ) 
  // );
};

export default AnecdoteView;

import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import API from '../../utils/API';
import { BooksContext } from '../../Context/BooksState';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar() {
  
  const { books, setBooks } = useContext(BooksContext);
  
  const classes = useStyles();

  const handleFormSubmit = async e => {
    e.preventDefault();
    const data = {
      data: e.target.input.value
    }
    const results = await API.getBooks(data);
    setBooks(results);
    console.log(books);
  }

  return (
    <Paper component="form" onSubmit={handleFormSubmit} className={classes.root}>      
      <InputBase
        className={classes.input}
        placeholder="Search Google Books"
        inputProps={{ 'aria-label': 'search google books' }}
        name="input"/>
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>      
    </Paper>
  );
}
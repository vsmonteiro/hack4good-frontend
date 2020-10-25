import { TextField, Select, FormControl } from "@material-ui/core";
import Materials from '../Materials'
import InputLabel from '@material-ui/core/InputLabel';
import GetCatadores from '../GetCatadores'
// import iconTest from '../../images/iconTest.png'
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

import React, { useEffect, useState } from "react";
import "./index.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1c7c4a'
    },
  },
});

const useStyles = makeStyles((theme) => ({
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 120,
  // },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SearchBar() {
  const [region, setRegion] = useState("");
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [materials, setMaterials] = useState([])
  const [users, setUsers] = useState([])

  function handleChange(e) {
    setRegion(e.target.value);
    handleSearch()
  }

  function getMaterialsValue(materialsSelected){
    setMaterials(materialsSelected)
    //search
  }

  useEffect(() => {
    handleSearch()
  }, [materials])

  async function handleSearch() {
    const response = await fetch('http://localhost:3333/search', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        descricoes: materials
      })
    })

    const data = await response.json()
    if(data){
      setUsers(data)
    }
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <div className='search-container'>
      <form>

      
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='searchbarInput'
          id='outlined-basic'
          label='Search..'
          variant='outlined'
          color='primary'
        />
       

<FormControl variant="outlined" className='formControl'>
        <InputLabel htmlFor="outlined-city-native-simple">City</InputLabel>
        <Select
          native
          value={region.setRegion}
          onChange={handleChange}
          label="City"
          inputProps={{
            name: 'City',
            id: 'outlined-city-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Berlin</option>
          <option value={20}>Rio de Janeiro</option>
          <option value={30}>Denver</option>
          <option value={40}>Lisboa</option>
          <option value={50}>Moscow</option>
          <option value={60}>Nairobi</option>
        </Select>
      </FormControl>
      </form>
    </div>
    <Materials getMaterialsValue={getMaterialsValue} />
    {users.length >= 1 && <GetCatadores users={users} />}
    </ThemeProvider>
    </>
  );
}









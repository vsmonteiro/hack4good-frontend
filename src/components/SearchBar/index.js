import { TextField, Select, MenuItem, FormControl } from "@material-ui/core";
import React, { useState } from "react";
import "./index.css";

export default function SearchBar() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setRegion(e.target.value);
  }

  return (
    <div className='search-container'>
      <form>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='searchbarInput'
          id='outlined-basic'
          label='Pesquise aqui'
          variant='outlined'
        />
        <FormControl variant='outlined'>
          <Select className='regionSelect' value={region} onChange={handleChange} displayEmpty>
            <MenuItem value=''>
              <em> Chongqing </em>
            </MenuItem>
            <MenuItem value={10}>New york</MenuItem>
            <MenuItem value={20}>Fortaleza</MenuItem>
            <MenuItem value={30}>São leopoldo</MenuItem>
            <MenuItem value={40}>Abu dhabi</MenuItem>
            <MenuItem value={50}>Sidney</MenuItem>
            <MenuItem value={50}>Xing ling</MenuItem>
          </Select>
        </FormControl>
      </form>
    </div>
  );
}

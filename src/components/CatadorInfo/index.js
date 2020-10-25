import React, { useState } from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  DialogContent,
  Grid,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Container,
  Typography,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import "./styles.css";

export default function CatadorInfo({
  openDialog,
  setOpenDialog,
  description,
  setDescription,
  phone,
  setPhone,
  materials,
  setMaterials,
  handleChangeMultiple,
  materialsSelect,
}) {
  const [teste, setTeste] = useState([])
  function handleClose() {
    setOpenDialog(false);
  }

  return (
    <div className='info-container'>
      <Container maxWidth='sm'>
        <Typography
          component='div'
          style={{
            backgroundColor: "#FFF",
            height: "90vh",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: "16px",
            padding: "5px",
          }}
        ></Typography>
        <Dialog className='catador-dialog' fullWidth maxWidth={"md"} open={openDialog} onClose={handleClose}>
          <AppBar position='static' style={{ backgroundColor: "#00503c" }}>
            <Toolbar>
              <h3> Collector info </h3>
              <IconButton onClick={handleClose}>
                <CloseIcon aria-label='close' className='close-btn' />
              </IconButton>
            </Toolbar>
          </AppBar>

          <DialogContent>
            <Grid container>
              <Grid item xs={12} md={6}>
                <form className='info-form'>
                  <FormControl variant='outlined'>
                    {/* <InputLabel>Materials</InputLabel> */}
                    <Select
                      required
                      multiple
                      className='materials'
                      placeholder='Materials'
                      value={materials}
                      onChange={(e) => handleChangeMultiple(e)}
                    >
                      {materialsSelect.map((material) => (
                        <MenuItem placeholder='Materials' key={material.id} value={material.name}>
                          {material.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl>
                    <TextField
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      multiline
                      variant='outlined'
                      color='primary'
                      label='Description'
                      id='description'
                    />
                  </FormControl>

                  <FormControl>
                    <TextField
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      variant='outlined'
                      color='primary'
                      label='Phone'
                      id='phone'
                      required
                    />
                  </FormControl>
                </form>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
}
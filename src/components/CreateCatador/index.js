import React, { useState } from "react";
import "./styles.css";
import { Checkbox, FormControl, Button, Container, Typography, TextField } from "@material-ui/core";
import CatadorInfo from "../CatadorInfo/index";
import { useHistory } from "react-router-dom";

import { ThemeProvider, makeStyles, createMuiTheme } from "@material-ui/core/styles";

import Modal from "react-bootstrap/Modal";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1c7c4a",
    },
  },
});

export default function CreateCatador() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");
  const [terms, setTerms] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  // const [latitude, setLatitude] = useState();
  // const [longitude, setLongitude] = useState();
  const [collector, setCollector] = useState(false);
  const [openCollectorDialog, setOpenCollectorDialog] = useState(false);
  const [password, setPassword] = useState("");
  const [image, setImage] = useState();
  const [materials, setMaterials] = useState([]);
  const [imagePreview, setImagePreview] = useState();
  const [materialsIds, setMaterialsIds] = useState([]);
  const materialSelect = [
    {
      id: 1,
      name: "Metal",
    },
    {
      id: 2,
      name: "Paper",
    },
    {
      id: 3,
      name: "Plastic",
    },
    {
      id: 4,
      name: "Cans",
    },
    {
      id: 5,
      name: "Electronics",
    },
    {
      id: 6,
      name: "Furniture",
    },
    {
      id: 7,
      name: "Battery",
    },
    {
      id: 8,
      name: "Electronics",
    },
    {
      id: 9,
      name: "Glass",
    },
    {
      id: 10,
      name: "Kitchen Oil",
    },
    {
      id: 11,
      name: "Organic",
    },
  ];

  const handleChangeMultiple = (event) => {
    const newValue = event.target.value;
    setMaterials(newValue);

    const materialsFound = materials.map((mat) => {
      return materialSelect.find((m) => m.name === mat).id;
    });

    setMaterialsIds(materialsFound);
  };

  const handleTermsCheckbox = () => {
    let state = !terms;
    setTerms(state);
  };

  function handleCollectorCheckbox(e) {
    setCollector(!collector);
    setOpenCollectorDialog(!collector);
  }

  function handleSelectFile(e) {
    if (!e.target.files) {
      return;
    }

    const files = Array.from(e.target.files);

    const imagesPreview = files.map((image) => {
      setImage(image);
      return URL.createObjectURL(image);
    });

    setImagePreview(imagesPreview);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("username", user);
    data.append("senha", password);
    data.append("nome", name);
    data.append("isCatador", collector);
    data.append("termoDeServico", terms);
    data.append("telefone", phone);
    data.append("email", email);
    data.append("imagem", image);
    data.append("descricao", description);

    materialsIds.map((id) => {
      data.append(`categorias[${id}][id]`, id);
    });

    const response = await fetch("http://localhost:3333/usuario", {
      method: "POST",
      body: data,
    });

    const resData = await response.json();

    if (resData?.usuario) {
      localStorage.setItem("id", resData.usuario.id);
      history.push("/", resData.usuario);
    }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseAccept = () => {
    setShow(false);
    setTerms(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='form-container'>
        <Container maxWidth='sm'>
          <Typography
            component='div'
            style={{
              backgroundColor: "#FFF",
              height: "90vh",
              display: "flex",
              marginTop: "50px",
              alignItems: "flex-start",
              justifyContent: "center",
              borderRadius: "16px",
              padding: "5px",
              overflowY: "auto",
            }}
          >
            <form onSubmit={handleSubmit}>
              <h2>Register </h2>

              <FormControl>
                <TextField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant='outlined'
                  color='primary'
                  label='Name'
                  id='name'
                />
              </FormControl>

              <FormControl>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant='outlined'
                  color='primary'
                  label='Email adress'
                  id='email'
                />
              </FormControl>

              <FormControl>
                <TextField
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  variant='outlined'
                  color='primary'
                  label='Username'
                  id='name'
                />
              </FormControl>

              <FormControl>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant='outlined'
                  color='primary'
                  label='Password'
                  id='password'
                  type='password'
                />
              </FormControl>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  onChange={handleSelectFile}
                  accept='image/*'
                  style={{ display: "none" }}
                  id='contained-button-file'
                  type='file'
                />
                <label style={{ padding: 0, width: "100%" }} htmlFor='contained-button-file'>
                  <Button variant='contained' className='uploadButton' component='span'>
                    Upload your picture here
                  </Button>
                </label>
              </div>

              {imagePreview?.map((image, index) => (
                <img
                  style={{ width: "100%", height: "100px", objectFit: "cover", borderRadius: "20px" }}
                  src={image}
                  alt=''
                  key={index}
                />
              ))}
              <FormControl className='termsOfService'>
                <Checkbox
                  size='small'
                  checked={collector}
                  onClick={handleCollectorCheckbox}
                  color='primary'
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <p3> I am a collector </p3>
              </FormControl>

              {openCollectorDialog && (
                <CatadorInfo
                  openDialog={openCollectorDialog}
                  setOpenDialog={setOpenCollectorDialog}
                  phone={phone}
                  setPhone={setPhone}
                  description={description}
                  setDescription={setDescription}
                  materials={materials}
                  setMaterials={setMaterials}
                  materialsSelect={materialSelect}
                  handleChangeMultiple={handleChangeMultiple}
                />
              )}

              <FormControl className='termsOfService'>
                <Checkbox
                  size='small'
                  value={terms}
                  checked={terms}
                  onClick={handleTermsCheckbox}
                  color='primary'
                  inputProps={{ "aria-label": "primary checkbox" }}
                />

                <p3>
                  {" "}
                  I have read and agree to the{" "}
                  <span className='link-span' onClick={handleShow}>
                    {" "}
                    Terms of Service{" "}
                  </span>{" "}
                </p3>
              </FormControl>

              <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Terms of Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum."
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant='primary' onClick={handleCloseAccept}>
                    {" "}
                    Accept{" "}
                  </Button>
                </Modal.Footer>
              </Modal>

              <Button
                type='submit'
                variant='contained'
                style={{ backgroundColor: "#00503c", color: "#FFF", fontWeight: "bold" }}
              >
                Create profile
              </Button>
            </form>
          </Typography>
        </Container>

        {/* <Snackbar message={message} open={openSnackbar} severity={severity} /> */}
      </div>
    </ThemeProvider>
  );
}

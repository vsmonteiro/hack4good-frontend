import React from "react";
import { Grid, AppBar, Toolbar, Button, Avatar } from "@material-ui/core";
import "./styles.css";
import { Link } from "react-router-dom";
import game from "../../images/game.svg";
import Logo from "../../images/CollectoryHeader.png";

export default function Header({ title, user }) {
  console.log(user?.imagem)
  return (
    <Grid xs={12}>
      <AppBar style={{ background: "#00503c" }}>
        <Toolbar className='toolbar'>
          <div className='infoButtons'>
          <a href="/"><img src={Logo} alt="Collectory" id="logo"/></a>
            <Link to='/Objectives'>
              <Button className='abaInfoButton'> Our Goals </Button>
            </Link>

            <Link to='/EnvironmentalImpact'>
              <Button className='abaInfoButton'> Environmental Impact </Button>
            </Link>

            <Link to='/Partners'>
              <Button className='abaInfoButton'> Partners </Button>
            </Link>
          </div>
          {user ? (
            <div style={{ display: 'flex' }}>
              <img style={{width: '40px', height: '40px', cursor: 'pointer'}} src={game} alt='Points' />
              <span style={{ fontFamily: 'sans-serif', marginTop: '10px', marginLeft: '5px' }}> {user.pontos} points </span>
              <Avatar style={{ marginLeft: '30px' }} alt={user.nome} src={`http://localhost:3333/imagem/${user.imagem}`} />
            </div>
          ) : (
            <div>
              <Link to='/login'>
                <Button className='LoginButton'> Login </Button>
              </Link>

              <Link to='/catador'>
                <Button className='SignUpButton'> Sign Up </Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

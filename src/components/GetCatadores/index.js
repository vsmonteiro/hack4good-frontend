import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Divider } from "@material-ui/core";

export default function GetCatadores({ users }) {
  const test = users.map(user => {
    console.log(user.imagem)
    return user.categorias.map(cat => {
      return cat.descricao
    })
  })

  console.log(users)
  return (
    <div style={{ display: "flex", width: "72%", marginTop: '10px', justifyContent: "center", overflowY: 'visible' }}>
        <List style={{ width: "100%", maxWidth: "40%",  maxHeight: '50vh', overflowY: 'auto', overflowX: 'hidden' }}>
          <>
          {users.map((user) => (
          <ListItem style={{ display: 'flex', alignItems: 'flex-start', marginTop: '10px' }}>
            <ListItemAvatar>
              <Avatar
                style={{ width: "70px", height: "70px" }}
                alt={user.nome}
                src={`http://localhost:3333/imagem/${user.imagem}`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography style={{ fontWeight: "bold" }}>{`Name: ${user.nome}`}</Typography>}
              style={{ marginLeft: "15px" }}
              secondary={
                <React.Fragment>
                  <Typography style={{ fontWeight: "bold", fontSize: '15px' }}>{`Phone: ${user.telefone}`}</Typography>
                  <Typography style={{ fontWeight: "bold", fontSize: '15px' }}>{`Description: ${user.descricao}`}</Typography>
                  <Typography style={{ fontSize: '14px' }}>
                    I collect:
                    <span> {test.join(', ')} </span>
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          ))}
           <Divider variant='inset' component='li' />
          </>
        </List>
    </div>
  );
}

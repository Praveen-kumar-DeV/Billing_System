import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { styled } from "@mui/system";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
const apiUrl = "http://localhost:8000/api/order";

const price=[
  {
    "Plain_Dosa":40
  },
  {
    "Egg_Dosa":60
  },
  {
    "Special_Dosa":50
  },
  {
    "Dosa_Chicken":90
  },
  {
    "Pulao_Chicken_Curry":139
  },
  {
    "Pulao_Egg_Curry":99
  },
  {
    "Veg_Pulao":79
  },
  {
    "Water_Bottle":10
  },
  {
    "Punugulu":30
  },
  {
    "Mirchi_Bajji":25
  },
  {
    "Aloo_Bajji":20
  },
  {
    "Egg_Bajji":35
  },
  {
    "Soft_Drink":30
  },
];


const Orders = () => {
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const [Item, setItem] = useState('');
  const [Quantity, setQuantity] = useState('');

  const handleChangeItem = (event) => {
    setItem(event.target.value);
    
  };
  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleClick = async() => {
   if(Item&&Quantity){ 
    try {
      const data = {
        Item:Item,
        Quantity:Quantity,
        amount:(price.find((obj) => obj.hasOwnProperty(Item))?.[Item])*Quantity,
      };

      const response = await axios.post(apiUrl, data);
      console.log("Response:", response.data);

      setOpen(true);
      setItem('');
      setQuantity('');
    } catch (error) {
      console.error("Error sending request:", error);
    }}
    else{
      setError(true);
    }
   
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setError(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          p:3,
          margin:"0px,100px",
          alignItems:"center"
        }}
      >
        

        <div class="one">
  <h1>Billing</h1>
</div>
        

  <Box sx={{ minWidth: 400,maxWidth:400,alignItems:'center',display:'flex',flexDirection:'column',p:3,marginTop:"20px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}>
    <FormControl fullWidth sx={{display:'flex'}} margin="dense">
      <InputLabel id="Item">Item</InputLabel>
      <Select
      sx={{color:"black"}}
        labelId="Item"
        id="Item"
        value={Item}
        label="Item"
        defaultValue=""
        onChange={handleChangeItem}
      >
         
        <MenuItem value="Plain_Dosa">Plain Dosa</MenuItem>
        <MenuItem value="Egg_Dosa">Egg Dosa</MenuItem>
        <MenuItem value="Special_Dosa">Special Dosa</MenuItem>
        <MenuItem value="Dosa_Chicken">Dosa+Chicken</MenuItem>
        <MenuItem value="Pulao_Chicken_Curry">Pulao+Chicken Curry</MenuItem>
        <MenuItem value="Pulao_Egg_Curry">Pulao+Egg Curry</MenuItem>
        <MenuItem value="Veg_Pulao">Veg Pulao</MenuItem>
        <MenuItem value="Water_Bottle">Water Bottle</MenuItem>
        <MenuItem value="Punugulu">Punugulu</MenuItem>
        <MenuItem value="Mirchi_Bajji">Mirchi Bajji</MenuItem>
        <MenuItem value="Aloo_Bajji">Aloo Bajji</MenuItem>
        <MenuItem value="Egg_Bajji">Egg Bajji</MenuItem>
        <MenuItem value="Soft_Drink">Soft Drink</MenuItem>
      </Select>

    </FormControl>

    <FormControl fullWidth sx={{display:'flex'}} margin="dense"  >
    <InputLabel id="Quantity">Quantity</InputLabel>
      <Select
        labelId="Quantity"
        id="Quantity"
        value={Quantity}
        label="Quantity"
        defaultValue=""
        onChange={handleChangeQuantity}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>

      </FormControl>


    <>
          <Button onClick={handleClick} sx={{ bgcolor: "red", ":hover":{bgcolor: "green"} ,maxWidth:400,margin:"20px 0px 0px 0px"}}>
            Place Your Order
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={900}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Order Placed !
            </Alert>
          </Snackbar>
          <Snackbar
            open={error}
            autoHideDuration={900}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Select The Order !
            </Alert>
          </Snackbar>
        </>
  </Box>

       
      
      </Box>

      <Offset />
    </>
  );
};

export default Orders;



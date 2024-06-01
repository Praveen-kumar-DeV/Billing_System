import React from 'react';
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const apiUrl = "http://localhost:8000/api/orderlist";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));




  const MyBox = styled('div')({margin:'20px 10px 0px 10px'});


const History = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)



    const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl);
         
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
         
        }
      };

      useEffect(() => {
        setLoading(true);
        fetchData();
        setLoading(false);
      }, []);

    //   if(data){
    //   const totalAmount = data.reduce((acc, obj) => acc + obj.amount, 0);
     
    // }
    return (
      <React.Fragment>
      <MyBox>
      { loading ? (null)  :( <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Order ID</StyledTableCell>
                <StyledTableCell align="left">Plain Dosa</StyledTableCell>
                <StyledTableCell align="left">Egg Dosa</StyledTableCell>
                <StyledTableCell align="left">Special Dosa</StyledTableCell>
                <StyledTableCell align="left">Dosa+Chicken</StyledTableCell>
                <StyledTableCell align="left">Pulao+Chicken Curry</StyledTableCell>
                <StyledTableCell align="left">Pulao+Egg Curry</StyledTableCell>
                <StyledTableCell align="left">Veg Pulao</StyledTableCell>
                <StyledTableCell align="left">Water Bottle</StyledTableCell>
                <StyledTableCell align="left">Punugulu</StyledTableCell>
                <StyledTableCell align="left">Mirchi Bajji</StyledTableCell>
                <StyledTableCell align="left">Aloo Bajji</StyledTableCell>
                <StyledTableCell align="left">Egg Bajji</StyledTableCell>
                <StyledTableCell align="left">Soft Drink</StyledTableCell>
                

                <StyledTableCell align="right">Total&nbsp;(₹)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data==null?null:data.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    {row.order_Id}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.Plain_Dosa }</StyledTableCell>
                  <StyledTableCell align="left">{row.Egg_Dosa}</StyledTableCell>
                  <StyledTableCell align="left">{row.Special_Dosa}</StyledTableCell>
                  <StyledTableCell align="left">{row.Dosa_Chicken}</StyledTableCell>
                  <StyledTableCell align="left">{row.Pulao_Chicken_Curry }</StyledTableCell>
                  <StyledTableCell align="left">{row.Pulao_Egg_Curry}</StyledTableCell>
                  <StyledTableCell align="left">{row.Veg_Pulao}</StyledTableCell>
                  <StyledTableCell align="left">{row.Water_Bottle}</StyledTableCell>
                  <StyledTableCell align="left">{row.Punugulu }</StyledTableCell>
                  <StyledTableCell align="left">{row.Mirchi_Bajji}</StyledTableCell>
                  <StyledTableCell align="left">{row.Aloo_Bajji}</StyledTableCell>
                  <StyledTableCell align="left">{row.Egg_Bajji}</StyledTableCell>
                  <StyledTableCell align="left">{row.Soft_Drink}</StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)}
      </MyBox>

      </React.Fragment>
     
   
      );
}

export default History;






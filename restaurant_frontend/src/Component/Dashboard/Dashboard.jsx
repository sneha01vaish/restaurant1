import React from 'react'
import style from "./dashboard.module.css"
import { Grid, Card } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import image from "../Assets/WhatsApp Image 2024-08-17 at 09.02.55_2451e7de.jpg";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Link } from 'react-router-dom'
import OutboundIcon from '@mui/icons-material/Outbound';
import Line from './Line';
import { styled ,alpha} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GradeIcon from '@mui/icons-material/Grade';
import LogoutIcon from '@mui/icons-material/Logout';
import InputBase from '@mui/material/InputBase';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import Footer from '../Footer/Footer';

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

function createData(ordernum, name, table, quantity, price) {
  return { ordernum, name, table, quantity, price };
}

const rows = [

  createData(1, 'Ice cream sandwich', 2, 2, 500),
  createData(2, 'Pasta', 12, 1, 240),
  createData(3, 'Cupcake', 5, 3, 300),
  createData(4, 'Pizza', 6, 6, 1000),
];

const Dashboard = () => {
  const [data, setData] = React.useState(rows);

  const handleSave = (row) => {
    // TO DO: implement save logic here
    console.log('Save button clicked:', row);
  };

  const handleDelete = (row) => {
    // TO DO: implement delete logic here
    console.log('Delete button clicked:', row);
    const newData = data.filter((item) => item.name !== row.name);
    setData(newData);
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
  

  return (
    <div className={style.Dashboard}>
      <div className={style.part1}>
        <div className={style.img}>
          <img src={image} alt="" />
          <h1>NuaScan</h1>
        </div>
        <div className={style.list}>
          <h4><Link to={"/dashboard"} style={{ textDecoration: "none", color: "white", fontSize: "20px" }}>Dashboard</Link></h4>
          <h3><AutoStoriesIcon style={{ marginRight: "20px" }} /><Link to={'/menu'} style={{ textDecoration: "none", color: "white", fontSize: "20px" }}>Menu</Link></h3>
          <h3><GradeIcon /><Link to={'/order'} style={{ textDecoration: "none", color: "white", fontSize: "20px", marginLeft: "10px" }}>Order status</Link></h3>
          <h3><PersonPinCircleIcon /><Link to={'/staff'} style={{ textDecoration: "none", color: "white", fontSize: "20px", marginLeft: "10px" }}>Staff managment</Link></h3>
        </div>
        <div className={style.setting}>

          <SettingsApplicationsIcon style={{ height: "20px", width: "20px", marginLeft: "-30px" }} /><h3 style={{ marginLeft: "-50px" }}>Settings</h3>
          <h3>Log Out</h3><LogoutIcon style={{ height: "20px", width: "20px", marginLeft: "-50px" }} />
        </div>
      </div>

      <div className={style.part2}>
        <div className={style.nav}>
          <ol>
            <li><Link to={"/"} style={{textDecoration:"none",color:"rgb(58, 58, 58)"}}>Home</Link></li>
            <li><Link to={'/aboutus'} style={{textDecoration:"none",color:"rgb(58, 58, 58)"}}>About us</Link></li>
            <li><Link to={'/ourpartner'} style={{textDecoration:"none",color:"rgb(58, 58, 58)"}}>Our partner</Link></li>
            <li><Link to={'/portfolio'} style={{textDecoration:"none",color:"rgb(58, 58, 58)"}}>Portfolio</Link></li>
            <li><Link to={'/contactus'} style={{textDecoration:"none",color:"rgb(58, 58, 58)"}}>Contact us</Link></li>
          </ol>
        </div>
        <div className={style.section}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {/* <SearchIcon style={{ marginLeft: "20px", color: "grey" }} /> */}
          <div className={style.section1}>
            <div><Link to={"/notification"}><NotificationsActiveIcon style={{ color: "grey" }} /></Link></div>
            <div><Link to={"/profile"}><AccountBoxIcon style={{ color: "grey" }} /></Link></div>
          </div>
        </div>
        <Grid container direction="row" justifyContent="center" textAlign="center" alignItems="center" p={"20px"} className={style.Grid}>
          <Grid container lg={12} sm={12} direction="row" justifyContent="center" spacing={6} className={style.Grid1}>
            <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
              <Card style={{ height: "100%", width: "90%", padding: "10px", border: "1px solid grey", boxShadow: "0px 0px 5px grey", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <h1 style={{ fontSize: "20px", color: "rgb(74, 74, 74)", paddingTop: "20px" }}>Total menu</h1>
                <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "20px" }}>
                  <h3 style={{ color: "rgb(74, 74, 74)" }}>100</h3>
                  <OutboundIcon style={{ color: "green" }} />

                </div>
                <h3 style={{ color: "rgb(74, 74, 74)" }}>40%</h3>
              </Card>
            </Grid>
            <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
              <Card style={{ height: "100%", width: "90%", padding: "10px", border: "1px solid grey", boxShadow: "0px 0px 5px grey", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <h1 style={{ fontSize: "20px", color: "rgb(74, 74, 74)", paddingTop: "20px" }}>Total Order</h1>
                <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "20px" }}>
                  <h3 style={{ color: "rgb(74, 74, 74)" }}>100</h3>
                  <OutboundIcon style={{ color: "green" }} />

                </div>
                <h3 style={{ color: "rgb(74, 74, 74)" }}>40%</h3>
              </Card>
            </Grid>
            <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
              <Card style={{ height: "100%", width: "90%", padding: "10px", border: "1px solid grey", boxShadow: "0px 0px 5px grey", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <h1 style={{ fontSize: "20px", color: "rgb(74, 74, 74)", paddingTop: "20px" }}>Total revenue</h1>
                <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "20px" }}>
                  <h3 style={{ color: "rgb(74, 74, 74)" }}>100</h3>
                  <OutboundIcon style={{ color: "green" }} />

                </div>
                <h3 style={{ color: "rgb(74, 74, 74)" }}>40%</h3>
              </Card>
            </Grid>
            <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
              <Card style={{ height: "100%", width: "90%", padding: "10px", border: "1px solid grey", boxShadow: "0px 0px 5px grey", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <h1 style={{ fontSize: "20px", color: "rgb(74, 74, 74)", paddingTop: "20px" }}>Total Customer</h1>
                <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "20px" }}>
                  <h3 style={{ color: "rgb(74, 74, 74)" }}>100</h3>
                  <OutboundIcon style={{ color: "green" }} />
                </div>
                <h3 style={{ color: "rgb(74, 74, 74)" }}>40%</h3>

              </Card>
            </Grid>

          </Grid>
        </Grid>
        <Grid container paddingLeft={"50px"} paddingTop={"40px"} >
          <Line />

        </Grid>
        <div className={style.table}>
          <section>
            <div>
              <h1 colSpan={6} style={{ fontSize: "30px", height: "65px", width: "90%", border: "1px solid grey", borderRadius: "8px", backgroundColor: "rgba(199, 195, 195, 0.703)", boxShadow: "0px 0px 10px black", textAlign: "center", paddingTop: "15px" }}>Order list</h1>
            </div>


            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Order Number</StyledTableCell>
                    <StyledTableCell align="right">Order Name</StyledTableCell>
                    <StyledTableCell align="right">Table Number</StyledTableCell>
                    <StyledTableCell align="right">Quantity</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Order Satus</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.ordernum}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.name}</StyledTableCell>
                      <StyledTableCell align="right">{row.table}</StyledTableCell>
                      <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                      <StyledTableCell align="right">{row.price}</StyledTableCell>

                      <StyledTableCell align="right">
                        <Button onClick={() => handleSave(row)}>Save</Button>
                        <Button onClick={() => handleDelete(row)}>Delete</Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>


          </section>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
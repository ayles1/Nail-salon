import { Telegram, Instagram,} from "@mui/icons-material";
import {
    Typography,
    Grid,
    Paper,
    Table,
    
  } from "@mui/material";
import { Box } from "@mui/system";
import React from 'react'
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

const Header = () => {
    // backgroundColor:'#1562c0'
  return (
        <Grid container sx={{padding:'20px 0 20px 0', alignItems:'center'}}>
            <Grid item xs={1}>  
            <Paper sx={{backgroundColor:"red", borderRadius:"50%"}}>
            <Typography>Логотип</Typography>
            </Paper>  
            </Grid>
            <Grid item xs={9}>
                <Box sx={{display:'flex', flexDirection:'column', gap:'30px'}}>
            <Typography sx={{textAlign:'center'}}>Катя шоп нейлс 228</Typography>
            <Typography component="a" href="tel" sx={{textAlign:'center',fontWeight:'700'}}>
                +7 999 164 27 44
                </Typography>
                </Box>
            </Grid>
            <Grid item xs={1} sx={{marginTop:'5px'}}>
                <a href=""><Telegram/></a>
                <a href="https://instagram.com/kattriin_nails?igshid=YmMyMTA2M2Y=" target="_blank"><Instagram/></a>
            </Grid>
            <Grid item xs={1}> 
            <ThemeSwitch />
            </Grid>
        </Grid>
  )
}

export default Header
'use client'

import React from "react";
import Menu from "./components/Menu/Menu";
import { Box, Card, Stack } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import { useColorScheme, extendTheme } from '@mui/joy/styles';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { SmokingRooms } from "@mui/icons-material";

function ModeSwitcher() {
   const { mode, setMode } = useColorScheme();
   const [mounted, setMounted] = React.useState(false);
 
   React.useEffect(() => {
     setMounted(true);
   }, []);
 
   if (!mounted) {
     return null;
   }
   return (
     <Select
       variant="soft"
       value={mode}
       onChange={(event, newMode) => {
         setMode(newMode);
       }}
     >
       <Option value="system">System</Option>
       <Option value="light">Light</Option>
       <Option value="dark">Dark</Option>
     </Select>
   );
 }
 
 const theme = extendTheme({
   cssVarPrefix: 'mode-toggle'
   // colorSchemeSelector: '.demo_mode-toggle-%s',
 });

export default function Home() {
   return (
      <Box 
         sx={{
            width: '100%',
            minHeight: '100vh',
            maxHeight: 'fit-content'
         }}
      >
         <Menu />
         <Box
            sx={{
               width: '100%',
               minHeight: '80vh',
               maxHeight: 'fit-content',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <h2 className="text-3xl font-semibold text-center text-neutral-700">
               Product Manager Console
            </h2>
            <Stack spacing={1} marginTop={15}>
               <Card variant="outlined" sx={{
                  width: {
                     xs: '100vw',
                     sm: '90vw',
                     md: '80vw',
                     lg: '70vw'
                  },
                  height: 'fit-content'
               }}>
                  <Grid 
                     container 
                     spacing={{
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4
                     }}
                     sx={{ flexGrow: 1 }}
                  >
                     <Grid sx={{
                        width: {
                           xs: '100%',
                           md: '50%'
                        }
                     }}>
                        <Card>Sales</Card>
                     </Grid>
                     <Grid
                        sx={{
                           width: {
                              xs: '100%',
                              md: '50%'
                           }
                        }}
                     >
                        <Card>Expenses</Card>
                     </Grid>
                     <Grid
                        sx={{
                           width: {
                              xs: '100%',
                              md: '50%'
                           }
                        }}
                     >
                        <Card>Products</Card>
                     </Grid>
                     <Grid
                        sx={{
                           width: {
                              xs: '100%',
                              md: '50%'
                           }
                        }}
                     >
                        <Card>Dashboard</Card>
                     </Grid>
                  </Grid>
               </Card>
            </Stack>
         </Box>
      </Box>
   );
}

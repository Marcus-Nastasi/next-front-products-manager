'use client'

import React from "react";
import Menu from "./components/Menu/Menu";
import { Box, Button, Card, Stack, Typography } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import { useColorScheme, extendTheme, CssVarsProvider } from '@mui/joy/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ToggleThemeButton() {
   const { mode, setMode } = useColorScheme();
   const toggleMode = () => mode == "dark" ? setMode("light") : setMode("dark");
   return (
      <Button
         variant="plain"
         color={'primary'} 
         onClick={toggleMode}
         sx={{
            width: 'fit-content',
            height: 'fit-content',
            padding: 0.3,
            position: 'absolute',
            right: 5,
            top: 5,
            margin: { xs: 2, md: 3 }
         }}
      >
         {
            mode == "dark" 
            ? <LightModeIcon  
               sx={{
                  fontSize: { xs: 27, md: 29 },
               }}
            />  
            : <DarkModeIcon 
               sx={{
                  fontSize: { xs: 30, md: 32 },
               }}
            /> 
         }
      </Button>
   );
}

const theme = extendTheme({
   colorSchemes: {
      dark: {
         palette: {
            primary: {
               50: "#fffbeb",
               100: "#fef3c7",
               200: "#fde68a",
               300: "#fcd34d",
               400: "#fbbf24",
               500: "#f59e0b",
               600: "#d97706",
               700: "#b45309",
               800: "#92400e",
               900: "#78350f"
            },
            background: {
               body: '#0C0D0E', // Definir a cor do fundo do corpo para escuro
            },
            text: {
               primary: '#ffffff',
            },
         },
      },
      light: {
         palette: {
            background: {
               body: '#ffffff', // Cor de fundo clara
            },
            text: {
               primary: '#000000',
            },
         },
      },
   },
});

export default function Home() {
   return (
      <CssVarsProvider theme={theme} defaultMode={"light"} >
         <ToggleThemeButton />
         <Box
            sx={{
               bgcolor: 'background.body',
               width: '100%',
               minHeight: '100vh',
               maxHeight: 'fit-content',
               transition: 'all ease-in-out 320ms'
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
                  transition: 'all ease-in-out 320ms'
               }}
            >
               <Typography 
                  fontSize={{ xs: 28, sm: 38, md: 40}}
                  textAlign={'center'}
                  sx={{ userSelect: 'none' }}
               >
                  Product Manager Console
               </Typography>
               <Stack spacing={1} marginTop={15}>
                  <Card variant="outlined" sx={{
                     width: {
                        xs: '100vw',
                        sm: '90vw',
                        md: '80vw',
                        lg: '70vw'
                     },
                     height: 'fit-content',
                     transition: 'all ease-in-out 320ms',
                     boxShadow: '0px 0px 5px 1px darkgray'
                  }}>
                     <Grid 
                        container 
                        spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                        sx={{ flexGrow: 1 }}
                     >
                        <Grid sx={{
                           width: { xs: '100%', md: '50%' },
                        }}>
                           <Card sx={{ padding: 0, transition: 'all ease-in-out 320ms' }}>
                              <Card
                                 onClick={() => window.open('/sales', '_self')}
                                 variant="plain"
                                 sx={{
                                    boxShadow: '0px 0px 5px 1px darkgray',
                                    width: 'full',
                                    transition: 'all ease-in-out 320ms',
                                    ":hover": {
                                       cursor: 'pointer',
                                       backgroundColor: 'rgba(134, 238, 134, 0.1)',
                                       backdropFilter: 'blur(30px)',
                                       boxShadow: '3px 3px 5px 1px darkgray',
                                    }
                                 }}
                              >
                                 <Typography 
                                    fontSize={{ xs: 20, md: 25 }}
                                    fontWeight={'bold'}
                                 >
                                    Sales
                                 </Typography>
                                 <Typography
                                    marginY={1}
                                    fontSize={{ xs: 15, md: 20 }}
                                 >
                                    R$ 12.423,00
                                 </Typography>
                                 <Typography
                                    marginY={1}
                                    fontSize={{ xs: 10, md: 10 }}
                                 >
                                    see more...
                                 </Typography>
                              </Card>
                           </Card>
                        </Grid>
                        <Grid
                           sx={{
                              width: { xs: '100%', md: '50%' }
                           }}
                        >
                           <Card sx={{ padding: 0, transition: 'all ease-in-out 320ms' }}>
                              <Card
                                 variant="plain"
                                 sx={{
                                    boxShadow: '0px 0px 5px 1px darkgray',
                                    width: 'full',
                                    transition: 'all ease-in-out 320ms',
                                    ":hover": {
                                       cursor: 'pointer',
                                       backgroundColor: 'rgba(238, 134, 134, 0.1)',
                                       backdropFilter: 'blur(30px)',
                                       boxShadow: '3px 3px 5px 1px darkgray',
                                    }
                                 }}
                              >
                                 <Typography 
                                    fontSize={{ xs: 20, md: 25 }}
                                    fontWeight={'bold'}
                                 >
                                    Expenses
                                 </Typography>
                                 <Typography
                                    marginY={1}
                                    fontSize={{ xs: 15, md: 20 }}
                                 >
                                    R$ 2.423,00
                                 </Typography>
                                 <Typography
                                    marginY={1}
                                    fontSize={{ xs: 10, md: 10 }}
                                 >
                                    see more...
                                 </Typography>
                              </Card>
                           </Card>
                        </Grid>
                        <Grid
                           sx={{
                              width: { xs: '100%', md: '50%' }
                           }}
                        >
                           <Card sx={{ padding: 0, transition: 'all ease-in-out 320ms' }}>
                              <Card
                                 onClick={() => window.open('/products', '_self')}
                                 variant="plain"
                                 sx={{
                                    boxShadow: '0px 0px 5px 1px darkgray',
                                    width: 'full',
                                    transition: 'all ease-in-out 320ms',
                                    ":hover": {
                                       cursor: 'pointer',
                                       backgroundColor: 'rgba(134, 198, 238, 0.1)',
                                       backdropFilter: 'blur(30px)',
                                       boxShadow: '3px 3px 5px 1px darkgray',
                                    }
                                 }}
                              >
                                 <Typography 
                                    fontSize={{ xs: 20, md: 25 }}
                                    fontWeight={'bold'}
                                 >
                                    Products
                                 </Typography>
                                 <Typography
                                    marginY={1}
                                    fontSize={{ xs: 15, md: 20 }}
                                 >
                                    ........
                                 </Typography>
                                 <Typography
                                    marginY={1}
                                    fontSize={{ xs: 10, md: 10 }}
                                 >
                                    see more...
                                 </Typography>
                              </Card>
                           </Card>
                        </Grid>
                        <Grid
                           sx={{
                              width: { xs: '100%', md: '50%' }
                           }}
                        >
                           <Card sx={{ padding: 0, transition: 'all ease-in-out 320ms' }}>
                              <Card
                                 variant="plain"
                                 sx={{
                                    boxShadow: '0px 0px 5px 1px darkgray',
                                    width: 'full',
                                    transition: 'all ease-in-out 320ms',
                                    ":hover": {
                                       cursor: 'pointer',
                                       backgroundColor: 'rgba(189, 134, 238, 0.1)',
                                       backdropFilter: 'blur(30px)',
                                       boxShadow: '3px 3px 5px 1px darkgray',
                                    }
                                 }}
                              >
                                 <Typography 
                                    fontSize={{ xs: 20, md: 25 }}
                                    fontWeight={'bold'}
                                 >
                                    Dashboard
                                 </Typography>
                                 <Typography
                                    marginY={1}
                                    fontSize={{ xs: 15, md: 20 }}
                                 >
                                    ........
                                 </Typography>
                                 <Typography
                                    marginY={1}
                                    fontSize={{ xs: 10, md: 10 }}
                                 >
                                    see more...
                                 </Typography>
                              </Card>
                           </Card>
                        </Grid>
                     </Grid>
                  </Card>
               </Stack>
            </Box>
         </Box>
      </CssVarsProvider>
   );
}

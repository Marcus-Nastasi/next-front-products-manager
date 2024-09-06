'use client'

import React from "react";
import Menu from "../components/Menu/Menu";
import { Box, Button, Card, Stack, Typography } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import { useColorScheme, extendTheme, CssVarsProvider } from '@mui/joy/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchInput from "../components/Generics/search-input";
import MenuFilter from "../components/Products/menu-filter";
import ProductsTable from "../components/Products/products-table";

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

export default function Products() {
   return (
      <CssVarsProvider theme={theme} defaultMode={"light"} >
         <ToggleThemeButton />
         <Box
            sx={{
               bgcolor: 'background.body',
               width: '100%',
               minHeight: '100vh',
               maxHeight: 'fit-content',
               transition: 'all ease-in-out 299ms'
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
                  transition: 'all ease-in-out 299ms'
               }}
            >
               <Typography 
                  fontSize={{ xs: 28, sm: 38, md: 40}}
                  textAlign={'center'}
                  sx={{ userSelect: 'none' }}
               >
                  Products
               </Typography>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     mt: 4
                  }}
               >
                  <SearchInput />
                  <MenuFilter />
               </Box>
               <Box
                  sx={{
                     width: {
                        xs: '100%',
                        sm: '90%',
                        md: '80%',
                        lg: '70%',
                        xl: '60%'
                     } 
                  }}
               >
                  <ProductsTable />
               </Box>
            </Box>
         </Box>
      </CssVarsProvider>
   );
}

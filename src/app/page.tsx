'use client'

import React from "react";
import Menu from "./components/Menu/Menu";
import { Box, Card, Stack, Typography } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import { useColorScheme, extendTheme } from '@mui/joy/styles';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

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
                  height: 'fit-content'
               }}>
                  <Grid 
                     container 
                     spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                     sx={{ flexGrow: 1 }}
                  >
                     <Grid sx={{
                        width: { xs: '100%', md: '50%' }
                     }}>
                        <Card sx={{ padding: 0 }}>
                           <Card
                              variant="plain"
                              sx={{
                                 width: 'full',
                                 ":hover": {
                                    cursor: 'pointer',
                                    backgroundColor: 'rgba(134, 238, 134, 0.1)',
                                    backdropFilter: 'blur(30px)'
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
                        <Card sx={{ padding: 0 }}>
                           <Card
                              variant="plain"
                              sx={{
                                 width: 'full',
                                 ":hover": {
                                    cursor: 'pointer',
                                    backgroundColor: 'rgba(238, 134, 134, 0.1)',
                                    backdropFilter: 'blur(30px)'
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
                        <Card sx={{ padding: 0 }}>
                           <Card
                              variant="plain"
                              sx={{
                                 width: 'full',
                                 ":hover": {
                                    cursor: 'pointer',
                                    backgroundColor: 'rgba(134, 198, 238, 0.1)',
                                    backdropFilter: 'blur(30px)'
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
                        <Card sx={{ padding: 0 }}>
                           <Card
                              variant="plain"
                              sx={{
                                 width: 'full',
                                 ":hover": {
                                    cursor: 'pointer',
                                    backgroundColor: 'rgba(189, 134, 238, 0.1)',
                                    backdropFilter: 'blur(30px)'
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
   );
}

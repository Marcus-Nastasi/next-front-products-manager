'use client'

import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import Sheet from '@mui/joy/Sheet';
import { Button, IconButton } from '@mui/joy';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FormInput from '../Generics/form-input';

export default function MenuFilter() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
         display: 'flex',
         justifyContent: 'end',
         width: {
            xs: '90vw',
            sm: '70vw',
            md: '70vw',
            lg: '60vw',
            xl: '50vw'
         },
         my: 4,
      }}
    >
      <IconButton 
         onClick={() => setOpen(true)} 
         variant={'plain'} 
         color={'primary'} 
         aria-label="Open menu" 
         component="a"
      >
         <FilterListRoundedIcon onClick={() => setOpen(true)} sx={{ fontSize: 35, }} />
      </IconButton>
      <Drawer
         anchor={'bottom'}
         size="md"
         variant="plain"
         open={open}
         onClose={() => setOpen(false)}
         slotProps={{
            content: {
            sx: {
               width: {
                  xs: '100%',
                  sm: '90%',
                  md: '80%',
                  lg: '40%'
               },
               bgcolor: 'transparent',
               p: { md: 3, sm: 0 },
               boxShadow: 'none',
               right: 6,
               height: {
                  xs: '85%',
                  md: '90%',
               },
            },
            },
         }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            overflow: 'auto',
            height: {
               xs: '90%',
            },
          }}
        >
          <DialogTitle sx={{ userSelect: 'none' }}>Filters</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>
            <FormControl sx={{ height: '100%' }}>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'space-evenly',
                     height: '100%',
                  }}
               >
                  {[
                     {
                        type: 'text',
                        label: 'Name',
                        placeholder: 'Filter by name',
                        ok: false, 
                        error: false, 
                        value: "",
                        setValue: () => null, 
                     },
                     {
                        type: 'text',
                        label: 'Description',
                        placeholder: 'Filter by description',
                        ok: false, 
                        error: false, 
                        value: "",
                        setValue: () => null, 
                     },
                     {
                        type: 'number',
                        label: 'Price',
                        placeholder: 'Filter by price',
                        ok: false, 
                        error: false, 
                        value: "",
                        setValue: () => null, 
                     },
                     {
                        type: 'text',
                        label: 'quantity',
                        placeholder: 'Filter by quantity',
                        ok: false, 
                        error: false, 
                        value: "",
                        setValue: () => null, 
                     },
                  ].map((item) => (
                     <div className='my-2'>
                        <FormInput 
                           type={item.type}
                           label={item.label}
                           placeholder={item.placeholder} 
                           ok={item.ok}
                           error={item.error} 
                           value={item.value}
                           setValue={item.setValue}  
                        />
                     </div>
                  ))}
               </Box>
            </FormControl>
          </DialogContent>
          <Divider sx={{ mt: 'auto' }} />
          <Button
            color='primary'
            variant='outlined'
            size='lg'
            sx={{
               width: 'fit-content',
               height: 'fit-content',
               padding: 1,
               px: 5
            }}
          >
            Filter
          </Button>
        </Sheet>
      </Drawer>
    </Box>
  );
}

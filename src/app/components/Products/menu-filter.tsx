'use client'

import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { Button, IconButton } from '@mui/joy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import FilterNoneTwoToneIcon from '@mui/icons-material/FilterNoneTwoTone';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

export default function MenuFilter() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('Guesthouse');

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
         my: 4
      }}
    >
      <IconButton 
         onClick={() => setOpen(true)} 
         variant={'plain'} 
         color={'primary'} 
         aria-label="Open menu" 
         component="a"
      >
         <FilterListRoundedIcon onClick={() => setOpen(true)} sx={{
            fontSize: 35,
         }} />
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
                  lg: '60%'
               },
               bgcolor: 'transparent',
               p: { md: 3, sm: 0 },
               boxShadow: 'none',
               right: 6
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
            gap: 2,
            height: {
               xs: '100%',
               md: 'fit-content'
            },
            overflow: 'auto',
          }}
        >
          <DialogTitle sx={{ userSelect: 'none' }}>Filters</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>
            <FormControl>
              <RadioGroup
                value={type || ''}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                    gap: 1.5,
                  }}
                >
                  {[
                    {
                      name: 'Sales',
                      icon: <TrendingUpIcon color='success' />,
                    },
                    {
                      name: 'Expenses',
                      icon: <TrendingDownIcon htmlColor='rgba(183, 97, 97)' />,
                    },
                    {
                      name: 'Products',
                      icon: <FilterNoneTwoToneIcon color='primary' />,
                    },
                    {
                      name: 'Dashboard',
                      icon: <AnalyticsTwoToneIcon htmlColor='rgba(183, 97, 183)' />,
                    },
                  ].map((item) => (
                    <Card
                      key={item.name}
                      sx={{
                        boxShadow: 'none',
                        '&:hover': { bgcolor: 'background.level1' },
                      }}
                    >
                      <CardContent>
                        {item.icon}
                        <Typography level="title-md">{item.name}</Typography>
                      </CardContent>
                      <Radio
                        disableIcon
                        overlay
                        checked={type === item.name}
                        variant="outlined"
                        color="neutral"
                        value={item.name}
                        sx={{ mt: -2 }}
                        slotProps={{
                          action: {
                            sx: {
                              ...(type === item.name && {
                                borderWidth: 2,
                                borderColor:
                                  'var(--joy-palette-primary-outlinedBorder)',
                              }),
                              '&:hover': {
                                bgcolor: 'transparent',
                              },
                            },
                          },
                        }}
                      />
                    </Card>
                  ))}
                </Box>
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <Divider sx={{ mt: 'auto' }} />
          <Button
            color='neutral'
            variant='plain'
            sx={{
               // alignSelf: 'end',
               width: 'fit-content',
               height: 'fit-content',
               padding: 1
            }}
          >
             <SettingsRoundedIcon sx={{ fontSize: 25 }} />
          </Button>
        </Sheet>
      </Drawer>
    </Box>
  );
}

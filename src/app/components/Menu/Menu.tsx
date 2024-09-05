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
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { IconButton } from '@mui/joy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import FilterNoneTwoToneIcon from '@mui/icons-material/FilterNoneTwoTone';

export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('Guesthouse');

  return (
    <React.Fragment>
      <IconButton 
         onClick={() => setOpen(true)} 
         sx={{ margin: 2 }} 
         variant={'plain'} 
         color={'primary'} 
         aria-label="Open menu" 
         component="a"
      >
         <WidgetsRoundedIcon onClick={() => setOpen(true)} sx={{
            fontSize: 35,
         }} />
      </IconButton>
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
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
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>Menu</DialogTitle>
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
                      icon: <TrendingDownIcon color='error' />,
                    },
                    {
                      name: 'Products',
                      icon: <FilterNoneTwoToneIcon color='primary' />,
                    },
                    {
                      name: 'Dashboard',
                      icon: <AnalyticsTwoToneIcon color='secondary' />,
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
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}

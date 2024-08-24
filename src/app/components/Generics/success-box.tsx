import * as React from 'react';
import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

export default function SuccessBox({ msg, open, setOpen }: 
   { 
      msg: string, 
      open: boolean, 
      setOpen: Function 
   }
) {
  return (
    <React.Fragment>
      <Snackbar
        size='lg'
        variant="soft"
        color="success"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
      >
        {msg}
      </Snackbar>
    </React.Fragment>
  );
}

import * as React from 'react';
import Snackbar from '@mui/joy/Snackbar';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

export default function ErrorBox({ msg, open, setOpen }: 
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
        color="danger"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        startDecorator={<GppMaybeIcon />}
      >
        {msg}
      </Snackbar>
    </React.Fragment>
  );
}

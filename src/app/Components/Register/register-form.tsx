'use client'

import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import FormInput from '../Generics/form-input';
import SuccessBox from '../Generics/success-box';
import ErrorBox from '../Generics/error-box';

export default function RegisterForm() {
   const [ loading, setLoading ] = React.useState<boolean>();
   const [openSuccess, setOpenSuccess] = React.useState<boolean>(false);
   const [openError, setOpenError] = React.useState<boolean>(false);
   const [ errorMsg, setErrorMsg ] = React.useState<string>('Generic error');

   const handleSubmit = () => {
      setLoading(true);
      setTimeout(() => {
         setOpenSuccess(true);
         // setOpenError(true);
         // setErrorMsg('Error while fetching to server. Code 401.');
         setLoading(false);
      }, 2000);
   };

   return (
      <Card
         variant="outlined"
         sx={{
            width: 600,
            mx: 'auto',
            overflow: 'auto',
            resize: 'horizontal',
            boxShadow: '0 0 5px 0.01px gray'
         }}
      >
         <SuccessBox
            msg={'You have successfully registered. Redirecting......'}
            open={openSuccess}
            setOpen={setOpenSuccess}
         />
         <ErrorBox
            msg={errorMsg} 
            open={openError} 
            setOpen={setOpenError} 
         />
         <Typography fontSize={30} level="title-lg">
            Register
         </Typography>
         <Divider inset="none" />
         <CardContent
            sx={{
               display: 'grid',
               gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
               gap: 1.5,
            }}
         >
            <FormControl sx={{ gridColumn: '1/-1' }}>
               <FormInput type='text' label='Username' placeholder='xyz@123...' ok={true} />
            </FormControl>
            <FormControl sx={{ gridColumn: '1/-1' }}>
               <FormInput type='email' label='E-mail' placeholder='e-mail...' ok={true} />
            </FormControl>
            <FormControl>
               <FormInput type='password' label='Password' placeholder='password...' ok={true} />
            </FormControl>
            <FormControl>
               <FormInput type='password' label='Confirm Password' placeholder='confirm password...' ok={true} />
            </FormControl>
            <CardActions sx={{ gridColumn: '1/-1' }}>
               {
                  loading ?
                  <Button
                     loading
                     sx={{ fontSize: 17, py: 1.2 }} 
                     size='lg'
                     variant="solid"
                     color="primary"
                  >
                  </Button> :
                  <Button
                     onClick={handleSubmit}
                     sx={{ fontSize: 17, py: 1.2 }} 
                     variant="solid" 
                     color="primary"
                  >
                     Register
                  </Button>
               }
            </CardActions>
         </CardContent>
      </Card>
   );
}

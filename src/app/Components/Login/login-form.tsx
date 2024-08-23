'use client'

import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import FormInput from '../Generics/FormInput';
import SuccessBox from '../Generics/SuccessBox';

export default function LoginForm() {
   const [ loading, setLoading ] = React.useState<boolean>();
  const [openSuccess, setOpenSuccess] = React.useState<boolean>(false);

   const handleSubmit = () => {
      setLoading(true);
      setTimeout(() => {
         setOpenSuccess(true);
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
            boxShadow: '0 0 10px 0.1px gray'
         }}
      >
         <SuccessBox 
            msg={'Você logou com sucesso! Redirecionando...'}
            open={openSuccess}
            setOpen={setOpenSuccess}
         />
         <Typography fontSize={30} level="title-lg">
            Login
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
            <FormControl>
               <FormInput type='email' label='E-mail' placeholder='e-mail...' ok={true} />
            </FormControl>
            <FormControl>
               <FormInput type='password' label='Password' placeholder='password...' ok={true} />
            </FormControl>
            <Checkbox variant='soft' color='primary' label="Save session" sx={{ gridColumn: '1/-1', my: 1 }} />
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
                     Enter
                  </Button>
               }
            </CardActions>
         </CardContent>
      </Card>
   );
}

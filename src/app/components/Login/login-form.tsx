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
import FormInput from '../Generics/form-input';
import SuccessBox from '../Generics/success-box';
import ErrorBox from '../Generics/error-box';
import {LoginService} from '@/app/services/Login/login.service';
import Cookie from '@/app/util/Cookie';
import { LoginResponseDTO } from '@/app/interfaces/Login/login';

export default function LoginForm() {
   const [ username, setUsername ] = React.useState<string>();
   const [ password, setPassword ] = React.useState<string>();
   const [ loading, setLoading ] = React.useState<boolean>();
   const [openSuccess, setOpenSuccess] = React.useState<boolean>(false);
   const [openError, setOpenError] = React.useState<boolean>(false);
   const [ errorMsg, setErrorMsg ] = React.useState<string>('Generic error');

   const handleSubmit = async (e: any): Promise<LoginResponseDTO | null> => {
      setLoading(true);
      try {
         if (!username || !password) throw new Error('Username e senha são obrigatórios');
         const login = await LoginService.login({ 
            cpf: username, 
            password: password 
         });
         if (!login) throw new Error('Erro ao realizar login');
         setLoading(false);
         setOpenSuccess(true);
         Cookie.create('pm_access_token', login.data.token, 12);
         return login;
      } catch (error: any) {
         setLoading(false);
         setErrorMsg(error.message);
         setOpenError(true);
         return null;
      }
   };

   return (
      <Card
         variant="outlined"
         sx={{
            width: { xs: 'full', sm: '90%', md: '70%', lg: '50%', xl: '30%' },
            mx: 'auto',
            overflow: 'auto',
            resize: 'horizontal',
            boxShadow: '0 0 5px 0.01px gray'
         }}
      >
         <SuccessBox 
            msg={'You have successfully logged in! Redirecting......'}
            open={openSuccess}
            setOpen={setOpenSuccess}
         />
         <ErrorBox 
            msg={errorMsg} 
            open={openError} 
            setOpen={setOpenError} 
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
            <FormControl>
               <FormInput
                  value={username ? username : ''}
                  setValue={setUsername}
                  type='text' 
                  label='Username' 
                  placeholder='xyz@123...' 
                  ok={true}
                  error={false}  
               />
            </FormControl>
            <FormControl>
               <FormInput 
                  value={password ? password : ''} 
                  setValue={setPassword}  
                  type='password' 
                  label='Password' 
                  placeholder='password...' 
                  ok={true}
                  error={false}
               />
            </FormControl>
            <Checkbox 
               variant='soft' 
               color='primary' 
               label="Save session" 
               sx={{ gridColumn: '1/-1', my: 1 }} 
            />
            <CardActions sx={{ gridColumn: '1/-1' }}>
               {
                  loading &&
                  <Button
                     loading
                     sx={{ fontSize: 17, py: 1.2 }} 
                     size='lg'
                     variant="solid"
                     color="primary"
                  >
                  </Button> ||
                  <Button
                     onClick={handleSubmit}
                     sx={{ fontSize: 17, py: 1.2 }} 
                     variant="solid" 
                     color="primary"
                  >
                     Log in
                  </Button>
               }
            </CardActions>
         </CardContent>
         <div className='flex justify-center py-3'>
            <p>
               Don't have an account? 
               <a className=' text-blue-600 hover:text-blue-800' href="/register"> Sign up</a>
            </p>
         </div>
      </Card>
   );
}

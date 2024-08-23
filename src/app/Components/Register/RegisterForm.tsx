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

export default function RegisterForm() {
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
            <Checkbox variant='soft' color='primary' label="Save session" sx={{ gridColumn: '1/-1', my: 1 }} />
            <CardActions sx={{ gridColumn: '1/-1' }}>
               <Button sx={{ fontSize: 17, py: 1.2 }} variant="solid" color="primary">
                  Register
               </Button>
            </CardActions>
         </CardContent>
      </Card>
   );
}

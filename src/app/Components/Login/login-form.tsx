import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

export default function LoginForm() {
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
         <Typography level="title-lg">
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
               <FormLabel>Card number</FormLabel>
               <Input />
            </FormControl>
            <FormControl>
               <FormLabel>Expiry date</FormLabel>
               <Input />
            </FormControl>
            <FormControl>
               <FormLabel>CVC/CVV</FormLabel>
               <Input/>
            </FormControl>
            <FormControl sx={{ gridColumn: '1/-1' }}>
               <FormLabel>Card holder name</FormLabel>
               <Input placeholder="Enter cardholder's full name" />
            </FormControl>
            <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
            <CardActions sx={{ gridColumn: '1/-1' }}>
               <Button variant="solid" color="primary">
               Add card
               </Button>
            </CardActions>
         </CardContent>
      </Card>
   );
}

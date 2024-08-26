'use server'

import LoginForm from "@/app/components/Login/login-form";

export default async function Login() {
   return (
      <div className="flex flex-col items-center w-screen min-h-screen max-h-fit py-24">
         <LoginForm />
      </div>
   );
}

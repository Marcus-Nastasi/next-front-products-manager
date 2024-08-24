import RegisterForm from "@/app/components/Register/register-form";
import React from "react";

export default function Register() {
   return (
      <div className="flex flex-col items-center w-screen min-h-screen max-h-fit py-24">
         <RegisterForm />
      </div>
   );
}

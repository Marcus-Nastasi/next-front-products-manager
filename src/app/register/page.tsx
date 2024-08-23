import React from "react";
import RegisterForm from "../Components/Register/register-form";

export default function Register() {
   return (
      <div className="flex flex-col items-center w-screen min-h-screen max-h-fit py-24">
         <RegisterForm/>
      </div>
   );
}

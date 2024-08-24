import LoginDTO from "@/app/interfaces/Login/login-dto";
import LoginResponseDTO from "@/app/interfaces/Login/login-response-dto";

class LoginService {
   static async login(data: LoginDTO): Promise<LoginResponseDTO | null> {
      try {
         const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data })
         });
         if (response.status !== 200) throw new Error(`status dif than 200: ${response.status}`);
         const login: LoginResponseDTO = await response.json();
         return login;
      } catch (error) {
         console.log(error);
         return null;
      }
   }
}

export {
   LoginService
}

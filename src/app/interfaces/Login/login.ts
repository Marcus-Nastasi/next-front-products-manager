export interface Login {
   id: number, 
   cpf: string, 
   token: string 
}

export interface LoginResponseDTO {
   data: Login 
};

export interface LoginDTO {
   cpf: string,
   password: string
}


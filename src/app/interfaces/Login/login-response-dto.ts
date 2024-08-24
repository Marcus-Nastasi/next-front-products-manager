interface Login {
   id: number, 
   cpf: string, 
   token: string 
}

export default interface LoginResponseDTO {
   data: Login 
};

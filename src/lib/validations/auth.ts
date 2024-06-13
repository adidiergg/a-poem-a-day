import { string, z } from "zod";

export const signUpSchema = z.object({
    name: z.string().min(1,{
        message: "El nombre debe tener al menos 1 caracteres",
    }).max(100,{
        message: "El nombre debe tener menos de 100 caracteres",
    }),
    email: z.string().email({
        message: "Correo electrónico inválido"
    }),
    password: string().min(8,{
        message: "La contraseña debe tener al menos 8 caracteres",
    }).max(100,{
        message: "La contraseña debe tener menos de 100 caracteres",
    }),
})

export const authSchema =signUpSchema.omit({name:true})
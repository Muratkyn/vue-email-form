import { z } from 'zod'

export const emailSchema = z.object({
    customerName: z
    .string()
    .min(1, {message: "Nome obbligatorio"}),
    customerLastName: z
    .string()
    .min(1, {message: "Cognome obbligatorio"}),
    customerEmail: z
    .string()
    .min(1, { message: "Email obbligatoria" })
    .email({ message: "Email non valida" }),
    customerZipCode: z
    .string()
    .min(1, { message: "CAP obbligatorio" })
    .regex(/^\d+$/, { message: "Formato non valido" })
    .max(5, {message: "CAP non valido"})
    
})
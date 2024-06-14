"use client";

import { authSchema } from "~/lib/validations/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form,FormField, FormMessage,FormItem, FormLabel, FormControl } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { signIn } from "next-auth/react"
type Inputs = z.infer<typeof authSchema>

export function SignInForm(){

    const form = useForm<Inputs>({
        resolver: zodResolver(authSchema),
        defaultValues:{
            email: "",
            password: "",
        }
    })

    async function obSubmit(data: Inputs){
        signIn("credentials",{email:data.email,password:data.password})
    }

    return(
        <Form {...form}>
            <form className="grid gap-3" onSubmit={form.handleSubmit(obSubmit)}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="password"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <Input {...field} type="password"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}

                />
                <Button>Iniciar sesión</Button>
            </form>
        </Form>
    );
}
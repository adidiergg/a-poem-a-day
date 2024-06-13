"use client";

import { signUpSchema } from "~/lib/validations/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form,FormField, FormMessage,FormItem, FormLabel, FormControl } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
type Inputs = z.infer<typeof signUpSchema>

export function SignInForm(){

    const form = useForm<Inputs>({
        resolver: zodResolver(signUpSchema),
        defaultValues:{
            name:  "",
            email: "",
            password: "",
        }
    })

    async function obSubmit(data: Inputs){
        console.log(data);
    }

    return(
        <Form {...form}>
            <form className="grid gap-3" onSubmit={form.handleSubmit(obSubmit)}>
                <FormField 
                    control={form.control}
                    name="name"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                <Button>Crear cuenta</Button>
            </form>
        </Form>
    );
}
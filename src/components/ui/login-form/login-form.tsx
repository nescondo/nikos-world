import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card"
import { Button } from "../button"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginFormSchema = z.object({
    email: z
        .email(),
    password: z
        .string()
})

function LoginForm() {
    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof LoginFormSchema>) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User successfully signed in!!!!", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error!!!", errorCode, errorMessage);
            });
    }

    return (
        <>
            <Card className="w-full border-white/20">
                <CardHeader>
                    <CardTitle className="bg-gradient-to-r text-transparent bg-clip-text from-terminal-green to-emerald-400">Admin Login</CardTitle>
                    <CardDescription className="text-[#dadadab0]">A simple implementation of Firebase!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Controller 
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="login-form-email">
                                            Email
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="login-form-email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter your email here..."
                                            autoComplete="off"
                                            className="border-[#dadadab0]/50"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="password"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="login-form-password">
                                            Password
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="login-form-password"
                                            type="password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter your password here..."
                                            autoComplete="Off"
                                            className="border-[#dadadab0]/50"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter>
                    <Field orientation="horizontal">
                        <Button className="bg-[#dadadab0]/10 text-terminal-green/90" type="submit" form="login-form">
                            Submit
                        </Button>
                    </Field>
                </CardFooter>
            </Card>
        </>
    )
}

export default LoginForm
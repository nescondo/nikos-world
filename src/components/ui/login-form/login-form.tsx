import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

import { Card, CardContent, CardFooter, CardHeader } from "../card"
import { Button } from "../button"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../firebase"

const LoginFormSchema = z.object({
    username: z
        .string()
        .min(1, "Must enter username."),
    password: z
        .string()
})

function LoginForm() {
    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof LoginFormSchema>) {
        console.log(data)
    }

    return (
        <>
            <Card className="w-full">
                <CardHeader>Admin Login</CardHeader>
                <CardContent>
                    <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Controller 
                                name="username"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="login-form-username">
                                            Username
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="login-form-username"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter your username here..."
                                            autoComplete="off"
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
                        <Button type="submit" form="login-form">
                            Submit
                        </Button>
                    </Field>
                </CardFooter>
            </Card>
        </>
    )
}

export default LoginForm
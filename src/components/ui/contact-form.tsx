import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase"

const ContactFormSchema = z.object({
    name: z
        .string()
        .min(1, "Must enter your name."),
    email: z
        .email(),
    message: z
        .string()
        .min(5, "Message must be at least 5 characters."),
})

function ContactForm() {
    const form = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(data: z.infer<typeof ContactFormSchema>) {
        console.log(db);
        console.log(data.name);
        console.log(data.email);
        console.log(data.message);

        try {
            const docRef = await addDoc(collection(db, "messages"), {
                name: data.name,
                email: data.email,
                message: data.message
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Contact me!</CardTitle>
                    <CardDescription>Send me a message! I would love to chat.</CardDescription>
                </CardHeader>
                <CardContent>

                    <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="contact-form-name">
                                            Name
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="contact-form-name"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter your name here..."
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="contact-form-email">
                                            Email
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="contact-form-email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter your email here..."
                                            autoComplete="Off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="message"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="contact-form-message">
                                            Message
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupTextarea
                                                {...field}
                                                id="contact-form-message"
                                                placeholder="Enter your message here..."
                                                rows={6}
                                                className="min-h-24 resize-none"
                                                aria-invalid={fieldState.invalid}
                                            />
                                            <InputGroupAddon align="block-end">
                                                <InputGroupText className="tabular-nums">
                                                    {field.value.length}/100 characters
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        <FieldDescription>
                                            Feel free to get in touch!
                                        </FieldDescription>
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
                        <Button type="button" variant="outline" onClick={() => form.reset()}>
                            Reset
                        </Button>
                        <Button type="submit" form="contact-form">
                            Submit
                        </Button>
                    </Field>
                </CardFooter>
            </Card>
        </>
    )
}

export default ContactForm
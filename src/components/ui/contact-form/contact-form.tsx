import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../firebase";
import { toast } from "sonner";

const ContactFormSchema = z.object({
    name: z
        .string()
        .min(1, "Must enter your name."),
    email: z
        .email(),
    message: z
        .string()
        .min(5, "Message must be at least 5 characters.")
        .max(250, "Message must be less than 250 characters."),
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
        try {
            const docRef = await addDoc(collection(db, "messages"), {
                name: data.name,
                email: data.email,
                message: data.message
            });
            console.log("Success - document written with ID: ", docRef.id);
            form.reset();
            toast.success("Message has been sent!");

        } catch (e) {
            console.error("Error adding document: ", e);
            toast.error("Failed to send message.");
        }
    }

    return (
        <>
            <Card className="w-full border-white/20">
                <CardHeader>
                    <CardTitle className="bg-gradient-to-r text-transparent bg-clip-text from-terminal-green to-emerald-400">Contact me</CardTitle>
                    <CardDescription className="text-[#dadadab0]">Feel free to get in touch!</CardDescription>
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
                                            className="border-[#dadadab0]/50"
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
                                            className="border-[#dadadab0]/50"
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
                                        <InputGroup className="border-[#dadadab0]/50">
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
                                                    {field.value.length}/250 characters
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
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
                        <Button className="bg-transparent border-[#dadadab0]/50 hover:bg-white/80 text-terminal-blue" type="button" variant="outline" onClick={() => form.reset()}>
                            Reset
                        </Button>
                        <Button className="bg-[#dadadab0]/10 text-terminal-green/90" type="submit" form="contact-form">
                            Submit
                        </Button>
                    </Field>
                </CardFooter>
            </Card>
        </>
    )
}

export default ContactForm
import ContactForm from "@/components/ui/contact-form/contact-form"

function Contact() {
    return (
        <>
            <div className="flex">
                <div className="p-25 pr-30 pl-30 w-full">
                    <p>~/nikos-world<span className="text-terminal-blue">/contact</span></p>

                    <div className="mt-5">
                        <h1 className="text-4xl bg-gradient-to-r text-transparent bg-clip-text from-terminal-green to-emerald-400">Contact Me</h1>
                    </div>

                    <div className="mt-2">
                        <p className="text-lg text-current/50">// Wanna chat? Send me a message!</p>
                    </div>

                    <div className="flex justify-center mt-20">
                        <div className="w-1/2">
                            <ContactForm></ContactForm>
                        </div>
                    </div>

                </div>
            </div>
            <hr className="flex w-full"></hr>
        </>
    )
}

export default Contact
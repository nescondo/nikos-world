import LoginForm from "@/components/ui/login-form/login-form"

function AdminLogin() {
    return (
        <>
            <div className="flex">
                <div className="p-25 pr-30 pl-30">
                    <p>~/nikos-world<span className="text-terminal-blue">/admin</span></p>

                    <div className="mt-5">
                        <h1 className="text-4xl bg-gradient-to-r text-transparent bg-clip-text from-terminal-green to-emerald-400">Admin Fun</h1>
                    </div>

                    <div className="mt-2">
                        <p className="text-lg text-current/50">// A little place to see more of the backend!</p>
                    </div>

                    <div className="flex mt-10">
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </div>
            <hr className="flex w-full opacity-25"></hr>
        </>
    )
}

export default AdminLogin
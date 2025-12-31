import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

import LoginForm from "@/components/ui/login-form/login-form";
import { PiSmileySadFill } from "react-icons/pi";


function AdminDefault() {
    return (
        <>
            <div className="flex">
                <div className="p-25 pr-30 pl-30 w-full">
                    <div className="justify-items-start">
                        <p>~/nikos-world<span className="text-terminal-blue">/user</span></p>

                        <div className="mt-5">
                            <h1 className="text-4xl bg-gradient-to-r text-transparent bg-clip-text from-terminal-green to-emerald-400">Admin Fun</h1>
                        </div>

                        <div className="mt-2">
                            <p className="text-lg text-current/50">// A simple implementation of Firebase!</p>
                        </div>

                        <div>
                            
                        </div>
                    </div>

                    <div className="flex gap-40 mt-20 w-full justify-self-start">
                        <div className="w-1/2">
                            <LoginForm></LoginForm>
                        </div>

                        <div className="w-full">
                            <Empty>
                                <EmptyHeader>
                                    <EmptyMedia className="bg-transparent scale-200" variant="icon">
                                        <PiSmileySadFill className="text-terminal-blue" />
                                    </EmptyMedia>
                                    <EmptyTitle>You're not an admin.</EmptyTitle>
                                    <EmptyDescription>
                                        But it's okay. You can log in if you are.
                                    </EmptyDescription>
                                </EmptyHeader>
                            </Empty>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminDefault
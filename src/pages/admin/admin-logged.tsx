import { Button } from "@/components/ui/button"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty"
import { PiSmileyFill } from "react-icons/pi"
import AdminMessages from "./admin-messages"

function AdminLogged({ onSubmit }: any) {
    return (
        <>
            <div className="flex">
                <div className="p-25 pr-30 pl-30 w-full">
                    <div className="justify-items-start">
                        <p>~/nikos-world<span className="text-terminal-blue">/admin_logged_in</span></p>

                        <div className="mt-5">
                            <h1 className="text-4xl bg-gradient-to-r text-transparent bg-clip-text from-terminal-green to-emerald-400">Admin Fun</h1>
                        </div>

                        <div className="mt-2">
                            <p className="text-lg text-current/50">// A simple implementation of Firebase!</p>
                        </div>

                        <div>
                            
                        </div>
                    </div>

                    <div className="flex gap-40 mt-10 w-full justify-self-start">
                        <div className="w-1/2">
                            <AdminMessages></AdminMessages>
                        </div>

                        <div className="w-full">
                            <Empty>
                                <EmptyHeader>
                                    <EmptyMedia className="bg-transparent" variant="icon">
                                        <PiSmileyFill className="text-terminal-blue" />
                                    </EmptyMedia>
                                    <EmptyTitle>You're an admin!</EmptyTitle>
                                    <EmptyDescription>
                                        See all your messages here. Log out when you're done!
                                    </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent>
                                    <Button type="submit" onClick={() => onSubmit()}>
                                        Log out  
                                    </Button>
                                </EmptyContent>
                            </Empty>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminLogged
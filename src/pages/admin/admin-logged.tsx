import { Button } from "@/components/ui/button"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty"
import { PiSmileyFill } from "react-icons/pi"
import AdminMessages from "./admin-messages"
import { toast } from "sonner"
import AdminTerminalHeader from "@/components/ui/admin/admin-terminal-header"

function AdminLogged({ onSignOut, adminState }: any) {
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

                    <div className="flex mt-20 w-full justify-self-center">
                            <Empty>
                                <EmptyHeader>
                                    <EmptyMedia className="bg-transparent" variant="icon">
                                        <PiSmileyFill className="text-terminal-blue" />
                                    </EmptyMedia>
                                    <EmptyTitle>You're an admin!</EmptyTitle>
                                    <EmptyDescription>
                                        See all of your messages below. Log out when you're done!
                                    </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent>
                                    <Button className="bg-transparent border-[#dadadab0]/50 hover:bg-white/80 text-terminal-blue" type="button" variant="outline" 
                                        onClick={() => {
                                            onSignOut()
                                            if (!adminState) {
                                                toast.success("Sign out successful!")
                                            }
                                            else {
                                                toast.error("Error signing out.")
                                            }
                                        }}
                                    >
                                        Log out  
                                    </Button>
                                </EmptyContent>
                            </Empty>
                        </div>
                    
                    <div className="border-t-1 border-r-1 border-l-1 rounded-t-lg border-white/20 ">
                        <AdminTerminalHeader></AdminTerminalHeader>
                    </div>
                    <div className="flex w-full justify-self-center border-1 border-white/20 rounded-b-lg bg-[#161d28]">
                        <div>
                            <AdminMessages></AdminMessages>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminLogged
import TerminalButtons from "../terminal/terminal-btns"
import { TiMessages } from "react-icons/ti";

function AdminTerminalHeader() {
    return (
        <>
            <div className="flex h-10 bg-[#1f2937] rounded-t-lg">
                <div className="ml-5 content-center">
                    <TerminalButtons></TerminalButtons>
                </div>
                <div className="ml-5 content-center">
                    <TiMessages color="#4DA2FF" />
                </div>
                <div className="ml-2 content-center text-sm">
                    <p>messages — -zsh</p>
                </div>
            </div>
        </>
    )
}

export default AdminTerminalHeader
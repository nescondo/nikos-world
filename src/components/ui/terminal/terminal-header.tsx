import TerminalButtons from "./terminal-btns"
import { IoMdFolder } from "react-icons/io"

function TerminalHeader() {
    return (
        <>
            <div className="flex h-10 bg-[#1f2937] rounded-t-lg">
                <div className="ml-5 content-center">
                    <TerminalButtons></TerminalButtons>
                </div>
                <div className="ml-5 content-center">
                    <IoMdFolder color="#4DA2FF" />
                </div>
                <div className="ml-2 content-center text-sm">
                    <p>nikos-world — -zsh</p>
                </div>
            </div>
        </>
    )
}

export default TerminalHeader
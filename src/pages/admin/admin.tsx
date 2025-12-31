import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function Admin() {
    const messagesTest = [
        {
            id: 1,
            name: "niko",
            email: "nescondo2@gmail.com",
            message: "hello"
        },
        {
            id: 2,
            name: "really super long name super long name name",
            email: "sadnisadfbadsufbao@sadoasdhaosi.com",
            message: "sahiudfashadiovhdoivdsniobvoisbvdosbvdosb saodsanoas jhisao hdoisa hdaohfioha oihda fiohdfoh dslds hnl dsfsad???"
        },
        {
            id: 3,
            name: "billy",
            email: "bobby@gmail.com",
            message: "saojdsaid bobby billy"
        }
    ]
    return (
        <>
            <Table>
                <TableCaption>Your messages</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Message</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {messagesTest.map((message) => (
                        <TableRow key={message.id}>
                            <TableCell>{message.name}</TableCell>
                            <TableCell>{message.email}</TableCell>
                            <TableCell>{message.message}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default Admin
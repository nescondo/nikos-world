import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { db } from "../../firebase";

function AdminMessages() {
    const [messagesArray, setMessagesArray] = useState<any[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
            const allMessages = snapshot.docs.map(message => ({
                id: message.id,
                name: message.data().name,
                email: message.data().email,
                message: message.data().message,
            }));
            setMessagesArray(allMessages);
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <div className="p-10">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] text-terminal-green">Name</TableHead>
                            <TableHead className="text-terminal-blue">Email</TableHead>
                            <TableHead className="text-purple-500">Message</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {messagesArray.map((message) => (
                            <TableRow key={message.id}>
                                <TableCell>{message.name}</TableCell>
                                <TableCell>{message.email}</TableCell>
                                <TableCell className="whitespace-normal wrap-break-word max-w-lg">{message.message}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default AdminMessages
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
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Message</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {messagesArray.map((message) => (
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

export default AdminMessages
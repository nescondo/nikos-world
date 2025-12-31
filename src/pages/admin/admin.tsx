import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { db } from "../../firebase";

function Admin() {
    const [messagesArray, setMessagesArray] = useState<any[]>([]);

    // function handleAddMesage(message: any) {
    //     setMessagesArray([
    //         ...messagesArray,
    //         {
    //             id: message.id,
    //             name: message.name,
    //             email: message.email,
    //             message: message.message
    //         }
    //     ]);
    // }

    // const fetchAllMessages = async () => {
    //     const query = await getDocs(collection(db, "messages"));
    //     const allMessages = query.docs.map(message => ({
    //         id: message.id,
    //         name: message.data().name,
    //         email: message.data().email,
    //         message: message.data().message,
    //     }));

    //     return allMessages;
    // }

    // useEffect(() => {
    //     const loadMessages = async () => {
    //         const messages = await fetchAllMessages();
    //         setMessagesArray(messages);
    //     };

    //     loadMessages();
    // }, []);

    // const unsub = onSnapshot(doc(db, "messages"), (doc) => {
    //     console.log("Current messages: ", doc.data());
    // });

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

        unsubscribe();
    }, []);


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

export default Admin
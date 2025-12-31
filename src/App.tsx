import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react'
import AppDefault from './pages/app-default/app-default';
import AppAdmin from "./pages/app-admin/app-admin";
import { Toaster } from "@/components/ui/sonner";
  
function App() {
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAdmin(true);
      }
      else {
        setAdmin(false);
      }
    });
  }, []);

  function onSignOut() {
    signOut(auth).then(() => {
      setAdmin(false);
      console.log("sign out successful");
    }).catch((error) => {
      console.log("error signing out", error);
    });
  }

  return (
    <>
      <div>
        <Toaster position="top-center"/>
        {admin ? (
          <div>
            <AppAdmin onSignOut={onSignOut} adminState={admin}></AppAdmin>
          </div>
        ) : (
          <div>
            <AppDefault></AppDefault>
          </div>
        )}
      </div>
    </>
  )
}

export default App

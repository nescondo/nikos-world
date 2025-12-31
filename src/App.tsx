import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react'
import AppDefault from './pages/app-default/app-default';
import AppAdmin from "./pages/app-admin/app-admin";
  
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

  function onSubmit() {
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
        {admin ? (
          <div>
            <AppAdmin onSubmit={onSubmit}></AppAdmin>
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

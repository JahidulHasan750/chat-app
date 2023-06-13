import Chat from "./components/Chat";

import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
function App() {
  const [user]=useAuthState(auth);
  
  return (
    
    <div className="App max-w-[1000px]  mx-auto text-center">
      <section className="flex flex-col h-screen bg-gray-100 mt-10 shadow-xl border relative">
        <Navbar></Navbar>
       {user?  <Chat></Chat>: null}
       
      </section>
      
    </div>
  );
}

export default App;

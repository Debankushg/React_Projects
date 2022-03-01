import {ChatEngine } from "react-chat-engine";
import ChatFeed  from "./component/ChatFeed";
import './App.css';
import Login from "./component/Login";




const projectID = '6e6a200c-60fe-4d53-bd14-038aaa816bed';


function App() {

  if(!localStorage.getItem('username')) return <Login />

  return (
    <>
    <ChatEngine 
      height="100vh"
      projectID={projectID}
      userName="Dumpy"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    </>
  );
}

export default App;

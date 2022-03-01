import {ChatEngine } from "react-chat-engine";
import ChatFeed  from "./component/ChatFeed";
import './App.css';
import Login from "./component/Login";




const projectID = '6e6a200c-60fe-4d53-bd14-038aaa816bed';

const App = () => {
  if (!localStorage.getItem('username')) return <Login />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;

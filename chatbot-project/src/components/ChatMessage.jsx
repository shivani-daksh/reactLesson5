import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profileUser.jpg';
import './ChatMessage.css'

//console.log(UserProfileImage);// this variable will store the file path of image in it.


export function ChatMessage({ message, sender }) {
  return (
    <div className={
      sender === 'user'
      ? 'chat-message-user'
      : 'chat-message-robot'
    }>
      {sender === "robot" && <img src={RobotProfileImage} className="chat-message-profile" />}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === "user" && <img src={UserProfileImage} className="chat-message-Userprofile" />}
    </div>
  );
}
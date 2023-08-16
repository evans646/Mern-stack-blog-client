import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Modal from "react-modal";
import { RiCloseLine} from "react-icons/ri";
import axios from "axios";

import {useUser} from "../authentication/useUser";
import { useToken } from "../authentication/useToken";
import {useQueryParams} from "../utils/useQueryParams";

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    display: 'auto',
    borderRadius:'15px',
    width: '35%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const AddCommentForm = ({ blogName, setBlogInfo }) => {
    const [,setUsername] = useState("");
    const [commentText, setCommentText] = useState("");
    
    const user = useUser();
    const { username,name } = user || "";
    const [,setToken] = useToken();

    const [modalIsOpen, setIsOpen] = useState(false);



    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');
    const [googleOauthUrl, setGoogleOauthUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    

    const navigate = useNavigate();
   
    const { token: oauthToken } = useQueryParams();

    const addComment = async () => {
         const response = await fetch(`https://reactfstackblog.herokuapp.com/api/blogs/${blogName}/add-comment`, {
           method: 'post',
           body: JSON.stringify({ username:name,text: commentText}),
           headers: { 
               'Content-Type': 'application/json',
           }
       });
       const body = await response.json();
       setBlogInfo(body);
       setUsername(username||name);
       setCommentText("");
   };

   useEffect(() => {
       if (showErrorMessage) {
           setTimeout(() => {
               setShowErrorMessage(false);
           }, 3000);
       }
   }, [showErrorMessage]);
   
   useEffect(() => {
       if (oauthToken) {
           setToken(oauthToken);
           window.location.reload();
           window.reload();
       }
   }, [oauthToken, setToken, navigate]);

   useEffect(() => {
       const loadOauthUrl = async () => {
           try {
               const response = await axios.get('/auth/google/url');
               const { url } = response.data;
               setGoogleOauthUrl(url);
           } catch (e) {
               console.log(e);
           }
       }
       loadOauthUrl();
   }, []);
 
   const onLogInClicked = async (e) => {
       e.preventDefault();
       try {
           const response = await axios.post('https://reactfstackblog.herokuapp.com/api/login', {
               username: usernameValue,
               password: passwordValue,
           })
           const { token } = response.data;
           setToken(token);
           window.location.reload();
       } catch (e) {
           setErrorMessage(e.message);
           console.log(e.status)
           setShowErrorMessage(true)
       };
   };

   function openModal() {
     setIsOpen(true);
   };
 
   function closeModal() {
     setIsOpen(false);
   };
 
   if (user) {
       return (
           <div id="comment-form">
               <h3 style={{padding:'2%',fontWeight:'600'}}>Comment as <span style={{color:"rgba(105, 175, 14, 0.81)"}}>{username||name}</span></h3>
               <label>
                   <textarea rows='4' cols='50' value={commentText} onChange={(event) => setCommentText(event.target.value)} />
               </label>
               <button disabled={!commentText} onClick={() => addComment()}>Comment</button>
           </div>
       )
   } return (
       <div className="comment-form">
           <p className="comment-noUser-holder"  onClick={openModal}>Comment on this blog</p>
           <hr className="divier"/>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <RiCloseLine color="#000" size={20} onClick={closeModal} className="modalCloseIcon"/>
        <p>
        <div  style={{marginBottom:'5%',textAlign:'center'}}>
            {showErrorMessage && <div className="fail">{errorMessage}</div>}
        </div>
        <p className="sign" align="center">Sign in</p>
      <form className="form1"/>
      <input className="input" type="text" align="center" placeholder="Username" value={usernameValue} onChange={e => setUsernameValue(e.target.value)}
      />
      <input className="password" type="password" align="center" placeholder="Password" onChange={e => setPasswordValue(e.target.value)}/>
      <button className="submit" align="center" disabled={!usernameValue || !passwordValue} onClick={onLogInClicked}>Sign in</button>
       <hr/>
       <p style={{marginLeft:"33%"}}>Sign in with google</p>
       <FcGoogle  disabled={!googleOauthUrl} onClick={() => { window.location.href = googleOauthUrl }}
         style={{marginLeft:"40%",fontSize:'3.3em',cursor:"pointer"}}/>
         <p align="center">Sign in with google</p>
       <p className="forgot-link" align="center"><Link to="/forgot-password">Forgot Password?</Link></p>        
        </p>
      </Modal>
    </div>
    
   );
};

export default AddCommentForm;
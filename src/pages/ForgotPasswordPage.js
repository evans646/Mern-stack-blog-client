import React,{ useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export function ForgotPasswordPage() {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [emailValue, setEmailValue] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);

    const onSubmitClicked = async () => {
        try {
            await axios.put(`https://reactfstackblog.herokuapp.com/api/forgot-password/${emailValue}`);
            setSuccess(true);
            setShowSuccessMessage(true)
            setTimeout(() => {
            navigate("/signin")
            },3000)
        } catch (e) {
            setErrorMessage(e.message)
            setShowErrorMessage(true)
            setEmailValue("")
        };
    };
    return success ? (
        <div className= "alert-wrapper">
           <span>
           {showSuccessMessage && <div className="success">Success!</div>}
           </span>
            <p>A reset link has been sent to the email provided</p>
        </div>
    ) : (
     <>         
        <div className={errorMessage ? "alert-wrapper":""}>
             {showErrorMessage && <div className='fail'> {errorMessage}</div>}
        </div>
        <div  className="main">
            <div className="forgot-password">
                <h1>Password reset</h1>
                <p>Enter your email to receive  a reset link</p>
                <label htmlFor="email">
                    <input type="text" id="email" 
                        className="input"
                        minLength="3"
                        value={emailValue}
                        onChange={e => setEmailValue(e.target.value)}
                        placeholder="someone@email.com"/>
                </label>
                <button
                    className="submit"
                    disabled={!emailValue}
                    onClick={onSubmitClicked}
                >Send reset link</button>
            </div>
        </div>
     </>
    );
};
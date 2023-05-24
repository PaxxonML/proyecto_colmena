import './LoginScreen.css';
import FormComponent from './FormComponent';
function LoginScreen(){
    return (
        <body id="particles-js">
            <div className="animated bounceInDown">
                <div className="container">
                    <span className="error animated tada" id="msg"></span>
                    <FormComponent />
                </div>
            </div>
        </body>
    )
}

export default LoginScreen;
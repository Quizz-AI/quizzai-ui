import React from 'react';
import { CustomLabeledInput, MainHeader } from '../components';



const RegisterPage = () => {
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [repEmail, setRepEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [repPassword, setRepPassword] = React.useState<string>("");
    const [emailValid, setEmailValid] = React.useState<boolean>(false);
    const [passwordValid, setPasswordValid] = React.useState<boolean>(false);
    const condtion = name && email && email === repEmail && password && password === repPassword;

    return (
        <div
            style={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            justifyContent: "flex-start",
            flexDirection: "column",
            background: "linear-gradient(to right, #A852C3, #56106D)",
            gap: "10vh",
            }}
        >
            <MainHeader backgroundColor="#1E1E1E"/>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5vh",
                }}
            >
                
                <CustomLabeledInput id="#name" label="Name" style={{ width:"30vw", height:"5vh" }} callback={setName}/>
                <CustomLabeledInput id="#email" label="E-mail" style={{ width:"30vw", height:"5vh" }} callback={setEmail}/>
                <CustomLabeledInput id="#confirmEmail" label="Confirm E-mail" style={{ width:"30vw", height:"5vh" }} callback={setRepEmail}/>
                <CustomLabeledInput id="#password" label="Password" style={{ width:"30vw", height:"5vh" }} callback={setPassword} type='password'/>
                <CustomLabeledInput id="#confirmPassword" label="Confirm Password" style={{ width:"30vw", height:"5vh" }} callback={setRepPassword} type='password'/>

                <button style={{
                        backgroundColor: "#1E1E1E",
                        fontWeight: "bold",
                        color: "white",
                        borderRadius: "3rem",
                        border: "none",
                        padding: "1rem 4rem",
                        fontSize: "120%",
                        fontFamily: "inherit",
                        cursor: condtion ? "pointer" : "not-allowed",
                        outline: "none",
                        transition: "250ms",
                    }}>
                    Register
                </button>
            </div>
            
        </div>
    );
}

export default RegisterPage;
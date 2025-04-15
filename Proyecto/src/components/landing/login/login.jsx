import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import navbar

export const Login = ()=>{

    const navigate = useNavigate();

    const[dataAcces, setdataAcces]= useState({
        email: 'admin01@gmail.com',
        password: 'admin123'
    })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(dataAcces)
        if (email === dataAcces.email && password === dataAcces.password) {
            naviagte('/home')
        } else {
        alert('Datos incorrectos')
    }
    }
    
    return(
        <>
            <div>
                <div>
                    <form action="">
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                            <p></p>
                        </div>
                        <div>
                            <button>

                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )


}

import { Card } from "react-bootstrap"
import Logo from "../../assets/NotasTechLogin.png"
import { useEffect, useState } from "react"
import axios from 'axios';

function Login() {
    const [telaPequena, setTelaPequena] = useState(window.innerWidth < 576)
    const [senha, setSenha] = useState<string>()
    const [email, setEmail] = useState<string>()

    useEffect(() => {
        function tamanhoTela() {
            setTelaPequena(window.innerWidth < 576);
        }

        window.addEventListener('resize', tamanhoTela);

        return () => {
            window.removeEventListener('resize', tamanhoTela);
        };
    }, []);

    function criarUsuario() {
        axios.post(`${process.env.REACT_APP_BASE_URL}/criar/usuario`, {
            senha,
            email
        }, {
            headers: {
                Authorization: 1
            }
        }).then(function (resposta) {
            console.log(resposta)
        }).catch(function (erro) {
            console.log(erro)
        })
    }

    return (
        <>
            <div className="main">

                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">
                                <img src={Logo} alt="" width="60" height="50" />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active rounded text-center" href="/cad/nova/conta"><button className="btn btn-outline-primary btn-sm d-block w-100">Criar uma conta</button></a>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active rounded text-center" href="#infoFIG"><button className="btn btn-outline-secondary btn-sm d-block w-100">Mais sobre o FIG</button></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm col-lg-9 col-md-10 mx-auto">
                            <div className="card">

                                <div className="card-body">

                                    <div className="container">
                                        <div className="row">
                                            <div className={"col text-center" + (telaPequena ? " d-none" : "")}>
                                                <img src={Logo} className="rounded h-100 d-inline-block" style={{ maxWidth: '100%', height: 'auto' }} alt="Logo" />
                                            </div>
                                            <div className="col-sm col-md col-lg">
                                                <form>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control form-control-sm"
                                                            id="exampleInputEmail1"
                                                            aria-describedby="emailHelp"
                                                            placeholder="exemplo@email.com"
                                                            onChange={(event) => {
                                                                setEmail(event.target.value)
                                                            }}
                                                        />
                                                        <small id="emailHelp" className="form-text text-muted">Nunca compartilhe essas informações.</small>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <label >Senha</label>
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-sm"
                                                            id="exampleInputPassword1"
                                                            placeholder="*******"
                                                            onChange={(event) => {
                                                                setSenha(event.target.value)
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="form-check mt-2">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" >Salvar Login</label>
                                                    </div>
                                                    <br />
                                                    <button
                                                        type="submit"
                                                        className="w-75 d-block m-auto btn btn-outline-primary btn-sm"
                                                        onClick={criarUsuario}
                                                    >Entrar
                                                        <i className="bi bi-box-arrow-in-right ms-2"></i>
                                                    </button>
                                                    <br />
                                                    <div className="text-center">
                                                        <a href="#" className="link-danger text-center">Esqueci minha senha</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Login
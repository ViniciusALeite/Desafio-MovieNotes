import  { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input type="text" placeholder="Nome" icon={FiUser} />
                <Input type="email" placeholder="E-mail" icon={FiMail} />
                <Input type="password" placeholder="Senha" icon={FiLock} />
                <Button title="Cadastrar"/>

                <Link to="/" >
                    <FiArrowLeft size={20} />
                    Voltar para o login
                </Link>
            </Form>
            <Background />
        </Container>
    )
}
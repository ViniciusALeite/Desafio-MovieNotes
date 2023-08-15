import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiCamera,FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return (
    <Container>
        <header>
            <Link to="/">
                <FiArrowLeft size={20} />
                <span>Voltar</span>
            </Link>
        </header>
        <Form>
            <Avatar>
                <img src="https://github.com/ViniciusALeite.png" alt="Vinicius Leite" />
                <label htmlFor='avatar'>
                    <FiCamera />
                    <input id="avatar" type="file" />
                </label>
            </Avatar>
            <Input type="text" placeholder="Nome" icon={FiUser}/>
            <Input type="email" placeholder="E-mail" icon={FiMail}/>
            <Input type="password" placeholder="Senha atual" icon={FiLock}/>
            <Input type="password" placeholder="Nova senha" icon={FiLock}/>
            <Button title="Salvar"/>
        </Form>
    </Container>
  );
}
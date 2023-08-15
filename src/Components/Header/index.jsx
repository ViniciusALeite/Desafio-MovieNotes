import { Container, Profile, Search, Content } from './styles';
import { FiSearch } from 'react-icons/fi';
import { Input } from '../../Components/Input';

export function Header() {
    return (
        <Container>
            <Content>
                <h1>Movie Notes</h1>
                <Search>
                    <Input  placeholder="Pesquisar pelo título" icon={FiSearch}/>
                </Search>
                <Profile to="/profile">
                    <div>
                        <strong>Vinícius Araújo</strong>
                        <span>Sair</span>
                    </div>
                    <img src="https://github.com/ViniciusALeite.png" alt="" />
                </Profile>
            </Content>
        </Container>
    )
}
import { Container, NewNote } from './styles';
import { HiPlus } from 'react-icons/hi';
import { Header } from '../../Components/Header';
import { Note } from '../../Components/Note';

export function Home() {
  return (
    <Container>
      <Header />  
      <main>
        <div>
          <h1>Meus filmes</h1>
          <NewNote to="/new" type="button" >
            <HiPlus size={20} />
            Adicionar filme
          </NewNote>
        </div>
        <div className='notes'>
          <Note data={{
            title: 'O Poderoso Chefão',
            classification: "5",
            description: 'Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola. Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.',
            tags: [
              {id: 1, name: 'Drama'},
              {id: 2, name: 'Crime'},
              {id: 3, name: 'Máfia'},
              {id: 4, name: 'Ficção policial'},
            ]
          }}/>
          <Note data={{
            title: 'O Poderoso Chefão',
            classification: "5",
            description: 'Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola. Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.',
            tags: [
              {id: 1, name: 'Drama'},
              {id: 2, name: 'Crime'},
              {id: 3, name: 'Máfia'},
              {id: 4, name: 'Ficção policial'},
            ]
          }}/>
          <Note data={{
            title: 'O Poderoso Chefão',
            classification: "5",
            description: 'Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola. Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.',
            tags: [
              {id: 1, name: 'Drama'},
              {id: 2, name: 'Crime'},
              {id: 3, name: 'Máfia'},
              {id: 4, name: 'Ficção policial'},
            ]
          }}/>
        </div>
      </main>
    </Container>
  )
}
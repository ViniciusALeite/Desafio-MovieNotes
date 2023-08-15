import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../Components/Input";
import { Textarea } from "../../Components/Textarea";
import { Section } from "../../Components/Section";
import { NoteItem } from "../../Components/NoteItem";
import { Button } from "../../Components/Button";

export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <div>
                        <header>
                            <Link to="/" >
                                <FiArrowLeft size={20}/>
                                Voltar
                            </Link>
                            <h1>Novo filme</h1>
                        </header>
                        <div className="NameAndRating">
                            <Input placeholder="Título" />
                            <Input placeholder="Sua nota (de 0 a 5)" />
                        </div>
                        <Textarea placeholder="Observações" />
                    </div>
                    <Section title="Marcadores">
                        <div className="addNewTags">
                            <NoteItem value="React" />
                            <NoteItem isNew placeholder="Novo marcador" />
                        </div>
                    </Section>
                    <div className="buttons">
                        <Button type="button" title="Excluir filme" />
                        <Button type="button" title="Salvar alterações" />
                    </div>
                </Form>
            </main>
        </Container>
    )
}
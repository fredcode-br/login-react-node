import Container from '../Container';
import LinkButton from '../LinkButton';

function Cabecalho() {
   
    return (
        
        <header className="flex bg-sky-800 items-center justify-between py-8 px-16">
            <Container>
                <div className="flex w-full justify-between">
                    <img src="" alt="logo" />
                    <div className="flex gap-2">   
                        <LinkButton text="Login" linkTo="/login" />
                        <LinkButton text="Cadastrar" linkTo="/cadastrar" />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Cabecalho;
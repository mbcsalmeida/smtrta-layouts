import { render } from '../render';
import { ThemeProvider } from './components';
import Logo from "./img/rta2026.png";

const Final = () => {
    return(
        <ThemeProvider>
            <div className='bg-5 w-[1920px] h-[1080px] flex justify-evenly flex-col p-2'>
                <img width={1200} src={Logo} className="m-auto " />
                <h1 className='text-shadow-black text-shadow-md m-auto text-9xl'>Thank you for watching!</h1>
            </div>
        </ThemeProvider>
    );
}

render(<Final />)
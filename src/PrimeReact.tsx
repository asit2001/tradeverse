// tailwind css
import './global.css';

// primreact css
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'; // theme
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css'; 
import { PrimeReactProvider } from 'primereact/api';

type PrimeReactPops = {
    children:React.ReactNode
}

export default function PrimeReact({children}:PrimeReactPops) {
    return <PrimeReactProvider>
        {children}
    </PrimeReactProvider>
}
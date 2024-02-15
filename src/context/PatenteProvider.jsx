import { createContext , useState, useEffect} from 'react';
import { filtrarPatente } from '../Components/util/filtrarPatente';

const PatenteContext = createContext();

const PatenteProvider = ({children}) => {

    const [patente, setPatente] = useState("");
    const [patenteFiltrado, setPatenteFiltrado] = useState({});

    //llamamos a la funcion filtrarPatente
    useEffect(() => {
        setPatenteFiltrado(filtrarPatente(patente));
    }, [patente])

    console.log(patenteFiltrado);
    return(
        <PatenteContext.Provider
          value={{setPatente, usuario : patenteFiltrado}}
        >
            {children}
        </PatenteContext.Provider>
    );
}

export {
    PatenteProvider
}

export default PatenteContext;
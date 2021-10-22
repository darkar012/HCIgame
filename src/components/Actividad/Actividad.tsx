import { useEffect } from "react";
import "./Actividad.scss";
import ActividadContext, { ActividadContextProvider } from "./config/ActividadContext";
import Game from "./src/Game";
import MEDIA from "./config/Routes";

const Actividad = () => {
    return <ActividadContextProvider>
        <ActividadLoad />
    </ActividadContextProvider>
}

const ActividadLoad = () => {
    const { useActividad } = ActividadContext();
    const [actividad] = useActividad();

    useEffect(() => {

      actividad.addPROCESSING(new Game(actividad));
    }, [])


    return <></>


}

export default Actividad;



import { Alert } from "@mui/material";
import { useRouteError } from "react-router-dom";


export function RouteError(){
  const erroRuta= useRouteError();
  return(
    <div className="h-100 w-100 p-4 bg-light">
      <Alert typeof="warning">
      <h1>Ha Ocurrido un error inesperado</h1>
      <p>{erroRuta.statusText || erroRuta.message}</p>
      </Alert>

    </div>
  )

}

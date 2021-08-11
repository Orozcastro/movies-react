import { useLocation } from "react-router-dom";

// const location = useLocation() 
//   console.log(location.search);  // location devuelve ?search=batman del url

// CUSTOM HOOK: useQuery para el buscador
export function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
import styles  from "./Search.module.css"
import { FaSearch } from "react-icons/fa"
import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { useHistory } from "react-router";

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");
    const history = useHistory();  // cambio de ruta con useHistory()

    // borrar el texto de search cuando regresa a la pagina principal
    useEffect(() => {
      setSearchText(search || "")
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault(); //prevenir la accion por default de actualizar la pagina
        history.push("/?search=" + searchText)
    };
    return (
      <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Movies"
          />
          <button className={styles.searchButton} type="submit">
            <FaSearch size={25} />
          </button>
        </div>
      </form>
    );
}

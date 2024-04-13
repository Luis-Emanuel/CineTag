import { createContext, useContext, useState } from "react";

export const FavoritosContexto = createContext();
FavoritosContexto.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([])

  return (
    <FavoritosContexto.Provider
      value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContexto.Provider>
  )
}    

export function useFavoritoContext(){
  const {favorito, setFavorito} = useContext(FavoritosContexto)

  function adicionarFavorito(novoFavorito){
    const favoritarRepetido = favorito.some(item => item.id === novoFavorito.id);

    let novaLista = [...favorito];

    if(!favoritarRepetido){
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista)
  }

  return{
    favorito,
    adicionarFavorito
  }
}
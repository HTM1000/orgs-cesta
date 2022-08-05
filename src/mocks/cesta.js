import Logo from '../../assets/logo.png';

import Tomate from '../../assets/frutas/Tomate.png';
import Brocolis from '../../assets/frutas/Brocolis.png';
import Batata from '../../assets/frutas/Batata.png';
import Pepino from '../../assets/frutas/Pepino.png';
import Abobora from '../../assets/frutas/Abobora.png';

export const cesta = {
  topo: {
    title: "Detalhe da Cesta"
  },
  details: {
    name: "Cesta de Verduras",
    farmIcon: Logo,
    farmName: "Jenny Jack Farm",
    description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    price: "R$ 40,00",
    button: "Comprar"
  }, 
  itens: {
    title: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: Tomate,
      },
      {
        nome: "Brócolis",
        imagem: Brocolis,
      },
      {
        nome: "Batata",
        imagem: Batata,
      },
      {
        nome: "Pepino",
        imagem: Pepino,
      },
      {
        nome: "Abóbora",
        imagem: Abobora,
      }
    ]
  }
}
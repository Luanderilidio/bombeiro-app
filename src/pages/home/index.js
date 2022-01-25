// import * as Styles from './styles'
import PersistentDrawerLeft from "../../components/base";
import Cards from "../../components/cads";
import Logo1 from '../../assets/afogamento.svg'
import Logo2 from '../../assets/domestico.svg'
import Logo3 from '../../assets/veiculo.svg'
import Logo4 from '../../assets/incendio.svg'
import Logo5 from '../../assets/eletrico.svg'
import Logo6 from '../../assets/outros.svg'

export default function Home() {
  return (
    <PersistentDrawerLeft>
      
      <Cards
        name={"Afogamento"}
        icon={Logo1}
      />
      <Cards
        name={"Domestico "}
        icon={Logo2}
      />
      <Cards
        name={"Veiculos"}
        icon={Logo3}
      />
      <Cards
        name={"Incêndio"}
        icon={Logo4}
      />
      <Cards
        name={"Eletrico"}
        icon={Logo5}
      />
      <Cards
        name={"Outros"}
        icon={Logo6}
      />

    </PersistentDrawerLeft>
  );
}

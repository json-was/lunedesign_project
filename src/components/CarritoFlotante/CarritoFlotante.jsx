import { Circulo, Main } from "./CarritoFlotante.style";
import carrito from '@assets/icons/carrito.svg';

export const CarritoFlotante = () => {
  return (
    <Main>
      <Circulo to='/carrito' >
        <img src={carrito}/>
      </Circulo>
    </Main>
  )
}

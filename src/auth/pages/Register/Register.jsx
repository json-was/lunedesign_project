import {
  Boton,
  BottomSideCard,
  BottomSideForm,
  Card,
  ConCuenta,
  Formulario,
  Icon,
  Input,
  InputBox,
  IrACuenta,
  LeftSideForm,
  Main,
  Obligatorio,
  RightSideForm,
  Texto,
  Title,
  TopSideCard,
  Wave,
} from "./Register.style";
import input_user from "@assets/icons/input_user.svg";
import input_padlock from "@assets/icons/input_padlock.svg";
import input_mail from "@assets/icons/input_mail.svg";
import input_map from "@assets/icons/input_map.svg";
import input_phone from "@assets/icons/input_phone.svg";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "@store/auth";

const defaultValues = {
  email: "",
  password: "",
  name: "",
  direccion: "",
  numberPhone: "",
  confirmPassword: "",
};

export const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  // Al presionar el boton de crear cuenta llamara esta función.
  const onSubmit = (data) => {
    // Comprobación de que la contraseña que ingresó en ambos input, sean iguales.
    // Si no es asi, mandara una alerta, advirtiendo que tienen que coincidir ambas contraseñas.
    if (data.password !== data.confirmPassword) return alert('Las contraseñas deben coincidir.');
    // Ingresan los datos como una variable 'Data', las cuales seran mandadas a una función que procesara los datos.
    dispatch(startCreatingUserWithEmailPassword(data));
    // console.log(data);
  };

  return (
    <Main>
      <Wave>
        <Card>
          <TopSideCard>
            <Title>Crear cuenta</Title>
          </TopSideCard>

          {/* Inicio del formulario para la creación de un usuario */}
          {/* Lo que hace onSubmit es que hace es recopilar los datos de los input y mandarlos
          a una funcion llamada handleSubmit. */}
          <Formulario onSubmit={handleSubmit(onSubmit)}>
            <LeftSideForm>
              <Texto>Nombre:</Texto>
              {/* Input para obtener datos del nombre ingresado */}
              <InputBox>
                <Icon src={input_user} />
                <Input
                  // Asignación de que es tipo 'text'
                  type="text"
                  placeholder="Nombre completo"
                  // Register es el responsable de capturar el nombre y hacerlo una variable.
                  {...register("name", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                  })}
                />
                {/* En caso de que haya un error, saltara este mensaje en pantalla. */}
                {errors.name ? (
                  <Obligatorio variant="errorColor">
                    El nombre es obligatorio.
                  </Obligatorio>
                ) : (
                  <Obligatorio>El nombre es obligatorio.</Obligatorio>
                )}
              </InputBox>

              <Texto>Correo:</Texto>
              <InputBox>
                <Icon src={input_mail} />
                <Input
                  // Asignación de que es tipo 'email'
                  type="email"
                  placeholder="example@lorem.com"
                  // Register es el responsable de capturar el correo y hacerlo una variable.
                  {...register("email", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                  })}
                />
                {/* En caso de que haya un error, saltara este mensaje en pantalla. */}
                {errors.email ? (
                  <Obligatorio variant="errorColor">
                    El correo debe contener un @.
                  </Obligatorio>
                ) : (
                  <Obligatorio>El correo debe contener un @.</Obligatorio>
                )}
              </InputBox>

              <Texto>Contraseña:</Texto>
              <InputBox>
                <Icon src={input_padlock} />
                <Input
                  // Asignación de que es tipo 'password'
                  type="password"
                  placeholder="********"
                  // Register es el responsable de capturar la contraseña y hacerlo una variable.
                  {...register("password", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                    // Restringir que tiene que haber escrito 8 letras como minimo.
                    minLength: 8,
                  })}
                />
                {/* En caso de que haya un error, saltara este mensaje en pantalla. */}
                {errors.password ? (
                  <Obligatorio variant="errorColor">
                    La contraseña debe tener mínimo de 8 carácteres.
                  </Obligatorio>
                ) : (
                  <Obligatorio>
                    La contraseña debe tener mínimo de 8 carácteres.
                  </Obligatorio>
                )}
              </InputBox>
            </LeftSideForm>

            <RightSideForm>
              <Texto>Direccion:</Texto>
              <InputBox>
                <Icon src={input_map} />
                <Input
                  // Asignación de que es tipo 'text'
                  type="text"
                  placeholder="ej. Example villa sol #123"
                  // Register es el responsable de capturar la direccion y hacerlo una variable.
                  {...register("direccion", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                  })}
                />
                {/* En caso de que haya un error, saltara este mensaje en pantalla. */}
                {errors.direccion ? (
                  <Obligatorio variant="errorColor">
                    La dirección es obligatoria.
                  </Obligatorio>
                ) : (
                  <Obligatorio>La dirección es obligatoria.</Obligatorio>
                )}
              </InputBox>

              <Texto>Numero telefonico:</Texto>
              <InputBox>
                <Icon src={input_phone} />
                <Input
                  // Asignación de que es tipo 'number'
                  type="number"
                  placeholder="912345678"
                  // Register es el responsable de capturar el numero de telefono y hacerlo una variable.
                  {...register("numberPhone", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                  })}
                />
                {/* En caso de que haya un error, saltara este mensaje en pantalla. */}
                {errors.numberPhone ? (
                  <Obligatorio variant="errorColor">
                    El número es obligatorio.
                  </Obligatorio>
                ) : (
                  <Obligatorio>El número es obligatorio.</Obligatorio>
                )}
              </InputBox>

              <Texto>Confirmar contraseña:</Texto>
              <InputBox>
                <Icon src={input_padlock} />
                <Input
                  // Asignación de que es tipo 'password'
                  type="password"
                  placeholder="********"
                  // Register es el responsable de capturar la contraseña de confirmacion y hacerlo una variable.
                  {...register("confirmPassword", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                    // Restringir que tiene que haber escrito 8 letras como minimo.
                    minLength: 8,
                  })}
                />
                {/* En caso de que haya un error, saltara este mensaje en pantalla. */}
                {errors.confirmPassword ? (
                  <Obligatorio variant="errorColor">
                    La contraseña debe tener mínimo de 8 carácteres.
                  </Obligatorio>
                ) : (
                  <Obligatorio>
                    La contraseña debe tener mínimo de 8 carácteres.
                  </Obligatorio>
                )}
              </InputBox>
            </RightSideForm>

            {/* Boton que manda los datos obtenidos de cada input, hacia la funcion handleSubmit */}
            <BottomSideForm>
              <Boton type="submit">Crear cuenta</Boton>
            </BottomSideForm>
          </Formulario>

          {/* En caso de que ya tenga una cuenta creada, exite este boton, que lo redirige al inicio de sesión. */}
          <BottomSideCard>
            <ConCuenta>
              <Texto>¿Ya tienes cuenta?</Texto>
              <IrACuenta to="/login">Iniciar sesión</IrACuenta>
            </ConCuenta>
          </BottomSideCard>
        </Card>
      </Wave>
    </Main>
  );
};

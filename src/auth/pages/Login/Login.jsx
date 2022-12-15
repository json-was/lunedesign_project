import { useMemo } from "react";
import {
  // BotonOutline,
  BotonSolid,
  Card,
  Formulario,
  Icon,
  Input,
  InputBox,
  Line,
  Main,
  NuevaCuenta,
  Obligatorio,
  SinCuenta,
  Texto,
  Title,
  Wave,
} from "./Login.style";
import input_user from "@assets/icons/input_user.svg";
import input_padlock from "@assets/icons/input_padlock.svg";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { startLoginWithEmailPassword } from "@store/auth/thunks";
// import { findByIdUserData } from "../../../store/auth/thunks";

const defaultForm = {
  email: "",
  password: "",
};

export const Login = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultForm });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  // Al presionar el boton de Inicio de sesión llamara esta función.
  const onSubmit = (data) => {
    // Ingresan los datos como una variable 'Data', las cuales seran mandadas a una función que procesara los datos.
    dispatch(startLoginWithEmailPassword(data));
  };

  return (
    <Main>
      <Wave>
        <Card>
          <Title>Iniciar sesión</Title>
          {/* Inicio del formulario de Inicio de sesión */}
          <Formulario onSubmit={handleSubmit(onSubmit)}>
            <Texto>Correo:</Texto>
            {/* Input para obtener datos del correo ingresado */}
            <InputBox>
              <Icon src={input_user} />
              <Input
                // Asignación de que es tipo 'email'
                type="email"
                placeholder="example@lorem.com"
                // Register es el responsable de capturar el correo y hacerlo una variable.
                {...register("email", {
                  // Restringir que tiene que haber escrito en algo.
                  required: {
                    value: true,
                    message: "Necesitas este campo",
                  },
                  pattern: {
                    // Formato para que detecte que es un correo, viendo si esque tiene un '@'.
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    // Si no es el caso que fuera un correo mandará este mensaje.
                    message: "El formato no es correcto",
                  },
                })}
              />
            </InputBox>
            {/* En caso de que haya un error, saltara este mensaje en pantalla. */}
            {errors.email && <Obligatorio>{errors.email.message}</Obligatorio>}

            <Texto>Contraseña:</Texto>
            <InputBox>
              <Icon src={input_padlock} />
              <Input
                // Asignación de que es tipo 'contraseña'
                type="password"
                placeholder="********"
                // Register es el responsable de capturar la contraseña y hacerlo una variable.
                {...register("password", {
                  // Restringir que tiene que haber escrito en algo.
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  // Formato para que detecte que la contraseña tiene mas de 8 letras.
                  minLength: {
                    value: 8,
                    // Si no es el caso que fuera un correo mandará este mensaje.
                    message: "La contraseña debe tener mínimo de 8 carácteres.",
                  },
                })}
              />
            </InputBox>
            {/* En caso de que haya un error, saltara este mensaje en pantalla. */}
            {errors.password && (
              <Obligatorio>{errors.password.message}</Obligatorio>
            )}

            <Line />

            {/* Boton que manda a llamar la función que hace la verificación de que el usuario existe. */}
            <BotonSolid type="submit" disabled={isAuthenticating}>
              Iniciar sesión
            </BotonSolid>
            {/* En caso de que no tenga una cuenta creada, exite este boton, que lo redirige a la creacion de usuario. */}
            <SinCuenta>
              <Texto>¿No tienes cuenta?</Texto>
              <NuevaCuenta to="/register">Crear cuenta</NuevaCuenta>
            </SinCuenta>
          </Formulario>
        </Card>
      </Wave>
    </Main>
  );
};

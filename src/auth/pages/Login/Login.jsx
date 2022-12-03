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

  const onSubmit = (data) => {
    dispatch(startLoginWithEmailPassword(data));
  };

  return (
    <Main>
      <Wave>
        <Card>
          <Title>Iniciar sesión</Title>

          <Formulario onSubmit={handleSubmit(onSubmit)}>
            <Texto>Correo:</Texto>
            <InputBox>
              <Icon src={input_user} />
              <Input
                type="email"
                placeholder="example@lorem.com"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Necesitas este campo",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El formato no es correcto",
                  },
                })}
              />
            </InputBox>
            {errors.email && <Obligatorio>{errors.email.message}</Obligatorio>}

            <Texto>Contraseña:</Texto>
            <InputBox>
              <Icon src={input_padlock} />
              <Input
                type="password"
                placeholder="********"
                {...register("password", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener mínimo de 8 carácteres.",
                  },
                })}
              />
            </InputBox>
            {errors.password && (
              <Obligatorio>{errors.password.message}</Obligatorio>
            )}

            <Line />

            <BotonSolid type="submit" disabled={isAuthenticating}>
              Iniciar sesión
            </BotonSolid>
            {/* <BotonOutline disabled={isAuthenticating}>
              Iniciar con Google
            </BotonOutline> */}
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

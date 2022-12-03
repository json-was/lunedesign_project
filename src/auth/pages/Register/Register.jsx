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

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) return alert('Las contraseñas deben coincidir.');
    dispatch(startCreatingUserWithEmailPassword(data));
  };

  return (
    <Main>
      <Wave>
        <Card>
          <TopSideCard>
            <Title>Crear cuenta</Title>
          </TopSideCard>

          <Formulario onSubmit={handleSubmit(onSubmit)}>
            <LeftSideForm>
              <Texto>Nombre:</Texto>
              <InputBox>
                <Icon src={input_user} />
                <Input
                  type="text"
                  placeholder="Nombre completo"
                  {...register("name", {
                    required: true,
                  })}
                />
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
                  type="email"
                  placeholder="example@lorem.com"
                  {...register("email", {
                    required: true,
                  })}
                />
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
                  type="password"
                  placeholder="********"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                  })}
                />
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
                  type="text"
                  placeholder="ej. Example villa sol #123"
                  {...register("direccion", {
                    required: true,
                  })}
                />
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
                  type="number"
                  placeholder="912345678"
                  {...register("numberPhone", {
                    required: true,
                  })}
                />
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
                  type="password"
                  placeholder="********"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 8,
                  })}
                />
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

            <BottomSideForm>
              <Boton type="submit">Crear cuenta</Boton>
            </BottomSideForm>
          </Formulario>

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

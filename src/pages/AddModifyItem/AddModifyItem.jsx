import {
  Boton,
  BotonGuardar,
  BottomSideCard,
  CardContainer,
  Formulario,
  ImagenProducto,
  Input,
  InputBox,
  Label,
  LeftSide,
  Main,
  RightSide,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./AddModifyItem.style";
import { useForm } from "react-hook-form";
import calculator from "@assets/calculator.png";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startNewProduct,
  startUploadingFiles,
} from "../../store/productos/thunks";
import {
  clearActiveProduct,
  setNewProduct,
} from "../../store/productos/productoActivoSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const defaultValues = {
  title: "",
  precio: "",
  description: "",
  // imageUrls: [],
};

const modify = false;

export const AddModifyItem = () => {
  const { imagen } = useSelector((state) => state.productoActivo);
  const imagenNotFound =
    "https://res.cloudinary.com/dssccuwn8/image/upload/v1670096155/productos/icon-image-not-found-free-vector_abilre.jpg";
  const dispatch = useDispatch();
  const fileInputRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const navigate = useNavigate();

  // Funcion que nos ayuda a subir la imagen a CLOUDINARY
  const onFileInputChange = ({ target }) => {
    // Si esque no se selecciono una imagen, no ejecutará el codigo.
    if (target.files === 0) return;
    // Funcion que se encargara de subir la imagen
    dispatch(startUploadingFiles(target.files));
  };

  // Al presionar el boton de crear cuenta llamara esta función.
  const onSubmit = (data) => {
    // Ingresan los datos + la imagen como una variable 'Data', las cuales seran mandadas a una función que procesara los datos.
    dispatch(startNewProduct(data));
    setTimeout(() => {
      navigate('/tienda')
    }, 1000)
    // return <Navigate to='/addModifyItem' />

    // console.log(data);
    // Navigate('/addModifyItem')
    // <Navigate to='addModifyItem' />
    // redirect('/addModifyItem')
  };

  useEffect(() => {
    dispatch(clearActiveProduct());
    // navigate('/tienda')
  }, []);

  return (
    <Main>
      <CardContainer>
        <TopSide>
          <TitleBox>
            <SpanLine />
            <Title>{modify ? "Modificar" : "Agregar"} producto</Title>
          </TitleBox>
        </TopSide>
        <BottomSideCard>
          <LeftSide>
            {/* Inicio del formulario para la creación de un producto */}
            {/* Lo que hace onSubmit es que hace es recopilar los datos de los input y mandarlos
            a una funcion llamada handleSubmit. */}
            <Formulario onSubmit={handleSubmit(onSubmit)}>
              <Label>Titulo:</Label>
              {/* Input para obtener datos del titulo ingresado */}
              <Input
                // Asignación de que es tipo 'text'
                type="text"
                placeholder="ej. Tarjetas, Pack fotografia"
                // Register es el responsable de capturar el titulo y hacerlo una variable.
                {...register("title", {
                  // Restringir que tiene que haber escrito en algo.
                  required: true,
                })}
              />
              <Label>Precio:</Label>
              {/* Input para obtener datos del precio ingresado */}
              <Input
                // Asignación de que es tipo 'number'
                type="number"
                placeholder="ej. 590000"
                min={0}
                // Register es el responsable de capturar el precio y hacerlo una variable.
                {...register("precio", {
                  // Restringir que tiene que haber escrito en algo.
                  required: true,
                  validate: (value) => value > 0,
                  valueAsNumber: true,
                })}
              />
              <Label>Descripción:</Label>
              {/* Input para obtener datos de la descripcion ingresado */}
              <InputBox
                // Asignación de que es tipo 'text'
                type="text"
                placeholder="ej. Lo que contiene ese producto es una gran cantidad de trabajo honesto."
                // Register es el responsable de capturar la descripcion y hacerlo una variable.
                {...register("description", {
                  // Restringir que tiene que haber escrito en algo.
                  required: true,
                })}
              />
              {/* Boton para mandar los datos ingresados en los input */}
              <Boton>
              GUARDAR
                {/* <Link to='/tienda'>GUARDAR</Link> */}
              </Boton>
            </Formulario>
          </LeftSide>
          <RightSide>
            <ImagenProducto src={imagen ?? imagenNotFound} />
            {/* Input para obtener una imagen ingresada */}
            <input
              // Asignación de que es tipo 'file'
              type="file"
              // Nos ayudara a darle la referencia a un boton, y poder estilizarlo a
              // nuestro gusto
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={onFileInputChange}
            />
            {/* Boton al que se le hace referencia y que se mostrara en pantalla */}
            <Boton onClick={() => fileInputRef.current.click()}>
              SUBIR IMAGEN
            </Boton>
          </RightSide>
        </BottomSideCard>
      </CardContainer>
    </Main>
  );
};

import {
  Boton,
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
import { startNewProduct, startUploadingFiles } from "../../store/productos/thunks";
import { clearActiveProduct, setNewProduct } from "../../store/productos/productoActivoSlice";

const defaultValues = {
  title: "",
  precio: "",
  description: "",
  // imageUrls: [],
};

const modify = false;

export const AddModifyItem = () => {
  const {imagen} = useSelector(state => state.productoActivo)
  const imagenNotFound = 'https://res.cloudinary.com/dssccuwn8/image/upload/v1670096155/productos/icon-image-not-found-free-vector_abilre.jpg'
  const dispatch = useDispatch();
  const fileInputRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    console.log("hola");
    dispatch(startUploadingFiles(target.files));
  };

  const onSubmit = (data) => {
    dispatch(startNewProduct(data))
  };

  useEffect(() => {
    dispatch(clearActiveProduct())
  }, [])

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
            <Formulario onSubmit={handleSubmit(onSubmit)}>
              {/* <Formulario> */}
              <Label>Titulo:</Label>
              <Input
                type="text"
                placeholder="ej. Tarjetas, Pack fotografia"
                {...register("title", {
                  required: true,
                })}
              />
              {/* <Input placeholder="ej. Tarjetas, Pack fotografia"></Input> */}
              <Label>Precio:</Label>
              <Input
                type="number"
                placeholder="ej. 590000"
                {...register("precio", {
                  required: true,
                })}
              />
              {/* <Input placeholder="ej. 590000"></Input> */}
              <Label>Descripción:</Label>
              <InputBox
                type="text"
                placeholder="ej. Lo que contiene ese producto es una gran cantidad de trabajo honesto."
                {...register("description", {
                  required: true,
                })}
              />
              {/* <InputBox placeholder="ej. Lo que contiene ese producto es una gran cantidad de trabajo honesto."></InputBox> */}
              <Boton>GUARDAR</Boton>
            </Formulario>
          </LeftSide>
          <RightSide>
            <ImagenProducto src={imagen ?? imagenNotFound } />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={onFileInputChange}
              // {...register("files")}
            />
            <Boton onClick={() => fileInputRef.current.click()}>
            {/* <Boton> */}
              SUBIR IMAGEN
            </Boton>
          </RightSide>
        </BottomSideCard>
      </CardContainer>
    </Main>
  );
};

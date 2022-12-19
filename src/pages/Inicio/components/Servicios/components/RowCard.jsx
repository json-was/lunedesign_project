import {
  BackCard,
  BackCardTitle,
  CardContainer,
  CardDescription,
  CardImg,
  FrontCard,
  FrontCardTitle,
} from "./RowCard.style";
import { useNavigate } from "react-router-dom";
import { setActiveProduct } from "@store/productos";
import { useDispatch } from "react-redux";

export const RowCard = ({ title, description, id, precio, imagen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickProduct = () => {
    dispatch(setActiveProduct({ title, description, id, precio, imagen }));
    navigate(`/producto/${id}`);
  };

  return (
    <CardContainer onClick={onClickProduct}>
      {/* FRONT CARD */}
      <FrontCard>
        <CardImg src={imagen} />
        <FrontCardTitle>{title}</FrontCardTitle>
      </FrontCard>
      {/* BACK CARD */}
      <BackCard>
        <BackCardTitle>{title}</BackCardTitle>
        <CardDescription>{description}</CardDescription>
      </BackCard>
    </CardContainer>
  );
};

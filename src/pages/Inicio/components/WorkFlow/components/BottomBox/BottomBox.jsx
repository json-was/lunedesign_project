import {
  BottomContainer,
  Icon,
  IconBox,
  LineIcon,
  Text,
  TextTitle,
  TopContainer,
  WorkBox,
} from "./BottomBox.style";

export const BottomBox = ({ title, img, description }) => {
  const imgVariable = `src/assets/icons/${img}.svg`;

  return (
    <WorkBox>
      <TopContainer>
        <Text>{description}</Text>
        <TextTitle>{title}</TextTitle>
      </TopContainer>
      <BottomContainer>
        <LineIcon>
          <IconBox>
            <Icon src={imgVariable} />
          </IconBox>
        </LineIcon>
      </BottomContainer>
    </WorkBox>
  );
};

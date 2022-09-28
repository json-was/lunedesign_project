import {
  BottomContainer,
  Icon,
  IconBox,
  LineIcon,
  Text,
  TextTitle,
  TopContainer,
  WorkBox,
} from "./TopBox.style";
export const TopBox = ({ title, img, description }) => {
  const imgVariable = `src/assets/icons/${img}.svg`;

  return (
    <WorkBox>
      <TopContainer>
        <LineIcon>
          <IconBox>
            <Icon src={imgVariable} />
          </IconBox>
        </LineIcon>
      </TopContainer>
      <BottomContainer>
        <TextTitle>{title}</TextTitle>
        <Text>{description}</Text>
      </BottomContainer>
    </WorkBox>
  );
};

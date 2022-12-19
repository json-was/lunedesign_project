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
  return (
    <WorkBox>
      <TopContainer>
        <LineIcon>
          <IconBox>
            <Icon src={img} />
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

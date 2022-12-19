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
  return (
    <WorkBox>
      <TopContainer>
        <Text>{description}</Text>
        <TextTitle>{title}</TextTitle>
      </TopContainer>
      <BottomContainer>
        <LineIcon>
          <IconBox>
            <Icon src={img} />
          </IconBox>
        </LineIcon>
      </BottomContainer>
    </WorkBox>
  );
};

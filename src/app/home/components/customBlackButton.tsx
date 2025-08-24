import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";

const CustomButtonStyle = styled.button`
  background-color: ${MyColors.dark3};
  outline: none;
  border-width: 0px;
  cursor: pointer;
  padding: 1.2em 2.5em;
  border-radius: 90px;

  position: relative;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
  color: ${MyColors.green};
`;

export default function CustomBlackButton({
  placeholder,
}: {
  placeholder: string;
}) {
  return (
    <CustomButtonStyle>
      <TextStyle.Button>{placeholder}</TextStyle.Button>
    </CustomButtonStyle>
  );
}

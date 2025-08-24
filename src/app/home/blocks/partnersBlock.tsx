import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";
import { FiLink2 } from "react-icons/fi";
import ProductCard from "../components/productCard";

const BlockContainer = styled.div`
  display: flex;
  /* padding: 2em; */
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  /* height: 100vh; */
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  background-color: ${MyColors.dark2};
  padding: 1em;
  gap: 1em;
  /* border-radius: 1em; */
  flex-direction: column;
`;

const PartnersLayout = styled.div`
  display: flex;
  gap: 1em;
  overflow-x: auto;
`;

const PartnerCard = styled.div`
  /* display: flex; */
  width: 100px;
  height: 100px;
  background-color: ${MyColors.dark3};
`;

export default function PartnersBlock() {
  return (
    <BlockContainer>
      <ProductsContainer>
        <TextStyle.ProductHeader
          style={{
            paddingLeft: "0.5em",
            paddingTop: "0.2em",
            opacity: 0.7,
            fontWeight: 500,
          }}
        >
          Партнеры
        </TextStyle.ProductHeader>
        <PartnersLayout>
          <PartnerCard></PartnerCard>
          <PartnerCard></PartnerCard>

          <PartnerCard></PartnerCard>

          <PartnerCard></PartnerCard>

          <PartnerCard></PartnerCard>

          <PartnerCard></PartnerCard>

          <PartnerCard></PartnerCard>
        </PartnersLayout>
      </ProductsContainer>
    </BlockContainer>
  );
}

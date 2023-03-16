import styled from "styled-components";
import { layout } from "../../styled/theme";

const Wrapper = styled.div`
  ${layout.flexCenter};
  width: 150px;
  height: 60px;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-right: 20px;
`;
const Text = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 24px;
  letter-spacing: 0.1em;
`;

const CategoryBtn = ({ categoryName }) => {
  return (
    <Wrapper>
      <Text>{categoryName}</Text>
    </Wrapper>
  );
};
export default CategoryBtn;

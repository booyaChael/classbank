import styled from "styled-components";
import { layout } from "../../styled/theme";

const Wrapper = styled.div`
  ${layout.flexCenter};
  width: 150px;
  height: 60px;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 5px;
  margin-top: 5px;
  background: ${(props) => props.backgroundColor};
`;
const Text = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 24px;
  letter-spacing: 0.1em;
  color: ${(props) => props.color};
`;

const CategoryBtn = ({
  currentCategory,
  handleCategoryClick,
  categoryName,
}) => {
  return (
    <Wrapper
      onClick={() => handleCategoryClick(categoryName)}
      backgroundColor={currentCategory === categoryName ? "#000000" : "#ffffff"}
    >
      <Text color={currentCategory === categoryName ? "#ffffff" : "#b4b4b4"}>
        {categoryName}
      </Text>
    </Wrapper>
  );
};
export default CategoryBtn;

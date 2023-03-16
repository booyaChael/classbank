import styled from "styled-components";
import { useState, useEffect } from "react";
import CategoryBtn from "./CategoryBtn";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  display: flex;
`;
const InputContentCategory = ({ handleCategoryChange }) => {
  const [currentCategory, setCurrentCategory] = useState("월급");
  const handleCategoryClick = (categoryName) => {
    setCurrentCategory(categoryName);
    handleCategoryChange(categoryName);
  };

  useEffect(() => {
    console.log(currentCategory);
  }, [currentCategory]);

  return (
    <Wrapper>
      <Line>
        <CategoryBtn
          categoryName={"월급"}
          currentCategory={currentCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <CategoryBtn
          categoryName={"상금"}
          currentCategory={currentCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <CategoryBtn
          categoryName={"벌금"}
          currentCategory={currentCategory}
          handleCategoryClick={handleCategoryClick}
        />
      </Line>
      <Line>
        <CategoryBtn
          categoryName={"마켓"}
          currentCategory={currentCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <CategoryBtn
          categoryName={"기타"}
          currentCategory={currentCategory}
          handleCategoryClick={handleCategoryClick}
        />
      </Line>
    </Wrapper>
  );
};
export default InputContentCategory;

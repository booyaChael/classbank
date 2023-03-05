import styled from "styled-components";
import { layout } from "../../styled/theme";
import { useRecoilValue } from "recoil";
import { user } from "../../store";

const Wrapper = styled.div`
  width: 220px;
  height: 75px;
  border-bottom: 1px solid #87898e;
  ${layout.flexCenter};
`;

const Logo = styled.img.attrs({
  src: "../images/Logo.png",
})`
  width: 50px;
  height: 50px;
  margin: 6px;
`;
const Name = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 16px;
  letter-spacing: 0.1em;
  margin: 6px;
  color: #000000;
`;
const Owner = () => {
  const userData = useRecoilValue(user);
  const { user_name } = userData;
  return (
    <Wrapper>
      <Logo />
      <Name>{user_name}</Name>
    </Wrapper>
  );
};
export default Owner;

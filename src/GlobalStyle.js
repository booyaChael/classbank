import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
input {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin: 0;
    border:none;
}
`;
export default GlobalStyles;

import Styled from "styled-components";

const AppButton = Styled.button`
background: #000000;
border: none;
border-radius: 0.5rem;
// box-shadow: 0px 4px 8px rgba(50, 50, 71, 0.06), 0px 4px 4px rgba(50, 50, 71, 0.08);
height: ${(props) => props.buttonHeight};
width: ${(props) => props.buttonWidth};
color: #FFFFFF;
font-weight: 550;
font-size: 0.9rem;
line-height: 22px;
padding: 0.7rem;
cursor:pointer;
span {
    display: flex;
}
img {
    height: 30px;
    width: 30px;
}
`;

export default AppButton;
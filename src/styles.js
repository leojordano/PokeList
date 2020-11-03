const { default: styled } = require("styled-components");

export const ButtonSign = styled.button`
    border: none;
    background-color: ${props => props.theme.color.primary};
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;

        &:after {
            content: 'Login';
            font-size: 16px;
            margin-left: 5px;
        }
`
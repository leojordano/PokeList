import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.text};
    padding: 0px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
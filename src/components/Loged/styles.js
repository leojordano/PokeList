import styled from 'styled-components'

export const Container = styled.div`
    padding: 10px;
    display: flex;
    font-weight: normal;
    font-size: 18px;

        button {
            border: none;
            background-color: ${props => props.theme.color.primary};
            color: white;
            font-size: 25px;
            margin-left: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
`
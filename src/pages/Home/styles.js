import { Link } from 'react-router-dom';
import styled from 'styled-Components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
        "header"
        "content"
    ;

    > main {
        grid-area: content;
        padding: 50px 0;
        background-color: ${({ theme }) => theme.colors.BACKGROUND_800};

        > div {
            max-width: 1137px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 8px;
            
            &::-webkit-scrollbar {
                width: 8px;
            }

            &::-webkit-scrollbar-track {
                border-radius: 20px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: ${({ theme }) => theme.colors.PINK};
                border-radius: 20px;
                max-height: 96px;
                width: 8px;
            }

            > h1 {
                font-weight: 400;
            }
        }

        .notes {
            display: flex;
            flex-direction: column;
            max-height: 720px;
            overflow-y: auto;
            margin-top: 38px;
        }
    }
`

export const NewNote = styled(Link)`
    width: 205px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.PINK};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.BACKGROUND_900};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
`;

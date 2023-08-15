import styled from 'styled-Components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.BACKGROUND_800};
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
        "header"
        "content"
    ;

    > main {
        grid-area: content;
    }
`;

export const Form = styled.div`
    max-width: 1137px;
    height: 580px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;  
    overflow-y: auto;
    padding-right: 8px;

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
   
   > div {
        width: 100%;

        > header {
            > a {
                display: flex;
                align-items: center;
                gap: 4px;
                margin-bottom: 24px;
                text-decoration: none;
                color: ${({ theme }) => theme.colors.PINK};
            }

            > h1 {
                font-size: 32px;
                font-weight: 500;
                color: ${({ theme }) => theme.colors.WHITE};
                margin-bottom: 40px;
            }
        }

        > .NameAndRating {
            display: flex;
            align-items: center;
            gap: 40px;
            margin-bottom: 40px;
        }

        > textarea { 
            margin-bottom: 40px;
        }
   }

   > section {
        width: 100%;

        > .addNewTags {
            display: flex;
            background-color: ${({ theme }) => theme.colors.BACKGROUND_900};
            width: 100%;
            padding: 16px;
            border-radius: 10px;
            gap: 16px;
        }
    }

    > .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        gap: 40px;

        > button {
            width: 100%;
            height: 56px;

            &:first-child {
                background-color: ${({ theme }) => theme.colors.BACKGROUND_900};
                color: ${({ theme }) => theme.colors.PINK};
            }
        }
    }
`;

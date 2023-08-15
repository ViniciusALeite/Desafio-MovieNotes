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
    }
`;

export const Content = styled.div`
    max-width: 1137px;
    height: 580px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;  
    overflow-y: auto;
    padding-right: 4px;

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
   
`;

export const Section = styled.div`
    width: 100%;

    > a {
        display: flex;
        align-items: center;
        gap: 4px;
        color: ${({ theme }) => theme.colors.PINK};
    }

    > .title {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 24px 12px 0px 0px;

        > h1 {
            font-size: 32px;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.WHITE};
            margin-right: 20px;
        }
    }

    > .data-informations {
        display: flex;
        gap: 16px;
        font-size: 16px;
        margin-top: 24px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.WHITE};
        align-items: center;

        > img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
        }

        > .datetime-content {
            display: flex;
            gap: 8px;
            align-items: center;
            font-weight: 400;
            color: ${({ theme }) => theme.colors.WHITE};

            > svg {
                color: ${({ theme }) => theme.colors.PINK};
            }
        }
    }

    > .tags {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 40px;
    }
    
    > p {
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.WHITE};
        margin-top: 40px;
    }
`;

export function Avatar() {
        
}
import styled from 'styled-Components';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.colors.BACKGROUND_700};
    border-radius: 10px;
    padding: 20px;
    border: none;
    margin-top: 38px;
    text-align: justify;

    > div{
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;

        > h1 {
            text-align: left;
            font-weight: 700;
            font-size: 24px;
            color: ${({ theme }) => theme.colors.WHITE};
        }
    }
    

    > span {
        text-align: justify;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.WHITE};
        overflow: auto;
        padding-right: 20px;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;
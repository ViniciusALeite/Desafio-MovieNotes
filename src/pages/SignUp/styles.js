import styled from 'styled-Components';
import backgroundIMG from '../../assets/Rectangle-14.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_800};
`;

export const Form = styled.form`
    max-width: 640px;
    padding: 0 163px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.colors.PINK};
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.GRAY_100};
    } 

    > h2 {
        margin: 48px 0;
        font-size: 24px;
        color: ${({ theme }) => theme.colors.WHITE};
        text-align: left;
    }

    > Button {
        margin-top: 16px;
        width: 100%;
    }

    > a {
        margin-top: 34px;
        color: ${({ theme }) => theme.colors.PINK};
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundIMG}) no-repeat center;
    background-size: cover;
`;
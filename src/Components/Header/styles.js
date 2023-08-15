import styled from 'styled-Components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_800};
    border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY_300};
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1137px;
    margin: 0 auto;
    padding: 20px 0;

    > h1 {
        color: ${({ theme }) => theme.colors.PINK};
    }
`;

export const Search = styled.div`
    width: 630px;
    align-items: center;
    display: flex;
    justify-content: center;

    > input {
        width: 630px;
    }
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    justify-self: end;
    padding: 30px auto;

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;
        text-align: right;
        color: ${({ theme }) => theme.colors.WHITE};

        > span {
            color: ${({ theme }) => theme.colors.WHITE};
            font-size: 12px;
            font-weight: 400;
        }
    }

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
`;  
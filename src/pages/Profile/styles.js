import styled from 'styled-Components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.BACKGROUND_800};

    > header {
        width: 100%;
        height: 144px;
        background-color: ${({theme}) => theme.colors.BACKGROUND_900};
        display: flex;
        align-items: center;
        padding: 0 144px;
        gap: 4px;
        color: ${({theme}) => theme.colors.PINK};

        > a {
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            color: ${({theme}) => theme.colors.PINK};
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 64px auto 0;
    
    > div:nth-child(4) {
        margin-top: 24px;
    }

    > button {
        width: 100%;
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    width: 186px;
    height: 186px;
    border-radius: 50%;
    margin: -160px auto 32px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.colors.PINK};
        position: absolute;
        bottom: 7px;
        right: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        > input {
            display: none;
        }

        > svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.colors.BACKGROUND_900};
        }
    }
`;
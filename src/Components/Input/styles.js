import styled from 'styled-Components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_900};
    color: ${({ theme }) => theme.colors.WHITE};
    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        width: 100%;
        height: 56px;
        padding: 12px;
        color: ${({ theme }) => theme.colors.WHITE};
        background-color: ${({ theme }) => theme.colors.BACKGROUND_900};
        border: none;
        border-radius: 10px;

        &:placeholder {
        color: ${({ theme }) => theme.colors.GRAY_300};
        }
    }

    > svg {
        margin-left: 16px;
        color: ${({ theme }) => theme.colors.GRAY_300};
    }
`;
import styled from 'styled-Components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.GRAY_300};
    border: ${({theme, isNew }) => isNew ? `1px dashed ${theme.colors.GRAY_300}` : 'none'};;
    background-color: ${({theme, isNew }) => isNew ? 'transparent' : theme.colors.BACKGROUND_800};
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.colors.PINK};
        display: flex;
        align-items: center;
    }

    > input {
        height: 56px;
        width: ${({ isNew }) => isNew ? '180px' : '114px'};
        padding: 12px;
        color: ${({ theme }) => theme.colors.WHITE};
        background-color: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.colors.GRAY_300};
        }
    }
`;
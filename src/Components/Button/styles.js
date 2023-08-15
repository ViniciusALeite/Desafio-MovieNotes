import styled from 'styled-Components';

export const Container = styled.button`
    width: 205px;
    justify-content: center;
    color: ${({ theme }) => theme.colors.BACKGROUND_800};
    background-color: ${({ theme }) => theme.colors.PINK};
    display: flex;
    align-items: center;
    gap:4px;
    height: 48px;
    border-radius: 10px;
    padding: 0 12px;
    font-weight: 500;
    border: none;

    &:disabled {
        opacity: 0.6;
    }
`;
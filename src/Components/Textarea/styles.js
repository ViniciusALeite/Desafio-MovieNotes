import styled from 'styled-Components';

export const Container = styled.textarea`
    width: 100%;
    height: 275px;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_900};
    color: ${({ theme }) => theme.colors.GRAY_300};
    border: none;
    resize: none;
    border-radius: 10px;
    padding: 16px;


    &::placeholder {
        color: ${({ theme }) => theme.colors.GRAY_300};
    }
`;
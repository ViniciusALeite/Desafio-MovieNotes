import styled from 'styled-Components';

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 5px;
    margin-right: 6px;
    color: ${({ theme }) => theme.colors.WHITE};
    background-color: ${({ theme }) => theme.colors.BACKGROUND_900};
`;
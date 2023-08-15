import styled from 'styled-Components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.colors.PINK};
`;
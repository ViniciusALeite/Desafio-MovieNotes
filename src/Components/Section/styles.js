import styled from 'styled-Components';

export const Container = styled.section`
    width: 100%;
    
    > h2 {
        color: ${({ theme }) => theme.colors.GRAY_300};
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 24px;
    }
`;
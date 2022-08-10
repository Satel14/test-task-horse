import styled from '@emotion/styled'
export const Horse = styled.div`
transform: translateX(${(props) => props.value}px);
transition: transform  1s ease-in-out;
`;
  
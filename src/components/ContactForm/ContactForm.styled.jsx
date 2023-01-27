import styled from '@emotion/styled';


export const FormContainer = styled.div`
  width:  ${props => props.theme.spacing(100)};
  border: ${(props) => `1px solid ${props.theme.colors.black}`};
  padding: ${props => props.theme.spacing(3)};
`;

export const InputsContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const ErrorText = styled.p`
  color: ${props => props.theme.colors.red};
`;
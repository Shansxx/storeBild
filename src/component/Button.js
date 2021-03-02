import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border: 0.05rem solid var(--lightBlue);
border-color:${props => (props.cart ? 'var(--mainYellow)':'var(--lightBlue)')};
color: ${prop => (prop.cart ? 'var(--mainYellow)' : 'var(--lightBlue)')};
border-radius:0.5rem;
padding: 5px 8px 5px 8px;
cursor:pointer;
margin:5px;
transition:all 0.3s linear; ease-in-out;
&:hover{
    background:  ${prop => prop.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
    color: var(--mainBlue);
}
&:focus{
    outline:none;
}
`;
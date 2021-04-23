import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
padding: 6px 12px;
background: #FAFAFA;
border-radius: 4px;
border: 1px solid rgba(0, 0, 0, 0,3)
transition: all 0.3a ease-in-out;

&:hover, &:focus {
border-color. #FA541C
}
`;
const Input = ({value, setValue, style}) => (
    <StyledInput
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{...style}}
    />
);


export default Input;

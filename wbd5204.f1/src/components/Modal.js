import React from 'react';
import styled from "styled-components";

const StyledModal = styled.div`
	cursor: pointer;
	display:  flex;
	align-items: center;
	justify-content: centerM
	width: 30%; 
	height: 30%; 

	background-color: rgba(0,0,0,0.4);
	`;

const Modal = ({visible,onCancel,onOk,title, children}) => {

    return visible ? (
        <>
            <StyledModal>
                <div id="MyModal">
                    {title}
                    <div id="contentModal">
                        <p>{children}</p>
                        <button id="okModal" onClick={onOk}>Ok</button>
                        <button id="closeModal" onClick={onCancel}>Annuler</button>
                    </div>
                </div>
            </StyledModal>
        </>
    ) : null
};


export default Modal;


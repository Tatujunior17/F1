import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "./Modal";

const StyledList = styled.ul`
	margin: 20px;
	padding: 0;
	list-style-type: none;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.3);

	li{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 6px 12px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);

		&:last-child{
			border-bottom: none;
		}
	
		a{
			color: #Fa541C;
			text-decoration: none;
			font-weight: 700;
		}
	}
`;

const List = ({todos, removeTodo}) => {

    const [modalVisible, setModalVisible] = useState(false)

    const handleCancel = () => setModalVisible(false);

    const handleOk = () => {
        alert('ok');
        setModalVisible(false);
    };

    return (

        <StyledList>
            {todos.length > 0 ? (
                <>
                    {todos.map((todo, index) => (

                        <li key={index}>


                            <Modal visible={modalVisible}
                                   title='Hello'
                                   onCancel={handleCancel}
                                   onOk={handleOk}>
                                {todo}
                            </Modal>

                            <a onClick={() => setModalVisible(true)}>
                                {todo}
                            </a>

                            <a href="#" onClick={() => removeTodo(index)}>X</a>
                        </li>
                    ))}
                </>
            ) : (
                <p style={{textAlign: 'center'}}>Auncun ToDo</p>

            )}
        </StyledList>

    );
};

export default List;

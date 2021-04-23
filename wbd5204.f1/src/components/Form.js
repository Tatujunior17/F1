import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({ addTodo }) => {

    const [value, setValue] = useState('');
    const handleSubmit = event =>{
        event.preventDefault();
        addTodo(value);
        setValue('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
                <h1>Nouveau ToDo</h1>
                <Input value={value} setValue={setValue} style={{marginRight: 5}}/>
                <Button disabled={value.trim().length === 0} type="primary" htmlType="submit">Ajouter</Button>
            </form>
        </>
    );
};

export default Form;

import { useState } from 'react'

const FormAddNewTask = props => {
	const { addNewTask, setFormVisible, setButtonVisible } = props;
    const [values, setValues] = useState({
        title: '',
        description: ''
    });

    const handleChange = (e) => {
        const fieldName = e.target.name
        setValues({...values, [fieldName] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.title) {
            addNewTask(values.title)
        }
        setFormVisible(false)
        setButtonVisible(true)
    };

    

	return (
		<form  className='form' spellCheck='false' onSubmit={handleSubmit}>
			<input 
                className='kanban-input' 
                id='taskTitle' 
                name='title' 
                type='text' 
                value={values.title}
                onChange={handleChange}
            />
			<button className='kanban-submit' type='submit'>Submit</button>
		</form>
	)
}

export default FormAddNewTask;
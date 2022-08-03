import { useState } from 'react'

const FormAddNewTask = props => {
	const { addNewTask, setFormVisible } = props;
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
            addNewTask(values.title, values.description)
        }
        setFormVisible(false)
    };

    

	return (
		<form  className='form' spellCheck='false' onSubmit={handleSubmit}>
			<textarea 
                className='kanban-input kanban-textarea' 
                id='taskTitle' 
                name='title' 
                type='text' 
                placeholder='Enter task title'
                value={values.title}
                onChange={handleChange}
            />
			<textarea 
                className='kanban-input kanban-textarea' 
                id='taskDescription' 
                name='description' 
                placeholder='Enter task description'
                value={values.description}
                onChange={handleChange}
            />
			<button className='kanban-submit' type='submit'>Submit</button>
		</form>
	)
}

export default FormAddNewTask;
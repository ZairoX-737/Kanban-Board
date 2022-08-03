import { useState } from 'react'

const ChangeForm = props => {
	const { setChangeFormVisible, changeTask, title, description } = props;
    const [values, setValues] = useState({
        title: title,
        description: description
    });

    const handleChange = (e) => {
        const fieldName = e.target.name
        setValues({...values, [fieldName] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.title) {
            changeTask(values.title, values.description)
        }
        setChangeFormVisible(false)
    };

	return (
		<form  className='form' spellCheck='false' onSubmit={handleSubmit}>
			<textarea 
                className='kanban-input change-input kanban-textarea' 
                id='taskTitle' 
                name='title'
                type='text'
                placeholder='Enter task title'
                value={values.title}
                onChange={handleChange}
            />
			<textarea 
                className='kanban-input change-input kanban-textarea' 
                id='taskDescription' 
                name='description' 
                placeholder='Enter task description'
                value={values.description}
                onChange={handleChange}
            />
			<button className='kanban-submit change-submit' type='submit'>Submit</button>
		</form>
	)
}

export default ChangeForm;
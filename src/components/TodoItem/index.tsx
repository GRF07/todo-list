import { Todo } from '../../@types/Todo';
import styles from './TodoItem.module.css';
import ReactComponent from '../../assets/trash.svg?react';
import { ChangeEvent, useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

type Props = {
    data: Todo,
    dataIndex: number,
}

export const TodoItem = ({ data, dataIndex }: Props) => {
    const { dispatch } = useContext(TodoContext)

    const handleDeleteTodo = () => dispatch({ type: 'DELETE', payload: { index: dataIndex } })

    const handleToggleIsDoneTodo = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'CHANGE', payload: { index: dataIndex, isDone: ev.target.checked } })
    }

    return (
        <div className={styles.container}>
            <div className={styles.isDoneContainer}>
                <input
                    type='checkbox'
                    className={styles.isDoneInput}
                    checked={data.isDone}
                    onChange={handleToggleIsDoneTodo}
                />
            </div>

            <div className={`${styles.taskTitleContainer} ${data.isDone ? styles.taskDoneTitleContainer : ''}`}>
                {data.title}
            </div>

            <div className={styles.deleteTaskContainer}>
                <button
                    className={styles.deleteTaskBtn}
                    onClick={handleDeleteTodo}
                >
                    <ReactComponent />
                </button>
            </div>
        </div>
    )
}
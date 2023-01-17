const Todoinput = ({todo, setTodo, addTodo }) => {
    return (
        <div className="input-Wrapper">
            <input
                type="text"
                name="todo"
                value={todo}
                placeholder= "create a new todo"
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />
            <button className="add-button" onClick={addTodo}>
                Add
            </button>
        </div>
    )
}

export default Todoinput;
import React, { useRef } from 'react'
import './style.css'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

const  InputField:React.FC<Props> = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <form className='input' onSubmit={(e) =>{
        handleAdd(e);
        inputRef.current?.blur();
      }}>
        <input
        ref={inputRef}
        type="input" className='input__box' placeholder='Enter a task' 
        value={todo}
        onChange={
            (e)=>setTodo(e.target.value)
        }
        />
        <button type="submit" className='input__submit'>Go</button>
      </form>
    </div>
  )
}

export default InputField

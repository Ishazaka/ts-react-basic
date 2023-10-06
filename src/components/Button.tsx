import React, { useState } from 'react';


 interface PropsTypes{
    text: string | boolean | number
    onClick?: () => void
    something ?: boolean
 }

  interface BookList{
    title: string
    price: number
    desc?: string
  }


const Button: React.FC<PropsTypes> = (props) => {
    // const [value, setValue] = useState<BookList>({
    //     title: 'Rome Travel',
    //     price: 0,
    // })

    const [val, setVal] = useState<string | undefined>()
    // const {onClick , text} = props

        const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
              setVal(e.target.value)
        }


      function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
            console.log(e)
      }




    return (
        <div>
     {/* <h3>{value.title} - {value.price}</h3> */}
       
        {/* <button onClick={() => setValue({title: 'USA Travel' , price: 20})} >{text}</button> */}

      <input type='text' onChange={handleClick} placeholder='Enter your name'    />
            <h1>{val}</h1>

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='enter data here'/>

                <button type='submit'>Submit</button>
            </form>
        </div>
       )
}

export default Button







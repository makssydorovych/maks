import React, {ChangeEvent, Dispatch,useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: Dispatch<string>, setName: Dispatch<string>, addUserCallback: Dispatch<string>) => {
    if(name === ""){
        setError("Error")
        setName("")
    }else{

        addUserCallback(name)
        setName(name)}
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: Dispatch<string>) => { // если имя пустое - показать ошибку
    if(name === ""){

        setError("")
    }
}

export const pureOnEnter = ({e, addUser}: { e: React.KeyboardEvent<HTMLInputElement>, addUser: any }) => { // если нажата кнопка Enter - добавить
    if(e.key === "Enter" ){
        addUser(pureAddUser)



    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const userName = e.currentTarget.value
        if (userName) {
            setName(userName)
            setError('')
        } else {
            setName('')
            error && setError('please write your name')
        } // need to fix


    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)

    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter({e: e, addUser: addUser})
    }

    const totalUsers = users.length // need to fix
    const lastUserName = name // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

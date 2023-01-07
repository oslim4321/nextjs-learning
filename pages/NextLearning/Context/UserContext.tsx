import { createContext, useContext, useState } from "react"


export type AuthUser = {
    name: string,
    email: string
}

type userContextProviderProps = {
    children: React.ReactNode;
}
type UserContextValueType = {
    User: null | AuthUser,
    setUser: React.Dispatch<AuthUser | null>
}

export const UserContext = createContext<UserContextValueType>({} as UserContextValueType);

export const UserContextProvider = ({ children }: userContextProviderProps) => {
    // console.log(UserContext, 'tooo')
    const [User, setUser] = useState<AuthUser | null>(null)
    return <UserContext.Provider
        value={{ setUser, User }}
    >{children}</UserContext.Provider>
}

export const GlobalUserContext = () => {
    return useContext(UserContext)
}

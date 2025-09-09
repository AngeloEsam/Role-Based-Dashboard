import {
    createContext,
    ReactNode,
    useEffect,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";
export type User = {
    id: number;
    name: string;
    role: string;
    photo: string;
    phone?: string;
};

export type Client = {
    id: number;
    name: string;
    email: string;
    phone: string;
};



interface ContextType {
    users: User[];
    clients: Client[];
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isEditing: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}
const ContextUseState = createContext<ContextType | undefined>(undefined);
function ContextProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
     const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (!storedUser) {
            navigate("/");
            return;
        }
        setUser(JSON.parse(storedUser));

        fetch("/data/users.json")
            .then((res) => res.json())
            .then((data: User[]) => setUsers(data));

        fetch("/data/clients.json")
            .then((res) => res.json())
            .then((data: Client[]) => setClients(data));
    }, [navigate]);
    return (
        <ContextUseState.Provider
            value={{
                user, setUser, users, clients, isEditing, setIsEditing
            }}
        >
            {children}
        </ContextUseState.Provider>
    );
}

export { ContextProvider, ContextUseState };
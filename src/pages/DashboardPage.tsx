import Stats from "../components/Stats";
import { ContextUseState } from "../context/contextUser";
import { useContext } from "react";

const DashboardPage = () => {

    const { user, users, clients } = useContext(ContextUseState)!;
 

    if (!user) return null;

    return (
        <div>
            <main className="flex-1  p-4 md:p-6">
                <Stats
                    role={user.role}
                    usersCount={users.length}
                    clientsCount={clients.length}
                />
            </main>

        
        </div>
    );
};

export default DashboardPage;

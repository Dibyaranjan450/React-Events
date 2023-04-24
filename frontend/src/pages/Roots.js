import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function Roots() {
    return(
        <div>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Roots;
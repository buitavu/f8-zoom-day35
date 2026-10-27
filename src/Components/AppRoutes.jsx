import { HashRouter , Routes, Route } from "react-router";
import { publicRouter } from "./AppRouter"


function AppRoutes() {
    return ( 

        <HashRouter>
            <Routes>
      {publicRouter.map((router) => {
        const Page = router.component;

        return (
          <Route
            key={router.path}
            path={router.path}
            element={<Page />}
          />
        );
      })}
    </Routes>
        </HashRouter>
    
     );
}

export default AppRoutes;
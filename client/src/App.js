// import ToolsHeader from "./components/toolsheader/toolsheader";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToolsView from "./components/ToolsViewPage/ToolsView";
import ToolsDirectory from "./components/ToolsDirectory/ToolsDirectory";
import Gmail from "./components/Apps/Gmail/Gmail";
import Figma from "./components/Apps/Figma/Figma";
// import Github from "./components/Apps/Github/Github";
import Giphy from "./components/Apps/Giphy/Giphy";
// import Authenticate from "./components/Apps/Figma/subRoutes/Authenticate";
import GoogleDrive from "./components/Apps/GoogleDrive/GoogleDrive";
import FigmaSubRoutes from "./components/Apps/Figma/SubRoute";
// import Layout from "./components/layout/layout";
// import HomeLayoutRoutes from "./components/allroutes/homeRoutesLayout";
// import AppLayoutRoutes from "./components/allroutes/appRoutesLayout";
// import ToolsDirectoryLayout from "./components/allroutes/toolsDirectoryLayout";
import GithubHome from "./components/Apps/Github/containers/GithubHome";
import Githubgivepermission from "./components/Apps/Github/containers/Githubgivepermission";
import GithubInstalled from "./components/Apps/Github/containers/GithubInstalled";
import BaseLayout from "./components/allroutes/baseLayout";

function App() {
  return (
    <div className="flex flex-grow min-h-screen">
      <div className="flex-grow bg-gray-200">
        <BrowserRouter basename="/tools">
          <Switch>
            <BaseLayout>
              <Route exact path="/" component={ToolsView} />
              <Route exact path="/toolsdirectory" component={ToolsDirectory} />
              <Route path="/gmail" component={Gmail} />
              <Route path="/figma/:subroute" component={FigmaSubRoutes} />
              <Route path="/figma" component={Figma} />
              <Route exact path="/github" component={GithubHome} />
              <Route
                exact
                path="/github/githubgivepermission"
                component={Githubgivepermission}
              />
              <Route
                exact
                path="/github/github-installed"
                component={GithubInstalled}
              />
              <Route path="/giphy" component={Giphy} />
              <Route path="/googledrive" component={GoogleDrive} />
            </BaseLayout>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

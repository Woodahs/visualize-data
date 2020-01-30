import React from "react";
import "./app.scss";
import AdDashboardComponent from "./app/modules/ad-dashboard/ad-dashboard.component";

const App = () => {
    return (
        <div className="app">
            <div className="app__container">
                <AdDashboardComponent />
            </div>
        </div>
    );
};

export default App;

import React from "react";
import AdDashboardInfoComponent from "./info/ad-dashboard-info.component";

const AdDashboardComponent = () => {
    return (
        <div className="ad-dashboard">
            <div className="ad-dashboard__info">
                <AdDashboardInfoComponent />
            </div>

            <div className="ad-dashboard__main">
                <div className="ad-dashboard__filters">
                    <p>filters</p>
                </div>

                <div className="ad-dashboard__chart">
                    <p>chart</p>
                </div>
            </div>
        </div>
    );
};

AdDashboardComponent.displayName = "AdDashboardComponent";

export default AdDashboardComponent;

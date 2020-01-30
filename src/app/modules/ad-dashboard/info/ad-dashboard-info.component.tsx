import React from "react";

const AdDashboardInfoComponent = () => {
    return (
        <div className="ad-dashboard-info">
            <p className="ad-dashboard-info__text">- Select zero to N Datasources</p>
            <p className="ad-dashboard-info__text">- Select zero to N Campaigns</p>
            <span className="ad-dashboard-info__text -small">(where zero means "ALL")</span>
            <p className="ad-dashboard-info__text">
                Hitting "Apply", filters the chart to show a timeseries for both Clicks and Impressions for given
                Datasources and Campaigns - logical AND
            </p>
        </div>
    );
};

AdDashboardInfoComponent.displayName = "AdDashboardInfoComponent";

export default AdDashboardInfoComponent;

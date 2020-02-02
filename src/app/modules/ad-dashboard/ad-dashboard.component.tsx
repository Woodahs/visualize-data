import React, {useEffect, useMemo, useState} from "react";
import AdDashboardInfoComponent from "./info/ad-dashboard-info.component";
import adDashboardService from "./ad-dashboard.service";
import AdDashboardChartComponent from "./chart/ad-dashboard-chart.component";
import AdDashboardFiltersComponent from "./filters/ad-dashboard-filters.component";
import AdDashboardData from "./common/ad-dashboard-data";

const AdDashboardComponent = () => {
    const [data, setData] = useState<AdDashboardData>({
        campaigns: [],
        dataSources: [],
        items: [],
    });
    const [selectedDataSources, setSelectedDataSources] = useState<string[]>([]);
    const [selectedCampaign, setSelectedCampaign] = useState("");

    const displayData = useMemo(() => {
        return adDashboardService.getDisplayData(data.items, selectedDataSources, selectedCampaign);
    }, [data, selectedCampaign, selectedDataSources]);

    useEffect(() => {
        adDashboardService.getData().then(response => {
            setData(response);
        });
    }, []);

    useEffect(() => {
        setSelectedDataSources(data.dataSources);
    }, [data.dataSources]);

    return (
        <div className="ad-dashboard">
            <div className="ad-dashboard__info">
                <AdDashboardInfoComponent />
            </div>

            <div className="ad-dashboard__main">
                <div className="ad-dashboard__filters">
                    <AdDashboardFiltersComponent
                        campaignOptions={data.campaigns}
                        selectedCampaign={selectedCampaign}
                        onCampaignChange={setSelectedCampaign}
                        dataSourceOptions={data.dataSources}
                        selectedDataSources={selectedDataSources}
                        onDataSourceChange={setSelectedDataSources}
                    />
                </div>

                <div className="ad-dashboard__chart">
                    <AdDashboardChartComponent data={displayData} />
                </div>
            </div>
        </div>
    );
};

AdDashboardComponent.displayName = "AdDashboardComponent";

export default AdDashboardComponent;

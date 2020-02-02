type AdDashboardFiltersProps = {
    dataSourceOptions: string[];
    selectedDataSources: string[];
    onDataSourceChange: (dataSources: string[]) => void;
    selectedCampaign: string;
    campaignOptions: string[];
    onCampaignChange: (campaign: string) => void;
};

export default AdDashboardFiltersProps;

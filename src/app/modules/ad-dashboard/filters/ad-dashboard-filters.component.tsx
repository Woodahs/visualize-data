import React from "react";
import AdDashboardFiltersProps from "./ad-dashboard-filters.props";
import MultiSelectComponent from "../../../common/components/multi-select/multi-select.component";
import SingleSelectComponent from "../../../common/components/single-select/single-select.component";

const AdDashboardFiltersComponent = (props: AdDashboardFiltersProps) => {
    return (
        <div>
            <p>Filter dimension values</p>
            <p>Datasource</p>
            <MultiSelectComponent
                onChange={props.onDataSourceChange}
                value={props.selectedDataSources}
                options={props.dataSourceOptions}
            />

            <p>Campaign</p>
            <SingleSelectComponent
                onChange={props.onCampaignChange}
                value={props.selectedCampaign}
                options={props.campaignOptions}
            />
        </div>
    );
};

AdDashboardFiltersComponent.displayName = "AdDashboardFiltersComponent";

export default AdDashboardFiltersComponent;

import AdDashboardItemResponse from "./ad-dashboard-item.response";
import AdDashboardItem from "./ad-dashboard-item";

class AdDashboardItemFactory {
    createItemFromResponse(response: AdDashboardItemResponse): AdDashboardItem {
        return {
            campaign: response.campaign,
            clicks: +response.clicks,
            dataSource: response.datasource,
            date: response.date,
            impressions: +response.impressions,
        };
    }
}

const adDashboardItemFactory = new AdDashboardItemFactory();
export default adDashboardItemFactory;

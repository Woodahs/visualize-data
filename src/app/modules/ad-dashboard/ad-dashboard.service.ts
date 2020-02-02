import AdDashboardItem from "./item/ad-dashboard-item";
import adDashboardItemFactory from "./item/ad-dashboard-item.factory";
import adDashboardApiService from "./common/ad-dashboard-api.service";
import AdDashboardData from "./common/ad-dashboard-data";

class AdDashboardService {
    getData(): Promise<AdDashboardData> {
        return adDashboardApiService.getData().then(response => {
            const campaigns = [];
            const dataSources = [];
            const items = [];

            for (let i = 0; i < response.length; i++) {
                if (!response[i].date) {
                    continue;
                }

                items.push(adDashboardItemFactory.createItemFromResponse(response[i]));

                if (dataSources.indexOf(items[i].dataSource) === -1) {
                    dataSources.push(items[i].dataSource);
                }

                if (campaigns.indexOf(items[i].campaign) === -1) {
                    campaigns.push(items[i].campaign);
                }
            }

            return {
                items,
                campaigns,
                dataSources,
            };
        });
    }

    getDisplayData(items: AdDashboardItem[], dataSources: string[], campaign: string): AdDashboardItem[] {
        return this.groupDataByDate(
            items.filter(item => {
                if (campaign && item.campaign !== campaign) {
                    return false;
                }

                return dataSources.indexOf(item.dataSource) !== -1;
            })
        );
    }

    private groupDataByDate(items: AdDashboardItem[]): AdDashboardItem[] {
        const results: AdDashboardItem[] = [];

        let clicksSum = 0;
        let impressionsSum = 0;
        let lastDate = items[0]?.date || "";
        let itemsCount = 0;

        for (let i = 0; i < items.length; i++) {
            clicksSum += items[i].clicks;
            impressionsSum += items[i].impressions;
            itemsCount++;

            if (i === items.length - 1 || items[i + 1].date !== lastDate) {
                results.push({
                    date: lastDate,
                    clicks: Math.round(clicksSum / itemsCount),
                    impressions: Math.round(impressionsSum / itemsCount),
                    dataSource: "",
                    campaign: "",
                });

                if (items[i + 1]) {
                    clicksSum = 0;
                    impressionsSum = 0;
                    lastDate = items[i + 1]?.date || "";
                    itemsCount = 0;
                }
            }
        }

        return results;
    }
}

const adDashboardService = new AdDashboardService();
export default adDashboardService;

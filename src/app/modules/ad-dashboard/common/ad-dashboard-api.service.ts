import AdDashboardDataResponse from "./ad-dashboard-data.response";
import Papa, {ParseError} from "papaparse";

const headerTransformDictionary: {[key: string]: string} = {
    Date: "date",
    Datasource: "datasource",
    Campaign: "campaign",
    Clicks: "clicks",
    Impressions: "impressions",
};

class AdDashboardApiService {
    getData(): Promise<AdDashboardDataResponse> {
        const requestUrl = "//adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv";

        return new Promise((resolve, reject) => {
            Papa.parse(requestUrl, {
                download: true,
                transformHeader: function(header) {
                    return headerTransformDictionary[header] || "";
                },
                header: true,
                error(error: ParseError): void {
                    reject(error);
                },
                complete: function(results) {
                    resolve(results.data);
                },
            });
        });
    }
}

const adDashboardApiService = new AdDashboardApiService();
export default adDashboardApiService;

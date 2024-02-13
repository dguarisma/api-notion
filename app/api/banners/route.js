import { Client, APIErrorCode } from '@notionhq/client';
import { mapBannerData } from '@/lib/mapBannerData';

export async function POST(request) {
    try {

        const { DATABASEID, NOTION_TOKEN } = process.env;
        const notion = new Client({ auth: NOTION_TOKEN })
        const { results } = await notion.databases.query({
            database_id: DATABASEID,
            filter: {
                "property": "Status",
                "select": {
                    "equals": "Activo"
                }
            },
        })
        const response = mapBannerData(results);
        return Response.json(response)
    } catch (error) {
        if (error.code === APIErrorCode.ObjectNotFound) {
            console.error(error)
        } else {
            console.error(error)
        }
    }
}
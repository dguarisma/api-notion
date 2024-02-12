import { Client, APIErrorCode } from '@notionhq/client'

export async function POST(request) {
    try {
        console.log('request', request);

        const DATABASEID = '3773dc283ad44a31a952537fd3834bba';
        const NOTION_TOKEN = 'secret_erhlpWpiRRUOdRPSC67GM2gjW0jgEHwX8LuI5hZpB0T';
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
        console.log('results', results);

        const response = results.map(({ properties }) => ({
            categoryID: properties?.IdUrlBanners?.number || null,
            PlatformBanner: properties?.PlatformBanner?.select?.name || null,
            BannersType: properties?.BannersType?.select?.name || null,
            url: properties?.Imagen.files?.map(archivo => archivo.file.url).join() || '',
            order: properties?.Order?.number || null,
            name: (properties.Name?.title || []).map(title => title.plain_text || null)?.join() || ''
        })).sort((a, b) => (a.order || 0) - (b.order || 0)) ?? []
        return Response.json(response)
    } catch (error) {
        if (error.code === APIErrorCode.ObjectNotFound) {
            console.error(error)
        } else {
            // Other error handling code
            console.error(error)
        }
    }

}
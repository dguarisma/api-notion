export const mapBannerData = (results) =>
    results.map(({ properties }) => ({
        categoryID: properties?.IdUrlBanners?.number || null,
        PlatformBanner: properties?.PlatformBanner?.select?.name || null,
        BannersType: properties?.BannersType?.select?.name || null,
        url: properties?.Imagen.files?.map(archivo => archivo.file.url).join() || '',
        order: properties?.Order?.number || null,
        name: (properties.Name?.title || []).map(title => title.plain_text || null)?.join() || ''
    })).sort((a, b) => (a.order || 0) - (b.order || 0)) ?? []
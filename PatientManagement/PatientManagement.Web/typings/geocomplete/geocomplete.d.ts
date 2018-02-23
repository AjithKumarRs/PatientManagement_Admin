
interface GeoOptions {
    map?: string,
    find?: string,
    details?: string,
    mapOptions?: MapOption,
    types?: string[],
}

interface MapOption extends GeoOptions {
    zoom: number
}

interface JQuery {
    geocomplete(): JQuery;
    geocomplete(options: GeoOptions): JQuery;
}


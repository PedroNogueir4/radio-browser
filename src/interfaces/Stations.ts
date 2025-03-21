export interface Station {
    bitrate: number;
    changeuuid: string;
    clickcount: number;
    clicktimestamp: string;
    clicktimestamp_iso8601: string;
    clicktrend: number;
    codec: string;
    country: string;
    countrycode: string;
    favicon: string;
    geo_distance: number | null;
    geo_lat: number;
    geo_long: number;
    has_extended_info: boolean;
    hls: number;
    homepage: string;
    iso_3166_2: string | null;
    language: string;
    languagecodes: string;
    lastchangetime: string;
    lastchangetime_iso8601: string;
    lastcheckok: number;
    lastcheckoktime: string;
    lastcheckoktime_iso8601: string;
    lastchecktime: string;
    lastchecktime_iso8601: string;
    lastlocalchecktime: string;
    lastlocalchecktime_iso8601: string;
    name: string;
    serveruuid: string;
    ssl_error: number;
    state: string;
    stationuuid: string;
    tags: string;
    url: string;
    url_resolved: string;
    votes: number;
  }
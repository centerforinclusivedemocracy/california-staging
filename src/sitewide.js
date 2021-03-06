// the list of counties which are participating in this siting tool
// countyfp (three-digit FIPS code) is used to link to a GeoJSON entry nmap behaviors
// see also getParticipatingCountyInfo() for a handy-dandy wrapper to fetch one of these county entries by countyfp
//
// datafootnote = optional footnote which will be added to map legend popups for that county
// outoforder = optional message to display in top-left of county page, indicating that this county data are questionable
// exceptlayers = skip these layers when loading the data profile, for counties to opt-out from individual layers
const PARTICIPATING_COUNTIES = [
  { countyfp: "001", name: "Alameda", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "003", name: "Alpine", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "005", name: "Amador", profile: 'fullmodel', },
  { countyfp: "007", name: "Butte*", profile: 'fullexceptsuggested', datafootnote: "Note: Census data may not reflect current population for this county.", outoforder: "Due to recent changes to the county population, we are not providing vote center siting suggestions for this county.", },
  { countyfp: "009", name: "Calaveras", profile: 'fullmodel', },
  { countyfp: "011", name: "Colusa", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "013", name: "Contra Costa", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "015", name: "Del Norte", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "017", name: "El Dorado", profile: 'fullmodel', },
  { countyfp: "019", name: "Fresno", profile: 'fullmodel', },
  { countyfp: "021", name: "Glenn", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "023", name: "Humboldt", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "025", name: "Imperial", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "027", name: "Inyo", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "029", name: "Kern", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "031", name: "Kings", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "033", name: "Lake", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "035", name: "Lassen", profile: 'lite', outoforder:"Vote-by-mail data for this county will be provided soon. Polling location modeling will be provided for this county soon." },
  { countyfp: "037", name: "Los Angeles", profile: 'fullmodel', },
  { countyfp: "039", name: "Madera", profile: 'fullmodel', },
  { countyfp: "041", name: "Marin", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "043", name: "Mariposa", profile: 'fullmodel', },
  { countyfp: "045", name: "Mendocino", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "047", name: "Merced", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "049", name: "Modoc", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "051", name: "Mono", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "053", name: "Monterey", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "055", name: "Napa", profile: 'fullmodel', },
  { countyfp: "057", name: "Nevada", profile: 'fullmodel', },
  { countyfp: "059", name: "Orange", profile: 'fullmodel', },
  { countyfp: "061", name: "Placer", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "063", name: "Plumas", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "065", name: "Riverside", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "067", name: "Sacramento", profile: 'fullmodel', },
  { countyfp: "069", name: "San Benito", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "071", name: "San Bernardino", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "073", name: "San Diego", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "075", name: "San Francisco", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "077", name: "San Joaquin", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "079", name: "San Luis Obispo", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "081", name: "San Mateo", profile: 'fullmodel', },
  { countyfp: "083", name: "Santa Barbara", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "085", name: "Santa Clara", profile: 'fullmodel', },
  { countyfp: "087", name: "Santa Cruz", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "089", name: "Shasta", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "091", name: "Sierra", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "093", name: "Siskiyou", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "095", name: "Solano", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "097", name: "Sonoma", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "099", name: "Stanislaus", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "101", name: "Sutter", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "103", name: "Tehama", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "105", name: "Trinity", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "107", name: "Tulare", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "109", name: "Tuolumne", profile: 'fullmodel', },
  { countyfp: "111", name: "Ventura", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "113", name: "Yolo", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
  { countyfp: "115", name: "Yuba", profile: 'lite', outoforder:"Polling location modeling will be provided for this county soon." },
];

const getParticipatingCountyInfo = function (countyfp) {
    // fetch the county entry, easy; be sure to take a copy because we're about to mutate it
    const entry = PARTICIPATING_COUNTIES.filter(function (c) { return c.countyfp == countyfp; })[0];
    if (! entry) throw new Error(`No county with countyfp = ${countyfp}`);
    if (! DATA_PROFILES[entry.profile]) throw new Error(`County ${countyfp} has invalid profile ${entry.profile}`);

    // add the data profile information (notably layers) for the county
    // then remove any layers where this county is specifically opted-out
    const returnme = Object.assign({}, entry);

    returnme.datalayers = Object.assign({}, DATA_PROFILES[entry.profile]);

    if (returnme.exceptlayers && returnme.exceptlayers.length) {
        returnme.datalayers.suggestedareas = returnme.datalayers.suggestedareas.filter(function (layerinfo) {
            return returnme.exceptlayers.indexOf(layerinfo.id) === -1;
        });
        returnme.datalayers.additionalareas = returnme.datalayers.additionalareas.filter(function (layerinfo) {
            return returnme.exceptlayers.indexOf(layerinfo.id) === -1;
        });
        returnme.datalayers.pointsofinterest = returnme.datalayers.pointsofinterest.filter(function (layerinfo) {
            return returnme.exceptlayers.indexOf(layerinfo.id) === -1;
        });
        returnme.datalayers.sitingcriteria = returnme.datalayers.sitingcriteria.filter(function (layerinfo) {
            return returnme.exceptlayers.indexOf(layerinfo.id) === -1;
        });
    }

    // county-specific data hacks; see also special support for "customgeojsonfile" layers
    /*
    if (countyfp == '000') {
        returnme.datalayers.pointsofinterest.splice(1, 0, DATA_LAYERS.somenewthing);
    }
   */

    // done
    return returnme;
};

// the style for drawing counties onto the statewide overview map,
// with different styles for participating counties vs non-participiating, and the different data profiles
const BOUNDSTYLE_DEFAULT = { fillColor: 'white', weight: 1, opacity: 0.5, color: 'black', fillOpacity: 0.5 };
const BOUNDSTYLE_PARTICIPATING = { fillColor: '#fecd1b', weight: 1, opacity: 0.5, color: 'black', fillOpacity: 0.5 };
const BOUNDSTYLE_FULL = { fillColor: '#fecd1b', weight: 1, opacity: 0.5, color: 'black', fillOpacity: 0.75 };
const BOUNDSTYLE_LITE = { fillColor: '#fecd1b', weight: 1, opacity: 0.5, color: 'black', fillOpacity: 0.33 };
const BOUNDSTYLE_MOUSEOVER = { weight: 5, color: 'black', fillOpacity: 0.15 };

// in county.html to view a single county, the style to use for county boundary
const SINGLECOUNTY_STYLE = { fill: false, weight: 2, opacity: 1, color: 'black' };

// for individual tracts in county view, the base style
const CENSUSTRACT_STYLE = { color: 'black', weight: 1, opacity: 1, fillColor: 'transparent', fillOpacity: 0.8, interactive: false };

// for the squares indicating a tract with unreliable data, the style
const UNRELIABLE_STYLE = { color: 'black', fillColor: 'black', fillOpacity: 0.8, stroke: false, interactive: false };

// to highlight a suggested area circle when its deails are being shown
const HIGHLIGHT_SUGGESTED_AREA = { color: 'yellow', weight: 2, fill: false };

// for circles & tracts with no data, a grey fill
const NODATA_COLOR = '#CCCCCC';

// a list of basemap options for the BasemapBar
const BASEMAP_OPTIONS = [
    {
        type: 'xyz',
        label: 'Map',
        url: 'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGF0YWtpbmQiLCJhIjoiY2pkeG94d2g3MDF1NzJ3cWZyODVpeng1aCJ9.ZQtsFRL8ZroMrlUrmyGM9g',
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    },
    /*
    {
        type: 'xyz',
        label: 'Map',
        url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        attribution: 'Map tiles by <a target="_blank" href="http://www.mapbox.com">MapBox</a>.<br />Data &copy; <a target="_blank" href="http://openstreetmap.org/copyright" target="_blank">OpenStreetMap contributings</a>',
    },
    */
    {
        type: 'xyz',
        label: 'Satellite',
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    },
];

// these color ramps will be used by several layers, which will be defined in DATA_PROFILES
const SCORING_COLOR_RAMP = [ '#f1eef6', '#d7b5d8', '#df65b0', '#dd1c77', '#980043' ];
const CRITERIA_COLOR_RAMP = [ '#ffffcc', '#a1dab4', '#41b6c4', '#2c7fb8', '#253494' ];

// list of site-scoring criteria from all_sites_scored.csv
// we loop over this to calculate stats in a few places, and it's also useful to have it here for documentation
const SITE_SCORING_FIELDS = [
    'dens.cvap.std',  // County Percentage of Voting Age Citizens
    'dens.work.std',  // County Worker Percentage
    'popDens.std',  // Population Density
    'prc.CarAccess.std',  // Percent of Population with Vehicle Access
    'prc.ElNonReg.std',  // Eligible Non-Registered Voter Rate
    'prc.disabled.std',  // Percent Disabled Population
    'prc.latino.std',  // Percent Latino Population
    'prc.nonEngProf.std',  // Percent Limited English Proficient Population
    'prc.pov.std',  // Percent of the Population in Poverty
    'prc.youth.std',  // Percent of Population Youth
    'rate.vbm.std',  // Vote by Mail Rate (Total)
    'dens.poll.std',  // Polling Place Voter Percentage
];


// profiles are what layers to offer for each county, since not all counties get all processing
// define the set of DATA_LAYERS that exist in the universe,
// then DATA_PROFILES which are sets of layers to offer to each county
//
// circle = for circle markers (point CSVs) a L.Path style for the circle, including a radius (meters)
// mapzindex  = for circle markers (point CSVs) their stacking order: low (default), medium, high, highest
// popupnamefield = for the popup when clicking circle markers (point CSVs) which CSV field to use as the name; undefined = no popup
// popuptypefield = for the popup when clicking circle markers (point CSVs) which CSV field to use as the type; may use popuptypetext instead
// popuptypetext = for the popup when clicking circle markers (point CSVs) a fixed string to display as the type; may use popuptypefield to read from CSV
// radiogroup = layers matching the same radiogroup will behave similarly to radio buttons: turning on one will turn off others in this same group
const DATA_LAYERS = {};

DATA_LAYERS.four_day_sites = {
    id: 'four_day_sites',
    title: "Suggested Areas for 4 Day Vote Centers",
    csvfile: 'model_files/four_day_sites.csv',
    circle: { radius: 400, opacity: 0.8, color: 'black', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/four_day_sites_shp.zip',
};
DATA_LAYERS.eleven_day_sites = {
    id: 'eleven_day_sites',
    title: "Suggested Areas for 11 Day Vote Centers",
    csvfile: 'model_files/eleven_day_sites.csv',
    circle: { radius: 400, opacity: 0.8, color: 'black', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/eleven_day_sites_shp.zip',
};
DATA_LAYERS.dropbox_sites = {
    id: 'dropbox_sites',
    title: "Suggested Areas for Ballot Drop Boxes",
    csvfile: 'model_files/dropbox_sites.csv',
    circle: { radius: 400, opacity: 0.8, color: 'red', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'droppoff_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/dropbox_sites_shp.zip',
};
DATA_LAYERS.all_sites_scored = {
    id: 'all_sites_scored',
    title: "All Potential Areas",
    csvfile: 'model_files/all_sites_scored.csv',
    circle: { radius: 400, opacity: 0.8, color: '#fcc5c0', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/all_sites_scored_shp.zip',
};
DATA_LAYERS.additional_sites_model = {
    id: 'additional_sites_model',
    title: "Additional Vote Center Options Based on Model",
    csvfile: 'model_files/additional_sites_model.csv',
    circle: { radius: 400, opacity: 0.8, color: 'blue', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'medium',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/additional_sites_model_shp.zip',
};
DATA_LAYERS.additional_sites_distance = {
    id: 'additional_sites_distance',
    title: "Additional Vote Center Options Based on Distance",
    csvfile: 'model_files/additional_sites_distance.csv',
    circle: { radius: 400, opacity: 0.8, color: 'blue', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'medium',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/additional_sites_distance_shp.zip',
};
DATA_LAYERS.pripoll2020 = {
    id: 'pripoll2020',
    title: "2020 Primary Polling Place Locations",
    csvfile: 'point_files/primary_pollingplaces_2020.csv',
    circle: { radius: 10, color: 'black', fillColor: 'gray', fillOpacity: 0.6, opacity: 0.6, },
    popupnamefield: 'name',
    popuptypetext: '2020 Primary Polling Place Location',
    downloadfile: 'point_files/primary_pollingplaces_2020.csv',
};
DATA_LAYERS.pricenter2020 = {
    id: 'pricenter2020',
    title: "2020 Primary Vote Center Locations",
    csvfile: 'point_files/primary_votecenters_2020.csv',
    circle: { radius: 10, color: 'black', fillColor: 'gray', fillOpacity: 0.6, opacity: 0.6, },
    popupnamefield: 'name',
    popuptypetext: '2020 Primary Vote Center Location',
    downloadfile: 'point_files/primary_votecenters_2020.csv',
};
DATA_LAYERS.transit_stops = {
    id: 'transit_stops',
    title: "Transit Stops",
    csvfile: 'point_files/transit_stops_latlononly.csv',
    circle: { color: 'darkred', fillColor: 'darkred', fillOpacity: 0.6, radius: 10, opacity: 0.6, },
    downloadfile: 'point_files/transit_stops.csv',
};
DATA_LAYERS.cvapdens = {
    id: 'cvapdens',
    title: "County Percentage of Voting Age Citizens",
    scoresource: 'indicatordata', scorefield:  'cvapdens',
    quantilefield: 'cvapdens', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.job_dens = {
    id: 'job_dens',
    title: "County Worker Percentage",
    scoresource: 'indicatordata', scorefield:  'job_dens',
    quantilefield: 'job_dens', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.tot_elignonreg_prc = {
    id: 'tot_elignonreg_prc',
    title: "Eligible Non-Registered Voter Rate",
    scoresource: 'indicatordata', scorefield:  'tot_elignonreg_prc_final',
    quantilefield: 'tot_elignonreg_prc_final' , quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prcdisabled = {
    id: 'prcdisabled',
    title: "Percent Disabled Population",
    scoresource: 'indicatordata', scorefield:  'prcdisabled_final',
    quantilefield: 'prcdisabled_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_nonengprof = {
    id: 'prc_nonengprof',
    title: "Percent Limited English Proficient Population",
    scoresource: 'indicatordata', scorefield:  'prc_nonengprof_final',
    quantilefield: 'prc_nonengprof_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_caraccess_final = {
    id: 'prc_caraccess_final',
    title: "Percent of Population with Vehicle Access",
    scoresource: 'indicatordata', scorefield:  'prc_caraccess_final',
    quantilefield: 'prc_caraccess_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_pov_final = {
    id: 'prc_pov_final',
    title: "Percent of the Population in Poverty",
    scoresource: 'indicatordata', scorefield:  'prc_pov_final',
    quantilefield: 'prc_pov_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_youth_final = {
    id: 'prc_youth_final',
    title: "Percent of the Population Youth",
    scoresource: 'indicatordata', scorefield:  'prc_youth_final',
    quantilefield: 'prc_youth_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.pollvoter_dens = {
    id: 'pollvoter_dens',
    title: "Polling Place Voter Percentage",
    scoresource: 'indicatordata', scorefield:  'pollvoter_dens',
    quantilefield: 'pollvoter_dens', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.popdens = {
    id: 'popdens',
    title: "Population Density (per sq km)",
    scoresource: 'indicatordata', scorefield:  'popdens',
    quantilefield: 'popdens', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'integer',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.vbm_rate_tot = {
    id: 'vbm_rate_tot',
    title: "Vote by Mail Rate (Total)",
    scoresource: 'indicatordata', scorefield:  'vbm_rate_tot',
    quantilefield: 'vbm_rate_tot', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.vbm_rate_asn = {
    id: 'vbm_rate_asn',
    title: "Vote by Mail Rate (Asian-American)",
    scoresource: 'indicatordata', scorefield:  'vbm_rate_asn',
    quantilefield: 'vbm_rate_asn', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.vbm_rate_lat = {
    id: 'vbm_rate_lat',
    title: "Vote by Mail Rate (Latino)",
    scoresource: 'indicatordata', scorefield:  'vbm_rate_lat',
    quantilefield: 'vbm_rate_lat', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.vbm_rate_youth = {
    id: 'vbm_rate_youth',
    title: "Vote by Mail Rate (Youth)",
    scoresource: 'indicatordata', scorefield:  'vbm_rate_youth',
    quantilefield: 'vbm_rate_youth', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_black = {
    id: 'prc_black',
    title: "Percent African-American Population",
    scoresource: 'indicatordata', scorefield: 'prc_black',
    quantilefield: 'prc_black', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_asian = {
    id: 'prc_asian',
    title: "Percent Asian-American Population",
    scoresource: 'indicatordata', scorefield: 'prc_asian',
    quantilefield: 'prc_asian', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_latino = {
    id: 'prc_latino',
    title: "Percent Latino Population",
    scoresource: 'indicatordata', scorefield: 'prc_latino',
    quantilefield: 'prc_latino', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_white = {
    id: 'prc_white',
    title: "Percent White Population",
    scoresource: 'indicatordata', scorefield: 'prc_white',
    quantilefield: 'prc_white', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.poi_govish = {
    id: 'poi_govish',
    title: "Points of Interest (Government)",
    csvfile: 'point_files/poi_govish.csv',
    circle: { radius: 35, color: 'red', fillColor: 'darkorange', fillOpacity: 0.45, opacity: 0.5, },
    popupnamefield: 'name',
    popuptypefield: 'fclass',
    mapzindex: 'highest',
    downloadfile: 'point_files/poi_govish.csv',
};
DATA_LAYERS.poi_misc = {
    id: 'poi_misc',
    title: "Points of Interest (Non-Government)",
    csvfile: 'point_files/poi_misc.csv',
    circle: { radius: 35, color: 'darkred', fillColor: 'darkred', fillOpacity: 0.45, opacity: 0.5, },
    popupnamefield: 'name',
    popuptypefield: 'fclass',
    mapzindex: 'highest',
    downloadfile: 'point_files/poi_misc.csv',
};
DATA_LAYERS.poi = {
    id: 'poi',
    title: "Points of Interest (All)",
    csvfile: 'point_files/poi.csv',
    circle: { radius: 35, color: 'black', fillColor: 'gray', fillOpacity: 0.45, opacity: 0.5, },
    popupnamefield: 'name',
    popuptypefield: 'fclass',
    mapzindex: 'highest',
    downloadfile: 'point_files/poi.csv',
};

// and now the data profiles, which are collections of DATA_LAYERS to offer to each county
// full model = all of the layers
// lite = all layers EXCEPT suggested areas
const DATA_PROFILES = {};

DATA_PROFILES.fullmodel = {
    suggestedareas: [
        DATA_LAYERS.four_day_sites, DATA_LAYERS.eleven_day_sites, DATA_LAYERS.dropbox_sites, DATA_LAYERS.all_sites_scored,
    ],
    additionalareas: [
        DATA_LAYERS.additional_sites_model, DATA_LAYERS.additional_sites_distance,
    ],
    sitingcriteria: [
        DATA_LAYERS.transit_stops,
        DATA_LAYERS.cvapdens, DATA_LAYERS.job_dens,
        DATA_LAYERS.tot_elignonreg_prc,
        DATA_LAYERS.prcdisabled, DATA_LAYERS.prc_nonengprof, DATA_LAYERS.prc_caraccess_final, DATA_LAYERS.prc_pov_final, DATA_LAYERS.prc_youth_final,
        DATA_LAYERS.pollvoter_dens,
        DATA_LAYERS.popdens,
        DATA_LAYERS.vbm_rate_tot, DATA_LAYERS.vbm_rate_asn, DATA_LAYERS.vbm_rate_lat, DATA_LAYERS.vbm_rate_youth,
    ],
    populationdata: [
        DATA_LAYERS.prc_black, DATA_LAYERS.prc_asian, DATA_LAYERS.prc_latino, DATA_LAYERS.prc_white,
    ],
    pointsofinterest: [
        DATA_LAYERS.pricenter2020,DATA_LAYERS.poi_govish, DATA_LAYERS.poi_misc, DATA_LAYERS.poi,
    ],
};

DATA_PROFILES.lite = Object.assign({}, DATA_PROFILES.fullmodel);
DATA_PROFILES.lite.suggestedareas = [];
DATA_PROFILES.lite.additionalareas = [];
DATA_PROFILES.lite.pointsofinterest = [
          DATA_LAYERS.pripoll2020,
];
DATA_PROFILES.lite.sitingcriteria = [
        DATA_LAYERS.cvapdens, DATA_LAYERS.job_dens,
        DATA_LAYERS.tot_elignonreg_prc,
        DATA_LAYERS.prcdisabled, DATA_LAYERS.prc_nonengprof, DATA_LAYERS.prc_caraccess_final, DATA_LAYERS.prc_pov_final, DATA_LAYERS.prc_youth_final,
        DATA_LAYERS.pollvoter_dens,
        DATA_LAYERS.popdens,
        DATA_LAYERS.vbm_rate_tot, DATA_LAYERS.vbm_rate_asn, DATA_LAYERS.vbm_rate_lat, DATA_LAYERS.vbm_rate_youth,
];

DATA_PROFILES.fullexceptsuggested = Object.assign({}, DATA_PROFILES.fullmodel);  // a specific one that's full but we hide the Suggested Areas, but keep others
DATA_PROFILES.fullexceptsuggested.suggestedareas = [];
DATA_PROFILES.fullexceptsuggested.additionalareas = [];


// popup hacks: some counties need random hacks to their popup content, e.g. Los Angeles 2020 Primary Vote Center Locations has a bunch of extra fields
// define this callback-style function to do postprocessing on the HTML of the popup content
const popupContentPostprocessing = function (initialpopuphtml, countyfp, layerinfo, featureproperties) {
    let html = initialpopuphtml;

    if (countyfp == '037' && layerinfo.id == 'pricenter2020') {
        html += '<br />';
        html += `<b>Election Day Votes:</b> ${ featureproperties.ElecDayVotes ? parseInt(featureproperties.ElecDayVotes).toLocaleString() : 'No Data' }`;
        html += '<br />';
        html += `<b>Early Votes:</b> ${ featureproperties.EarlyVotes ? parseInt(featureproperties.EarlyVotes).toLocaleString() : 'No Data' }`;
        html += '<br />';
        html += `<b>Average Wait Time:</b> ${ featureproperties.WaitTimeHr ? featureproperties.WaitTimeHr + ' hours' : 'No Data' }`;
        html += "<p><i>Data provided by the Los Angeles County Registrar's office. Voting patterns could be different in a general election versus a primary.</i></p>";
    }

    return html;
};

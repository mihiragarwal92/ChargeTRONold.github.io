/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/add-to-calendar-button@2.1.2/dist/atcb.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*!
 *  @preserve
 *
 * ++++++++++++++++++++++++++++++++++++++
 * Add to Calendar TimeZones iCal Library
 * ++++++++++++++++++++++++++++++++++++++
 *
 * Version: 1.6.1
 * Creator: Jens Kuerschner (https://jenskuerschner.de)
 * Project: https://github.com/add2cal/timezones-ical-library
 * License: Apache-2.0
 *
 */
const tzlibVersion = "1.6.1";
const tzlibZonesDB = {
    Africa: {
        Abidjan: ["", 0],
        Accra: ["Africa/Abidjan", 0],
        Addis_Ababa: ["Africa/Nairobi", 1],
        Algiers: ["", 2],
        Asmara: ["Africa/Nairobi", 1],
        Asmera: ["Africa/Nairobi", 1],
        Bamako: ["Africa/Abidjan", 0],
        Bangui: ["Africa/Lagos", 3],
        Banjul: ["Africa/Abidjan", 0],
        Bissau: ["", 0],
        Blantyre: ["Africa/Maputo", 4],
        Brazzaville: ["Africa/Lagos", 3],
        Bujumbura: ["Africa/Maputo", 4],
        Cairo: ["", 5],
        Casablanca: ["", 6],
        Ceuta: ["", 7],
        Conakry: ["Africa/Abidjan", 0],
        Dakar: ["Africa/Abidjan", 0],
        Dar_es_Salaam: ["Africa/Nairobi", 1],
        Djibouti: ["Africa/Nairobi", 1],
        Douala: ["Africa/Lagos", 3],
        El_Aaiun: ["", 6],
        Freetown: ["Africa/Abidjan", 0],
        Gaborone: ["Africa/Maputo", 4],
        Harare: ["Africa/Maputo", 4],
        Johannesburg: ["", 8],
        Juba: ["", 4],
        Kampala: ["Africa/Nairobi", 1],
        Khartoum: ["", 4],
        Kigali: ["Africa/Maputo", 4],
        Kinshasa: ["Africa/Lagos", 3],
        Lagos: ["", 3],
        Libreville: ["Africa/Lagos", 3],
        Lome: ["Africa/Abidjan", 0],
        Luanda: ["Africa/Lagos", 3],
        Lubumbashi: ["Africa/Maputo", 4],
        Lusaka: ["Africa/Maputo", 4],
        Malabo: ["Africa/Lagos", 3],
        Maputo: ["", 4],
        Maseru: ["Africa/Johannesburg", 8],
        Mbabane: ["Africa/Johannesburg", 8],
        Mogadishu: ["Africa/Nairobi", 1],
        Monrovia: ["", 0],
        Nairobi: ["", 1],
        Ndjamena: ["", 3],
        Niamey: ["Africa/Lagos", 3],
        Nouakchott: ["Africa/Abidjan", 0],
        Ouagadougou: ["Africa/Abidjan", 0],
        "Porto-Novo": ["Africa/Lagos", 3],
        Sao_Tome: ["", 0],
        Timbuktu: ["Africa/Abidjan", 0],
        Tripoli: ["", 5],
        Tunis: ["", 2],
        Windhoek: ["", 4],
    },
    America: {
        Adak: ["", 9],
        Anchorage: ["", 10],
        Anguilla: ["America/Puerto_Rico", 11],
        Antigua: ["America/Puerto_Rico", 11],
        Araguaina: ["", 12],
        Argentina: {
            Buenos_Aires: ["", 12],
            Catamarca: ["", 12],
            ComodRivadavia: ["America/Argentina/Catamarca", 12],
            Cordoba: ["", 12],
            Jujuy: ["", 12],
            La_Rioja: ["", 12],
            Mendoza: ["", 12],
            Rio_Gallegos: ["", 12],
            Salta: ["", 12],
            San_Juan: ["", 12],
            San_Luis: ["", 12],
            Tucuman: ["", 12],
            Ushuaia: ["", 12],
        },
        Aruba: ["America/Puerto_Rico", 11],
        Asuncion: ["", 13],
        Atikokan: ["America/Panama", 14],
        Atka: ["America/Adak", 9],
        Bahia_Banderas: ["", 15],
        Bahia: ["", 12],
        Barbados: ["", 11],
        Belem: ["", 12],
        Belize: ["", 15],
        "Blanc-Sablon": ["America/Puerto_Rico", 11],
        Boa_Vista: ["", 16],
        Bogota: ["", 17],
        Boise: ["", 18],
        Buenos_Aires: ["America/Argentina/Buenos_Aires", 12],
        Cambridge_Bay: ["", 18],
        Campo_Grande: ["", 16],
        Cancun: ["", 14],
        Caracas: ["", 16],
        Catamarca: ["America/Argentina/Catamarca", 12],
        Cayenne: ["", 12],
        Cayman: ["America/Panama", 14],
        Chicago: ["", 19],
        Chihuahua: ["", 15],
        Ciudad_Juarez: ["", 18],
        Coral_Harbour: ["America/Panama", 14],
        Cordoba: ["America/Argentina/Cordoba", 12],
        Costa_Rica: ["", 15],
        Creston: ["America/Phoenix", 20],
        Cuiaba: ["", 16],
        Curacao: ["America/Puerto_Rico", 11],
        Danmarkshavn: ["", 0],
        Dawson_Creek: ["", 20],
        Dawson: ["", 20],
        Denver: ["", 18],
        Detroit: ["", 21],
        Dominica: ["America/Puerto_Rico", 11],
        Edmonton: ["", 18],
        Eirunepe: ["", 17],
        El_Salvador: ["", 15],
        Ensenada: ["America/Tijuana", 22],
        Fort_Nelson: ["", 20],
        Fort_Wayne: ["America/Indiana/Indianapolis", 21],
        Fortaleza: ["", 12],
        Glace_Bay: ["", 23],
        Godthab: ["America/Nuuk", 24],
        Goose_Bay: ["", 25],
        Grand_Turk: ["", 26],
        Grenada: ["America/Puerto_Rico", 11],
        Guadeloupe: ["America/Puerto_Rico", 11],
        Guatemala: ["", 15],
        Guayaquil: ["", 17],
        Guyana: ["", 16],
        Halifax: ["", 23],
        Havana: ["", 27],
        Hermosillo: ["", 20],
        Indiana: { Indianapolis: ["", 21], Knox: ["", 19], Marengo: ["", 21], Petersburg: ["", 21], Tell_City: ["", 19], Vevay: ["", 21], Vincennes: ["", 21], Winamac: ["", 26] },
        Indianapolis: ["America/Indiana/Indianapolis", 21],
        Inuvik: ["", 18],
        Iqaluit: ["", 21],
        Jamaica: ["", 14],
        Jujuy: ["America/Argentina/Jujuy", 12],
        Juneau: ["", 10],
        Kentucky: { Louisville: ["", 21], Monticello: ["", 21] },
        Knox_IN: ["America/Indiana/Knox", 19],
        Kralendijk: ["America/Puerto_Rico", 11],
        La_Paz: ["", 16],
        Lima: ["", 17],
        Los_Angeles: ["", 22],
        Louisville: ["America/Kentucky/Louisville", 21],
        Lower_Princes: ["America/Puerto_Rico", 11],
        Maceio: ["", 12],
        Managua: ["", 15],
        Manaus: ["", 16],
        Marigot: ["America/Puerto_Rico", 11],
        Martinique: ["", 11],
        Matamoros: ["", 19],
        Mazatlan: ["", 20],
        Mendoza: ["America/Argentina/Mendoza", 12],
        Menominee: ["", 19],
        Merida: ["", 15],
        Metlakatla: ["", 10],
        Mexico_City: ["", 15],
        Miquelon: ["", 28],
        Moncton: ["", 23],
        Monterrey: ["", 15],
        Montevideo: ["", 12],
        Montreal: ["America/Toronto", 21],
        Montserrat: ["America/Puerto_Rico", 11],
        Nassau: ["America/Toronto", 21],
        New_York: ["", 21],
        Nipigon: ["America/Toronto", 21],
        Nome: ["", 10],
        Noronha: ["", 24],
        North_Dakota: { Beulah: ["", 19], Center: ["", 19], New_Salem: ["", 19] },
        Nuuk: ["", 24],
        Ojinaga: ["", 19],
        Panama: ["", 14],
        Pangnirtung: ["America/Iqaluit", 21],
        Paramaribo: ["", 12],
        Phoenix: ["", 20],
        Port_of_Spain: ["America/Puerto_Rico", 11],
        "Port-au-Prince": ["", 21],
        Porto_Acre: ["America/Rio_Branco", 17],
        Porto_Velho: ["", 16],
        Puerto_Rico: ["", 11],
        Punta_Arenas: ["", 12],
        Rainy_River: ["America/Winnipeg", 19],
        Rankin_Inlet: ["", 19],
        Recife: ["", 12],
        Regina: ["", 15],
        Resolute: ["", 29],
        Rio_Branco: ["", 17],
        Rosario: ["America/Argentina/Cordoba", 12],
        Santa_Isabel: ["America/Tijuana", 22],
        Santarem: ["", 12],
        Santiago: ["", 30],
        Santo_Domingo: ["", 11],
        Sao_Paulo: ["", 12],
        Scoresbysund: ["", 31],
        Shiprock: ["America/Denver", 18],
        Sitka: ["", 10],
        St_Barthelemy: ["America/Puerto_Rico", 11],
        St_Johns: ["", 32],
        St_Kitts: ["America/Puerto_Rico", 11],
        St_Lucia: ["America/Puerto_Rico", 11],
        St_Thomas: ["America/Puerto_Rico", 11],
        St_Vincent: ["America/Puerto_Rico", 11],
        Swift_Current: ["", 15],
        Tegucigalpa: ["", 15],
        Thule: ["", 23],
        Thunder_Bay: ["America/Toronto", 21],
        Tijuana: ["", 22],
        Toronto: ["", 21],
        Tortola: ["America/Puerto_Rico", 11],
        Vancouver: ["", 22],
        Virgin: ["America/Puerto_Rico", 11],
        Whitehorse: ["", 20],
        Winnipeg: ["", 19],
        Yakutat: ["", 10],
        Yellowknife: ["", 18],
    },
    Antarctica: {
        Casey: ["", 33],
        Davis: ["", 34],
        DumontDUrville: ["Pacific/Port_Moresby", 35],
        Macquarie: ["", 36],
        Mawson: ["", 37],
        McMurdo: ["Pacific/Auckland", 38],
        Palmer: ["", 12],
        Rothera: ["", 12],
        South_Pole: ["Pacific/Auckland", 38],
        Syowa: ["Asia/Riyadh", 39],
        Troll: ["", 40],
        Vostok: ["Asia/Urumqi", 41],
    },
    Arctic: { Longyearbyen: ["Europe/Berlin", 7] },
    Asia: {
        Aden: ["Asia/Riyadh", 39],
        Almaty: ["", 41],
        Amman: ["", 39],
        Anadyr: ["", 42],
        Aqtau: ["", 37],
        Aqtobe: ["", 37],
        Ashgabat: ["", 37],
        Ashkhabad: ["Asia/Ashgabat", 37],
        Atyrau: ["", 37],
        Baghdad: ["", 39],
        Bahrain: ["Asia/Qatar", 39],
        Baku: ["", 43],
        Bangkok: ["", 34],
        Barnaul: ["", 34],
        Beirut: ["", 44],
        Bishkek: ["", 41],
        Brunei: ["Asia/Kuching", 45],
        Calcutta: ["Asia/Kolkata", 46],
        Chita: ["", 47],
        Choibalsan: ["", 45],
        Chongqing: ["Asia/Shanghai", 48],
        Chungking: ["Asia/Shanghai", 48],
        Colombo: ["", 49],
        Dacca: ["Asia/Dhaka", 41],
        Damascus: ["", 39],
        Dhaka: ["", 41],
        Dili: ["", 47],
        Dubai: ["", 43],
        Dushanbe: ["", 37],
        Famagusta: ["", 50],
        Gaza: ["", 51],
        Harbin: ["Asia/Shanghai", 48],
        Hebron: ["", 51],
        Ho_Chi_Minh: ["", 34],
        Hong_Kong: ["", 52],
        Hovd: ["", 34],
        Irkutsk: ["", 45],
        Istanbul: ["Europe/Istanbul", 39],
        Jakarta: ["", 53],
        Jayapura: ["", 54],
        Jerusalem: ["", 55],
        Kabul: ["", 56],
        Kamchatka: ["", 42],
        Karachi: ["", 57],
        Kashgar: ["Asia/Urumqi", 41],
        Kathmandu: ["", 58],
        Katmandu: ["Asia/Kathmandu", 58],
        Khandyga: ["", 47],
        Kolkata: ["", 46],
        Krasnoyarsk: ["", 34],
        Kuala_Lumpur: ["Asia/Singapore", 45],
        Kuching: ["", 45],
        Kuwait: ["Asia/Riyadh", 39],
        Macao: ["Asia/Macau", 48],
        Macau: ["", 48],
        Magadan: ["", 33],
        Makassar: ["", 59],
        Manila: ["", 60],
        Muscat: ["Asia/Dubai", 43],
        Nicosia: ["", 61],
        Novokuznetsk: ["", 34],
        Novosibirsk: ["", 34],
        Omsk: ["", 41],
        Oral: ["", 37],
        Phnom_Penh: ["Asia/Bangkok", 34],
        Pontianak: ["", 53],
        Pyongyang: ["", 62],
        Qatar: ["", 39],
        Qostanay: ["", 41],
        Qyzylorda: ["", 37],
        Rangoon: ["Asia/Yangon", 63],
        Riyadh: ["", 39],
        Saigon: ["Asia/Ho_Chi_Minh", 34],
        Sakhalin: ["", 33],
        Samarkand: ["", 37],
        Seoul: ["", 62],
        Shanghai: ["", 48],
        Singapore: ["", 45],
        Srednekolymsk: ["", 33],
        Taipei: ["", 48],
        Tashkent: ["", 37],
        Tbilisi: ["", 43],
        Tehran: ["", 64],
        Tel_Aviv: ["Asia/Jerusalem", 55],
        Thimbu: ["Asia/Thimphu", 41],
        Thimphu: ["", 41],
        Tokyo: ["", 65],
        Tomsk: ["", 34],
        Ujung_Pandang: ["Asia/Makassar", 59],
        Ulaanbaatar: ["", 45],
        Ulan_Bator: ["Asia/Ulaanbaatar", 45],
        Urumqi: ["", 41],
        "Ust-Nera": ["", 35],
        Vientiane: ["Asia/Bangkok", 34],
        Vladivostok: ["", 35],
        Yakutsk: ["", 47],
        Yangon: ["", 63],
        Yekaterinburg: ["", 37],
        Yerevan: ["", 43],
    },
    Atlantic: {
        Azores: ["", 31],
        Bermuda: ["", 23],
        Canary: ["", 66],
        Cape_Verde: ["", 67],
        Faeroe: ["Atlantic/Faroe", 66],
        Faroe: ["", 66],
        Jan_Mayen: ["Europe/Berlin", 7],
        Madeira: ["", 66],
        Reykjavik: ["Africa/Abidjan", 0],
        South_Georgia: ["", 24],
        St_Helena: ["Africa/Abidjan", 0],
        Stanley: ["", 12],
    },
    Australia: {
        ACT: ["Australia/Sydney", 36],
        Adelaide: ["", 68],
        Brisbane: ["", 69],
        Broken_Hill: ["", 68],
        Canberra: ["Australia/Sydney", 36],
        Currie: ["Australia/Hobart", 70],
        Darwin: ["", 71],
        Eucla: ["", 72],
        Hobart: ["", 70],
        LHI: ["Australia/Lord_Howe", 73],
        Lindeman: ["", 69],
        Lord_Howe: ["", 73],
        Melbourne: ["", 36],
        North: ["Australia/Darwin", 71],
        NSW: ["Australia/Sydney", 36],
        Perth: ["", 74],
        Queensland: ["Australia/Brisbane", 69],
        South: ["Australia/Adelaide", 68],
        Sydney: ["", 36],
        Tasmania: ["Australia/Hobart", 70],
        Victoria: ["Australia/Melbourne", 36],
        West: ["Australia/Perth", 74],
        Yancowinna: ["Australia/Broken_Hill", 68],
    },
    Brazil: { Acre: ["America/Rio_Branco", 17], DeNoronha: ["America/Noronha", 24], East: ["America/Sao_Paulo", 12], West: ["America/Manaus", 16] },
    Canada: {
        Atlantic: ["America/Halifax", 23],
        Central: ["America/Winnipeg", 19],
        Eastern: ["America/Toronto", 21],
        Mountain: ["America/Edmonton", 18],
        Newfoundland: ["America/St_Johns", 32],
        Pacific: ["America/Vancouver", 22],
        Saskatchewan: ["America/Regina", 15],
        Yukon: ["America/Whitehorse", 20],
    },
    CET: ["", 7],
    Chile: { Continental: ["America/Santiago", 30], EasterIsland: ["Pacific/Easter", 75] },
    CST6CDT: ["", 19],
    Cuba: ["America/Havana", 27],
    EET: ["", 50],
    Egypt: ["Africa/Cairo", 5],
    Eire: ["Europe/Dublin", 76],
    EST: ["", 14],
    EST5EDT: ["", 21],
    Etc: {
        "GMT-0": ["Etc/GMT", 0],
        "GMT-1": ["", 6],
        "GMT-10": ["", 35],
        "GMT-11": ["", 33],
        "GMT-12": ["", 42],
        "GMT-13": ["", 77],
        "GMT-14": ["", 78],
        "GMT-2": ["", 79],
        "GMT-3": ["", 39],
        "GMT-4": ["", 43],
        "GMT-5": ["", 37],
        "GMT-6": ["", 41],
        "GMT-7": ["", 34],
        "GMT-8": ["", 45],
        "GMT-9": ["", 47],
        GMT: ["", 0],
        "GMT+0": ["Etc/GMT", 0],
        "GMT+1": ["", 67],
        "GMT+10": ["", 80],
        "GMT+11": ["", 81],
        "GMT+12": ["", 82],
        "GMT+2": ["", 24],
        "GMT+3": ["", 12],
        "GMT+4": ["", 16],
        "GMT+5": ["", 17],
        "GMT+6": ["", 83],
        "GMT+7": ["", 84],
        "GMT+8": ["", 85],
        "GMT+9": ["", 86],
        GMT0: ["Etc/GMT", 0],
        Greenwich: ["Etc/GMT", 0],
        UCT: ["Etc/UTC", 87],
        Universal: ["Etc/UTC", 87],
        UTC: ["", 87],
        Zulu: ["Etc/UTC", 87],
    },
    Europe: {
        Amsterdam: ["Europe/Brussels", 7],
        Andorra: ["", 7],
        Astrakhan: ["", 43],
        Athens: ["", 50],
        Belfast: ["Europe/London", 88],
        Belgrade: ["", 7],
        Berlin: ["", 7],
        Bratislava: ["Europe/Prague", 7],
        Brussels: ["", 7],
        Bucharest: ["", 50],
        Budapest: ["", 7],
        Busingen: ["Europe/Zurich", 7],
        Chisinau: ["", 89],
        Copenhagen: ["Europe/Berlin", 7],
        Dublin: ["", 76],
        Gibraltar: ["", 7],
        Guernsey: ["Europe/London", 88],
        Helsinki: ["", 50],
        Isle_of_Man: ["Europe/London", 88],
        Istanbul: ["", 39],
        Jersey: ["Europe/London", 88],
        Kaliningrad: ["", 5],
        Kiev: ["Europe/Kyiv", 61],
        Kirov: ["", 39],
        Kyiv: ["", 61],
        Lisbon: ["", 90],
        Ljubljana: ["Europe/Belgrade", 7],
        London: ["", 88],
        Luxembourg: ["Europe/Brussels", 7],
        Madrid: ["", 7],
        Malta: ["", 7],
        Mariehamn: ["Europe/Helsinki", 50],
        Minsk: ["", 39],
        Monaco: ["Europe/Paris", 7],
        Moscow: ["", 91],
        Nicosia: ["Asia/Nicosia", 61],
        Oslo: ["Europe/Berlin", 7],
        Paris: ["", 7],
        Podgorica: ["Europe/Belgrade", 7],
        Prague: ["", 7],
        Riga: ["", 50],
        Rome: ["", 7],
        Samara: ["", 43],
        San_Marino: ["Europe/Rome", 7],
        Sarajevo: ["Europe/Belgrade", 7],
        Saratov: ["", 43],
        Simferopol: ["", 91],
        Skopje: ["Europe/Belgrade", 7],
        Sofia: ["", 50],
        Stockholm: ["Europe/Berlin", 7],
        Tallinn: ["", 50],
        Tirane: ["", 7],
        Tiraspol: ["Europe/Chisinau", 89],
        Ulyanovsk: ["", 43],
        Uzhgorod: ["Europe/Kyiv", 61],
        Vaduz: ["Europe/Zurich", 7],
        Vatican: ["Europe/Rome", 7],
        Vienna: ["", 7],
        Vilnius: ["", 50],
        Volgograd: ["", 39],
        Warsaw: ["", 7],
        Zagreb: ["Europe/Belgrade", 7],
        Zaporozhye: ["Europe/Kyiv", 61],
        Zurich: ["", 7],
    },
    "GB-Eire": ["Europe/London", 88],
    GB: ["Europe/London", 88],
    "GMT-0": ["Etc/GMT", 0],
    GMT: ["Etc/GMT", 0],
    "GMT+0": ["Etc/GMT", 0],
    GMT0: ["Etc/GMT", 0],
    Greenwich: ["Etc/GMT", 0],
    Hongkong: ["Asia/Hong_Kong", 52],
    HST: ["", 92],
    Iceland: ["Africa/Abidjan", 0],
    Indian: {
        Antananarivo: ["Africa/Nairobi", 1],
        Chagos: ["", 41],
        Christmas: ["Asia/Bangkok", 34],
        Cocos: ["Asia/Yangon", 63],
        Comoro: ["Africa/Nairobi", 1],
        Kerguelen: ["Indian/Maldives", 37],
        Mahe: ["Asia/Dubai", 43],
        Maldives: ["", 37],
        Mauritius: ["", 43],
        Mayotte: ["Africa/Nairobi", 1],
        Reunion: ["Asia/Dubai", 43],
    },
    Iran: ["Asia/Tehran", 64],
    Israel: ["Asia/Jerusalem", 55],
    Jamaica: ["America/Jamaica", 14],
    Japan: ["Asia/Tokyo", 65],
    Kwajalein: ["Pacific/Kwajalein", 42],
    Libya: ["Africa/Tripoli", 5],
    MET: ["", 93],
    Mexico: { BajaNorte: ["America/Tijuana", 22], BajaSur: ["America/Mazatlan", 20], General: ["America/Mexico_City", 15] },
    MST: ["", 20],
    MST7MDT: ["", 18],
    Navajo: ["America/Denver", 18],
    "NZ-CHAT": ["Pacific/Chatham", 94],
    NZ: ["Pacific/Auckland", 38],
    Pacific: {
        Apia: ["", 77],
        Auckland: ["", 38],
        Bougainville: ["", 33],
        Chatham: ["", 94],
        Chuuk: ["Pacific/Port_Moresby", 35],
        Easter: ["", 75],
        Efate: ["", 33],
        Enderbury: ["Pacific/Kanton", 77],
        Fakaofo: ["", 77],
        Fiji: ["", 42],
        Funafuti: ["Pacific/Tarawa", 42],
        Galapagos: ["", 83],
        Gambier: ["", 86],
        Guadalcanal: ["", 33],
        Guam: ["", 95],
        Honolulu: ["", 92],
        Johnston: ["Pacific/Honolulu", 92],
        Kanton: ["", 77],
        Kiritimati: ["", 78],
        Kosrae: ["", 33],
        Kwajalein: ["", 42],
        Majuro: ["Pacific/Tarawa", 42],
        Marquesas: ["", 96],
        Midway: ["Pacific/Pago_Pago", 97],
        Nauru: ["", 42],
        Niue: ["", 81],
        Norfolk: ["", 98],
        Noumea: ["", 33],
        Pago_Pago: ["", 97],
        Palau: ["", 47],
        Pitcairn: ["", 85],
        Pohnpei: ["Pacific/Guadalcanal", 33],
        Ponape: ["Pacific/Guadalcanal", 33],
        Port_Moresby: ["", 35],
        Rarotonga: ["", 80],
        Saipan: ["Pacific/Guam", 95],
        Samoa: ["Pacific/Pago_Pago", 97],
        Tahiti: ["", 80],
        Tarawa: ["", 42],
        Tongatapu: ["", 77],
        Truk: ["Pacific/Port_Moresby", 35],
        Wake: ["Pacific/Tarawa", 42],
        Wallis: ["Pacific/Tarawa", 42],
        Yap: ["Pacific/Port_Moresby", 35],
    },
    Poland: ["Europe/Warsaw", 7],
    Portugal: ["Europe/Lisbon", 90],
    PRC: ["Asia/Shanghai", 48],
    PST8PDT: ["", 22],
    ROC: ["Asia/Taipei", 48],
    ROK: ["Asia/Seoul", 62],
    Singapore: ["Asia/Singapore", 45],
    Turkey: ["Europe/Istanbul", 39],
    UCT: ["Etc/UTC", 87],
    Universal: ["Etc/UTC", 87],
    US: {
        Alaska: ["America/Anchorage", 10],
        Aleutian: ["America/Adak", 9],
        Arizona: ["America/Phoenix", 20],
        Central: ["America/Chicago", 19],
        "East-Indiana": ["America/Indiana/Indianapolis", 21],
        Eastern: ["America/New_York", 21],
        Hawaii: ["Pacific/Honolulu", 92],
        "Indiana-Starke": ["America/Indiana/Knox", 19],
        Michigan: ["America/Detroit", 21],
        Mountain: ["America/Denver", 18],
        Pacific: ["America/Los_Angeles", 22],
        Samoa: ["Pacific/Pago_Pago", 97],
    },
    UTC: ["Etc/UTC", 87],
    "W-SU": ["Europe/Moscow", 91],
    WET: ["", 66],
    Zulu: ["Etc/UTC", 87],
};
const tzlibZonesDetailsDB = [
    "20230103T195358Z<n><bs><n><tz>GMT<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>EAT<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>CET<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>WAT<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>CAT<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>EET<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+01<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>CEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>CET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>SAST<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>HDT<n><of>-1000<n><ot>-0900<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>HST<n><of>-0900<n><ot>-1000<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>AKDT<n><of>-0900<n><ot>-0800<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AKST<n><of>-0800<n><ot>-0900<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>AST<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-03<n><of>-0300<n><ot>-0300<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19701004T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700322T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=4SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>EST<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>CST<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-04<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-05<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>MDT<n><of>-0700<n><ot>-0600<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>MST<n><of>-0600<n><ot>-0700<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>MST<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>PDT<n><of>-0800<n><ot>-0700<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>PST<n><of>-0700<n><ot>-0800<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-02<n><of>-0200<n><ot>-0200<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>CST<n><of>-0400<n><ot>-0500<n><s>19701101T010000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0500<n><ot>-0400<n><s>19700308T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
    "20230103T195358Z<n><bd><n><tz>-02<n><of>-0300<n><ot>-0200<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>-03<n><of>-0200<n><ot>-0300<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700405T000000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19700906T000000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SU<n><ed><n>",
    "20230103T195358Z<n><bd><n><tz>+00<n><of>-0100<n><ot>+0000<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>-01<n><of>+0000<n><ot>-0100<n><s>19701025T010000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>NST<n><of>-0230<n><ot>-0330<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>NDT<n><of>-0330<n><ot>-0230<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>+11<n><of>+1100<n><ot>+1100<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+07<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+10<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>+05<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>NZDT<n><of>+1200<n><ot>+1300<n><s>19700927T020000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>NZST<n><of>+1300<n><ot>+1200<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+03<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>+02<n><of>+0000<n><ot>+0200<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>+00<n><of>+0200<n><ot>+0000<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+06<n><of>+0600<n><ot>+0600<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+12<n><of>+1200<n><ot>+1200<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+04<n><of>+0400<n><ot>+0400<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+08<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>IST<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+09<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>CST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+0530<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701024T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700328T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>HKT<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>WIB<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>WIT<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>IDT<n><of>+0200<n><ot>+0300<n><s>19700327T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR<n><ed><n><bs><n><tz>IST<n><of>+0300<n><ot>+0200<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+0430<n><of>+0430<n><ot>+0430<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>PKT<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+0545<n><of>+0545<n><ot>+0545<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>WITA<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>PST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>KST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+0630<n><of>+0630<n><ot>+0630<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+0330<n><of>+0330<n><ot>+0330<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>JST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-01<n><of>-0100<n><ot>-0100<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>ACST<n><of>+1030<n><ot>+0930<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>ACDT<n><of>+0930<n><ot>+1030<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>AEST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>ACST<n><of>+0930<n><ot>+0930<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+0845<n><of>+0845<n><ot>+0845<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+1030<n><of>+1100<n><ot>+1030<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>+11<n><of>+1030<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>AWST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-06<n><of>-0500<n><ot>-0600<n><s>19700404T220000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SA<n><es><n><bd><n><tz>-05<n><of>-0600<n><ot>-0500<n><s>19700905T220000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SA<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>IST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><es><n><bd><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>+13<n><of>+1300<n><ot>+1300<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+14<n><of>+1400<n><ot>+1400<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>+02<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-10<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-11<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-12<n><of>-1200<n><ot>-1200<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-06<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-07<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-08<n><of>-0800<n><ot>-0800<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-09<n><of>-0900<n><ot>-0900<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>UTC<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>BST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>",
    "20230103T195358Z<n><bs><n><tz>MSK<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>HST<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>MEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>MET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>+1345<n><of>+1245<n><ot>+1345<n><s>19700927T024500<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>+1245<n><of>+1345<n><ot>+1245<n><s>19700405T034500<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>ChST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>-0930<n><of>-0930<n><ot>-0930<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bs><n><tz>SST<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>",
    "20230103T195358Z<n><bd><n><tz>+12<n><of>+1100<n><ot>+1200<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>+11<n><of>+1200<n><ot>+1100<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
];
function tzlib_get_content(t) {
    const e = t.split("/");
    if (
        (e.length === 3 && (!tzlibZonesDB[`${e[0]}`] || !tzlibZonesDB[`${e[0]}`][`${e[1]}`] || !tzlibZonesDB[`${e[0]}`][`${e[1]}`][`${e[2]}`])) ||
        (e.length === 2 && (!tzlibZonesDB[`${e[0]}`] || !tzlibZonesDB[`${e[0]}`][`${e[1]}`])) ||
        (e.length === 1 && !tzlibZonesDB[`${e[0]}`])
    ) {
        console.error("Given timezone not valid.");
        return "";
    }
    if (e.length === 3) {
        return [tzlibZonesDB[`${e[0]}`][`${e[1]}`][`${e[2]}`][0], tzlib_enrich_data(tzlibZonesDetailsDB[tzlibZonesDB[`${e[0]}`][`${e[1]}`][`${e[2]}`][1]])];
    }
    if (e.length === 2) {
        return [tzlibZonesDB[`${e[0]}`][`${e[1]}`][0], tzlib_enrich_data(tzlibZonesDetailsDB[tzlibZonesDB[`${e[0]}`][`${e[1]}`][1]])];
    }
    return [tzlibZonesDB[`${e[0]}`][0], tzlib_enrich_data(tzlibZonesDetailsDB[tzlibZonesDB[`${e[0]}`][1]])];
}
function tzlib_enrich_data(t) {
    const e = { "<br>": "<n>", "TZNAME:": "<tz>", "TZOFFSETFROM:": "<of>", "TZOFFSETTO:": "<ot>", "DTSTART:": "<s>", "RRULE:": "<r>", "BEGIN:DAYLIGHT": "<bd>", "END:DAYLIGHT": "<ed>", "BEGIN:STANDARD": "<bs>", "END:STANDARD": "<es>" };
    for (const [a, o] of Object.entries(e)) {
        t = t.replaceAll(o, a);
    }
    return t;
}
function tzlib_get_ical_block(t, e = false) {
    const a = tzlib_get_content(t);
    if (a[1] == null || a[1] == "") {
        return "";
    }
    const o = (function () {
        if (a[0] == "") {
            return t;
        } else {
            return a[0];
        }
    })();
    const n = "TZID=" + o;
    const i = ["BEGIN:VTIMEZONE\r\nTZID:" + o + "\r\nX-LIC-LOCATION:" + o + "\r\nLAST-MODIFIED:" + a[1].replace(/[^\w_\-:,;=+/<br>]/g, "").replace(/<br>/g, "\r\n") + "END:VTIMEZONE", n];
    if (e) {
        return JSON.stringify(i);
    }
    return i;
}
function tzlib_get_offset(t, e, a) {
    const o = tzlib_get_content(t);
    if (o[1] == null || o[1] == "") {
        return "";
    }
    if (!e.match(/^\d{4}-\d{2}-\d{2}$/)) {
        console.error("offset calculation failed: date misspelled [-> YYYY-MM-DD]");
        return "";
    }
    if (!a.match(/^\d{2}:\d{2}$/)) {
        console.error("offset calculation failed: time misspelled [-> hh:mm]");
        return "";
    }
    if (!o[1].match(/BEGIN:DAYLIGHT/i)) {
        return o[1].match(/TZOFFSETTO:([+|-]\d{4})/i)[1];
    }
    const n = e + "T" + a + ":00";
    const i = new Date(n);
    const r = i.getFullYear();
    const l = i.getMonth() + 1;
    const c = i.getDate();
    const s = i.getHours();
    const d = o[1].replace(/[^\w_\-:,;=+/<br>]/g, "").split("<br>");
    const b = { 1: {}, 2: {} };
    let u = 0;
    for (let a = 0; a < d.length; a++) {
        if (d[`${a}`].startsWith("TZOFFSETTO")) {
            u++;
            b[`${u}`].offset = d[`${a}`].split(":")[1];
        }
        if (d[`${a}`].startsWith("DTSTART")) {
            b[`${u}`].hour = parseInt(d[`${a}`].substr(17, 2));
        }
        if (d[`${a}`].startsWith("RRULE")) {
            let t = d[`${a}`].split(";");
            let e = parseInt(t[1].split("=")[1]);
            b[`${u}`].month = parseInt(e);
            b[`${u}`].day = t[2].split("=")[1];
        }
    }
    if (b[1].month > b[2].month) {
        [b[1], b[2]] = [b[2], b[1]];
    }
    if (l != b[1].month && l != b[2].month) {
        if (l < b[1].month || l > b[2].month) {
            return b[2].offset;
        } else {
            return b[1].offset;
        }
    }
    const m = (function () {
        return Object.keys(b).find((t) => b[`${t}`].month == l);
    })();
    const p = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const g = new Date(r, l, 0).getDate();
    let h = new Date(r, l - 1, 1).getDay();
    const f = { SU: {}, MO: {}, TU: {}, WE: {}, TH: {}, FR: {}, SA: {} };
    for (let t = 1; t <= g; t++) {
        const k = Object.keys(f[p[`${h}`]]).length + 1;
        f[p[`${h}`]][`${k}`] = t;
        h++;
        if (h == 7) {
            h = 0;
        }
    }
    const x = (function () {
        if (b[`${m}`].day[0] == "-") {
            const t = b[`${m}`].day.substr(2, 2);
            const e = Object.keys(f[`${t}`]).length + 1 - parseInt(b[`${m}`].day[1]);
            return f[`${t}`][`${e}`];
        } else {
            const t = b[`${m}`].day.substr(1, 2);
            return f[`${t}`][b[`${m}`].day[0]];
        }
    })();
    if (c > x || (c == x && s >= b[`${m}`].hour)) {
        return b[`${m}`].offset;
    }
    const v = (function () {
        if (m == 1) {
            return 2;
        } else {
            return 1;
        }
    })();
    return b[`${v}`].offset;
}
let tzlibZoneNames = [];
function tzlib_get_timezones(t = false) {
    if (tzlibZoneNames.length == 0) {
        tzlibZoneNames = (function () {
            let t = [];
            for (const [e, a] of Object.entries(tzlibZonesDB)) {
                if (typeof a === "object" && !Array.isArray(a)) {
                    for (const [o, n] of Object.entries(a)) {
                        if (typeof n === "object" && !Array.isArray(n)) {
                            for (const [i] of Object.entries(n)) {
                                t.push(e + "/" + o + "/" + i);
                            }
                        } else {
                            t.push(e + "/" + o);
                        }
                    }
                } else {
                    t.push(e);
                }
            }
            return t;
        })();
    }
    if (t) {
        return JSON.stringify(tzlibZoneNames);
    }
    return tzlibZoneNames;
}
/*!
 *  @preserve
 *
 *  ++++++++++++++++++++++
 *  Add to Calendar Button
 *  ++++++++++++++++++++++
 *
 *  Version: 2.1.2
 *  Creator: Jens Kuerschner (https://jenskuerschner.de)
 *  Project: https://github.com/add2cal/add-to-calendar-button
 *  License: Elastic License 2.0 (ELv2) (https://github.com/add2cal/add-to-calendar-button/blob/main/LICENSE.txt)
 *  Note:    DO NOT REMOVE THE COPYRIGHT NOTICE ABOVE!
 *
 */ const atcbVersion = "2.1.2";
const atcbCssTemplate = {
    default:
        ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000; --list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--btn-shadow-active:rgba(255 255 255 / 7%) -12px -5px 23px -8px,rgba(255 255 255 / 8%) -7px -5px 18px -3px,rgba(0 0 0 / 70%) 2px 5px 19px -1px,rgba(0 0 0 / 60%) 3px 3px 22px -3px;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (max-width:991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (max-width:575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:6px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:.13em;max-width:350px;min-width:10em;padding:.65em 1em;position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus,.atcb-button:hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover)}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:focus,.atcb-button.atcb-single:hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);margin:0;padding:.78em 1.13em}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:4px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 4px;position:absolute;z-index:14000090}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000;max-width:max-content}.atcb-list{border-radius:0 0 6px 6px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 6px 6px}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:1.25em}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:6px 6px 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:6px}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:1.25em}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:.8em}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:6px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:6px 6px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}@media (max-width:575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1em 2em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 6px 6px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:6px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:center;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;margin-top:-.3em;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content-icon{margin-top:-.2em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-recurr-icon{padding-left:.3em}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-1.2em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:2em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button.atcb-single:focus .atcb-checkmark,.atcb-button.atcb-single:hover .atcb-checkmark{top:-1.07em;right:-.17em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{animation:atcb-bgoverlay-animate .1s ease 0s 1 normal forwards;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;opacity:0;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
    "3d":
        ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000; --btn-shadow-active:rgba(0 0 0 / 50%) 2px 10px 20px -2px,rgba(0 0 0 / 45%) 2px 4px 12px -3px;--btn-shadow-active-up:rgba(0 0 0 / 40%) 2px -8px 15px -2px,rgba(0 0 0 / 50%) 2px 4px 12px -3px;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--btn-shadow-active:rgba(255 255 255 / 7%) -12px -5px 23px -8px,rgba(255 255 255 / 8%) -7px -5px 18px -3px,rgba(0 0 0 / 70%) 2px 10px 20px -1px,rgba(0 0 0 / 60%) 3px 5px 25px -3px;--btn-shadow-active-up:rgba(255 255 255 / 7%) -12px 5px 23px -8px,rgba(255 255 255 / 8%) -7px 5px 18px -3px,rgba(0 0 0 / 60%) 2px -8px 15px -1px,rgba(0 0 0 / 60%) 3px 5px 25px -3px;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (max-width:991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (max-width:575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:6px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:0;max-width:350px;min-width:10em;padding:.65em 1em;position:relative;text-align:center;touch-action:manipulation;transform:translate3d(0,0,-12px);user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus,.atcb-button:hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover)}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){background-color:var(--btn-background-hover);z-index:15000000}.atcb-button.atcb-single:focus,.atcb-button.atcb-single:hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);margin:-.13em;padding:.78em 1.13em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropup,.atcb-dropoverlay){box-shadow:var(--btn-shadow-active);transform:perspective(100px) rotateX(12deg) translate3d(0,0,2px);transition:transform .1s linear}.atcb-button.atcb-active.atcb-dropup:not(.atcb-modal-style,.atcb-dropoverlay){box-shadow:var(--btn-shadow-active-up);transform:perspective(100px) rotateX(348deg) translate3d(0,0,2px);transition:transform .1s linear}.atcb-button.atcb-active.atcb-dropoverlay{transform:translate3d(0,0,0);z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:6px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 4px;position:absolute;transform:translate3d(0,0,0);z-index:14000090}.atcb-list{background-color:var(--list-background);border-radius:0 0 6px 6px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-wrapper.atcb-dropdown:not(.atcb-dropup,.atcb-dropoverlay){animation:atcb-list-slide-down .4s ease 50ms 1 normal both;opacity:0}.atcb-list-wrapper.atcb-dropup:not(.atcb-dropoverlay){animation:atcb-list-slide-up .4s ease 50ms 1 normal both;opacity:0}.atcb-list-wrapper.atcb-dropoverlay{transform:translate3d(0,0,2px);z-index:15000000;animation:atcb-list-slide-center .3s ease 0s 1 normal both;opacity:0}@keyframes atcb-list-slide-down{0%{opacity:0;transform:rotateX(70deg);transform-origin:top}100%{opacity:1;transform:rotateX(0);transform-origin:top}}@keyframes atcb-list-slide-up{0%{opacity:0;transform:rotateX(70deg);transform-origin:bottom}100%{opacity:1;transform:rotateX(0);transform-origin:bottom}}@keyframes atcb-list-slide-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 6px 6px}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:1.5em}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:6px 6px 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:6px}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:1.5em}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:.8em}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:6px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:6px 6px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}@media (max-width:575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1em 2em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 6px 6px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:6px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:center;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;margin-top:-.3em;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content-icon{margin-top:-.2em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-recurr-icon{padding-left:.3em}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-1.2em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:2em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{animation:atcb-bgoverlay-animate .1s ease 0s 1 normal forwards;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;opacity:0;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
    flat:
        ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#545454;--btn-shadow:#333;--btn-text:#333;--btn-text-hover:#000;--list-background:#f5f5f5;--list-background-hover:#fff;--list-border:#545454;--list-text:#333;--list-text-hover:#000;--list-close-background:#545454;--list-close-text:#b0b0b0;--list-close-text-hover:#777;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#bababa;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#676767;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#414141;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 40%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#222;--btn-background-hover:#373737;--btn-border:#515151;--btn-shadow:#000;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--list-background:#222;--list-background-hover:#373737;--list-border:#515151;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#111;--list-close-text:#777;--list-close-text-hover:#f1f1f1;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#313131;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#414141;--date-btn-cal-background:#c7c7cd;--date-btn-background:#2d2d2d;--date-btn-background-hover:#474747;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 75%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (max-width:991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (max-width:575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:.2em solid var(--btn-border);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:0;max-width:350px;min-width:10em;padding:.8em 1.2em;top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow);position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text{min-width:0}.atcb-button.atcb-click{top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus,.atcb-button:hover{background-color:var(--btn-background-hover);top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow)}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:focus,.atcb-button.atcb-single:hover{background-color:var(--btn-background-hover);top:-5px;left:-5px;box-shadow:5px 5px 0 0 var(--btn-shadow)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-right:1em;line-height:1em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:1em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-icon-trigger svg{display:none}.atcb-button .atcb-icon-trigger::after{content:\"+\";font-size:1.5em}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:0;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 2px 0 6px;position:absolute;z-index:16000090}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000}.atcb-list{background:var(--list-close-background);box-sizing:border-box;border:.15em solid var(--list-border);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-dropup .atcb-list-item:last-child{border-bottom-width:0}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{border-top-width:0}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{border-top-width:.15em}.atcb-list-item .atcb-icon{margin-bottom:.1em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item.atcb-list-item-close:hover{color:var(--list-close-text-hover)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{border:.15em solid var(--btn-border);background-color:var(--modal-background);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{padding-top:0}.atcb-modal-content{padding:.3em 2.5em 2.25em;font-size:1em}@media (max-width:575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1em 2em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{border:.2em solid var(--btn-border);background-color:var(--modal-btn-secondary-background);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase;top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow)}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);color:var(--modal-btn-text-hover);text-decoration:none;top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{border:.15em solid var(--btn-border);display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;background-color:var(--date-btn-background);padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow)}.atcb-subevent-btn:hover{align-items:center;top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:center;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;margin-top:-.3em;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content-icon{margin-top:-.2em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-recurr-icon{padding-left:.3em}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-1.2em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:2em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{animation:atcb-bgoverlay-animate .1s ease 0s 1 normal forwards;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;opacity:0;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
    round:
        ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000; --btn-shadow-active:rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 45%) 2px 2px 10px -3px;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--btn-shadow-active:rgba(255 255 255 / 7%) -12px -5px 23px -8px,rgba(255 255 255 / 8%) -7px -5px 18px -3px,rgba(0 0 0 / 70%) 2px 5px 19px -1px,rgba(0 0 0 / 60%) 3px 3px 22px -3px;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (max-width:991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (max-width:575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:500px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:.13em;max-width:350px;min-width:10em;padding:.65em 1.3em;position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text{min-width:0;border-radius:100%;display:flex;align-content:center;justify-content:center;align-items:center;height:3em;width:3em;padding:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus,.atcb-button:hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover);margin:0;padding:.78em 1.43em}.atcb-button.atcb-no-text:focus,.atcb-button.atcb-no-text:hover{height:3.26em;width:3.26em;padding:0}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-no-text),.atcb-button.atcb-single:not(.atcb-no-text):focus,.atcb-button.atcb-single:not(.atcb-no-text):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);margin:0;padding:.78em 1.43em}.atcb-button.atcb-active.atcb-no-text:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single.atcb-no-text:focus,.atcb-button.atcb-single.atcb-no-text:hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);margin:0;padding:.93em 1.43em}.atcb-button.atcb-active.atcb-dropup::after,.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup,.atcb-no-text)::before{content:\"\";width:0;height:0;position:absolute;left:0;right:0;margin:0 auto}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup,.atcb-no-text)::before{top:100%;border:.35em solid transparent;border-bottom:none;border-top-color:var(--btn-background-hover)}.atcb-button.atcb-active.atcb-dropup::after{bottom:100%;border:.35em solid transparent;border-top:none;border-bottom-color:var(--btn-background-hover)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:-15px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;position:absolute;z-index:14000090;min-width:12.5em;width:auto}.atcb-list-wrapper:not(.atcb-dropup,.atcb-dropoverlay){animation:list-entrance-bottom .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropup{animation:list-entrance-top .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropoverlay{animation:list-entrance-center .2s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance-bottom{0%{opacity:0;transform:translateY(250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-top{0%{opacity:0;transform:translateY(-250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list{border-radius:11px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 11px 11px}.atcb-list-item:first-child{border-radius:11px 11px 0 0}.atcb-list-item:only-child{border-radius:11px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:9px 9px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}@media (max-width:575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1em 2em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 9px 9px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:500px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:center;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;margin-top:-.3em;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content-icon{margin-top:-.2em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-recurr-icon{padding-left:.3em}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-1.2em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:2em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button:focus .atcb-checkmark,.atcb-button:hover .atcb-checkmark{top:-1.07em;right:-.17em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{animation:atcb-bgoverlay-animate .1s ease 0s 1 normal forwards;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;opacity:0;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
    neumorphism:
        ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-text:#444;--btn-text-hover:#111; --list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#444;--list-text-hover:#111;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(40 40 40 / 30%) 0.4em 0.4em 0.8em,rgba(255 255 255 / 90%) -0.4em -0.4em 0.9em;--modal-text:#111;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#222;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(40 40 40 / 15%) 0.2em 0.2em 0.4em,rgba(255 255 255 / 30%) -0.1em -0.1em 0.3em;--modal-shadow-btn-hover:rgba(40 40 40 / 40%) 0.4em 0.4em 0.7em,rgba(255 255 255 / 70%) -0.2em -0.2em 0.5em;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#e3e5ea;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(40 40 40 / 40%) 0.2em 0.2em 0.8em,rgba(255 255 255 / 80%) -0.2em -0.2em 0.4em;--date-btn-shadow-hover:rgba(40 40 40 / 50%) 0.3em 0.4em 1em,rgba(255 255 255) -0.3em -0.3em 0.7em;--checkmark-background:radial-gradient(circle, #fff 0, rgba(255 255 255 / 80%) 40%, rgba(255 255 255 / 0%) 70%);--overlay-background:#dcdcdc;--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(0 0 0 / 70%) 0.3em 0.3em 0.6em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.5em;--btn-shadow-hover:rgba(0 0 0 / 80%) 0.4em 0.4em 0.9em,rgba(230 230 230 / 15%) -0.2em -0.2em 0.5em;--btn-shadow-active:inset rgba(0 0 0 / 80%) 0.15em 0.15em 0.25em,inset rgba(230 230 230 / 15%) -0.2em -0.2em 0.6em;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(0 0 0) 0.3em 0.3em 1em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.8em;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 35px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(0 0 0 / 60%) 0.2em 0.2em 0.6em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.4em;--modal-shadow-btn-hover:rgba(0 0 0 / 80%) 0.3em 0.3em 0.8em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.6em;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(0 0 0 / 70%) 0.2em 0.2em 0.8em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.5em;--date-btn-shadow-hover:rgba(0 0 0) 0.3em 0.4em 1em,rgba(230 230 230 / 15%) -0.2em -0.2em 0.8em;--checkmark-background:radial-gradient(circle, rgba(0 0 0 / 50%) 0, rgba(0 0 0 / 30%) 40%, rgba(0 0 0 / 0%) 70%);--overlay-background:#141414;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (max-width:991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (max-width:575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:0;border-radius:15px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:0;max-width:350px;min-width:10em;padding:1em 1.2em;position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;transition:box-shadow .1s ease-in-out;z-index:1}.atcb-button.atcb-no-text{min-width:0;border-radius:100%;display:flex;align-content:center;justify-content:center;align-items:center;height:3em;width:3em;padding:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus,.atcb-button:hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover)}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:focus,.atcb-button.atcb-single:hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:-30px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;position:absolute;min-width:12.5em;width:auto;animation:list-entrance .6s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance{0%{opacity:0}100%{opacity:1}}.atcb-list{border-radius:11px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{box-shadow:none;align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:1em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent;transition:box-shadow .1s ease-in-out,padding .1s ease-in-out,margin .1s ease-in-out}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{box-shadow:var(--btn-shadow);background-color:var(--list-background-hover);color:var(--list-text-hover);padding:1.2em;margin:-.2em;position:relative;z-index:15000010}.atcb-list-item:focus-visible{box-shadow:var(--btn-shadow);background-color:var(--list-background-hover);color:var(--keyboard-focus);padding:1.2em;margin:-.2em;position:relative;z-index:15000010;font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 11px 11px}.atcb-list-item:first-child{border-radius:11px 11px 0 0}.atcb-list-item:only-child{border-radius:11px}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{animation:list-entrance .6s ease 0s 1 normal forwards;filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:9px 9px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}@media (max-width:575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1em 2em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 9px 9px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:13px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:center;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;margin-top:-.3em;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content-icon{margin-top:-.2em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-recurr-icon{padding-left:.3em}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-1.2em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:2em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button.atcb-single:focus .atcb-checkmark,.atcb-button.atcb-single:hover .atcb-checkmark{top:-1.07em;right:-.17em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{animation:atcb-bgoverlay-animate .1s ease 0s 1 normal forwards;background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;opacity:0;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
    text:
        ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-underline:#a9ceff;--btn-border:#a8a8a8;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-text:#333;--btn-text-hover:#000;--btn-text-shadow:#fff;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,rgba(255 255 255 / 80%)  0,rgba(255 255 255 / 60%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(200 200 200 / 25%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-underline:#336db9;--btn-border:#888;--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-text:#dedede;--btn-text-hover:#fff;--btn-text-shadow:#000;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#fff;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 40%) 0,rgba(0 0 0 / 20%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (max-width:991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (max-width:575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{background-image:linear-gradient(120deg,var(--btn-underline) 0,var(--btn-underline) 100%);background-repeat:no-repeat;background-size:100% 10%;background-position:0 100%;background-color:transparent;border:0;border-radius:0;transition:background-size .1s ease-in,border-radius .2s ease-in;align-items:center;color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.2em;margin:0 .2em;padding:.75em;position:relative;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus,.atcb-button:hover{background-size:100% 100%;color:var(--btn-text-hover);text-shadow:0 0 .7em var(--btn-text-shadow);border-radius:21px}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:focus,.atcb-button.atcb-single:hover{background-size:100% 10%;border-radius:3px 3px 11px 11px;background-position:0 0;background-color:var(--btn-background);color:var(--btn-text);text-shadow:none}.atcb-button.atcb-active.atcb-dropup{background-position:0 100%;border-radius:11px 11px 3px 3px}.atcb-button.atcb-active.atcb-dropup::after,.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{content:\"\";width:0;height:0;position:absolute;left:0;right:0;margin:0 auto}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{top:100%;border:.35em solid transparent;border-bottom:none;border-top-color:var(--btn-background)}.atcb-button.atcb-active.atcb-dropup::after{bottom:100%;border:.35em solid transparent;border-top:none;border-bottom-color:var(--btn-background)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-right:1em;line-height:1em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:1em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-icon-trigger svg{display:none}.atcb-button .atcb-icon-trigger::after{content:\"+\";font-size:1.5em}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:-15px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;position:absolute;z-index:14000090;min-width:12.5em;width:auto}.atcb-list-wrapper:not(.atcb-dropup,.atcb-dropoverlay){animation:list-entrance-bottom .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropup{animation:list-entrance-top .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropoverlay{animation:list-entrance-center .2s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance-bottom{0%{opacity:0;transform:translateY(250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-top{0%{opacity:0;transform:translateY(-250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list{border-radius:11px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em 1em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 11px 11px}.atcb-list-item:first-child{border-radius:11px 11px 0 0}.atcb-list-item:only-child{border-radius:11px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.1em;margin-right:.7em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.7em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:9px 9px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}@media (max-width:575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1em 2em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 9px 9px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:21px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:center;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;margin-top:-.3em;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content-icon{margin-top:-.2em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-recurr-icon{padding-left:.3em}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-1.2em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:2em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{animation:atcb-bgoverlay-animate .1s ease 0s 1 normal forwards;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;opacity:0;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:var(--btn-text)}.atcb-icon .atcb-icon-ical svg{fill:var(--btn-text)}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
    date:
        ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000; --list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#474747;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--list-background:#2e2e2e;--list-background-hover:#474747;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (max-width:991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (max-width:575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button,.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-button{box-shadow:var(--btn-shadow);min-width:17.5em;max-width:16em;position:relative;z-index:1}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:hover,.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-button:focus,.atcb-button:hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover)}.atcb-button:focus-visible,.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-button:hover .atcb-date-btn-left,.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em}.atcb-button:hover .atcb-date-btn-details,.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-button:hover .atcb-date-btn-hover,.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:center;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;margin-top:-.3em;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content-icon{margin-top:-.2em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-recurr-icon{padding-left:.3em}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:4px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 4px;position:absolute;z-index:14000090}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000}.atcb-list{border-radius:0 0 6px 6px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 6px 6px}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:1.25em}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:6px 6px 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:6px}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:1.25em}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:.8em}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:6px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:6px 6px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}@media (max-width:575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1em 2em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 6px 6px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:6px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-1.2em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:2em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{animation:atcb-bgoverlay-animate .1s ease 0s 1 normal forwards;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;opacity:0;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
};
const isBrowser = () => {
    if (typeof window === "undefined") {
        return false;
    } else {
        return true;
    }
};
const isiOS = isBrowser()
    ? () => {
          if ((/iPad|iPhone|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) {
              return true;
          } else {
              return false;
          }
      }
    : () => {
          return false;
      };
const isAndroid = isBrowser()
    ? () => {
          if (/android/i.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream) {
              return true;
          } else {
              return false;
          }
      }
    : () => {
          return false;
      };
const isChrome = isBrowser()
    ? () => {
          if (/chrome|chromium|crios|google inc/i.test(navigator.userAgent || navigator.vendor)) {
              return true;
          } else {
              return false;
          }
      }
    : () => {
          return false;
      };
const isMobile = () => {
    if (isAndroid() || isiOS()) {
        return true;
    } else {
        return false;
    }
};
const isWebView = isBrowser()
    ? () => {
          if (/(; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(navigator.userAgent || navigator.vendor)) {
              return true;
          } else {
              return false;
          }
      }
    : () => {
          return false;
      };
const isProblematicWebView = isBrowser()
    ? () => {
          if (/(Instagram)/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
              return true;
          } else {
              return false;
          }
      }
    : () => {
          return false;
      };
const atcbDefaultTarget = isWebView() ? "_system" : "_blank";
const atcbOptions = ["apple", "google", "ical", "ms365", "outlookcom", "msteams", "yahoo"];
const atcbValidRecurrOptions = ["apple", "google", "ical"];
const atcbInvalidSubscribeOptions = ["msteams"];
const atcbiOSInvalidOptions = ["ical"];
const atcbStates = [];
const atcbWcParams = [
    "debug",
    "name",
    "dates",
    "description",
    "startDate",
    "startTime",
    "endDate",
    "endTime",
    "timeZone",
    "location",
    "status",
    "sequence",
    "uid",
    "organizer",
    "icsFile",
    "images",
    "recurrence",
    "recurrence_interval",
    "recurrence_until",
    "recurrence_count",
    "recurrence_byDay",
    "recurrence_byMonth",
    "recurrence_byMonthDay",
    "recurrence_weekstart",
    "availability",
    "created",
    "updated",
    "subscribe",
    "options",
    "iCalFileName",
    "listStyle",
    "buttonStyle",
    "trigger",
    "hideIconButton",
    "hideIconList",
    "hideIconModal",
    "hideTextLabelButton",
    "hideTextLabelList",
    "buttonsList",
    "hideBackground",
    "hideCheckmark",
    "hideBranding",
    "size",
    "label",
    "ty",
    "rsvp",
    "inline",
    "inlineRsvp",
    "customLabels",
    "customCss",
    "lightMode",
    "language",
    "hideRichData",
    "bypassWebViewCheck",
    "blockInteraction",
];
const atcbWcBooleanParams = [
    "debug",
    "hideIconButton",
    "hideIconList",
    "hideIconModal",
    "hideTextLabelButton",
    "hideTextLabelList",
    "subscribe",
    "hideBackground",
    "hideCheckmark",
    "hideBranding",
    "inlineRsvp",
    "hideRichData",
    "buttonsList",
    "inline",
    "bypassWebViewCheck",
    "blockInteraction",
];
const atcbWcObjectParams = ["dates", "customLabels", "ty", "rsvp"];
const atcbWcArrayParams = ["images", "options"];
const atcbIcon = {
    trigger:
        '<span class="atcb-icon-trigger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-5.941 123.747c2.979 0 5.404 2.425 5.404 5.404s-2.425 5.404-5.404 5.404l-21.077-.065-.065 21.045c0 2.979-2.425 5.404-5.404 5.404s-5.404-2.425-5.404-5.404l.065-21.061-21.045-.081c-2.979 0-5.404-2.425-5.404-5.404s2.425-5.404 5.404-5.404l21.061.065.065-21.045c0-2.979 2.425-5.404 5.404-5.404s5.404 2.425 5.404 5.404l-.065 21.077 21.061.065zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.167V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.171c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.988 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
    apple:
        '<span class="atcb-icon-apple"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 245.657"><path d="M167.084 130.514c-.308-31.099 25.364-46.022 26.511-46.761-14.429-21.107-36.91-24.008-44.921-24.335-19.13-1.931-37.323 11.27-47.042 11.27-9.692 0-24.67-10.98-40.532-10.689-20.849.308-40.07 12.126-50.818 30.799-21.661 37.581-5.54 93.281 15.572 123.754 10.313 14.923 22.612 31.688 38.764 31.089 15.549-.612 21.433-10.073 40.242-10.073s24.086 10.073 40.546 9.751c16.737-.308 27.34-15.214 37.585-30.187 11.855-17.318 16.714-34.064 17.009-34.925-.372-.168-32.635-12.525-32.962-49.68l.045-.013zm-30.917-91.287C144.735 28.832 150.524 14.402 148.942 0c-12.344.503-27.313 8.228-36.176 18.609-7.956 9.216-14.906 23.904-13.047 38.011 13.786 1.075 27.862-7.004 36.434-17.376z"/></svg></span>',
    google:
        '<span class="atcb-icon-google"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M152.637 47.363H47.363v105.273h105.273z" fill="#fff"/><path d="M152.637 200L200 152.637h-47.363z" fill="#f72a25"/><path d="M200 47.363h-47.363v105.273H200z" fill="#fbbc04"/><path d="M152.637 152.637H47.363V200h105.273z" fill="#34a853"/><path d="M0 152.637v31.576A15.788 15.788 0 0 0 15.788 200h31.576v-47.363z" fill="#188038"/><path d="M200 47.363V15.788A15.79 15.79 0 0 0 184.212 0h-31.575v47.363z" fill="#1967d2"/><path d="M15.788 0A15.79 15.79 0 0 0 0 15.788v136.849h47.363V47.363h105.274V0z" fill="#4285f4"/><path d="M68.962 129.02c-3.939-2.653-6.657-6.543-8.138-11.67l9.131-3.76c.83 3.158 2.279 5.599 4.346 7.341 2.051 1.742 4.557 2.588 7.471 2.588 2.995 0 5.55-.911 7.699-2.718 2.148-1.823 3.223-4.134 3.223-6.934 0-2.865-1.139-5.208-3.402-7.031s-5.111-2.718-8.496-2.718h-5.273v-9.033h4.736c2.913 0 5.387-.781 7.389-2.376 2.002-1.579 2.995-3.743 2.995-6.494 0-2.441-.895-4.395-2.686-5.859s-4.053-2.197-6.803-2.197c-2.686 0-4.818.716-6.396 2.148s-2.767 3.255-3.451 5.273l-9.033-3.76c1.204-3.402 3.402-6.396 6.624-8.984s7.34-3.89 12.337-3.89c3.695 0 7.031.716 9.977 2.148s5.257 3.418 6.934 5.941c1.676 2.539 2.507 5.387 2.507 8.545 0 3.223-.781 5.941-2.327 8.187-1.546 2.23-3.467 3.955-5.729 5.143v.537a17.39 17.39 0 0 1 7.34 5.729c1.904 2.572 2.865 5.632 2.865 9.212s-.911 6.771-2.718 9.57c-1.823 2.799-4.329 5.013-7.52 6.624s-6.787 2.425-10.775 2.425c-4.622 0-8.887-1.318-12.826-3.988zm56.087-45.312l-10.026 7.243-5.013-7.601 17.985-12.972h6.901v61.198h-9.847z" fill="#1a73e8"/></svg></span>',
    ical:
        '<span class="atcb-icon-ical"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-25.228 161.263c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm-81.803-59.766c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 139.079c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 168.962c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.15V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.155c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.971 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
    msteams:
        '<span class="atcb-icon-msteams"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 186.047"><path d="M195.349 39.535a20.93 20.93 0 1 1-41.86 0 20.93 20.93 0 1 1 41.86 0zm-55.847 30.233h51.66A8.84 8.84 0 0 1 200 78.605v47.056c0 17.938-14.541 32.479-32.479 32.479h0-.154c-17.938.003-32.481-14.537-32.484-32.474v-.005-51.274a4.62 4.62 0 0 1 4.619-4.619z" fill="#5059c9"/><path d="M149.614 69.767H64.34c-4.823.119-8.637 4.122-8.526 8.944v53.67c-.673 28.941 22.223 52.957 51.163 53.665 28.94-.708 51.836-24.725 51.163-53.665v-53.67c.112-4.823-3.703-8.825-8.526-8.944zm-10.079-39.535a30.233 30.233 0 0 1-60.465 0 30.233 30.233 0 0 1 60.465 0z" fill="#7b83eb"/><path opacity=".1" d="M111.628 69.767v75.209c-.023 3.449-2.113 6.547-5.302 7.86-1.015.43-2.107.651-3.209.651H59.907l-1.628-4.651c-1.628-5.337-2.459-10.885-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M106.977 69.767v79.86a8.241 8.241 0 0 1-.651 3.209c-1.313 3.189-4.412 5.279-7.86 5.302H62.093l-2.186-4.651a46.13 46.13 0 0 1-1.628-4.651 56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M102.326 69.767v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".1" d="M111.628 45.721v14.651l-2.326.093c-.791 0-1.535-.046-2.326-.093-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767 25.845 25.845 0 0 1-1.488-4.651h23.209c4.693.018 8.494 3.818 8.512 8.512z"/><use xlink:href="#B" opacity=".2" transform="scale(.08973306)"/><path d="M106.977 50.372v10c-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767h17.07c4.693.018 8.494 3.818 8.512 8.512zm0 19.395v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z" opacity=".2"/><path opacity=".2" d="M102.326 50.372v9.256a30.233 30.233 0 0 1-20.93-17.767h12.419c4.693.018 8.494 3.818 8.512 8.512z"/><linearGradient id="A" gradientUnits="userSpaceOnUse" x1="17.776" y1="35.199" x2="84.55" y2="150.848"><stop offset="0" stop-color="#5a62c3"/><stop offset=".5" stop-color="#4d55bd"/><stop offset="1" stop-color="#3940ab"/></linearGradient><path fill="url(#A)" d="M8.526 41.86H93.8a8.53 8.53 0 0 1 8.526 8.526v85.274a8.53 8.53 0 0 1-8.526 8.526H8.526A8.53 8.53 0 0 1 0 135.66V50.386a8.53 8.53 0 0 1 8.526-8.526z"/><path fill="#fff" d="M73.6 74.316H56.553v46.419h-10.86V74.316H28.726v-9.005H73.6z"/><defs><path id="B" d="M1192.167 561.355v111.442c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 0 1-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z"/></defs></svg></span>',
    ms365:
        '<span class="atcb-icon-ms365"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 239.766"><path d="M200 219.785l-.021-.012V20.591L128.615 0 .322 48.172 0 48.234.016 192.257l43.78-17.134V57.943l84.819-20.279-.012 172.285L.088 192.257l128.515 47.456v.053l71.376-19.753v-.227z"/></svg></span>',
    outlookcom:
        '<span class="atcb-icon-outlookcom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 175"><path d="M178.725 0H71.275A8.775 8.775 0 0 0 62.5 8.775v9.975l60.563 18.75L187.5 18.75V8.775A8.775 8.775 0 0 0 178.725 0z" fill="#0364b8"/><path d="M197.813 96.281c.915-2.878 2.187-5.855 2.187-8.781-.002-1.485-.795-2.857-1.491-3.26l-68.434-38.99a9.37 9.37 0 0 0-9.244-.519c-.312.154-.614.325-.906.512l-67.737 38.6-.025.013-.075.044a4.16 4.16 0 0 0-2.088 3.6c.541 2.971 1.272 5.904 2.188 8.781l71.825 52.532z" fill="#0a2767"/><path d="M150 18.75h-43.75L93.619 37.5l12.631 18.75L150 93.75h37.5v-37.5z" fill="#28a8ea"/><path d="M150 18.75h37.5v37.5H150z" fill="#50d9ff"/><path d="M150 93.75l-43.75-37.5H62.5v37.5l43.75 37.5 67.7 11.05z" fill="#0364b8"/><path d="M106.25 56.25v37.5H150v-37.5zM150 93.75v37.5h37.5v-37.5zm-87.5-75h43.75v37.5H62.5z" fill="#0078d4"/><path d="M62.5 93.75h43.75v37.5H62.5z" fill="#064a8c"/><path d="M126.188 145.113l-73.706-53.75 3.094-5.438 68.181 38.825a3.3 3.3 0 0 0 2.625-.075l68.331-38.937 3.1 5.431z" fill="#0a2767" opacity=".5"/><path d="M197.919 91.106l-.088.05-.019.013-67.738 38.588c-2.736 1.764-6.192 1.979-9.125.569l23.588 31.631 51.588 11.257v-.001c2.434-1.761 3.876-4.583 3.875-7.587V87.5c.001 1.488-.793 2.862-2.081 3.606z" fill="#1490df"/><path d="M200 165.625v-4.613l-62.394-35.55-7.531 4.294a9.356 9.356 0 0 1-9.125.569l23.588 31.631 51.588 11.231v.025a9.362 9.362 0 0 0 3.875-7.588z" opacity=".05"/><path d="M199.688 168.019l-68.394-38.956-1.219.688c-2.734 1.766-6.19 1.984-9.125.575l23.588 31.631 51.587 11.256v.001a9.38 9.38 0 0 0 3.562-5.187z" opacity=".1"/><path d="M51.455 90.721c-.733-.467-1.468-1.795-1.455-3.221v78.125c-.007 5.181 4.194 9.382 9.375 9.375h131.25c1.395-.015 2.614-.366 3.813-.813.638-.258 1.252-.652 1.687-.974z" fill="#28a8ea"/><path d="M112.5 141.669V39.581a8.356 8.356 0 0 0-8.331-8.331H62.687v46.6l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031V150h54.169a8.356 8.356 0 0 0 8.331-8.331z" opacity=".1"/><path d="M106.25 147.919V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 68.75h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M106.25 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M100 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h41.669a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M8.331 37.5h83.337A8.331 8.331 0 0 1 100 45.831v83.338a8.331 8.331 0 0 1-8.331 8.331H8.331A8.331 8.331 0 0 1 0 129.169V45.831A8.331 8.331 0 0 1 8.331 37.5z" fill="#0078d4"/><path d="M24.169 71.675a26.131 26.131 0 0 1 10.263-11.337 31.031 31.031 0 0 1 16.313-4.087 28.856 28.856 0 0 1 15.081 3.875 25.875 25.875 0 0 1 9.988 10.831 34.981 34.981 0 0 1 3.5 15.938 36.881 36.881 0 0 1-3.606 16.662 26.494 26.494 0 0 1-10.281 11.213 30 30 0 0 1-15.656 3.981 29.556 29.556 0 0 1-15.425-3.919 26.275 26.275 0 0 1-10.112-10.85 34.119 34.119 0 0 1-3.544-15.744 37.844 37.844 0 0 1 3.481-16.563zm10.938 26.613a16.975 16.975 0 0 0 5.769 7.463 15.069 15.069 0 0 0 9.019 2.719 15.831 15.831 0 0 0 9.631-2.806 16.269 16.269 0 0 0 5.606-7.481 28.913 28.913 0 0 0 1.787-10.406 31.644 31.644 0 0 0-1.687-10.538 16.681 16.681 0 0 0-5.413-7.75 14.919 14.919 0 0 0-9.544-2.956 15.581 15.581 0 0 0-9.231 2.744 17.131 17.131 0 0 0-5.9 7.519 29.85 29.85 0 0 0-.044 21.5z" fill="#fff"/></svg></span>',
    yahoo:
        '<span class="atcb-icon-yahoo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 177.803"><path d="M0 43.284h38.144l22.211 56.822 22.5-56.822h37.135L64.071 177.803H26.694l15.308-35.645L.001 43.284zm163.235 45.403H121.64L158.558 0 200 .002zm-30.699 8.488c12.762 0 23.108 10.346 23.108 23.106s-10.345 23.106-23.108 23.106a23.11 23.11 0 0 1-23.104-23.106 23.11 23.11 0 0 1 23.104-23.106z"/></svg></span>',
    atcb:
        '<svg version="1.1" viewBox="0 0 150 8.5002" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="matrix(1.3333 0 0 -1.3333 -2427.5 1757.9)"><g transform="matrix(.22189 0 0 -.22189 1822.6 1374.6)" fill="#777" style="paint-order:stroke markers fill;shape-inside:url(#rect2441);white-space:pre" aria-label="Add-to-Calendar-PRO.com"><path d="m-1.2773 253.99h12.148l7.9688 27.5h-9.4141l-1.0547-5.2734h-7.1094l-1.1328 5.2734h-9.0234zm8.7109 17.305-2.6172-12.031-2.6953 12.031z" style="paint-order:stroke markers fill"/><path d="m29.66 261.16q2.2656 0 3.9062 0.9375t2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3477-1.3867 3.1055-2.168 1.7773-0.80078 3.7305-0.80078zm6.5625 10.176q-0.03906-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52734 0.54687-0.83984 1.2695-0.29297 0.72266-0.29297 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.87891 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203 0.72266-0.33203 1.25-0.8789 0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m57.551 261.16q2.2656 0 3.9062 0.9375t2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3477-1.3867 3.1055-2.168 1.7773-0.80078 3.7305-0.80078zm6.5625 10.176q-0.03906-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52734 0.54687-0.83984 1.2695-0.29297 0.72266-0.29297 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.87891 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203 0.72266-0.33203 1.25-0.8789 0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m76.496 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m104.8 280.44q-2.7148 1.3672-6.0156 1.3672-1.6992 0-3.0273-0.54688-1.3281-0.5664-2.2461-1.6016-0.89844-1.0547-1.3672-2.5195-0.46875-1.4844-0.46875-3.3398l0.03906-7.3828h-2.5391v-4.9609h3.1641l3.7109-7.5781h4.0625v7.5781h4.6094v4.9609h-4.6094v6.7969q0 1.0547 0.68359 1.582t1.8555 0.52734q0.91797 0 1.8359-0.46875z" style="paint-order:stroke markers fill"/><path d="m114.62 271.45q0 1.0938 0.3125 1.9141 0.33204 0.82031 0.85938 1.3672 0.52734 0.54687 1.2109 0.82031 0.68359 0.27344 1.3867 0.27344 0.70312 0 1.3672-0.27344 0.6836-0.27344 1.2109-0.82031 0.54688-0.54688 0.85938-1.3672 0.33203-0.82031 0.33203-1.9141t-0.33203-1.9141q-0.3125-0.82031-0.85938-1.3476-0.52734-0.54688-1.2109-0.82032-0.66406-0.27343-1.3672-0.27343-0.70313 0-1.3867 0.27343-0.6836 0.27344-1.2109 0.82032-0.52734 0.52734-0.85938 1.3476-0.3125 0.82032-0.3125 1.9141zm-7.8125 0q0.0977-2.5195 1.0352-4.4336 0.95703-1.9141 2.5195-3.2226 1.5625-1.3086 3.6133-1.9727 2.0703-0.66406 4.3945-0.66406 2.5391 0 4.6484 0.76172 2.1094 0.76171 3.6328 2.1289 1.5234 1.3477 2.3633 3.2422 0.83985 1.8945 0.83985 4.1602 0 1.8359-0.48828 3.3203-0.46875 1.4844-1.2891 2.6367-0.82031 1.1328-1.9336 1.9726-1.1133 0.83985-2.4023 1.3867-1.2891 0.52735-2.6758 0.78125-1.3672 0.25391-2.7344 0.25391-2.5781 0-4.707-0.74219-2.1094-0.76172-3.6328-2.1289-1.5234-1.3672-2.3633-3.2617-0.82032-1.9141-0.82032-4.2188z" style="paint-order:stroke markers fill"/><path d="m132.73 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m162.41 274.89q0.6836 0 1.2695-0.0586 0.58594-0.0781 1.1524-0.21484 0.58593-0.13672 1.1914-0.35156 0.60547-0.21485 1.3477-0.50782l1.0938 6.3477q-3.4766 2.0117-7.5781 2.0117-5.8008 0-9.9414-3.9062-4.3359-4.0625-4.3945-10.488 0-3.125 1.0742-5.7617 1.0742-2.6367 2.9688-4.5312 1.8945-1.9141 4.4726-2.9688 2.5781-1.0742 5.5859-1.0742 4.2773 0 7.7734 1.9922l-1.0547 6.2109q-2.8711-1.0938-5.1953-1.0938-3.2617 0-4.9609 1.8945-1.6797 1.875-1.6797 5.293 0 1.6992 0.44922 3.0469 0.46875 1.3281 1.3477 2.2656 0.8789 0.91797 2.1484 1.4062 1.2891 0.48829 2.9297 0.48829z" style="paint-order:stroke markers fill"/><path d="m186.52 277.78q-0.9375 1.9531-2.5391 2.9883-1.6016 1.0352-4.0234 1.0352-1.9531 0-3.7305-0.78125-1.7774-0.80078-3.125-2.1875-1.3477-1.4062-2.1484-3.3203-0.80078-1.9141-0.80078-4.1602 0-2.2266 0.80078-4.1016 0.82031-1.875 2.168-3.2227 1.3672-1.3672 3.125-2.1094 1.7773-0.76172 3.7109-0.76172 0.9961 0 1.9531 0.27343 0.97656 0.25391 1.8359 0.83985 0.8789 0.5664 1.582 1.4453 0.72265 0.87891 1.1914 2.1094v-4.668h8.3984v20.332h-8.3984zm0-6.4453q-0.0391-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70313-0.3125-1.4648-0.3125-0.85937 0-1.6016 0.33203-0.72266 0.3125-1.2695 0.85938-0.52735 0.52734-0.83985 1.25t-0.3125 1.543q0 0.85937 0.33204 1.6016 0.33203 0.72266 0.8789 1.25 0.56641 0.52734 1.2891 0.83984 0.72266 0.29297 1.5234 0.29297 0.82031 0 1.5234-0.3125 0.70312-0.3125 1.2305-0.83984 0.52734-0.52734 0.83984-1.2109 0.3125-0.70312 0.35156-1.4648z" style="paint-order:stroke markers fill"/><path d="m212.02 280.44q-2.7148 1.3672-6.0156 1.3672-1.6992 0-3.0273-0.54688-1.3281-0.5664-2.2461-1.6016-0.89843-1.0547-1.3672-2.5195-0.46875-1.4844-0.46875-3.3398v-18.672l8.4375-1.25v19.336q0 1.0742 0.68359 1.6016 0.68359 0.50781 1.8555 0.50781 0.89844 0 1.8359-0.46875z" style="paint-order:stroke markers fill"/><path d="m225.71 276.2q2.7344 0 5.8984-1.4062l0.97656 5.3711q-3.6328 1.6406-8.1641 1.6406-2.5195 0-4.6094-0.76172-2.0703-0.78125-3.5742-2.1484-1.4844-1.3867-2.3242-3.2812-0.82031-1.8945-0.82031-4.1211 0-2.3438 0.85937-4.2383 0.87891-1.9141 2.3828-3.2617 1.5039-1.3672 3.5156-2.0898 2.0117-0.74218 4.2969-0.74218 2.3047 0 4.043 0.78125 1.7383 0.76172 2.8906 2.1094 1.1719 1.3281 1.7383 3.125 0.58594 1.7774 0.58594 3.8086 0 0.27343-0.0195 0.52734t-0.0586 0.48828l-11.992 1.5625q0.46875 1.4062 1.5625 2.0312 1.0938 0.60547 2.8125 0.60547zm1.4844-7.6758q-0.6836-2.5-3.0469-2.5-0.74218 0-1.3281 0.29297t-0.9961 0.82031q-0.39062 0.50781-0.60546 1.2305-0.21485 0.70312-0.23438 1.5234z" style="paint-order:stroke markers fill"/><path d="m236.3 261.75h8.0469v4.082q1.1719-2.3633 3.0078-3.5156 1.8555-1.1523 4.3359-1.1523 1.9922 0 3.5156 0.74218 1.5234 0.74219 2.5586 2.1094 1.0547 1.3477 1.582 3.2617 0.54687 1.8945 0.54687 4.2188v10h-8.3984v-10.82q0-0.78125-0.15625-1.4453-0.13672-0.66406-0.46875-1.1328-0.3125-0.48828-0.80078-0.74219-0.48828-0.27343-1.1914-0.27343-0.85938 0-1.582 0.42968-0.72265 0.41016-1.2695 1.0156-0.52734 0.60547-0.85937 1.2695-0.33203 0.64453-0.42969 1.1133v10.586h-8.4375z" style="paint-order:stroke markers fill"/><path d="m272.59 261.16q2.2656 0 3.9062 0.9375 1.6406 0.9375 2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3476-1.3867 3.1055-2.168 1.7774-0.80078 3.7305-0.80078zm6.5625 10.176q-0.0391-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85937 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52735 0.54687-0.83985 1.2695-0.29296 0.72266-0.29296 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.8789 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203t1.25-0.8789q0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m307.06 277.78q-0.9375 1.9531-2.5391 2.9883-1.6016 1.0352-4.0234 1.0352-1.9531 0-3.7305-0.78125-1.7773-0.80078-3.125-2.1875-1.3477-1.4062-2.1484-3.3203-0.80078-1.9141-0.80078-4.1602 0-2.2266 0.80078-4.1016 0.82032-1.875 2.168-3.2227 1.3672-1.3672 3.125-2.1094 1.7774-0.76172 3.7109-0.76172 0.99609 0 1.9531 0.27343 0.97657 0.25391 1.8359 0.83985 0.87891 0.5664 1.582 1.4453 0.72266 0.87891 1.1914 2.1094v-4.668h8.3984v20.332h-8.3984zm0-6.4453q-0.0391-0.78125-0.37109-1.4844-0.33204-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72265 0.3125-1.2695 0.85938-0.52734 0.52734-0.83984 1.25t-0.3125 1.543q0 0.85937 0.33203 1.6016 0.33203 0.72266 0.87891 1.25 0.5664 0.52734 1.2891 0.83984 0.72266 0.29297 1.5234 0.29297 0.82031 0 1.5234-0.3125 0.70313-0.3125 1.2305-0.83984 0.52735-0.52734 0.83985-1.2109 0.3125-0.70312 0.35156-1.4648z" style="paint-order:stroke markers fill"/><path d="m319.5 261.75h8.4375v4.082q0.95703-2.4219 2.5391-3.5352 1.6016-1.1328 3.6719-1.1328l1.1719 6.543q-3.8086 0-5.6055 0.82031-1.7773 0.80078-1.7773 2.5781v10.391h-8.4375z" style="paint-order:stroke markers fill"/><path d="m337.22 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m352.43 253.99h9.9219q3.0859 0 5.4883 0.60547t4.043 1.7773q1.6406 1.1719 2.5 2.8711 0.85937 1.6797 0.85937 3.8477 0 2.1094-0.97656 3.7695-0.97656 1.6602-2.6758 2.832-1.6992 1.1524-3.9844 1.7774-2.2656 0.60547-4.8633 0.60547h-1.6797v9.4141h-8.6328zm10.352 12.539q2.0703 0 3.2422-0.85937 1.1719-0.85938 1.1719-2.5781 0-0.83984-0.35156-1.4648-0.33204-0.625-0.9375-1.0352-0.58594-0.42969-1.3867-0.64453t-1.7383-0.21484h-1.7188v6.7188q0.27343 0.0391 0.70312 0.0586t1.0156 0.0195z" style="paint-order:stroke markers fill"/><path d="m402.92 281.41q-2.5586 0.70313-3.6914 0.70313-7.2461 0-9.1016-6.6016l-1.0938-4.4531h-1.875v10.43h-8.75v-27.5h12.227q2.3828 0 4.4726 0.54687 2.0898 0.52735 3.6328 1.5625 1.5625 1.0156 2.4414 2.5195 0.89844 1.5039 0.89844 3.457 0 1.4453-0.37109 2.5976-0.35157 1.1328-1.0352 2.0508-0.68359 0.89844-1.6797 1.6016-0.97656 0.70312-2.2266 1.25l0.17578 0.95703q0.0586 0.33203 0.11719 0.5664 0.0586 0.23438 0.0977 0.39063l0.21484 0.83984q0.23437 0.74219 0.52734 1.2695 0.3125 0.50782 0.78125 0.83985 0.46875 0.3125 1.1524 0.46875 0.70312 0.13672 1.6992 0.13672 0.15625 0 0.48828-0.0391 0.35156-0.0391 0.89843-0.11718zm-8.8476-18.945q0-0.76172-0.33203-1.25-0.3125-0.50781-0.87891-0.78125-0.56641-0.29297-1.3281-0.39062-0.76172-0.11719-1.6406-0.11719h-2.7344v5.5078h1.5234l1.2891-0.0586q0.76171-0.0586 1.4844-0.19532 0.74219-0.15625 1.3281-0.46875 0.58593-0.33203 0.9375-0.85937 0.35156-0.54688 0.35156-1.3867z" style="paint-order:stroke markers fill"/><path d="m404.76 267.78q0-5.957 3.7891-10.039 4.043-4.3555 10.938-4.3555 3.3594 0 6.0742 1.0938 2.7148 1.0742 4.6289 2.9883t2.9492 4.5703q1.0352 2.6367 1.0352 5.7422 0 1.875-0.42968 3.6719-0.42969 1.7969-1.2891 3.3984-0.83984 1.582-2.0898 2.9297-1.25 1.3281-2.8906 2.3047-1.6211 0.95703-3.6328 1.4844-1.9922 0.54688-4.3555 0.54688-2.4219 0-4.4531-0.54688-2.0117-0.54687-3.6523-1.5234-1.6406-0.97657-2.8906-2.3242-1.2305-1.3477-2.0703-2.9297-0.82031-1.6016-1.25-3.3789-0.41016-1.7773-0.41016-3.6328zm14.727 7.0703q1.543 0 2.6172-0.64453 1.0938-0.66406 1.7774-1.6797 0.70312-1.0352 1.0156-2.3047 0.33203-1.2695 0.33203-2.4805 0-1.582-0.41015-2.8906-0.39063-1.3281-1.1524-2.2852-0.74219-0.97657-1.8164-1.543-1.0547-0.56641-2.3633-0.625-1.5625 0.0391-2.6562 0.70312-1.0938 0.66407-1.7969 1.7188-0.68359 1.0352-1.0156 2.3438-0.3125 1.2891-0.3125 2.5781 0 1.5234 0.39063 2.832 0.41016 1.2891 1.1523 2.2461 0.76172 0.9375 1.8359 1.4844 1.0742 0.54687 2.4023 0.54687z" style="paint-order:stroke markers fill"/><path d="m436.18 279.2q0-0.58594 0.2474-1.0807 0.26042-0.49479 0.67708-0.84636 0.41667-0.35156 0.95053-0.54687 0.54687-0.20834 1.1198-0.20834 0.59896 0 1.1458 0.22136 0.54688 0.20833 0.95053 0.58594 0.41666 0.36458 0.65104 0.84635 0.2474 0.48177 0.2474 1.0286 0 0.61198-0.26042 1.1068-0.2474 0.49479-0.66407 0.85938-0.41666 0.35156-0.96354 0.54687-0.53385 0.19531-1.1068 0.19531-0.625 0-1.1719-0.20833-0.54687-0.20833-0.95052-0.57292-0.40365-0.36458-0.63802-0.85937-0.23438-0.49479-0.23438-1.0677z" style="paint-order:stroke markers fill"/><path d="m454.38 272.56q-1.4062-0.4427-2.6042-0.4427-0.61198 0-1.1068 0.19531-0.48177 0.19531-0.83333 0.54687-0.33855 0.35157-0.53386 0.85938-0.18229 0.49479-0.18229 1.1068t0.18229 1.1198q0.19531 0.49479 0.54688 0.85937 0.35156 0.36459 0.84635 0.5599 0.50782 0.19531 1.1328 0.19531 1.1849 0 2.5-0.44271l0.52083 3.724q-1.0026 0.52083-1.9661 0.6901-0.95053 0.16927-2.0703 0.16927-1.5755 0-2.9036-0.49479t-2.2917-1.3932-1.5104-2.1615q-0.53385-1.276-0.53385-2.8255t0.58594-2.8125q0.58593-1.276 1.5755-2.1745 1.0026-0.91146 2.3177-1.4062 1.3151-0.4948 2.7604-0.4948 0.63802 0 1.1458 0.0521 0.52084 0.0391 0.98959 0.16927 0.46875 0.11718 0.9375 0.32552 0.46875 0.20833 1.0156 0.53385z" style="paint-order:stroke markers fill"/><path d="m461.18 274.8q0 0.72917 0.20833 1.276 0.22136 0.54688 0.57292 0.91146 0.35157 0.36459 0.80729 0.54688 0.45573 0.18229 0.92449 0.18229 0.46875 0 0.91145-0.18229 0.45573-0.18229 0.8073-0.54688 0.36458-0.36458 0.57291-0.91146 0.22136-0.54687 0.22136-1.276t-0.22136-1.276q-0.20833-0.54688-0.57291-0.89844-0.35157-0.36458-0.8073-0.54688-0.4427-0.18229-0.91145-0.18229-0.46876 0-0.92449 0.18229-0.45572 0.1823-0.80729 0.54688-0.35156 0.35156-0.57292 0.89844-0.20833 0.54687-0.20833 1.276zm-5.2083 0q0.0651-1.6797 0.69011-2.9557 0.63802-1.276 1.6797-2.1484 1.0417-0.8724 2.4088-1.3151 1.3802-0.44271 2.9297-0.44271 1.6927 0 3.099 0.50782 1.4062 0.50781 2.4219 1.4193 1.0156 0.89844 1.5755 2.1615 0.55989 1.263 0.55989 2.7734 0 1.224-0.32552 2.2136-0.3125 0.98958-0.85937 1.7578-0.54688 0.75521-1.2891 1.3151-0.74219 0.55989-1.6016 0.92448-0.85938 0.35156-1.7839 0.52083-0.91146 0.16927-1.8229 0.16927-1.7188 0-3.138-0.49479-1.4062-0.50781-2.4219-1.4193t-1.5755-2.1745q-0.54688-1.276-0.54688-2.8125z" style="paint-order:stroke markers fill"/><path d="m488.16 271.26q0.54688-1.6536 1.7578-2.487 1.2109-0.83334 3.138-0.83334 1.0938 0 2.0182 0.50782 0.92448 0.50781 1.6016 1.4193 0.67708 0.91146 1.0547 2.1745 0.3776 1.263 0.3776 2.7865v6.6667h-5.625v-6.6667q0-0.55989-0.13021-1.0286-0.11718-0.48178-0.35156-0.83334-0.23437-0.35156-0.57292-0.54687-0.33854-0.19532-0.76823-0.19532-0.55989 0-0.96354 0.26042-0.40364 0.2474-0.66406 0.63802-0.26042 0.37761-0.39063 0.84636-0.11718 0.45573-0.11718 0.85937v6.6667h-5.5729v-6.6667q0-0.54687-0.13021-1.0156-0.11718-0.48178-0.36458-0.83334-0.23438-0.35156-0.58594-0.54687-0.35156-0.20834-0.79427-0.20834-0.48177 0-0.8724 0.19532-0.3776 0.19531-0.65104 0.54687-0.27344 0.33854-0.42969 0.79427-0.14323 0.45573-0.15625 0.96355v6.7708h-5.625v-13.164h5.625v2.7214q0.74219-1.6536 1.875-2.3828 1.1458-0.72917 2.6823-0.72917 0.74219 0 1.4323 0.19532 0.69011 0.18229 1.2891 0.58593 0.61198 0.40365 1.0938 1.0417 0.49479 0.625 0.82031 1.4974z" style="paint-order:stroke markers fill"/></g></g></svg>',
    close:
        '<span class="atcb-icon-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M2.321 13.529a7.927 7.927 0 0 1 0-11.208 7.927 7.927 0 0 1 11.208 0l86.471 86.471L186.47 2.321a7.927 7.927 0 0 1 11.209 0 7.927 7.927 0 0 1 0 11.208l-86.474 86.469 86.472 86.473a7.927 7.927 0 0 1-11.209 11.208l-86.471-86.471-86.469 86.471a7.927 7.927 0 0 1-11.208-11.208l86.471-86.473z"/></svg></span>',
    location:
        '<span class="atcb-icon-location"><svg viewBox="0 0 200 266.42" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m148.54 230.43c-12.12 13.291-26.234 25.193-42.083 34.82-1.9513 1.431-4.5964 1.6044-6.7645 0.21681-23.416-14.895-43.08-32.782-58.539-52.23-21.334-26.755-34.755-56.414-39.351-84.99-4.6831-28.966-0.30354-56.848 14.114-79.505 5.6805-8.9543 12.944-17.106 21.79-24.153 20.337-16.196 43.557-24.76 66.713-24.586 22.288 0.17345 44.295 8.4773 63.309 25.844 6.6778 6.0707 12.293 13.03 16.89 20.575 15.502 25.54 18.841 58.105 12.033 91.104-6.7212 32.608-23.416 65.737-48.11 92.839zm-48.544-178.91c27.492 0 49.758 22.288 49.758 49.758 0 27.492-22.288 49.758-49.758 49.758-27.492 0-49.758-22.267-49.758-49.758-0.02168-27.492 22.267-49.758 49.758-49.758z" stroke-width="2.1681"/></svg></span>',
    warning:
        '<span class="atcb-icon-warning"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="m100 0c27.613 0 52.613 11.195 70.711 29.293 18.094 18.094 29.289 43.098 29.289 70.707 0 27.613-11.195 52.613-29.289 70.711-18.098 18.094-43.098 29.289-70.711 29.289-27.609 0-52.613-11.195-70.707-29.289-18.098-18.098-29.293-43.098-29.293-70.711 0-27.609 11.195-52.613 29.293-70.707 18.094-18.098 43.098-29.293 70.707-29.293zm57.66 42.34c-14.758-14.754-35.145-23.883-57.66-23.883-22.516 0-42.902 9.1289-57.66 23.883-14.754 14.758-23.883 35.145-23.883 57.66 0 22.516 9.1289 42.902 23.883 57.66 14.758 14.754 35.145 23.883 57.66 23.883 22.516 0 42.902-9.1289 57.66-23.883 14.754-14.758 23.883-35.145 23.883-57.66 0-22.516-9.1289-42.902-23.883-57.66z" fill="#f44336" fill-rule="nonzero" stroke-width=".39062"/><g transform="matrix(3.8384 0 0 3.8384 2277.8 -576.85)" style="shape-inside:url(#rect7396);white-space:pre" aria-label="!"><path d="m-563.8 161.59-0.65341 20.185h-5.8381l-0.65341-20.185zm-3.5796 29.503q-1.5199 0-2.6136-1.0795-1.0796-1.0796-1.0796-2.6136 0-1.5057 1.0796-2.571 1.0938-1.0796 2.6136-1.0796 1.4631 0 2.571 1.0796 1.1222 1.0653 1.1222 2.571 0 1.0227-0.52557 1.8608-0.51137 0.83807-1.3494 1.3352-0.82387 0.49715-1.8182 0.49715z"/></g></svg></span>',
    checkmark:
        '<span class="atcb-icon-checkmark"><svg viewBox="0 0 122.88 122.87" xmlns="http://www.w3.org/2000/svg"><path fill:#39B54A; d="m33.666 50.046s6.0748-0.59297 17.413 4.2983c9.3883 4.5751 11.891 8.3955 11.891 8.3955 5.38-8.65 11.11-16.6 17.16-23.9 10.412-12.578 24.613-22.448 24.613-22.448l14.257-0.012228s-19.308 19.294-32.483 38.51c-13.175 19.216-22.877 41.21-22.877 41.21s-9.3948-18.164-14.53-24.53-10.77-11.59-17.52-16.22z" fill="#45b555"/><path fill:#3C3C3C; d="m61.44 0c9.53 0 18.55 2.17 26.61 6.04-3.3 2.61-6.36 5.11-9.21 7.53-5.43-1.97-11.28-3.05-17.39-3.05-14.06 0-26.79 5.7-36 14.92s-14.92 21.94-14.92 36 5.7 26.78 14.92 36 21.94 14.92 36 14.92 26.79-5.7 36-14.92c9.22-9.22 14.91-21.94 14.91-36 0-3.34-0.32-6.62-0.94-9.78 2.64-3.44 5.35-6.88 8.11-10.28 2.17 6.28 3.35 13.04 3.35 20.06 0 16.96-6.88 32.33-17.99 43.44-11.12 11.12-26.48 18-43.44 18s-32.32-6.88-43.44-18c-11.13-11.12-18.01-26.48-18.01-43.44 0-16.97 6.88-32.33 17.99-43.44 11.12-11.12 26.48-18 43.45-18z"/></svg></span>',
};
function atcb_decorate_data(t) {
    t = atcb_decorate_data_boolean(t);
    t = atcb_decorate_data_rrule(t);
    t = atcb_decorate_data_options(t);
    t = atcb_decorate_data_style(t);
    t.sizes = atcb_decorate_sizes(t.size);
    t.lightMode = atcb_decorate_light_mode(t.lightMode);
    t = atcb_decorate_data_i18n(t);
    t = atcb_decorate_data_dates(t);
    t = atcb_decorate_data_meta(t);
    t = atcb_decorate_data_extend(t);
    return t;
}
function atcb_decorate_data_boolean(e) {
    for (let t = 0; t < atcbWcBooleanParams.length; t++) {
        const a = atcbWcBooleanParams[`${t}`];
        if (e[`${a}`] != null && (e[`${a}`] === "true" || e[`${a}`] === true)) {
            e[`${a}`] = true;
        } else {
            e[`${a}`] = false;
        }
    }
    return e;
}
function atcb_decorate_data_rrule(t) {
    if (t.recurrence != null && t.recurrence != "") {
        t.recurrence = t.recurrence.replace(/\s+/g, "").toUpperCase();
        if (!/^(RRULE:[\w=;,:+-/\\]+|daily|weekly|monthly|yearly)$/im.test(t.recurrence)) {
            t.recurrence = "!wrong rrule format!";
        } else {
            if (/^RRULE:/i.test(t.recurrence)) {
                t.recurrence_simplyfied = false;
                const e = t.recurrence.substr(6).split(";");
                const a = new Object();
                e.forEach(function (t) {
                    a[t.split("=")[0]] = t.split("=")[1];
                });
                t.recurrence_until = a.UNTIL ? a.UNTIL : "";
                t.recurrence_count = a.COUNT ? a.COUNT : "";
                t.recurrence_byDay = a.BYDAY ? a.BYDAY : "";
                t.recurrence_byMonth = a.BYMONTH ? a.BYMONTH : "";
                t.recurrence_byMonthDay = a.BYMONTHDAY ? a.BYMONTHDAY : "";
                t.recurrence_interval = a.INTERVAL ? a.INTERVAL : 1;
                t.recurrence_frequency = a.FREQ ? a.FREQ : "";
            } else {
                t.recurrence_simplyfied = true;
                if (t.recurrence_interval == null || t.recurrence_interval == "") {
                    t.recurrence_interval = 1;
                }
                if (t.recurrence_weekstart == null || (t.recurrence_weekstart == "") | (t.recurrence_weekstart.length > 2)) {
                    t.recurrence_weekstart = "MO";
                }
                t.recurrence_frequency = t.recurrence;
                t.recurrence = "RRULE:FREQ=" + t.recurrence + ";WKST=" + t.recurrence_weekstart + ";INTERVAL=" + t.recurrence_interval;
                if (t.recurrence_until != null && t.recurrence_until != "") {
                    if (t.endTime != null && t.endTime != "") {
                        t.recurrence = t.recurrence + ";UNTIL=" + t.recurrence_until.replace(/-/g, "").slice(0, 8) + "T" + t.endTime.replace(":", "") + "00";
                    } else {
                        t.recurrence = t.recurrence + ";UNTIL=" + t.recurrence_until.replace(/-/g, "").slice(0, 8);
                    }
                }
                if (t.recurrence_count != null && t.recurrence_count != "") {
                    t.recurrence = t.recurrence + ";COUNT=" + t.recurrence_count;
                }
                if (t.recurrence_byDay != null && t.recurrence_byDay != "") {
                    t.recurrence = t.recurrence + ";BYDAY=" + t.recurrence_byDay;
                }
                if (t.recurrence_byMonth != null && t.recurrence_byMonth != "") {
                    t.recurrence = t.recurrence + ";BYMONTH=" + t.recurrence_byMonth;
                }
                if (t.recurrence_byMonthDay != null && t.recurrence_byMonthDay != "") {
                    t.recurrence = t.recurrence + ";BYMONTHDAY=" + t.recurrence_byMonthDay;
                }
            }
        }
    }
    return t;
}
function atcb_decorate_data_options(e) {
    const a = [];
    e.optionLabels = [];
    let o = false;
    let n = false;
    for (let t = 0; t < e.options.length; t++) {
        const i = e.options[`${t}`].split("|");
        const r = i[0].toLowerCase().replace("microsoft", "ms").replace(/\./, "");
        const l = (function () {
            if (i[1] != null) {
                return i[1];
            }
            return "";
        })();
        if (r === "apple") {
            n = true;
        }
        if (r === "ical") {
            o = true;
        }
        if (
            (isiOS() && atcbiOSInvalidOptions.includes(r)) ||
            (e.recurrence != null && e.recurrence != "" && (!atcbValidRecurrOptions.includes(r) || (e.recurrence_until != null && e.recurrence_until != "" && (r == "apple" || r == "ical")))) ||
            (e.subscribe && atcbInvalidSubscribeOptions.includes(r))
        ) {
            continue;
        }
        a.push(r);
        e.optionLabels.push(l);
    }
    if (isiOS() && o && !n) {
        a.push("apple");
    }
    e.options = a;
    return e;
}
function atcb_decorate_data_style(t) {
    if (t.listStyle == null || t.listStyle == "") {
        t.listStyle = "dropdown";
    }
    if (t.listStyle === "modal") {
        t.trigger = "click";
    }
    if (t.buttonStyle != null && t.buttonStyle != "" && t.buttonStyle != "default") {
        if (t.buttonStyle == "round" || t.buttonStyle == "text" || t.buttonStyle == "date" || t.buttonStyle == "neumorphism") {
            t.trigger = "click";
        }
        if (t.buttonStyle == "date" && t.listStyle == "dropdown") {
            t.listStyle = "overlay";
        }
    } else {
        t.buttonStyle = "default";
    }
    if ((t.buttonStyle == "default" || t.buttonStyle == "3d" || t.buttonStyle == "flat") && t.listStyle == "dropdown" && !t.hideTextLabelList && t.hideTextLabelButton) {
        t.listStyle = "overlay";
    }
    return t;
}
function atcb_decorate_sizes(t) {
    const e = [];
    e["l"] = e["m"] = e["s"] = 16;
    if (t != null && t != "") {
        const a = t.split("|");
        for (let t = 0; t < a.length; t++) {
            a[`${t}`] = parseInt(a[`${t}`]);
        }
        if (a[0] >= 0 && a[0] < 11) {
            e["l"] = e["m"] = e["s"] = 10 + a[0];
        }
        if (a.length > 2) {
            if (a[1] >= 0 && a[1] < 11) {
                e["m"] = 10 + a[1];
            }
            if (a[2] >= 0 && a[2] < 11) {
                e["s"] = 10 + a[2];
            }
        } else if (a.length == 2) {
            if (a[1] >= 0 && a[1] < 11) {
                e["m"] = e["s"] = 10 + a[1];
            }
        }
    }
    return e;
}
function atcb_decorate_light_mode(t = "") {
    if (t == "system" && isBrowser()) {
        const e = window.matchMedia("(prefers-color-scheme: dark)");
        return e.matches ? "dark" : "light";
    }
    if (t != "bodyScheme" && t != "dark") {
        return "light";
    }
    return t;
}
function atcb_decorate_data_i18n(t) {
    if (t.language == null || t.language == "" || !availableLanguages.includes(t.language)) {
        t.language = "en";
    }
    if (t.language.length > 2) {
        t.language = t.language.substr(0, 2);
    }
    if (rtlLanguages.includes(t.language)) {
        t.rtl = true;
    } else {
        t.rtl = false;
    }
    return t;
}
function atcb_decorate_data_dates(e) {
    if (e.dates != null && e.dates.length > 0) {
        for (let t = 0; t < e.dates.length; t++) {
            if (e.dates[`${t}`].timeZone == null && e.timeZone != null) {
                e.dates[`${t}`].timeZone = e.timeZone;
            }
            const a = atcb_date_cleanup(e.dates[`${t}`]);
            e.dates[`${t}`].startTime = a.startTime;
            e.dates[`${t}`].endTime = a.endTime;
            e.dates[`${t}`].timeZone = a.timeZone;
            e.dates[`${t}`].timestamp = a.startTimestamp;
            e.dates[`${t}`].startDate = atcb_date_calculation(a.startDate);
            e.dates[`${t}`].endDate = atcb_date_calculation(a.endDate);
        }
    } else {
        const a = atcb_date_cleanup(e);
        e.dates = [];
        e.dates[0] = new Object();
        e.startTime = e.dates[0].startTime = a.startTime;
        e.endTime = e.dates[0].endTime = a.endTime;
        e.timeZone = e.dates[0].timeZone = a.timeZone;
        e.startDate = e.dates[0].startDate = atcb_date_calculation(a.startDate);
        e.endDate = e.dates[0].endDate = atcb_date_calculation(a.endDate);
    }
    const t = new Date();
    if (e.created == null || e.created == "") {
        e.created = atcb_format_datetime(t, "clean", true);
    }
    if (e.updated == null || e.updated == "") {
        e.updated = atcb_format_datetime(t, "clean", true);
    }
    return e;
}
function atcb_decorate_data_meta(t) {
    if (t.status == null || t.status == "") {
        t.status = "CONFIRMED";
    }
    if (t.sequence == null || t.sequence == "") {
        t.sequence = 0;
    }
    return t;
}
function atcb_decorate_data_description(t, e) {
    if (t.dates[`${e}`].description != null && t.dates[`${e}`].description != "") {
        t.dates[`${e}`].descriptionHtmlFree = atcb_rewrite_html_elements(t.dates[`${e}`].description, true);
        t.dates[`${e}`].description = atcb_rewrite_html_elements(t.dates[`${e}`].description);
    } else {
        if (t.dates[`${e}`].description == null && t.description != null && t.description != "") {
            t.dates[`${e}`].descriptionHtmlFree = atcb_rewrite_html_elements(t.description, true);
            t.dates[`${e}`].description = atcb_rewrite_html_elements(t.description);
        } else {
            t.dates[`${e}`].descriptionHtmlFree = t.dates[`${e}`].description = "";
        }
    }
    return t;
}
function atcb_decorate_data_extend(e) {
    for (let t = 0; t < e.dates.length; t++) {
        e = atcb_decorate_data_description(e, t);
        if (e.dates[`${t}`].name == null || e.dates[`${t}`].name == "") {
            e.dates[`${t}`].name = e.name;
        }
        if (e.dates[`${t}`].status == null) {
            e.dates[`${t}`].status = e.status.toUpperCase();
        } else {
            e.dates[`${t}`].status = e.dates[`${t}`].status.toUpperCase();
        }
        if (e.dates[`${t}`].sequence == null) {
            e.dates[`${t}`].sequence = e.sequence;
        }
        if (e.dates[`${t}`].location == null && e.location != null) {
            e.dates[`${t}`].location = e.location;
        }
        if (e.dates[`${t}`].organizer == null && e.organizer != null) {
            e.dates[`${t}`].organizer = e.organizer;
        }
        if (e.dates[`${t}`].availability == null && e.availability != null) {
            e.dates[`${t}`].availability = e.availability.toLowerCase();
        } else if (e.dates[`${t}`].availability != null) {
            e.dates[`${t}`].availability = e.dates[`${t}`].availability.toLowerCase();
        }
        if (e.dates[`${t}`].uid == null) {
            if (t == 0 && e.uid != null && e.uid != "") {
                e.dates[0].uid = e.uid;
            } else {
                e.dates[`${t}`].uid = atcb_generate_uuid();
            }
        }
    }
    if (e.recurrence != null && e.recurrence != "") {
        e.dates[0].recurrence = e.recurrence;
    }
    if (e.dates.length > 1) {
        e.dates.sort((t, e) => t.timestamp - e.timestamp);
    }
    return e;
}
function atcb_date_cleanup(n) {
    if (n.endDate == null || n.endDate == "") {
        n.endDate = n.startDate;
    }
    const t = ["start", "end"];
    t.forEach(function (t) {
        if (n[t + "Date"] != null) {
            n[t + "Date"] = n[t + "Date"].replace(/\.\d{3}/, "").replace("Z", "");
            const a = n[t + "Date"].split("T");
            if (a[1] != null) {
                n[t + "Date"] = a[0];
                n[t + "Time"] = a[1];
            }
        }
        if (n[t + "Time"] != null && n[t + "Time"].length === 8) {
            const o = n[t + "Time"];
            n[t + "Time"] = o.substring(0, o.length - 3);
        }
        if (n.timeZone == "currentBrowser") {
            n.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        let e;
        if (n[t + "Time"] != null) {
            e = new Date(n[t + "Date"] + " " + n[t + "Time"]);
        } else {
            e = new Date(n[t + "Date"]);
        }
        n[t + "Timestamp"] = e.getTime();
    });
    return n;
}
function atcb_date_calculation(t) {
    const e = new Date();
    const a = e.getUTCFullYear() + "-" + (e.getUTCMonth() + 1) + "-" + e.getUTCDate();
    t = t.replace(/today/gi, a);
    const o = t.split("+");
    const n = o[0].split("-");
    let i = (function () {
        if (n[0].length < 4) {
            return new Date(Date.UTC(n[2], n[0] - 1, n[1]));
        }
        return new Date(Date.UTC(n[0], n[1] - 1, n[2]));
    })();
    if (o[1] != null && o[1] > 0) {
        i.setDate(i.getDate() + parseInt(o[1]));
    }
    return i.toISOString().replace(/T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g, "");
}
function atcb_check_required(a, o = true) {
    if (a.options == null || a.options.length < 1) {
        if (o) {
            throw new Error("Add to Calendar Button generation failed: no valid options set");
        }
        return false;
    }
    if (a.name == null || a.name == "") {
        if (o) {
            throw new Error("Add to Calendar Button generation failed: required name information missing");
        }
        return false;
    }
    if (a.dates != null && a.dates.length > 0) {
        const t = ["name", "startDate"];
        const n = ["name"];
        return t.every(function (e) {
            for (let t = 0; t < a.dates.length; t++) {
                if (
                    (!n.includes(`${e}`) && (a.dates[`${t}`][`${e}`] == null || a.dates[`${t}`][`${e}`] == "")) ||
                    (n.includes(`${e}`) && (a.dates[`${t}`][`${e}`] == null || a.dates[`${t}`][`${e}`] == "") && (a[`${e}`] == null || a[`${e}`] == ""))
                ) {
                    if (o) {
                        throw new Error("Add to Calendar Button generation failed: required setting missing [dates array object #" + (t + 1) + "/" + a.dates.length + "] => [" + e + "]");
                    }
                    return false;
                }
            }
            return true;
        });
    } else {
        const e = ["startDate"];
        return e.every(function (t) {
            if (a[`${t}`] == null || a[`${t}`] == "") {
                if (o) {
                    throw new Error("Add to Calendar Button generation failed: required setting missing [" + t + "]");
                }
                return false;
            }
            return true;
        });
    }
}
function atcb_validate(t) {
    const e = "Add to Calendar Button generation (" + t.identifier + ")";
    if (!atcb_validate_icsFile(t, e)) return false;
    if (!atcb_validate_buttonStyle(t, e)) return false;
    if (!atcb_validate_subscribe(t, e)) return false;
    if (!atcb_validate_created(t, e)) return false;
    if (!atcb_validate_updated(t, e)) return false;
    if (!atcb_validate_options(t, e)) return false;
    if (!atcb_validate_date_blocks(t, e)) return false;
    if (!atcb_validate_rrule(t, e)) return false;
    if (t.recurrence_simplyfied) {
        if (!atcb_validate_rrule_simplyfied(t, e)) return false;
    }
    return true;
}
function atcb_validate_icsFile(t, e, a = "", o = "") {
    const n = (function () {
        if (a != "" && t.dates[`${a}`].icsFile != null) {
            return t.dates[`${a}`].icsFile;
        }
        if (a == "" && t.icsFile != null) {
            return t.icsFile;
        }
        return "";
    })();
    if (n != "") {
        if (!atcb_secure_url(n, false) || !t.icsFile.startsWith("https://")) {
            if (t.debug) {
                console.error(e + " failed: explicit ics file path not valid" + o);
            }
            return false;
        }
    }
    return true;
}
function atcb_validate_buttonStyle(t, e) {
    const a = ["default", "3d", "flat", "round", "neumorphism", "text", "date", "custom", "none"];
    if (!a.includes(t.buttonStyle)) {
        if (t.debug) {
            console.error(e + " failed: provided buttonStyle invalid");
        }
        return false;
    }
    if (t.customCss != null && t.customCss != "" && (!atcb_secure_url(t.customCss, false) || !/\.css$/m.test(t.customCss))) {
        if (t.debug) {
            console.error(e + " failed: customCss provided, but no valid url");
        }
        return false;
    }
    if ((t.customCss == null || t.customCss == "") && t.buttonStyle == "custom") {
        if (t.debug) {
            console.error(e + ' failed: buttonStyle "custom" selected, but no customCss file provided');
        }
        return false;
    }
    return true;
}
function atcb_validate_subscribe(t, e) {
    if (t.subscribe == true && (t.icsFile == null || t.icsFile == "")) {
        if (t.debug) {
            console.error(e + " failed: a subscription calendar requires a valid explicit ics file as well");
        }
        return false;
    }
    return true;
}
function atcb_validate_created(t, e) {
    if (!/^\d{8}T\d{6}Z$/.test(t.created)) {
        if (t.debug) {
            console.error(e + " failed: created date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ");
        }
        return false;
    }
    return true;
}
function atcb_validate_updated(t, e) {
    if (!/^\d{8}T\d{6}Z$/.test(t.updated)) {
        if (t.debug) {
            console.error(e + " failed: updated date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ");
        }
        return false;
    }
    return true;
}
function atcb_validate_options(e, a) {
    if (
        !e.options.every(function (t) {
            if (!atcbOptions.includes(t)) {
                if (e.debug) {
                    console.error(a + " failed: invalid option [" + t + "]");
                }
                return false;
            }
            return true;
        })
    ) {
        return false;
    }
    return true;
}
function atcb_validate_date_blocks(e, a) {
    for (let t = 0; t < e.dates.length; t++) {
        const o = (function () {
            if (e.dates.length == 1) {
                return "";
            } else {
                return " [dates array object #" + (t + 1) + "/" + e.dates.length + "] ";
            }
        })();
        if (!atcb_validate_icsFile(e, a, t, o)) return false;
        if (!atcb_validate_status(e, a, t, o)) return false;
        if (!atcb_validate_availability(e, a, t, o)) return false;
        if (!atcb_validate_organizer(e, a, t, o)) return false;
        if (!atcb_validate_uid(e, a, t, o)) return false;
        if (!atcb_validate_sequence(e, a, t, o)) return false;
        if (!atcb_validate_timezone(e, a, t, o)) return false;
        if (!atcb_validate_datetime(e, a, t, o)) return false;
    }
    return true;
}
function atcb_validate_status(t, e, a, o) {
    if (t.dates[`${a}`].status != "TENTATIVE" && t.dates[`${a}`].status != "CONFIRMED" && t.dates[`${a}`].status != "CANCELLED") {
        if (t.debug) {
            console.error(e + " failed: event status needs to be TENTATIVE, CONFIRMED, or CANCELLED" + o);
        }
        return false;
    }
    return true;
}
function atcb_validate_availability(t, e, a, o) {
    if (t.dates[`${a}`].availability != null && t.dates[`${a}`].availability != "" && t.dates[`${a}`].availability != "free" && t.dates[`${a}`].availability != "busy") {
        if (t.debug) {
            console.error(e + ' failed: event availability needs to be "free" or "busy"' + o);
        }
        return false;
    }
    return true;
}
function atcb_validate_organizer(t, e, a, o) {
    if (t.dates[`${a}`].organizer != null && t.dates[`${a}`].organizer != "") {
        const n = t.dates[`${a}`].organizer.split("|");
        if (n.length != 2 || n[0].length > 50 || n[1].length > 80 || !atcb_validEmail(n[1])) {
            if (t.debug) {
                console.error(e + ' failed: organizer needs to match the schema "NAME|EMAIL" with a valid email address' + o);
            }
            return false;
        }
    }
    return true;
}
function atcb_validate_uid(t, e, a, o) {
    if (!/^(\w|-){1,254}$/.test(t.dates[`${a}`].uid)) {
        if (t.debug) {
            console.warn(e + ": UID not valid. May only contain alpha, digits, and dashes; and be less than 255 characters. Falling back to an automated value!" + o);
        }
        t.dates[`${a}`].uid = atcb_generate_uuid();
    }
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t.dates[`${a}`].uid) && t.debug) {
        console.warn(e + ": UID is highly recommended to be a hex-encoded random Universally Unique Identifier (UUID)!" + o);
    }
    return true;
}
function atcb_validate_sequence(t, e, a, o) {
    if (!/^\d+$/.test(t.dates[`${a}`].sequence)) {
        if (t.debug) {
            console.log(e + ": sequence needs to be a number. Used the default 0 instead" + o);
        }
        t.dates[`${a}`].sequence = 0;
    }
    return true;
}
function atcb_validate_timezone(t, e, a, o) {
    if (t.dates[`${a}`].timeZone != null && t.dates[`${a}`].timeZone != "") {
        const n = tzlib_get_timezones();
        if (!n.includes(t.dates[`${a}`].timeZone)) {
            if (t.debug) {
                console.error(e + " failed: invalid time zone given" + o);
            }
            return false;
        }
    }
    return true;
}
function atcb_validate_datetime(a, o, n, i) {
    const t = ["startDate", "endDate"];
    const r = t;
    if (
        !t.every(function (t) {
            if (a.dates[`${n}`][`${t}`].length !== 10) {
                if (a.debug) {
                    console.error(o + " failed: date misspelled [-> YYYY-MM-DD]" + i);
                }
                return false;
            }
            const e = a.dates[`${n}`][`${t}`].split("-");
            if (e.length < 3 || e.length > 3) {
                if (a.debug) {
                    console.error(o + " failed: date misspelled [" + t + ": " + a.dates[`${n}`][`${t}`] + "]" + i);
                }
                return false;
            }
            r[`${t}`] = new Date(e[0], e[1] - 1, e[2]);
            return true;
        })
    ) {
        return false;
    }
    const e = ["startTime", "endTime"];
    if (
        !e.every(function (t) {
            if (a.dates[`${n}`][`${t}`] != null) {
                if (a.dates[`${n}`][`${t}`].length !== 5) {
                    if (a.debug) {
                        console.error(o + " failed: time misspelled [-> HH:MM]" + i);
                    }
                    return false;
                }
                const e = a.dates[`${n}`][`${t}`].split(":");
                if (e.length < 2 || e.length > 2) {
                    if (a.debug) {
                        console.error(o + " failed: time misspelled [" + t + ": " + a.dates[`${n}`][`${t}`] + "]" + i);
                    }
                    return false;
                }
                if (e[0] > 23) {
                    if (a.debug) {
                        console.error(o + " failed: time misspelled - hours number too high [" + t + ": " + e[0] + "]" + i);
                    }
                    return false;
                }
                if (e[1] > 59) {
                    if (a.debug) {
                        console.error(o + " failed: time misspelled - minutes number too high [" + t + ": " + e[1] + "]" + i);
                    }
                    return false;
                }
                if (t == "startTime") {
                    r.startDate = new Date(r.startDate.getTime() + e[0] * 36e5 + e[1] * 6e4);
                }
                if (t == "endTime") {
                    r.endDate = new Date(r.endDate.getTime() + e[0] * 36e5 + e[1] * 6e4);
                }
            }
            return true;
        })
    ) {
        return false;
    }
    if ((a.dates[`${n}`].startTime != null && a.dates[`${n}`].endTime == null) || (a.dates[`${n}`].startTime == null && a.dates[`${n}`].endTime != null)) {
        if (a.debug) {
            console.error(o + " failed: if you set a starting or end time, the respective other one also needs to be defined" + i);
        }
        return false;
    }
    if (r.endDate < r.startDate) {
        if (a.debug) {
            console.error(o + " failed: end date before start date" + i);
        }
        return false;
    }
    return true;
}
function atcb_validate_rrule(t, e) {
    if (t.recurrence != null && t.recurrence != "" && t.dates.length > 1) {
        if (t.debug) {
            console.error(e + " failed: RRULE and multi-date set at the same time");
        }
        return false;
    }
    if (t.recurrence != null && t.recurrence != "" && !/^RRULE:[\w=;,:+-/\\]+$/i.test(t.recurrence)) {
        if (t.debug) {
            console.error(e + " failed: RRULE data misspelled");
        }
        return false;
    }
    return true;
}
function atcb_validate_rrule_simplyfied(t, e) {
    if (t.recurrence_interval != null && t.recurrence_interval != "" && !/^\d+$/.test(t.recurrence_interval)) {
        if (t.debug) {
            console.error(e + " failed: recurrence data (interval) misspelled");
        }
        return false;
    }
    if (t.recurrence_until != null && t.recurrence_until != "" && !/^(\d|-|:)+$/i.test(t.recurrence_until)) {
        if (t.debug) {
            console.error(e + " failed: recurrence data (until) misspelled");
        }
        return false;
    }
    if (t.recurrence_count != null && t.recurrence_count != "" && !/^\d+$/.test(t.recurrence_count)) {
        if (t.debug) {
            console.error(e + " failed: recurrence data (interval) misspelled");
        }
        return false;
    }
    if (t.recurrence_byMonth != null && t.recurrence_byMonth != "" && !/^(\d|,)+$/.test(t.recurrence_byMonth)) {
        if (t.debug) {
            console.error(e + " failed: recurrence data (byMonth) misspelled");
        }
        return false;
    }
    if (t.recurrence_byMonthDay != null && t.recurrence_byMonthDay != "" && !/^(\d|,)+$/.test(t.recurrence_byMonthDay)) {
        if (t.debug) {
            console.error(e + " failed: recurrence data (byMonthDay) misspelled");
        }
        return false;
    }
    if (t.recurrence_byDay != null && t.recurrence_byDay != "" && !/^(\d|-|MO|TU|WE|TH|FR|SA|SU|,)+$/im.test(t.recurrence_byDay)) {
        if (t.debug) {
            console.error(e + " failed: recurrence data (byDay) misspelled");
        }
        return false;
    }
    if (t.recurrence_weekstart != null && t.recurrence_weekstart != "" && !/^(MO|TU|WE|TH|FR|SA|SU)$/im.test(t.recurrence_weekstart)) {
        if (t.debug) {
            console.error(e + " failed: recurrence data (weekstart) misspelled");
        }
        return false;
    }
    return true;
}
function atcb_toggle(t, e, a = "", o = null, n = false, i = false) {
    if (e == "open") {
        atcb_open(t, a, o, n, i);
    } else if (e == "close" || o.classList.contains("atcb-active") || t.querySelector(".atcb-active-modal")) {
        atcb_close(t, n);
    } else {
        atcb_open(t, a, o, n, i);
    }
}
function atcb_open(a, o, t = null, e = false, n = false) {
    if (a.querySelector(".atcb-list") || a.querySelector(".atcb-modal")) return;
    atcb_log_event("openList", o.identifier, o.identifier);
    atcbStates["active"] = o.identifier;
    const i = atcb_generate_dropdown_list(a, o);
    const r = document.createElement("div");
    r.classList.add("atcb-list-wrapper");
    if (o.hideTextLabelList) {
        r.classList.add("atcb-no-text");
    }
    if (t) {
        t.classList.add("atcb-active");
        if (o.listStyle === "modal") {
            t.classList.add("atcb-modal-style");
            i.classList.add("atcb-modal");
        } else {
            r.append(i);
            r.classList.add("atcb-dropdown");
            if (o.listStyle === "overlay") {
                r.classList.add("atcb-dropoverlay");
            }
        }
        if (n) {
            i.classList.add("atcb-generated-button");
        }
    } else {
        i.classList.add("atcb-modal");
    }
    if (o.listStyle === "modal") {
        const c = atcb_generate_bg_overlay(a, o.trigger, true, !o.hideBackground);
        const s = atcb_generate_modal_host(a, o);
        s.append(c);
        c.append(i);
        if (!o.hideBranding) {
            atcb_create_atcbl(s, false);
        }
        atcb_set_sizes(i, o.sizes);
        atcb_manage_body_scroll(s);
        atcb_set_fullsize(c);
    } else {
        const c = atcb_generate_bg_overlay(a, o.trigger, false, !o.hideBackground);
        a.querySelector(".atcb-initialized").append(r);
        r.append(i);
        if (o.buttonStyle != "default") {
            r.classList.add("atcb-style-" + o.buttonStyle);
        }
        if (!o.hideBranding) {
            atcb_create_atcbl(a);
        }
        a.append(c);
        atcb_set_sizes(i, o.sizes);
        r.style.display = "none";
        setTimeout(function () {
            r.style.display = "block";
            if (o.listStyle === "dropdown-static") {
                atcb_position_list(a, t, r, true);
            } else {
                atcb_position_list(a, t, r);
            }
        }, 5);
        atcb_set_fullsize(c);
    }
    const l = (function () {
        const t = a.querySelector(".atcb-list-item");
        if (t) {
            return t;
        }
        const e = document.getElementById(o.identifier + "-modal-host");
        if (!e) {
            return;
        }
        return e.shadowRoot.querySelector(".atcb-list-item");
    })();
    if (l) {
        if (e) {
            l.focus();
        } else {
            l.focus({ preventScroll: true });
            l.blur();
        }
    }
}
function atcb_close(e, a = false) {
    const o = document.getElementById(e.host.getAttribute("atcb-button-id") + "-modal-host");
    const n = (function () {
        if (!o || o.length === 0) {
            return [];
        }
        return o.shadowRoot.querySelectorAll(".atcb-modal[data-modal-nr]");
    })();
    if (n.length > 1) {
        o.shadowRoot.querySelectorAll('.atcb-modal[data-modal-nr="' + n.length + '"]')[0].remove();
        const i = o.shadowRoot.querySelectorAll('.atcb-modal[data-modal-nr="' + (n.length - 1) + '"]')[0];
        i.style.display = "block";
        let t = i;
        const r = i.getElementsByTagName("button");
        if (r.length > 0) {
            t = r[0];
        }
        t.focus();
        if (!a) {
            t.blur();
        }
    } else {
        const t = (function () {
            const t = e.querySelector(".atcb-active, .atcb-active-modal");
            if (t) {
                return t;
            }
            return document.querySelector(".atcb-active, .atcb-active-modal");
        })();
        if (t) {
            t.focus({ preventScroll: true });
            if (!a) {
                t.blur();
            }
        }
        Array.from(e.querySelectorAll(".atcb-active")).forEach((t) => {
            t.classList.remove("atcb-active");
        });
        Array.from(e.querySelectorAll(".atcb-active-modal")).forEach((t) => {
            t.classList.remove("atcb-active-modal");
        });
        Array.from(document.querySelectorAll(".atcb-active")).forEach((t) => {
            t.classList.remove("atcb-active");
        });
        Array.from(document.querySelectorAll(".atcb-active-modal")).forEach((t) => {
            t.classList.remove("atcb-active-modal");
        });
        if (o) {
            o.remove();
        }
        document.body.classList.remove("atcb-modal-no-scroll");
        document.documentElement.classList.remove("atcb-modal-no-scroll");
        Array.from(e.querySelectorAll(".atcb-list-wrapper"))
            .concat(Array.from(e.querySelectorAll(".atcb-list")))
            .concat(Array.from(e.querySelectorAll("#add-to-calendar-button-reference")))
            .concat(Array.from(e.querySelectorAll("#atcb-bgoverlay")))
            .forEach((t) => t.remove());
        atcbStates["active"] = "";
    }
}
function atcb_generate_label(e, a, o, n, t = false, i = "", r = false) {
    switch (n) {
        case "trigger":
        default:
            o.id = a.identifier;
            if (!a.blockInteraction) {
                o.addEventListener("keyup", function (t) {
                    if (t.key == "Enter") {
                        t.preventDefault();
                        atcb_toggle(e, "auto", a, o, true, true);
                    }
                });
                o.addEventListener(
                    "touchend",
                    atcb_debounce_leading((t) => {
                        t.preventDefault();
                        atcb_toggle(e, "auto", a, o, false, true);
                    })
                );
                if (a.trigger === "click") {
                    o.addEventListener(
                        "mouseup",
                        atcb_debounce_leading((t) => {
                            t.preventDefault();
                            atcb_toggle(e, "auto", a, o, false, true);
                        })
                    );
                } else {
                    o.addEventListener(
                        "mouseenter",
                        atcb_debounce_leading((t) => {
                            t.preventDefault();
                            atcb_toggle(e, "open", a, o, false, true);
                        })
                    );
                }
            }
            break;
        case "apple":
        case "google":
        case "ical":
        case "msteams":
        case "ms365":
        case "outlookcom":
        case "yahoo":
            o.id = a.identifier + "-" + n;
            o.addEventListener(
                "click",
                atcb_debounce_leading(() => {
                    if (r) {
                        e.querySelector("#" + o.id).blur();
                        atcb_log_event("openSingletonLink", o.id, a.identifier);
                    } else {
                        atcb_toggle(e, "close");
                        atcb_log_event("openCalendarLink", o.id, a.identifier);
                    }
                    atcb_generate_links(e, n, a);
                })
            );
            o.addEventListener("keyup", function (t) {
                if (t.key == "Enter") {
                    t.preventDefault();
                    if (r) {
                        e.querySelector("#" + o.id).blur();
                        atcb_log_event("openSingletonLink", o.id, a.identifier);
                    } else {
                        atcb_toggle(e, "close");
                        atcb_log_event("openCalendarLink", o.id, a.identifier);
                    }
                    atcb_generate_links(e, n, a, "all", true);
                }
            });
            break;
        case "close":
            o.id = a.identifier + "-close";
            o.addEventListener(
                "click",
                atcb_debounce(() => {
                    atcb_log_event("closeList", "List Close Button", atcbStates["active"]);
                    atcb_toggle(e, "close");
                })
            );
            o.addEventListener("keyup", function (t) {
                if (t.key == "Enter") {
                    t.preventDefault();
                    atcb_log_event("closeList", "List Close Button", atcbStates["active"]);
                    atcb_toggle(e, "close", a, "all", true);
                }
            });
            break;
    }
    atcb_generate_label_content(a, o, n, t, i, r);
}
function atcb_generate_label_content(t, e, a, o, n, i) {
    const r = atcb_translate_hook("label.addtocalendar", t);
    if (i && n == "") {
        n = r;
    }
    const l = {
        trigger: n || r,
        apple: n || "Apple",
        google: n || "Google",
        ical: n || atcb_translate_hook("label.icalfile", t),
        msteams: n || "Microsoft Teams",
        ms365: n || "Microsoft 365",
        outlookcom: n || "Outlook.com",
        yahoo: n || "Yahoo",
        close: atcb_translate_hook("close", t),
    };
    n = l[`${a}`];
    if (t.buttonStyle == "date" && (a == "trigger" || i)) {
        return;
    }
    if (o) {
        const c = document.createElement("span");
        c.classList.add("atcb-icon");
        c.innerHTML = atcbIcon[`${a}`];
        e.append(c);
    }
    if (((a == "trigger" || i) && !t.hideTextLabelButton) || (!i && a != "trigger" && !t.hideTextLabelList)) {
        const s = document.createElement("span");
        s.classList.add("atcb-text");
        s.textContent = n;
        e.append(s);
    }
    e.setAttribute("aria-label", n);
}
function atcb_generate_button(i, r, l, t = false) {
    const c = (function () {
        if (l.options.length === 1 || (l.buttonsList && l.buttonStyle != "date")) {
            return true;
        }
        return false;
    })();
    const e = c ? l.options : ["default"];
    e.forEach(function (t) {
        const e = document.createElement("div");
        e.classList.add("atcb-button-wrapper");
        if (l.rtl) {
            e.classList.add("atcb-rtl");
        }
        r.append(e);
        atcb_set_sizes(e, l.sizes);
        const a = document.createElement("button");
        a.classList.add("atcb-button");
        if (l.hideTextLabelButton) {
            a.classList.add("atcb-no-text");
        }
        if (l.trigger === "click") {
            a.classList.add("atcb-click");
        }
        if (l.listStyle === "overlay") {
            a.classList.add("atcb-dropoverlay");
        }
        a.type = "button";
        e.append(a);
        if (l.buttonStyle == "date") {
            atcb_generate_date_button(l, a);
        }
        if (c) {
            a.classList.add("atcb-single");
            atcb_generate_label(i, l, a, t, !l.hideIconButton, l.label, true);
            a.id = l.identifier;
            if (l.buttonsList) {
                a.id = l.identifier + "-" + t;
            }
        } else {
            atcb_generate_label(i, l, a, "trigger", !l.hideIconButton, l.label);
            const o = document.createElement("div");
            o.classList.add("atcb-dropdown-anchor");
            a.append(o);
        }
        if (!l.hideCheckmark && !l.hideTextLabelButton && !l.buttonsList) {
            const n = document.createElement("div");
            n.classList.add("atcb-checkmark");
            n.innerHTML = atcbIcon["checkmark"];
            a.append(n);
        }
    });
    if (t) {
        console.log('Add to Calendar Button "' + l.identifier + '" created');
    }
}
function atcb_generate_dropdown_list(a, o) {
    const n = document.createElement("div");
    n.classList.add("atcb-list");
    n.role = "list";
    if (o.rtl) {
        n.classList.add("atcb-rtl");
    }
    let i = 0;
    o.options.forEach(function (t) {
        const e = document.createElement("div");
        e.classList.add("atcb-list-item");
        e.role = "link";
        e.tabIndex = 0;
        i++;
        e.dataset.optionNumber = i;
        n.append(e);
        atcb_generate_label(a, o, e, t, !o.hideIconList, o.optionLabels[i - 1]);
    });
    if (o.listStyle === "modal") {
        const t = document.createElement("div");
        t.classList.add("atcb-list-item", "atcb-list-item-close");
        t.role = "button";
        t.tabIndex = 0;
        i++;
        t.dataset.optionNumber = i;
        n.append(t);
        atcb_generate_label(a, o, t, "close", !o.hideIconList);
    }
    return n;
}
function atcb_generate_bg_overlay(e, t = "", a = false, o = true) {
    const n = (function () {
        if (a) {
            return document.createElement("dialog");
        }
        return document.createElement("div");
    })();
    if (a) {
        n.setAttribute("open", true);
    }
    n.id = "atcb-bgoverlay";
    if (!o) {
        n.classList.add("atcb-no-bg");
    }
    n.role = "button";
    n.tabIndex = 0;
    n.addEventListener(
        "mouseup",
        atcb_debounce_leading((t) => {
            if (t.target !== t.currentTarget) return;
            atcb_log_event("closeList", "Background Hit", atcbStates["active"]);
            atcb_toggle(e, "close");
        })
    );
    let i = false;
    n.addEventListener(
        "touchstart",
        atcb_debounce_leading(() => (i = false)),
        { passive: true }
    );
    n.addEventListener(
        "touchmove",
        atcb_debounce_leading(() => (i = true)),
        { passive: true }
    );
    n.addEventListener(
        "touchend",
        atcb_debounce((t) => {
            if (i !== false || t.target !== t.currentTarget) return;
            atcb_log_event("closeList", "Background Hit", atcbStates["active"]);
            atcb_toggle(e, "close");
        }),
        { passive: true }
    );
    if (t !== "click") {
        n.addEventListener(
            "mousemove",
            atcb_debounce_leading((t) => {
                if (t.target !== t.currentTarget) return;
                atcb_log_event("closeList", "Background Hit", atcbStates["active"]);
                atcb_toggle(e, "close");
            })
        );
    } else {
        n.classList.add("atcb-click");
    }
    return n;
}
function atcb_create_atcbl(t, e = true) {
    const a = document.createElement("div");
    a.id = "add-to-calendar-button-reference";
    a.style.cssText = "width: 130px; padding: 5px; height: auto; opacity: .8; transform: translate3d(0, 0, 0); z-index: 15000000;";
    setTimeout(() => {
        a.innerHTML = '<a href="https://add-to-calendar-pro.com" target="_blank" rel="noopener">' + atcbIcon["atcb"] + "</a>";
    }, 500);
    if (e) {
        t.querySelector(".atcb-initialized .atcb-list-wrapper").append(a);
    } else {
        if (window.innerHeight > 1e3 || window.innerWidth > 1e3) {
            t.append(a);
            a.style.cssText += "position: fixed; bottom: 15px; right: 30px;";
        }
    }
}
function atcb_create_modal(o, n, t = "", e, a = "", i = [], r = [], l = false) {
    atcbStates["active"] = n.identifier;
    const c = atcb_generate_modal_host(o, n, false);
    const s = (function () {
        const t = c.getElementById("atcb-bgoverlay");
        if (!t) {
            const e = atcb_generate_bg_overlay(o, "click", true, !n.hideBackground);
            c.append(e);
            return e;
        }
        return t;
    })();
    const d = document.createElement("div");
    d.classList.add("atcb-modal");
    s.append(d);
    const b = c.querySelectorAll(".atcb-modal").length;
    d.dataset.modalNr = b;
    d.tabIndex = 0;
    d.focus({ preventScroll: true });
    d.blur();
    const u = (function () {
        const t = o.getElementById(n.identifier);
        if (t) {
            return t;
        }
        return document.getElementById(n.identifier);
    })();
    if (u) {
        u.classList.add("atcb-active-modal");
    }
    const m = document.createElement("div");
    m.classList.add("atcb-modal-box");
    if (n.rtl) {
        m.classList.add("atcb-rtl");
    }
    d.append(m);
    atcb_set_sizes(m, n.sizes);
    atcb_set_fullsize(s);
    if (t != "" && !n.hideIconModal) {
        const h = document.createElement("div");
        h.classList.add("atcb-modal-icon");
        h.innerHTML = atcbIcon[`${t}`];
        m.append(h);
    }
    const p = document.createElement("div");
    p.classList.add("atcb-modal-headline");
    p.textContent = e;
    m.append(p);
    if (a != "") {
        const f = document.createElement("div");
        f.classList.add("atcb-modal-content");
        f.innerHTML = a;
        m.append(f);
    }
    if (r.length > 1) {
        if (!n.hideBranding) {
            atcb_create_atcbl(c, false);
        }
        const x = document.createElement("div");
        x.classList.add("atcb-modal-content");
        m.append(x);
        for (let t = 1; t < r.length; t++) {
            const v = document.createElement("button");
            v.type = "button";
            v.id = n.identifier + "-" + r[0] + "-" + t;
            if (atcbStates[`${n.identifier}`][`${r[0]}`][t - 1] > 0) {
                v.classList.add("atcb-saved");
            }
            v.classList.add("atcb-subevent-btn");
            x.append(v);
            atcb_generate_date_button(n, v, t);
            if (t == 1 && l) {
                v.focus();
            }
            v.addEventListener(
                "click",
                atcb_debounce(() => {
                    atcb_log_event("openSubEventLink", v.id, n.identifier);
                    atcb_generate_links(o, r[0], n, r[`${t}`], l, true);
                })
            );
        }
    }
    if (i.length == 0) {
        i.push({ type: "close", label: atcb_translate_hook("close", n) });
    }
    const g = document.createElement("div");
    g.classList.add("atcb-modal-buttons");
    m.append(g);
    i.forEach((t, e) => {
        let a;
        if (t.href != null && t.href != "") {
            a = document.createElement("a");
            a.setAttribute("target", atcbDefaultTarget);
            a.setAttribute("href", t.href);
            a.setAttribute("rel", "noopener");
        } else {
            a = document.createElement("button");
            a.type = "button";
        }
        a.classList.add("atcb-modal-btn");
        if (t.primary) {
            a.classList.add("atcb-modal-btn-primary");
        }
        if (t.label == null || t.label == "") {
            t.label = atcb_translate_hook("modal.button.default", n);
        }
        a.textContent = t.label;
        g.append(a);
        if (e == 0 && r.length < 2 && l) {
            a.focus();
        }
        switch (t.type) {
            default:
            case "close":
                a.addEventListener(
                    "click",
                    atcb_debounce(() => {
                        atcb_log_event("closeList", "Modal Close Button", atcbStates["active"]);
                        atcb_close(o);
                    })
                );
                a.addEventListener("keyup", function (t) {
                    if (t.key == "Enter") {
                        atcb_log_event("closeList", "Modal Close Button", atcbStates["active"]);
                        atcb_toggle(o, "close", "", "", true);
                    }
                });
                break;
            case "yahoo2nd":
                a.addEventListener(
                    "click",
                    atcb_debounce(() => {
                        atcb_close(o);
                        atcb_subscribe_yahoo_modal_switch(o, n);
                    })
                );
                a.addEventListener("keyup", function (t) {
                    if (t.key == "Enter") {
                        atcb_toggle(o, "close", "", "", true);
                        atcb_subscribe_yahoo_modal_switch(o, n, l);
                    }
                });
                break;
            case "none":
                break;
        }
    });
    if (b > 1) {
        const k = c.querySelector('.atcb-modal[data-modal-nr="' + (b - 1) + '"]');
        k.style.display = "none";
    }
    atcb_manage_body_scroll(c, d);
}
function atcb_subscribe_yahoo_modal_switch(t, e, a) {
    atcb_set_fully_successful(t, e);
    atcb_generate_links(t, "yahoo2nd", e, "all", a);
}
function atcb_generate_date_button(b, t, u = "all") {
    if (u != "all") {
        u = parseInt(u) - 1;
    } else if (b.dates.length == 1) {
        u = 0;
    }
    const e = (function () {
        let t, e, a, o;
        let n = {};
        let i = {};
        if (u == "all") {
            n = atcb_generate_time(b.dates[0]);
            i = atcb_generate_time(b.dates[b.dates.length - 1]);
            a = b.dates[0].timeZone;
            o = b.dates[b.dates.length - 1].timeZone;
        } else {
            n = atcb_generate_time(b.dates[`${u}`]);
            i = n;
            a = b.dates[`${u}`].timeZone;
            o = a;
        }
        t = new Date(n.start);
        e = new Date(i.end);
        if (a == undefined || a == "" || n.allday) {
            a = "UTC";
        }
        if (o == undefined || o == "" || i.allday) {
            o = "UTC";
        }
        let r = "";
        let l = "";
        let c = "";
        if (!n.allday && Intl.DateTimeFormat().resolvedOptions().timeZone != a && a != o) {
            l = " (" + a + ")";
        }
        if ((!i.allday && Intl.DateTimeFormat().resolvedOptions().timeZone != o) || a != o) {
            c = " (" + o + ")";
        }
        const s = get_format_options(a);
        const d = get_format_options(o);
        if (t.toLocaleDateString(b.language, d.DateLong) === e.toLocaleDateString(b.language, d.DateLong)) {
            if (n.allday) {
                r = t.toLocaleDateString(b.language, s.DateShort);
            } else {
                r = t.toLocaleString(b.language, s.DateTimeShort) + l + " - " + e.toLocaleTimeString(b.language, d.Time) + c;
            }
        } else {
            if (n.allday) {
                r = t.toLocaleDateString(b.language, s.DateShort);
            } else {
                r = t.toLocaleString(b.language, s.DateTimeShort);
            }
            r += l + " - ";
            if (i.allday) {
                r += e.toLocaleDateString(b.language, d.DateLong);
            } else {
                r += e.toLocaleString(b.language, d.DateTimeLong);
            }
            r += c;
        }
        return r;
    })();
    const a = (function () {
        if (u != "all" && b.dates[`${u}`].status == "CANCELLED") {
            return atcb_translate_hook("date.status.cancelled", b) + "<br>" + atcb_translate_hook("date.status.cancelled.cta", b);
        }
        return "+ " + atcb_translate_hook("label.addtocalendar", b);
    })();
    const o = (function () {
        if (u != "all" && b.dates[`${u}`].status == "CANCELLED") {
            return atcb_translate_hook("date.status.cancelled", b);
        }
        return "";
    })();
    if (u == "all") {
        u = 0;
    }
    const n = new Date(atcb_generate_time(b.dates[`${u}`]).start);
    const i = (function () {
        if (b.dates[`${u}`].timeZone != null && b.dates[`${u}`].timeZone != "") {
            return b.dates[`${u}`].timeZone;
        } else {
            return "UTC";
        }
    })();
    const r = document.createElement("div");
    r.classList.add("atcb-date-btn-left");
    t.append(r);
    const l = document.createElement("div");
    l.classList.add("atcb-date-btn-day");
    r.append(l);
    const c = document.createElement("div");
    c.classList.add("atcb-date-btn-month");
    l.textContent = n.toLocaleString(b.language, { day: "numeric", timeZone: i });
    c.textContent = n.toLocaleString(b.language, { month: "short", timeZone: i });
    r.append(c);
    const s = document.createElement("div");
    s.classList.add("atcb-date-btn-right");
    t.append(s);
    const d = document.createElement("div");
    d.classList.add("atcb-date-btn-details");
    s.append(d);
    const m = document.createElement("div");
    m.classList.add("atcb-date-btn-headline");
    m.textContent = b.dates[`${u}`].name;
    d.append(m);
    if ((b.location != null && b.location != "") || o != "") {
        const x = document.createElement("div");
        x.classList.add("atcb-date-btn-content");
        d.append(x);
        if (o != "") {
            x.textContent = o;
            x.style.fontWeight = "600";
            x.style.color = "#9c1a23";
        } else {
            x.classList.add("atcb-date-btn-content-location");
            const v = document.createElement("span");
            v.classList.add("atcb-date-btn-content-icon");
            v.innerHTML = atcbIcon["location"];
            x.append(v);
            const k = document.createElement("span");
            k.textContent = b.location;
            x.append(k);
        }
    } else {
        m.style.cssText = "-webkit-line-clamp: 2";
    }
    const p = document.createElement("div");
    p.classList.add("atcb-date-btn-content");
    d.append(p);
    const g = document.createElement("span");
    g.classList.add("atcb-date-btn-content-icon");
    g.innerHTML = atcbIcon["ical"];
    p.append(g);
    const h = document.createElement("span");
    h.textContent = e;
    p.append(h);
    if (b.recurrence != null && b.recurrence != "") {
        const y = document.createElement("span");
        y.classList.add("atcb-date-btn-content-recurr-icon");
        p.append(y);
        y.innerHTML = "&#x27F3;";
    }
    const f = document.createElement("div");
    f.classList.add("atcb-date-btn-hover");
    f.innerHTML = a;
    s.append(f);
    if (!b.hideCheckmark) {
        const w = document.createElement("div");
        w.classList.add("atcb-checkmark");
        w.innerHTML = atcbIcon["checkmark"];
        t.append(w);
    }
}
function get_format_options(t) {
    return {
        DateShort: { timeZone: t, year: "numeric" },
        DateLong: { timeZone: t, year: "numeric", month: "numeric", day: "numeric" },
        DateTimeShort: { timeZone: t, year: "numeric", hour: "numeric", minute: "2-digit", hourCycle: "h23" },
        DateTimeLong: { timeZone: t, year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit", hourCycle: "h23" },
        Time: { timeZone: t, hour: "numeric", minute: "2-digit", hourCycle: "h23" },
    };
}
function atcb_generate_modal_host(t, e, a = true) {
    const o = document.getElementById(e.identifier + "-modal-host");
    if (!a && o) {
        return o.shadowRoot;
    }
    if (o) {
        o.remove();
    }
    let n = document.createElement("div");
    n.id = e.identifier + "-modal-host";
    if (t.host.hasAttribute("styleLight")) {
        n.setAttribute("styleLight", t.host.getAttribute("styleLight"));
    }
    if (t.host.hasAttribute("styleDark")) {
        n.setAttribute("styleDark", t.host.getAttribute("styleDark"));
    }
    n.setAttribute("atcb-button-id", e.identifier);
    document.body.append(n);
    n.attachShadow({ mode: "open", delegateFocus: true });
    const i = document.createElement("template");
    i.innerHTML = '<div class="atcb-modal-host-initialized" style="position:relative;"></div>';
    n.shadowRoot.append(i.content.cloneNode(true));
    atcb_set_light_mode(n.shadowRoot, e);
    atcb_load_css(n.shadowRoot, null, e.buttonStyle, false, false, e.customCss);
    return n.shadowRoot;
}
function atcb_generate_rich_data(e, t) {
    const a = document.createElement("script");
    a.type = "application/ld+json";
    const o = [];
    if (e.dates.length > 1) {
        const i = [];
        i.push('"@context":"https://schema.org"');
        i.push('"@type":"EventSeries"');
        i.push('"@id":"' + e.name.replace(/\s/g, "") + '"');
        i.push('"name":"' + e.name + '",');
        o.push("{\r\n" + i.join(",\r\n") + "\r\n");
    }
    const n = [];
    for (let t = 0; t < e.dates.length; t++) {
        const r = [];
        r.push('"@context":"https://schema.org"');
        r.push('"@type":"Event"');
        if (e.dates.length > 1) {
            r.push('"@id":"' + e.name.replace(/\s/g, "") + "-" + (t + 1) + '"');
        }
        if (e.dates[`${t}`].status == "CANCELLED") {
            r.push('"eventStatus":"https://schema.org/EventCancelled"');
        }
        r.push('"name":"' + e.dates[`${t}`].name + '"');
        if (e.dates[`${t}`].descriptionHtmlFree) {
            r.push('"description":"' + e.dates[`${t}`].descriptionHtmlFree + '"');
        }
        const l = atcb_generate_time(e.dates[`${t}`], "delimiters", "general", true);
        r.push('"startDate":"' + l.start + '"');
        if (l.duration != null) {
            r.push('"duration":"' + l.duration + '"');
        }
        r.push(
            e.dates[`${t}`].location.startsWith("http")
                ? '"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",\r\n"location": {\r\n"@type":"VirtualLocation",\r\n"url":"' + e.dates[`${t}`].location + '"\r\n}'
                : '"location":"' + e.dates[`${t}`].location + '"'
        );
        if (e.recurrence != null && e.recurrence != "") {
            r.push(...atcb_generate_rich_data_recurrence(e, l));
        } else {
            r.push('"endDate":"' + l.end + '"');
        }
        if (e.dates[`${t}`].organizer != null && e.dates[`${t}`].organizer != "") {
            const s = e.dates[`${t}`].organizer.split("|");
            r.push('"organizer":{\r\n"@type":"Person",\r\n"name":"' + s[0] + '",\r\n"email":"' + s[1] + '"\r\n}');
        }
        const c = [];
        if (e.images != null) {
            if (Array.isArray(e.images)) {
                for (let t = 0; t < e.images.length; t++) {
                    if (atcb_secure_url(e.images[`${t}`], e.debug) && e.images[`${t}`].startsWith("http")) {
                        c.push('"' + e.images[`${t}`] + '"');
                    }
                }
            }
        } else {
            c.push('"https://add-to-calendar-button.com/demo_assets/img/1x1.png"');
            c.push('"https://add-to-calendar-button.com/demo_assets/img/4x3.png"');
            c.push('"https://add-to-calendar-button.com/demo_assets/img/16x9.png"');
        }
        if (c.length > 0) {
            r.push('"image":[\r\n' + c.join(",\r\n") + "]");
        }
        n.push("{\r\n" + r.join(",\r\n") + "\r\n}");
    }
    if (e.dates.length > 1) {
        a.textContent = o.join(",\r\n") + '"subEvents":[\r\n' + n.join(",\r\n") + "\r\n]\r\n}";
    } else {
        a.textContent = n[0];
    }
    t.parentNode.insertBefore(a, t);
}
function atcb_generate_rich_data_recurrence(t, e) {
    const a = [];
    a.push('"eventSchedule": { "@type": "Schedule"');
    if (t.dates[0].timeZone != null && t.dates[0].timeZone != "") {
        a.push('"scheduleTimezone":"' + t.dates[0].timeZone + '"');
    }
    const o = "P" + t.recurrence_interval + t.recurrence_frequency.substr(0, 1);
    a.push('"repeatFrequency":"' + o + '"');
    if (t.recurrence_byDay != null && t.recurrence_byDay != "") {
        const n = (function () {
            if (/\d/.test(t.recurrence_byDay)) {
                return '"' + t.recurrence_byDay + '"';
            } else {
                const e = t.recurrence_byDay.split(",");
                const a = {
                    MO: "https://schema.org/Monday",
                    TU: "https://schema.org/Tuesday",
                    WE: "https://schema.org/Wednesday",
                    TH: "https://schema.org/Thursday",
                    FR: "https://schema.org/Friday",
                    SA: "https://schema.org/Saturday",
                    SU: "https://schema.org/Sunday",
                };
                const o = [];
                for (let t = 0; t < e.length; t++) {
                    o.push('"' + a[e[`${t}`]] + '"');
                }
                return "[" + o.join(",") + "]";
            }
        })();
        a.push('"byDay":' + n);
    }
    if (t.recurrence_byMonth != null && t.recurrence_byMonth != "") {
        const i = t.recurrence_byMonth.includes(",") ? "[" + t.recurrence_byMonth + "]" : t.recurrence_byMonth;
        a.push('"byMonth":"' + i + '"');
    }
    if (t.recurrence_byMonthDay != null && t.recurrence_byMonthDay != "") {
        const r = t.recurrence_byMonthDay.includes(",") ? "[" + t.recurrence_byMonthDay + "]" : t.recurrence_byMonthDay;
        a.push('"byMonthDay":"' + r + '"');
    }
    if (t.recurrence_count != null && t.recurrence_count != "") {
        a.push('"repeatCount":"' + t.recurrence_count + '"');
    }
    if (t.recurrence_until != null && t.recurrence_until != "") {
        a.push('"endDate":"' + t.recurrence_until + '"');
    }
    if (t.startTime != null && t.startTime != "" && t.endTime != null && t.endTime != "") {
        a.push('"startTime":"' + t.startTime + ':00"');
        a.push('"endTime":"' + t.endTime + ':00"');
        a.push('"duration":"' + e.duration + '"');
    }
    a.push('"startDate":"' + t.startDate + '" }');
    return a;
}
function atcb_generate_links(t, e, a, o = "all", n = false, i = false) {
    if (o != "all") {
        o = parseInt(o) - 1;
    } else if (a.dates.length == 1) {
        o = 0;
    }
    if (a.subscribe) {
        atcb_generate_subscribe_links(t, e, a, n);
        return;
    }
    if (isMobile() && (e == "msteams" || e == "ms365" || e == "outlookcom")) {
        e = "ical";
    }
    if (o != "all") {
        if (a.dates[`${o}`].status == "CANCELLED" && e != "apple" && e != "ical") {
            atcb_create_modal(t, a, "warning", atcb_translate_hook("date.status.cancelled", a), atcb_translate_hook("date.status.cancelled.cta", a), [], [], n);
        } else {
            switch (e) {
                case "apple":
                case "ical":
                    atcb_generate_ical(t, a, o, n);
                    break;
                case "google":
                    atcb_generate_google(a.dates[`${o}`]);
                    break;
                case "msteams":
                    atcb_generate_msteams(a.dates[`${o}`]);
                    break;
                case "ms365":
                    atcb_generate_microsoft(a.dates[`${o}`]);
                    break;
                case "outlookcom":
                    atcb_generate_microsoft(a.dates[`${o}`], "outlook");
                    break;
                case "yahoo":
                    atcb_generate_yahoo(a.dates[`${o}`]);
                    break;
            }
        }
        const r = document.getElementById(a.identifier + "-modal-host");
        if (r) {
            const c = r.shadowRoot.getElementById(a.identifier + "-" + e + "-" + (o + 1));
            if (c) {
                c.classList.add("atcb-saved");
            }
        }
        atcbStates[`${a.identifier}`][`${e}`][`${o}`]++;
        const l = atcbStates[`${a.identifier}`][`${e}`].filter(function (t) {
            return t < 1;
        });
        if (l.length == 0) {
            atcb_set_fully_successful(t, a, i);
        }
        return;
    }
    atcb_generate_multidate_links(t, e, a, n, i);
}
function atcb_generate_multidate_links(t, e, a, o, n) {
    if (
        (e == "ical" || e == "apple") &&
        a.dates.every(function (t) {
            if (t.status == "CANCELLED" || (t.organizer != null && t.organizer != "")) {
                return false;
            }
            return true;
        })
    ) {
        atcb_generate_ical(t, a, "all", o);
        for (let t = 0; t < atcbStates[`${a.identifier}`][`${e}`].length; t++) {
            atcbStates[`${a.identifier}`][`${e}`][`${t}`]++;
        }
        atcb_set_fully_successful(t, a, n);
        return;
    }
    if (!n) {
        const i = [e];
        for (let t = 0; t < a.dates.length; t++) {
            i.push(t + 1);
        }
        atcb_create_modal(t, a, e, atcb_translate_hook("modal.multidate.h", a), atcb_translate_hook("modal.multidate.text", a), [], i, o);
    }
}
function atcb_generate_subscribe_links(t, e, a, o) {
    const n = a.icsFile.replace("https://", "webcal://");
    switch (e) {
        case "apple":
        case "ical":
            atcb_subscribe_ical(n);
            break;
        case "google":
            atcb_subscribe_google(n);
            break;
        case "ms365":
            atcb_subscribe_microsoft(n, a.name);
            break;
        case "outlookcom":
            atcb_subscribe_microsoft(n, a.name, "outlook");
            break;
        case "yahoo":
            atcb_copy_to_clipboard(a.icsFile);
            atcb_create_modal(
                t,
                a,
                "yahoo",
                atcb_translate_hook("modal.subscribe.yahoo.h", a),
                atcb_translate_hook("modal.clipboard.text", a) + "<br>" + atcb_translate_hook("modal.subscribe.yahoo.text", a),
                [{ label: atcb_translate_hook("Open Yahoo Calendar", a), primary: true, type: "yahoo2nd", href: "https://www.yahoo.com/calendar" }, { label: atcb_translate_hook("cancel", a) }],
                [],
                o
            );
            return;
        case "yahoo2nd":
            atcb_copy_to_clipboard(a.icsFile);
            atcb_create_modal(
                t,
                a,
                "yahoo",
                atcb_translate_hook("modal.subscribe.yahoo.h", a),
                atcb_translate_hook("modal.clipboard.text", a) + "<br>" + atcb_translate_hook("modal.subscribe.yahoo.text", a),
                [{ label: atcb_translate_hook("Open Yahoo Calendar", a), type: "none", href: "https://www.yahoo.com/calendar" }, { label: atcb_translate_hook("cancel", a) }],
                [],
                o
            );
            return;
    }
    atcb_set_fully_successful(t, a);
}
function atcb_set_fully_successful(t, e, a = false) {
    const o = t.getElementById(e.identifier);
    if (o) {
        o.classList.add("atcb-saved");
    }
    atcb_saved_hook(t, e);
    if (a && t.querySelectorAll(".atcb-modal[data-modal-nr]").length < 2) {
        atcb_toggle(t, "close");
    }
}
function atcb_subscribe_ical(t) {
    atcb_open_cal_url(t);
}
function atcb_subscribe_google(t) {
    const e = "https://calendar.google.com/calendar/r?cid=";
    const a = (function () {
        if (t.startsWith("https://calendar.google.com/") || t.startsWith("webcal://calendar.google.com/") || t.startsWith("http://calendar.google.com/") || t.startsWith("//calendar.google.com/")) {
            return t.replace(/^(.)*\?cid=/, "");
        }
        return encodeURIComponent(t);
    })();
    atcb_open_cal_url(e + a);
}
function atcb_subscribe_microsoft(t, e, a = "365") {
    const o = [];
    const n = (function () {
        if (a == "outlook") {
            return "https://outlook.live.com/calendar/0/addfromweb/?";
        } else {
            return "https://outlook.office.com/calendar/0/addfromweb/?";
        }
    })();
    o.push("url=" + encodeURIComponent(t));
    o.push("name=" + encodeURIComponent(e));
    atcb_open_cal_url(n + o.join("&"));
}
function atcb_generate_google(t) {
    const e = [];
    e.push("https://calendar.google.com/calendar/render?action=TEMPLATE");
    const a = atcb_generate_time(t, "clean", "google");
    e.push("dates=" + encodeURIComponent(a.start) + "%2F" + encodeURIComponent(a.end));
    if (t.timeZone != null && t.timeZone != "" && !/(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(t.timeZone)) {
        e.push("ctz=" + t.timeZone);
    }
    if (t.name != null && t.name != "") {
        e.push("text=" + encodeURIComponent(t.name));
    }
    const o = [];
    if (t.description != null && t.description != "") {
        o.push(t.description);
    }
    if (t.location != null && t.location != "") {
        e.push("location=" + encodeURIComponent(t.location));
        if (isiOS()) {
            if (o.length > 0) {
                o.push("<br><br>");
            }
            o.push("&#128205;: " + t.location);
        }
    }
    if (o.length > 0) {
        e.push("details=" + encodeURIComponent(o.join()));
    }
    if (t.recurrence != null && t.recurrence != "") {
        e.push("recur=" + encodeURIComponent(t.recurrence));
    }
    if (t.availability != null && t.availability != "") {
        const n = (function () {
            if (t.availability == "free") {
                return "crm=AVAILABLE&trp=false";
            }
            return "crm=BUSY&trp=true";
        })();
        e.push(n);
    }
    e.push("uid=" + encodeURIComponent(t.uid));
    atcb_open_cal_url(e.join("&"));
}
function atcb_generate_yahoo(t) {
    const e = [];
    e.push("https://calendar.yahoo.com/?v=60");
    const a = atcb_generate_time(t, "clean");
    e.push("st=" + encodeURIComponent(a.start) + "&et=" + encodeURIComponent(a.end));
    if (a.allday) {
        e.push("dur=allday");
    }
    if (t.name != null && t.name != "") {
        e.push("title=" + encodeURIComponent(t.name));
    }
    if (t.location != null && t.location != "") {
        e.push("in_loc=" + encodeURIComponent(t.location));
    }
    if (t.descriptionHtmlFree != null && t.descriptionHtmlFree != "") {
        e.push("desc=" + encodeURIComponent(t.descriptionHtmlFree));
    }
    atcb_open_cal_url(e.join("&"));
}
function atcb_generate_microsoft(t, e = "365") {
    const a = [];
    const o = "/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent";
    const n = (function () {
        if (e == "outlook") {
            return "https://outlook.live.com" + o;
        } else {
            return "https://outlook.office.com" + o;
        }
    })();
    a.push(n);
    const i = atcb_generate_time(t, "delimiters", "microsoft");
    a.push("startdt=" + encodeURIComponent(i.start));
    a.push("enddt=" + encodeURIComponent(i.end));
    if (i.allday) {
        a.push("allday=true");
    }
    if (t.name != null && t.name != "") {
        a.push("subject=" + encodeURIComponent(t.name));
    }
    if (t.location != null && t.location != "") {
        a.push("location=" + encodeURIComponent(t.location));
    }
    if (t.description != null && t.description != "") {
        a.push("body=" + encodeURIComponent(t.description.replace(/\n/g, "<br>")));
    }
    a.push("uid=" + encodeURIComponent(t.uid));
    atcb_open_cal_url(a.join("&"));
}
function atcb_generate_msteams(t) {
    const e = [];
    const a = "https://teams.microsoft.com/l/meeting/new?";
    const o = atcb_generate_time(t, "delimiters", "microsoft");
    e.push("startTime=" + encodeURIComponent(o.start));
    e.push("endTime=" + encodeURIComponent(o.end));
    if (t.name != null && t.name != "") {
        e.push("subject=" + encodeURIComponent(t.name));
    }
    let n = "";
    if (t.location != null && t.location != "") {
        n = encodeURIComponent(t.location);
        e.push("location=" + n);
        n += " // ";
    }
    if (t.descriptionHtmlFree != null && t.descriptionHtmlFree != "") {
        e.push("content=" + n + encodeURIComponent(t.descriptionHtmlFree));
    }
    e.push("uid=" + encodeURIComponent(t.uid));
    atcb_open_cal_url(a + e.join("&"));
}
function atcb_open_cal_url(t, e = "") {
    if (e == "") {
        e = atcbDefaultTarget;
    }
    if (atcb_secure_url(t)) {
        window.open(t, e).focus();
    }
}
function atcb_generate_ical(t, a, e = "all", o = false) {
    if (e != "all") {
        e = parseInt(e);
    }
    const n = atcb_determine_ical_filename(a, e);
    const i = (function () {
        if (e != "all" && a.dates[`${e}`].icsFile != null && a.dates[`${e}`].icsFile != "") {
            return a.dates[`${e}`].icsFile;
        }
        if (a.icsFile != null && a.icsFile != "") {
            return a.icsFile;
        }
        return "";
    })();
    if (i != "" && (!isiOS() || !isWebView() || a.bypassWebViewCheck == true)) {
        atcb_save_file(i, n);
        return;
    }
    const r = new Date();
    const l = ["BEGIN:VCALENDAR", "VERSION:2.0"];
    l.push("PRODID:-// https://add-to-calendar-pro.com // button v" + atcbVersion + " //EN");
    l.push("CALSCALE:GREGORIAN");
    if (e == "all") {
        l.push("METHOD:PUBLISH");
    } else {
        if (a.dates[`${e}`].status != null && a.dates[`${e}`].status == "CANCELLED") {
            l.push("METHOD:CANCEL");
        } else {
            if (a.dates[`${e}`].organizer != null && a.dates[`${e}`].organizer != "") {
                l.push("METHOD:REQUEST");
            } else {
                l.push("METHOD:PUBLISH");
            }
        }
    }
    const c = [];
    const s = (function () {
        if (e != "all") {
            return e;
        }
        return 0;
    })();
    const d = (function () {
        if (e != "all") {
            return e;
        }
        return a.dates.length - 1;
    })();
    for (let e = s; e <= d; e++) {
        const u = atcb_generate_time(a.dates[`${e}`], "clean", "ical");
        const m = (function () {
            if (u.allday) {
                return ";VALUE=DATE";
            }
            if (a.dates[`${e}`].timeZone != null && a.dates[`${e}`].timeZone != "") {
                const t = tzlib_get_ical_block(a.dates[`${e}`].timeZone);
                if (!c.includes(a.dates[`${e}`].timeZone)) {
                    l.push(t[0]);
                }
                c.push(a.dates[`${e}`].timeZone);
                return ";" + t[1];
            }
        })();
        l.push("BEGIN:VEVENT");
        l.push("UID:" + a.dates[`${e}`].uid);
        l.push("DTSTAMP:" + atcb_format_datetime(r, "clean", true));
        l.push("DTSTART" + m + ":" + u.start);
        l.push("DTEND" + m + ":" + u.end);
        l.push("SUMMARY:" + a.dates[`${e}`].name.replace(/.{65}/g, "$&" + "\r\n "));
        if (a.dates[`${e}`].descriptionHtmlFree != null && a.dates[`${e}`].descriptionHtmlFree != "") {
            l.push("DESCRIPTION:" + a.dates[`${e}`].descriptionHtmlFree.replace(/\n/g, "\\n").replace(/.{60}/g, "$&" + "\r\n "));
        }
        if (a.dates[`${e}`].description != null && a.dates[`${e}`].description != "") {
            l.push(
                'X-ALT-DESC;FMTTYPE=text/html:\r\n <!DOCTYPE HTML PUBLIC ""-//W3C//DTD HTML 3.2//EN"">\r\n <HTML><BODY>\r\n ' + a.dates[`${e}`].description.replace(/\n/g, "<br>").replace(/.{60}/g, "$&" + "\r\n ") + "\r\n </BODY></HTML>"
            );
        }
        if (a.dates[`${e}`].location != null && a.dates[`${e}`].location != "") {
            l.push("LOCATION:" + a.dates[`${e}`].location);
        }
        if (a.dates[`${e}`].organizer != null && a.dates[`${e}`].organizer != "") {
            const p = a.dates[`${e}`].organizer.split("|");
            l.push("ORGANIZER;CN=" + p[0] + ":MAILTO:" + p[1]);
        }
        if (a.recurrence != null && a.recurrence != "") {
            l.push(a.recurrence);
        }
        if (a.dates[`${e}`].availability != null && a.dates[`${e}`].availability != "") {
            const g = (function () {
                if (a.dates[`${e}`].availability == "free") {
                    return "TRANSPARENT";
                }
                return "OPAQUE";
            })();
            l.push("TRANSP:" + g);
        }
        l.push("SEQUENCE:" + a.dates[`${e}`].sequence);
        l.push("STATUS:" + a.dates[`${e}`].status);
        l.push("CREATED:" + a.created);
        l.push("LAST-MODIFIED:" + a.updated);
        l.push("END:VEVENT");
    }
    l.push("END:VCALENDAR");
    const b = (function () {
        if (i != "") {
            return i;
        }
        return "data:text/calendar;charset=utf-8," + encodeURIComponent(l.join("\r\n"));
    })();
    if ((isiOS() && isChrome()) || (isWebView() && (isiOS() || (isAndroid() && isProblematicWebView())))) {
        atcb_ical_copy_note(t, b, a, o);
        return;
    }
    atcb_save_file(b, n);
}
function atcb_determine_ical_filename(t, e) {
    const a = (function () {
        if (e != "all" && e != 0) {
            return "-" + parseInt(e) + 1;
        }
        return "";
    })();
    if (t.iCalFileName != null && t.iCalFileName != "") {
        return t.iCalFileName + a;
    }
    if (t.icsFile != null && t.icsFile != "") {
        const o = t.icsFile.split("/").pop().split(".")[0];
        if (o != "") {
            return o + a;
        }
    }
    return "event-to-save-in-my-calendar" + a;
}
function atcb_ical_copy_note(t, e, a, o) {
    atcb_copy_to_clipboard(e);
    if (isiOS() && isChrome()) {
        atcb_create_modal(
            t,
            a,
            "warning",
            atcb_translate_hook("modal.crios.ical.h", a),
            atcb_translate_hook("modal.crios.ical.text", a) + "<br>" + atcb_translate_hook("modal.clipboard.text", a) + "<br>" + atcb_translate_hook("modal.crios.ical.steps", a),
            [],
            [],
            o
        );
        return;
    }
    atcb_create_modal(
        t,
        a,
        "warning",
        atcb_translate_hook("modal.webview.ical.h", a),
        atcb_translate_hook("modal.webview.ical.text", a) + "<br>" + atcb_translate_hook("modal.clipboard.text", a) + "<br>" + atcb_translate_hook("modal.webview.ical.steps", a),
        [],
        [],
        o
    );
}
function atcb_saved_hook(t, e) {
    atcb_log_event("success", e.identifier, e.identifier);
    if (e.proKey == null || e.proKey == "") {
        return;
    }
}
function atcb_save_file(t, e) {
    try {
        const a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
        a.rel = "noopener";
        a.href = t;
        if (isMobile()) {
            a.target = "_self";
        } else {
            a.target = "_blank";
        }
        a.download = e + ".ics";
        const o = new MouseEvent("click", { view: window, button: 0, bubbles: true, cancelable: false });
        a.dispatchEvent(o);
        (window.URL || window.webkitURL).revokeObjectURL(a.href);
    } catch (t) {
        console.error(t);
    }
}
function atcb_generate_time(t, e = "delimiters", a = "general", o = false) {
    if (t.startTime != null && t.startTime != "" && t.endTime != null && t.endTime != "") {
        const n = new Date(t.startDate + "T" + t.startTime + ":00.000+00:00");
        const i = new Date(t.endDate + "T" + t.endTime + ":00.000+00:00");
        const r = i - n;
        const l = Math.floor(r / 1e3 / 60 / 60);
        const c = Math.floor(((r - l * 60 * 60 * 1e3) / 1e3 / 60) % 60);
        const s = (function () {
            if (l < 10) {
                return "0" + l + ":" + ("0" + c).slice(-2);
            }
            return l + ":" + ("0" + c).slice(-2);
        })();
        if ((t.timeZone == null || (t.timeZone != null && t.timeZone == "")) && o) {
            return { start: n.toISOString().replace(".000Z", "+00:00"), end: i.toISOString().replace(".000Z", "+00:00"), duration: s, allday: false };
        }
        if (t.timeZone != null && t.timeZone != "") {
            if (a == "ical" || (a == "google" && !/(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(t.timeZone))) {
                return { start: atcb_format_datetime(n, "clean", true, true), end: atcb_format_datetime(i, "clean", true, true), duration: s, allday: false };
            }
            const d = tzlib_get_offset(t.timeZone, t.startDate, t.startTime);
            const b = tzlib_get_offset(t.timeZone, t.endDate, t.endTime);
            if (o) {
                const p = d.slice(0, 3) + ":" + d.slice(3);
                const g = b.slice(0, 3) + ":" + b.slice(3);
                return { start: n.toISOString().replace(".000Z", p), end: i.toISOString().replace(".000Z", g), duration: s, allday: false };
            }
            const u = parseInt(d[0] + 1) * -1 * ((parseInt(d.substr(1, 2)) * 60 + parseInt(d.substr(3, 2))) * 60 * 1e3);
            const m = parseInt(b[0] + 1) * -1 * ((parseInt(b.substr(1, 2)) * 60 + parseInt(b.substr(3, 2))) * 60 * 1e3);
            n.setTime(n.getTime() + u);
            i.setTime(i.getTime() + m);
        }
        return { start: atcb_format_datetime(n, e), end: atcb_format_datetime(i, e), duration: s, allday: false };
    } else {
        const h = t.startDate.split("-");
        const f = t.endDate.split("-");
        const n = new Date(Date.UTC(h[0], h[1] - 1, h[2], 12, 0, 0));
        const i = new Date(Date.UTC(f[0], f[1] - 1, f[2], 12, 0, 0));
        if (a == "google" || a == "microsoft" || a == "ical") {
            i.setDate(i.getDate() + 1);
        }
        return { start: atcb_format_datetime(n, e, false), end: atcb_format_datetime(i, e, false), allday: true };
    }
}
function atcb_format_datetime(t, e = "delimiters", a = true, o = false) {
    const n = (function () {
        if (a) {
            if (e == "clean") {
                return /(-|:|(\.\d{3}))/g;
            }
            return /(\.\d{3})/g;
        }
        if (e == "clean") {
            return /(-|T(\d{2}:\d{2}:\d{2}\.\d{3})Z)/g;
        }
        return /T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g;
    })();
    const i = o ? t.toISOString().replace(n, "").replace("Z", "") : t.toISOString().replace(n, "");
    return i;
}
function atcb_secure_content(t, e = true) {
    const a = e ? JSON.stringify(t) : t;
    const o = a.replace(/(<(?!br)([^>]+)>)/gi, "");
    if (e) {
        return JSON.parse(o);
    } else {
        return o;
    }
}
function atcb_secure_url(t, e = true) {
    if (
        t.match(
            /((\.\.\/)|(\.\.\\)|(%2e%2e%2f)|(%252e%252e%252f)|(%2e%2e\/)|(%252e%252e\/)|(\.\.%2f)|(\.\.%252f)|(%2e%2e%5c)|(%252e%252e%255c)|(%2e%2e\\)|(%252e%252e\\)|(\.\.%5c)|(\.\.%255c)|(\.\.%c0%af)|(\.\.%25c0%25af)|(\.\.%c1%9c)|(\.\.%25c1%259c))/gi
        )
    ) {
        if (e) {
            console.error("Seems like the generated URL includes at least one security issue and got blocked. Please check the calendar button parameters!");
        }
        return false;
    } else {
        return true;
    }
}
function atcb_validEmail(t, e = false) {
    if (!/^.{0,70}@.{1,30}\.[\w.]{2,9}$/.test(t)) {
        return false;
    }
    if (e) {
        console.log("Testing for MX records not yet available");
    }
    return true;
}
function atcb_rewrite_html_elements(t, e = false) {
    t = t.replace(/<br\s*\/?>/gi, "\n");
    if (e) {
        t = t.replace(/\[(|\/)(url|br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]|((\|.*)\[\/url\])/gi, "");
    } else {
        t = t.replace(/\[(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]/gi, "<$1$2>");
        t = t.replace(/\[url\]([\w&$+.,:;=~!*'?@^%#|\s\-()/]*)\[\/url\]/gi, function (t, e) {
            const a = e.split("|");
            const o = (function () {
                if (a.length > 1 && a[1] != "") {
                    return a[1];
                } else {
                    return a[0];
                }
            })();
            return '<a href="' + a[0] + '" target="' + atcbDefaultTarget + '" rel="noopener">' + o + "</a>";
        });
    }
    return t;
}
function atcb_position_list(t, e, a, o = false, n = false) {
    let i = false;
    const r = e;
    if (e.querySelector(".atcb-dropdown-anchor") !== null) {
        e = e.querySelector(".atcb-dropdown-anchor");
        i = true;
    }
    a.style.position = "relative";
    a.style.display = "inline-block";
    let l = e.getBoundingClientRect();
    const c = r.getBoundingClientRect();
    const s = r.parentNode.getBoundingClientRect();
    const d = document.documentElement.clientHeight;
    if (i === true && !a.classList.contains("atcb-dropoverlay")) {
        let t = a.getBoundingClientRect();
        a.style.width = t.width + "px";
        if ((a.classList.contains("atcb-dropup") && n) || (!o && !n && l.top + t.height > d - 20 && 2 * c.top + c.height - l.top - t.height > 20)) {
            r.classList.add("atcb-dropup");
            a.classList.add("atcb-dropup");
            a.style.bottom = s.bottom - c.bottom + (l.top - c.top) + "px";
        } else {
            a.style.top = c.top - s.top + (l.top - c.top) + "px";
            if (r.classList.contains("atcb-dropup")) {
                r.classList.remove("atcb-dropup");
            }
        }
        l = e.getBoundingClientRect();
        a.style.minWidth = l.width + "px";
        if ((a.classList.contains("atcb-dropdown") && !a.classList.contains("atcb-style-round")) || a.classList.contains("atcb-style-text") || a.classList.contains("atcb-style-neumorphism")) {
            a.style.maxWidth = l.width + "px";
        }
        t = a.getBoundingClientRect();
        a.style.left = Math.round(l.left - s.left - (t.width - l.width) / 2) + "px";
    } else {
        a.style.minWidth = c.width + 20 + "px";
        const u = a.getBoundingClientRect();
        a.style.width = u.width + "px";
        const m = Math.round((c.width - u.width) / 4);
        a.style.margin = -Math.round((u.height + c.height) / 2) + "px " + m + "px 0 " + m + "px";
    }
    a.style.position = "absolute";
    a.style.display = "block";
    const b = t.querySelector("#add-to-calendar-button-reference");
    if (b) {
        if (r.classList.contains("atcb-dropup")) {
            r.parentNode.parentNode.after(b);
            b.style.padding = "5px 15px";
            b.style.position = "absolute";
            b.style.left = c.left + "px";
        }
    }
}
function atcb_manage_body_scroll(e, a = null) {
    const t = (function () {
        if (a != null) {
            return a;
        } else {
            const t = e.querySelectorAll(".atcb-modal");
            if (t.length == 0) {
                return null;
            }
            return t[t.length - 1];
        }
    })();
    if (t == null) {
        return;
    }
    const o = t.getBoundingClientRect();
    if (o.height + 100 > window.innerHeight) {
        document.body.classList.add("atcb-modal-no-scroll");
        document.documentElement.classList.add("atcb-modal-no-scroll");
    } else {
        document.body.classList.remove("atcb-modal-no-scroll");
        document.documentElement.classList.remove("atcb-modal-no-scroll");
    }
}
function atcb_set_fullsize(t) {
    t.style.width = window.innerWidth + "px";
    t.style.height = window.innerHeight + 100 + "px";
}
function atcb_set_sizes(t, e) {
    t.style.setProperty("--base-font-size-l", e["l"] + "px");
    t.style.setProperty("--base-font-size-m", e["m"] + "px");
    t.style.setProperty("--base-font-size-s", e["s"] + "px");
}
function atcb_generate_uuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (t) => (t ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (t / 4)))).toString(16));
}
function atcb_copy_to_clipboard(t) {
    const e = document.createElement("input");
    document.body.append(e);
    const a = e.contentEditable;
    const o = e.readOnly;
    e.value = t;
    e.contentEditable = true;
    e.readOnly = false;
    if (isiOS()) {
        var n = document.createRange();
        n.selectNodeContents(e);
        var i = window.getSelection();
        i.removeAllRanges();
        i.addRange(n);
        e.setSelectionRange(0, 999999);
    } else {
        navigator.clipboard.writeText(t);
        e.select();
    }
    e.contentEditable = a;
    e.readOnly = o;
    document.execCommand("copy");
    e.remove();
}
function atcb_debounce(e, a = 200) {
    let o;
    return (...t) => {
        clearTimeout(o);
        o = setTimeout(() => {
            e.apply(this, t);
        }, a);
    };
}
function atcb_debounce_leading(e, a = 300) {
    let o;
    return (...t) => {
        if (!o) {
            e.apply(this, t);
        }
        clearTimeout(o);
        o = setTimeout(() => {
            o = undefined;
        }, a);
    };
}
function atcb_log_event(t, e, a) {
    const o = (function () {
        const t = document.getElementById(a);
        if (t) {
            return t;
        }
        return document.querySelector('[atcb-button-id="' + a + '"]');
    })();
    if (o) {
        o.setAttribute("atcb-last-event", t + ":" + e);
    }
    if (isBrowser()) {
        atcb_push_to_data_layer(t, e);
    }
}
function atcb_push_to_data_layer(t, e) {
    let a = "";
    switch (t) {
        case "initialization":
            a = "Initialized";
            break;
        case "openList":
            a = "Opened";
            break;
        case "closeList":
            a = "Closed";
            break;
        case "openCalendarLink":
            a = "Opened";
            break;
        case "openSingletonLink":
            a = "Opened";
            break;
        case "openSubEventLink":
            a = "Opened";
            break;
        case "success":
            a = "Saved";
            break;
    }
    const o = (window.dataLayer = window.dataLayer || []);
    o.push({ eventCategory: "Add-to-Calendar-Button", eventAction: a, eventLabel: e, event: t });
}
const rtlLanguages = ["ar"];
const i18nStrings = {
    en: {
        "label.addtocalendar": "Add to Calendar",
        "label.icalfile": "iCal File",
        close: "Close",
        "modal.button.default": "Click me",
        "modal.webview.ical.h": "Open your browser",
        "modal.webview.ical.text": "Unfortunately, in-app browsers have problems with the way we generate the calendar file.",
        "modal.clipboard.text": "We automatically copied a magical URL into your clipboard.",
        "modal.webview.ical.steps": "<ol><li><strong>Open another browser</strong> on your phone, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>",
        "modal.crios.ical.h": "Open Safari",
        "modal.crios.ical.text": "Unfortunately, Chrome on iOS has problems with the way we generate the calendar file.",
        "modal.crios.ical.steps": "<ol><li><strong>Open Safari</strong>, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>",
        "modal.multidate.h": "This is an event series",
        "modal.multidate.text": "Add the individual events one by one:",
        "date.status.cancelled": "This date got cancelled.",
        "date.status.cancelled.cta": "Please update your calendar!",
        "modal.subscribe.yahoo.h": "Add Calendar to Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Open now the Yahoo Calendar.</li><li>Click the "Actions" tab.</li><li>Hit "Follow Other Calendars".</li><li>Set a name and past the clipboard content into the url field.</li></ol>',
        cancel: "Cancel",
    },
    de: {
        "label.addtocalendar": "Im Kalender speichern",
        "label.icalfile": "iCal-Datei",
        close: "Schließen",
        "modal.button.default": "Klick mich",
        "modal.webview.ical.h": "Öffne deinen Browser",
        "modal.webview.ical.text": "Leider haben In-App-Browser Probleme mit der Art, wie wir Kalender-Dateien erzeugen.",
        "modal.clipboard.text": "Wir haben automatisch eine magische URL in deine Zwischenablage kopiert.",
        "modal.webview.ical.steps": "<ol><li><strong>Öffne einen anderen Browser</strong> auf deinem Smartphone, ...</li><li>Nutze die <strong>Einfügen</strong>-Funktion, um fortzufahren.</li></ol>",
        "modal.crios.ical.h": "Öffne Safari",
        "modal.crios.ical.text": "Leider hat Chrome unter iOS Probleme mit der Art, wie wir Kalender-Dateien erzeugen.",
        "modal.crios.ical.steps": "<ol><li><strong>Öffne Safari</strong>, ...</li><li>Nutze die <strong>Einfügen</strong>-Funktion, um fortzufahren.</li></ol>",
        "modal.multidate.h": "Dies ist eine Termin-Reihe",
        "modal.multidate.text": "Füge die einzelnen Termine der Reihe nach deinem Kalender hinzu:",
        "date.status.cancelled": "Dieser Termin wurde abgesagt.",
        "date.status.cancelled.cta": "Bitte aktualisiere deinen Kalender!",
        "modal.subscribe.yahoo.h": "Kalender zu Yahoo hinzufügen",
        "modal.subscribe.yahoo.text":
            '<ol><li>Öffne den Yahoo Kalender.</li><li>Klicke auf den "Aktionen" Tab.</li><li>Wähle "Weiteren Kalendern folgen".</li><li>Wähle einen Namen und füge die URL aus deiner Zwischenablage in das URL-Feld ein.</li></ol>',
        cancel: "Abbrechen",
    },
    es: {
        "label.addtocalendar": "Añadir al Calendario",
        "label.icalfile": "iCal Ficha",
        close: "Ciérralo",
        "modal.button.default": "Haz clic mí",
        "modal.webview.ical.h": "Abra su browser",
        "modal.webview.ical.text": "Lamentablemente, los browsers in-app tienen problemas con la forma en que generamos el archivo del calendario.",
        "modal.clipboard.text": "Hemos copiado automáticamente una URL mágica en su portapapeles.",
        "modal.webview.ical.steps": "<ol><li><strong>Abre otro browser</strong> en tu smartphone, ...</li><li>Utilice la función de <strong>pegar</strong> para continuar.</li></ol>",
        "modal.crios.ical.h": "Abrir Safari",
        "modal.crios.ical.text": "Lamentablemente, Chrome en iOS tiene problemas con la forma de generar el archivo de calendario.",
        "modal.crios.ical.steps": "<ol><li><strong>Abrir Safari</strong>, ...</li><li>Utilice la función de <strong>pegar</strong> para continuar.</li></ol>",
        "modal.multidate.h": "Esta es una serie de fechas",
        "modal.multidate.text": "Añada las fechas individuales a su calendario en orden:",
        "date.status.cancelled": "Esta fecha fue cancelada.",
        "date.status.cancelled.cta": "Actualice su calendario!",
        "modal.subscribe.yahoo.h": "Añadir calendario a Yahoo",
        "modal.subscribe.yahoo.text":
            '<ol><li>Abra el calendario de Yahoo.</li><li>Haga clic en la pestaña "Acciones".</li><li>Seleccione "Seguir otros calendarios".</li><li>Elige un nombre y pega la URL de tu portapapeles en el campo URL.</li></ol>',
        cancel: "Cancelar",
    },
    pt: {
        "label.addtocalendar": "Incluir no Calendário",
        "label.icalfile": "Ficheiro iCal",
        close: "Fechar",
        "modal.button.default": "Clicar-me",
        "modal.webview.ical.h": "Abra o seu browser",
        "modal.webview.ical.text": "Infelizmente, os navegadores em tampas têm problemas com a forma como geramos o ficheiro de calendário.",
        "modal.clipboard.text": "Copiámos automaticamente um URL mágico para a sua área de transferência.",
        "modal.webview.ical.steps": "<ol><li><strong>Abrir outro browser</strong> en tu smartphone, ...</li><li>Use a função <forte>colar</strong> para continuar.</li></ol>",
        "modal.crios.ical.h": "Safari aberto",
        "modal.crios.ical.text": "Infelizmente, o cromado no iOS tem problemas com a forma como geramos o ficheiro do calendário.",
        "modal.crios.ical.steps": "<ol><li><strong>Safari aberto</strong>, ...</li><li>Use a função <forte>colar</strong> para continuar.</li></ol>",
        "modal.multidate.h": "Esta é uma série de datas",
        "modal.multidate.text": "Adicione as datas individuais ao seu calendário, por ordem:",
        "date.status.cancelled": "Esta data foi cancelada.",
        "date.status.cancelled.cta": "Actualize o seu calendário!",
        "modal.subscribe.yahoo.h": "Adicionar calendário ao Yahoo",
        "modal.subscribe.yahoo.text":
            '<ol><li>Abrir o calendário do Yahoo.</li><li>Clique no separador "Acções".</li><li>Seleccione "Seguir outros calendários".</li><li>Escolha um nome e cole o URL da sua área de transferência no campo URL.</li></ol>',
        cancel: "Cancelar",
    },
    fr: {
        "label.addtocalendar": "Ajouter à l'Agenda",
        "label.icalfile": "Fichier iCal",
        close: "Fermer",
        "modal.button.default": "Cliquez-moi",
        "modal.webview.ical.h": "Ouvrez votre navigateur",
        "modal.webview.ical.text": "Malheureusement, les navigateurs in-app ont des problèmes avec la manière dont nous créons les fichiers d'agenda.",
        "modal.clipboard.text": "Nous avons automatiquement copié une URL magique dans votre presse-papiers.",
        "modal.webview.ical.steps": "<ol><li><strong>Ouvrez un autre navigateur</strong> sur votre smartphone, ...</li><li><strong>Collez</strong> le contenu du presser-papier et continuez.</li></ol>",
        "modal.crios.ical.h": "Ouvrir Safari",
        "modal.crios.ical.text": "Malheureusement, Chrome sur iOS a des problèmes avec la façon dont nous générons le fichier agenda.",
        "modal.crios.ical.steps": "<ol><li><strong>Ouvrez Safari</strong>, ...</li><li><strong>Collez</strong> le contenu du presse-papier et continuez.</li></ol>",
        "modal.multidate.h": "Ceci est un évènement récurrent",
        "modal.multidate.text": "Ajouter les différents évènements un par un:",
        "date.status.cancelled": "Cette date est annulée.",
        "date.status.cancelled.cta": "Actualisez votre agenda!",
        "modal.subscribe.yahoo.h": "Ajouter un agenda à Yahoo",
        "modal.subscribe.yahoo.text":
            '<ol><li>Ouvrez l\'Agenda Yahoo.</li><li>Cliquez sur l\'onglet "Actions".</li><li>Sélectionnez "Suivre d\'autres agendas".</li><li>Choisissez un nom et collez le contenu de votre presse-papiers dans le champ URL.</li></ol>',
        cancel: "Annuler",
    },
    nl: {
        "label.addtocalendar": "Opslaan in Agenda",
        "label.icalfile": "iCal File",
        close: "Sluiten",
        "modal.button.default": "Klik me",
        "modal.webview.ical.h": "Open uw browser",
        "modal.webview.ical.text": "Helaas hebben in-app browsers problemen met de manier waarop wij kalenderbestanden maken.",
        "modal.clipboard.text": "We hebben automatisch een magische URL naar je klembord gekopieerd.",
        "modal.webview.ical.steps": "<ol><li><strong>Open een andere browser</strong> op uw smartphone, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>",
        "modal.crios.ical.h": "Open Safari",
        "modal.crios.ical.text": "Helaas heeft Chrome op iOS problemen met de manier waarop we het kalenderbestand genereren.",
        "modal.crios.ical.steps": "<ol><li><strong>Open Safari</strong>, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>",
        "modal.multidate.h": "Dit is een reeks data",
        "modal.multidate.text": "Voeg de afzonderlijke delen één voor één toe:",
        "date.status.cancelled": "Deze datum is geannuleerd.",
        "date.status.cancelled.cta": "Uw agenda bijwerken!",
        "modal.subscribe.yahoo.h": "Toevoegen aan Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Open de Yahoo calendar.</li><li>Klik op de "Acties" tab.</li><li>Selecteer "Volg Andere Agenda\'s".</li><li>Kies een naam en plak de URL van uw klembord in het URL-veld.</li></ol>',
        cancel: "Annuleren",
    },
    tr: {
        "label.addtocalendar": "Takvime Ekle",
        "label.icalfile": "iCal Dosyası",
        close: "Kapat",
        "modal.button.default": "Beni tıklayın",
        "modal.webview.ical.h": "Tarayıcınızı açın",
        "modal.webview.ical.text": "Ne yazık ki, uygulama içi tarayıcılar takvim dosyalarını oluşturma şeklimizle ilgili sorunlar yaşıyor.",
        "modal.clipboard.text": "Panonuza otomatik olarak sihirli bir URL kopyaladık.",
        "modal.webview.ical.steps": "<ol><li><strong>Akıllı telefonunuzda başka bir tarayıcı açın</strong>, ...</li><li>Devam etmek için <strong>insert</strong> fonksiyonunu kullanın.</li></ol>",
        "modal.crios.ical.h": "Açık Safari",
        "modal.crios.ical.text": "Ne yazık ki iOS'ta Chrome'un takvim dosyası oluşturma yöntemiyle ilgili sorunları var.",
        "modal.crios.ical.steps": "<ol><li><strong>Açık Safari</strong>, ...</li><li>Devam etmek için <strong>insert</strong> fonksiyonunu kullanın.</li></ol>",
        "modal.multidate.h": "Bu bir etkinlik serisidir",
        "modal.multidate.text": "Parçaları teker teker ekleyin:",
        "date.status.cancelled": "Bu tarih iptal edildi.",
        "date.status.cancelled.cta": "Lütfen takviminizi güncelleyin!",
        "modal.subscribe.yahoo.h": "Yahoo'ya takvim ekleme",
        "modal.subscribe.yahoo.text": '<ol><li>Yahoo takvimini açın.</li><li>"Eylemler" sekmesine tıklayın.</li><li>"Diğer Takvimleri Takip Et" öğesini seçin.</li><li>Bir ad seçin ve URL\'yi panonuzdan URL alanına yapıştırın.</li></ol>',
        cancel: "İptal",
    },
    zh: {
        "label.addtocalendar": "添加到日历",
        "label.icalfile": "iCal 文件",
        close: "关",
        "modal.button.default": "点我",
        "modal.webview.ical.h": "打开浏览器",
        "modal.webview.ical.text": "不幸的是，应用内浏览器在我们生成日历文件的方式上存在问题。",
        "modal.clipboard.text": "我们自动将魔术 URL 复制到您的剪贴板。",
        "modal.webview.ical.steps": "<ol><li>打开手机上的任何其他浏览器, ...</li><li>粘贴剪贴板内容并开始。</li></ol>",
        "modal.crios.ical.h": "打开 Safari",
        "modal.crios.ical.text": "不幸的是，iOS 上的 Chrome 在我们生成日历文件的方式上存在问题。",
        "modal.crios.ical.steps": "<ol><li><strong>打开 Safari</strong>, ...</li><li>粘贴剪贴板内容并开始。</li></ol>",
        "modal.multidate.h": "这是一个活动系列",
        "modal.multidate.text": "逐个添加各个部分:",
        "date.status.cancelled": "此日期已取消。",
        "date.status.cancelled.cta": "请更新您的日历!",
        "modal.subscribe.yahoo.h": "将日历添加到 Yahoo",
        "modal.subscribe.yahoo.text": "<ol><li>打开 Yahoo 日历。</li><li>点击“操作”标签。</li><li>选择“关注其他日历”。</li><li>选择一个名称并将剪贴板中的 URL 粘贴到 URL 字段中。</li></ol>",
        cancel: "中止",
    },
    ar: {
        "label.addtocalendar": "إضافة إلى التقويم",
        "label.icalfile": "ملف iCal",
        close: "قريب",
        "modal.button.default": "انقر فوق لي",
        "modal.webview.ical.h": "افتح المستعرض الخاص بك",
        "modal.webview.ical.text": "لسوء الحظ ، تواجه المتصفحات داخل التطبيق مشاكل في طريقة إنشاء ملف التقويم.",
        "modal.clipboard.text": "قمنا تلقائيًا بنسخ عنوان URL سحري إلى الحافظة الخاصة بك.",
        "modal.webview.ical.steps": "<ol><li>افتح أي متصفح آخر على هاتفك الذكي, ...</li><li>.الصق محتوى الحافظة واذهب</li></ol>",
        "modal.crios.ical.h": "افتح Safari",
        "modal.crios.ical.text": "لسوء الحظ ، يواجه Chrome على iOS مشاكل في طريقة إنشاء ملف التقويم",
        "modal.crios.ical.steps": "<ol><li><strong>افتح Safari</strong>, ...</li><li>الصق محتوى الحافظة واذهب.</li></ol>",
        "modal.multidate.h": "هذه سلسلة أحداث",
        "modal.multidate.text": "أضف الأجزاء الفردية واحدة تلو الأخرى:",
        "date.status.cancelled": "تم إلغاء هذا التاريخ.",
        "date.status.cancelled.cta": "الرجاء تحديث التقويم الخاص بك!",
        "modal.subscribe.yahoo.h": "أضف التقويم إلى Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>افتح تقويم Yahoo.</li><li>انقر فوق علامة التبويب "الإجراءات".</li><li>حدد "متابعة تقويمات أخرى".</li><li>اختر اسمًا والصق عنوان URL من الحافظة الخاصة بك في حقل URL.</li></ol>',
        cancel: "إحباط",
    },
    hi: {
        "label.addtocalendar": "कैलेंडर में जोड़ें",
        "label.icalfile": "iCal फ़ाइल",
        close: "बंद करना",
        "modal.button.default": "मुझे क्लिक करें",
        "modal.webview.ical.h": "अपना ब्राउज़र खोलें",
        "modal.webview.ical.text": "दुर्भाग्य से, इन-ऐप ब्राउज़र में कैलेंडर फ़ाइल बनाने के तरीके में समस्याएँ हैं।",
        "modal.clipboard.text": "हमने आपके क्लिपबोर्ड पर स्वचालित रूप से एक जादुई URL कॉपी कर लिया है।",
        "modal.webview.ical.steps": "<ol><li>अपने फ़ोन पर <strong>दूसरा ब्राउज़र खोलें</strong>, ...</li><li>क्लिपबोर्ड सामग्री <strong>चिपकाएं</strong> और जाएं।</li></ol>",
        "modal.crios.ical.h": "सफारी खोलें",
        "modal.crios.ical.text": "दुर्भाग्य से, iOS पर Chrome को कैलेंडर फ़ाइल जेनरेट करने के हमारे तरीके में समस्या है।",
        "modal.crios.ical.steps": "<ol><li><strong>सफारी खोलें</strong>, ...</li><li>क्लिपबोर्ड सामग्री <strong>चिपकाएं</strong> और जाएं।</li></ol>",
        "modal.multidate.h": "यह एक इवेंट सीरीज़ है",
        "modal.multidate.text": "अलग-अलग हिस्सों को एक-एक करके जोड़ें:",
        "date.status.cancelled": "यह तिथि रद्द हो गई।",
        "date.status.cancelled.cta": "कृपया अपना कैलेंडर अपडेट करें!",
        "modal.subscribe.yahoo.h": "Yahoo . में कैलेंडर जोड़ें",
        "modal.subscribe.yahoo.text": '<ol><li>Yahoo कैलेंडर खोलें।</li><li>"कृती" टैब पर क्लिक करें।</li><li>"इतर कॅलेंडर्सचे अनुसरण करा" चुनें।</li><li>एक नाम चुनें और अपने क्लिपबोर्ड से URL को URL फ़ील्ड में पेस्ट करें।</li></ol>',
        cancel: "रद्द करना",
    },
    pl: {
        "label.addtocalendar": "Dodaj do kalendarza",
        "label.icalfile": "Plik iCal",
        close: "Zamknij",
        "modal.button.default": "Kliknij mnie",
        "modal.webview.ical.h": "Otwórz przeglądarkę",
        "modal.webview.ical.text": "Niestety, przeglądarki in-app mają problemy ze sposobem, w jaki generujemy plik kalendarza.",
        "modal.clipboard.text": "Automatycznie skopiowaliśmy magiczny adres URL do schowka.",
        "modal.webview.ical.steps": "<ol><li><strong>Otwórz inną przeglądarkę</strong> w swoim telefonie, ...</li><li><strong>Wklej</strong> zawartość schowka i ruszaj.</li></ol>",
        "modal.crios.ical.h": "Otwórz Safari",
        "modal.crios.ical.text": "Niestety, Chrome na iOS ma problemy ze sposobem generowania pliku kalendarza.",
        "modal.crios.ical.steps": "<ol><li><strong>Otwórz Safari</strong>, ...</li><li><strong>Wklej</strong> zawartość schowka i ruszaj.</li></ol>",
        "modal.multidate.h": "To jest cykl imprez",
        "modal.multidate.text": "Dodawać po kolei poszczególne części:",
        "date.status.cancelled": "Ta data została odwołana.",
        "date.status.cancelled.cta": "Zaktualizuj swój kalendarz!",
        "modal.subscribe.yahoo.h": "Dodaj kalendarz do Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Otwórz kalendarz Yahoo.</li><li>Kliknij na zakładkę "Czynności".</li><li>Wybierz "Obserwuj inne kalendarze".</li><li>Wybierz nazwę i wklej adres URL ze schowka w polu URL.</li></ol>',
        cancel: "Anuluj",
    },
    id: {
        "label.addtocalendar": "Tambahkan ke Kalender",
        "label.icalfile": "File iCal",
        close: "Tutup",
        "modal.button.default": "Klik saya",
        "modal.webview.ical.h": "Buka browser Anda",
        "modal.webview.ical.text": "Sayangnya, browser dalam aplikasi memiliki masalah dengan cara kami menghasilkan file kalender.",
        "modal.clipboard.text": "Kami telah secara otomatis menyalin URL ajaib ke clipboard Anda.",
        "modal.webview.ical.steps": "<ol><li><strong>Buka peramban lain</strong> pada ponsel Anda, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>",
        "modal.crios.ical.h": "Buka Safari",
        "modal.crios.ical.text": "Sayangnya, Chrome di iOS memiliki masalah dengan cara kami menghasilkan file kalender.",
        "modal.crios.ical.steps": "<ol><li><strong>Buka Safari</strong>, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>",
        "modal.multidate.h": "Ini adalah rangkaian acara",
        "modal.multidate.text": "Tambahkan masing-masing bagian satu per satu:",
        "date.status.cancelled": "Tanggal ini dibatalkan.",
        "date.status.cancelled.cta": "Perbarui kalender Anda!",
        "modal.subscribe.yahoo.h": "Tambahkan kalender ke Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Buka kalender Yahoo.</li><li>Klik pada tab "Tindakan".</li><li>Pilih "Ikuti Kalender Lain".</li><li>Pilih nama dan tempelkan URL dari clipboard Anda ke bidang URL.</li></ol>',
        cancel: "Batal",
    },
    no: {
        "label.addtocalendar": "Legg til i kalenderen",
        "label.icalfile": "iCal-fil",
        close: "Lukk",
        "modal.button.default": "Klikk på meg",
        "modal.webview.ical.h": "Åpne nettleseren din",
        "modal.webview.ical.text": "Dessverre har nettlesere i appen problemer med måten vi genererer kalenderfilen på.",
        "modal.clipboard.text": "Vi kopierte automatisk en magisk URL til utklippstavlen din.",
        "modal.webview.ical.steps": "<ol><li><strong>Åpne en annen nettleser</strong> på telefonen, ...</li><li><strong>Lim inn</strong> innholdet på utklippstavlen og gå.</li></ol>",
        "modal.crios.ical.h": "Åpne Safari",
        "modal.crios.ical.text": "Dessverre har Chrome på iOS problemer med måten vi genererer kalenderfilen på.",
        "modal.crios.ical.steps": "<ol><li><strong>Åpne Safari</strong>, ...</li><li><strong>Lim inn</strong> innholdet på utklippstavlen og gå.</li></ol>",
        "modal.multidate.h": "Dette er en avtaleserie",
        "modal.multidate.text": "Legg til de enkelte datoene i kalenderen din i rekkefølge:",
        "date.status.cancelled": "Denne datoen ble avlyst.",
        "date.status.cancelled.cta": "Oppdater kalenderen din!",
        "modal.subscribe.yahoo.h": "Legg til kalender til Yahoo",
        "modal.subscribe.yahoo.text": "<ol><li>Åpne Yahoo-kalenderen.</li><li>Klikk på «Handlinger»-fanen.</li><li>Velg «Følg andre kalendere».</li><li>Velg et navn og lim inn URL-en fra utklippstavlen i URL-feltet.</li></ol>",
        cancel: "Avbryt",
    },
    fi: {
        "label.addtocalendar": "Lisää kalenteriin",
        "label.icalfile": "iCal-tiedosto",
        close: "Sulje",
        "modal.button.default": "Klikkaa minua",
        "modal.webview.ical.h": "Avaa selain",
        "modal.webview.ical.text": "Valitettavasti sovelluksen sisäisillä selaimilla on ongelmia kalenteritiedoston luomisessa.",
        "modal.clipboard.text": "Olemme automaattisesti kopioineet maagisen URL-osoitteen leikepöydällesi.",
        "modal.webview.ical.steps": "<ol><li><strong>Avaa toinen selain</strong> puhelimessasi., ...</li><li><strong>liitä</strong> leikepöydän sisältö ja lähde.</li></ol>",
        "modal.crios.ical.h": "Avaa Safari",
        "modal.crios.ical.text": "Valitettavasti iOS:n Chromessa on ongelmia kalenteritiedoston luomisessa.",
        "modal.crios.ical.steps": "<ol><li><strong>Avaa Safari</strong>, ...</li><li><strong>liitä</strong> leikepöydän sisältö ja lähde.</li></ol>",
        "modal.multidate.h": "Tämä on tapahtumasarja",
        "modal.multidate.text": "Lisää yksittäiset osat yksi kerrallaan:",
        "date.status.cancelled": "Tämä päivämäärä peruttiin.",
        "date.status.cancelled.cta": "Päivitä kalenterisi!",
        "modal.subscribe.yahoo.h": "Lisää kalenteri Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Avaa Yahoo-kalenteri.</li><li>Napsauta "Toiminnot"-välilehteä.</li><li>Valitse "Seuraa muiden kalentereita".</li><li>Valitse nimi ja liitä URL-osoite leikepöydältäsi URL-kenttään.</li></ol>',
        cancel: "Peruuta",
    },
    sv: {
        "label.addtocalendar": "Lägg till i kalender",
        "label.icalfile": "iCal-fil",
        close: "Stäng",
        "modal.button.default": "Klicka på mig",
        "modal.webview.ical.h": "Öppna din webbläsare",
        "modal.webview.ical.text": "Tyvärr har webbläsare i appen problem med hur vi genererar kalenderfilen.",
        "modal.clipboard.text": "Vi har automatiskt kopierat en magisk URL till ditt klippblock.",
        "modal.webview.ical.steps": "<ol><li><strong>Öppna en annan webbläsare</strong> på telefonen, ...</li><li><strong>Insätt</strong> innehållet i klippbordet och kör.</li></ol>",
        "modal.crios.ical.h": "Öppna Safari",
        "modal.crios.ical.text": "Tyvärr har Chrome på iOS problem med hur vi genererar kalenderfilen.",
        "modal.crios.ical.steps": "<ol><li><strong>Öppna Safari</strong>, ...</li><li><strong>Insätt</strong> innehållet i klippbordet och kör.</li></ol>",
        "modal.multidate.h": "Detta är en evenemangsserie",
        "modal.multidate.text": "Lägg till de enskilda delarna en efter en:",
        "date.status.cancelled": "Detta datum har ställts in.",
        "date.status.cancelled.cta": "Uppdatera din kalender!",
        "modal.subscribe.yahoo.h": "Lägg till kalender i Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Öppna Yahoo-kalendern.</li><li>Klicka på fliken "Åtgärder".</li><li>Välj "Följ andra kalendrar".</li><li>Välj ett namn och klistra in URL:en från klippbordet i URL-fältet.</li></ol>',
        cancel: "Avbryt",
    },
    cs: {
        "label.addtocalendar": "Přidat do kalendáře",
        "label.icalfile": "Soubor iCal",
        close: "Zavřít",
        "modal.button.default": "Klikněte na mě",
        "modal.webview.ical.h": "Otevřete prohlížeč",
        "modal.webview.ical.text": "Prohlížeče v aplikacích mají bohužel problémy se způsobem generování souboru kalendáře.",
        "modal.clipboard.text": "Do schránky jsme automaticky zkopírovali kouzelnou adresu URL.",
        "modal.webview.ical.steps": "<ol><li><strong>Otevření jiného prohlížeče</strong> v telefonu, ...</li><li><strong>Vložte</strong> obsah schránky a přejděte.</li></ol>",
        "modal.crios.ical.h": "Otevřít Safari",
        "modal.crios.ical.text": "Chrome v systému iOS má bohužel problémy se způsobem generování souboru kalendáře.",
        "modal.crios.ical.steps": "<ol><li><strong>Otevřít Safari</strong>, ...</li><li><strong>Vložte</strong> obsah schránky a přejděte.</li></ol>",
        "modal.multidate.h": "Jedná se o sérii událostí",
        "modal.multidate.text": "Přidávejte jednotlivé díly jeden po druhém:",
        "date.status.cancelled": "Toto datum bylo zrušeno.",
        "date.status.cancelled.cta": "Aktualizujte svůj kalendář!",
        "modal.subscribe.yahoo.h": "Přidat kalendář do Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Otevřete kalendář Yahoo.</li><li>Klikněte na kartu "Akce".</li><li>Vyberte možnost "Sledovat další kalendáře".</li><li>Vyberte název a vložte adresu URL ze schránky do pole URL.</li></ol>',
        cancel: "Storno",
    },
    ja: {
        "label.addtocalendar": "カレンダーに追加",
        "label.icalfile": "iCalファイル",
        close: "閉じる",
        "modal.button.default": "クリックしてください",
        "modal.webview.ical.h": "ブラウザを起動する",
        "modal.webview.ical.text": "残念ながら、アプリ内ブラウザは、カレンダーファイルの生成方法に問題があります。",
        "modal.clipboard.text": "魔法のURLを自動的にクリップボードにコピーしています。",
        "modal.webview.ical.steps": "<ol><li>スマートフォンで別のブラウザを起動する, ...</li><li>クリップボードの内容を貼り付けて行く。</li></ol>",
        "modal.crios.ical.h": "オープンSafari",
        "modal.crios.ical.text": "残念ながら、iOS版Chromeでは、カレンダーファイルの生成方法に問題があります。",
        "modal.crios.ical.steps": "<ol><li><strong>オープンSafari</strong>, ...</li><li>クリップボードの内容を貼り付けて行く。</li></ol>",
        "modal.multidate.h": "イベントシリーズです",
        "modal.multidate.text": "個々のパーツを一つずつ追加していく:",
        "date.status.cancelled": "この日はキャンセルになりました。",
        "date.status.cancelled.cta": "カレンダーを更新する!",
        "modal.subscribe.yahoo.h": "Yahooにカレンダーを追加する",
        "modal.subscribe.yahoo.text":
            "<ol><li>Yahooカレンダーを開く。</li><li>[実行] タブをクリックします。</li><li>[その他のカレンダーのフォロー] を選択します。</li><li>名前を決めて、クリップボードにあるURLをURL欄に貼り付けます。</li></ol>",
        cancel: "キャンセル",
    },
    it: {
        "label.addtocalendar": "Aggiungi al calendario",
        "label.icalfile": "File iCal",
        close: "Chiudere",
        "modal.button.default": "Clicca su di me",
        "modal.webview.ical.h": "Aprire il browser",
        "modal.webview.ical.text": "Purtroppo i browser in-app hanno problemi con il modo in cui generiamo il file del calendario.",
        "modal.clipboard.text": "Abbiamo copiato automaticamente un URL magico negli appunti.",
        "modal.webview.ical.steps": "<ol><li><strong>Aprire un altro browser</strong> sul cellulare, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>",
        "modal.crios.ical.h": "Aprire Safari",
        "modal.crios.ical.text": "Purtroppo, Chrome su iOS ha problemi con il modo in cui generiamo il file del calendario.",
        "modal.crios.ical.steps": "<ol><li><strong>Aprire Safari</strong>, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>",
        "modal.multidate.h": "Questa è una serie di eventi",
        "modal.multidate.text": "Aggiungere le singole parti una per una:",
        "date.status.cancelled": "La data è stata annullata.",
        "date.status.cancelled.cta": "Aggiornare il calendario!",
        "modal.subscribe.yahoo.h": "Aggiungi il calendario a Yahoo",
        "modal.subscribe.yahoo.text":
            '<ol><li>Aprire il calendario di Yahoo.</li><li>Fare clic sulla scheda "Azioni".</li><li>Selezionare "Segui altri calendari".</li><li>Scegliere un nome e incollare l\'URL dagli appunti nel campo URL.</li></ol>',
        cancel: "Annulla",
    },
    ko: {
        "label.addtocalendar": "캘린더에 추가",
        "label.icalfile": "iCal 파일",
        close: "닫다",
        "modal.button.default": "클릭 해주세요",
        "modal.webview.ical.h": "브라우저 열기",
        "modal.webview.ical.text": "불행히도 인앱 브라우저는 캘린더 파일을 생성하는 방식에 문제가 있습니다.",
        "modal.clipboard.text": "매직 URL을 클립보드에 자동으로 복사했습니다.",
        "modal.webview.ical.steps": "<ol><li>휴대전화에서 다른 브라우저 열기, ...</li><li>클립보드 내용을 붙여넣고 이동합니다.</li></ol>",
        "modal.crios.ical.h": "Safari 열기",
        "modal.crios.ical.text": "불행히도 iOS의 Chrome은 캘린더 파일을 생성하는 방식에 문제가 있습니다.",
        "modal.crios.ical.steps": "<ol><li><strong>Safari 열기</strong>, ...</li><li>클립보드 내용을 붙여넣고 이동합니다.</li></ol>",
        "modal.multidate.h": "이벤트 시리즈입니다",
        "modal.multidate.text": "개별 부품을 하나씩 추가:",
        "date.status.cancelled": "이 날짜는 취소되었습니다.",
        "date.status.cancelled.cta": "캘린더를 업데이트하세요!",
        "modal.subscribe.yahoo.h": "Yahoo에 캘린더 추가",
        "modal.subscribe.yahoo.text": '<ol><li>Yahoo 캘린더를 엽니다.</li><li>"동작" 탭을 클릭합니다.</li><li>"다른 일정관리 팔로우"를 선택합니다.</li><li>이름을 선택하고 클립보드의 URL을 URL 필드에 붙여넣습니다.</li></ol>',
        cancel: "취소",
    },
    vi: {
        "label.addtocalendar": "Thêm vào Lịch",
        "label.icalfile": "Tệp iCal",
        close: "Đóng",
        "modal.button.default": "Nhấp vào đây",
        "modal.webview.ical.h": "Mở trình duyệt của bạn",
        "modal.webview.ical.text": "Rất tiếc, các trình duyệt trong ứng dụng gặp sự cố với cách chúng tôi tạo tệp lịch.",
        "modal.clipboard.text": "Chúng tôi đã tự động sao chép một URL ma thuật vào khay nhớ tạm của bạn.",
        "modal.webview.ical.steps": "<ol><li><strong> Mở trình duyệt khác </strong> trên điện thoại của bạn, ...</li><li><strong> Dán </strong> nội dung khay nhớ tạm và bắt đầu.</li></ol>",
        "modal.crios.ical.h": "Mở Safari",
        "modal.crios.ical.text": "Rất tiếc, Chrome trên iOS gặp sự cố với cách chúng tôi tạo tệp lịch.",
        "modal.crios.ical.steps": "<ol><li><strong>Mở Safari</strong>, ...</li><li><strong> Dán </strong> nội dung khay nhớ tạm và bắt đầu.</li></ol>",
        "modal.multidate.h": "Đây là một chuỗi sự kiện",
        "modal.multidate.text": "Thêm từng phần riêng lẻ một:",
        "date.status.cancelled": "Ngày này đã bị hủy.",
        "date.status.cancelled.cta": "Cập nhật lịch của bạn!",
        "modal.subscribe.yahoo.h": "Thêm lịch vào Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Mở Lịch Yahoo.</li><li>Nhấp vào tab "Hành động".</li><li>Chọn "Theo dõi các Lịch khác".</li><li>Chọn tên và dán URL từ khay nhớ tạm của bạn vào trường URL.</li></ol>',
        cancel: "Hủy bỏ",
    },
    ro: {
        "label.addtocalendar": "Adauga In Calendar",
        "label.icalfile": "Fisier iCal",
        close: "Inchide",
        "modal.button.default": "Apasa-ma",
        "modal.webview.ical.h": "Deschide browserul",
        "modal.webview.ical.text": "Din pacate, browserele din aplicatie au probleme cu generarea de fisiere pentru calendar.",
        "modal.clipboard.text": "Ti-am copiat automat un URL magic in clipboard",
        "modal.webview.ical.steps": "<ol><li><strong>Deschide un alt browser</strong> pe telefonul tau, ...</li><li><strong>Lipeste</strong> continutul din clipboard si continua.</li></ol>",
        "modal.crios.ical.h": "Deschide Safari",
        "modal.crios.ical.text": "Din nefericire, Chrome pe iOS are probleme cu modalitatile prin care noi generam fisierele pentru scalendar.",
        "modal.crios.ical.steps": "<ol><li><strong>Deschides Safari</strong>, ...</li><li><strong>Lipeste</strong> continutul din clipboard si continua.</li></ol>",
        "modal.multidate.h": "Aceasta este o serie de evenimente",
        "modal.multidate.text": "Adauga evenimentele individuale una cate una:",
        "date.status.cancelled": "Aceasta data a fost anulata.",
        "date.status.cancelled.cta": "Te rugam sa-ti updatezi calendarul!",
        "modal.subscribe.yahoo.h": "Adauga Calendar in Yahoo",
        "modal.subscribe.yahoo.text":
            '<ol><li>Deschide acum calendarul Yahoo.</li><li>Apasa pe tab-ul de "Actiuni".</li><li>Apasa "Urmareste alte calendare".</li><li>Seteaza un nume si lipeste continutul din clipboard in casuta cu url.</li></ol>',
        cancel: "Anuleaza",
    },
};
const availableLanguages = Object.keys(i18nStrings);
function atcb_translate_hook(t, e) {
    const a = t.replace(/\s+/g, "").toLowerCase();
    if (e.customLabels != null && e.customLabels[`${a}`] != null && e.customLabels[`${a}`] != "") {
        return atcb_rewrite_html_elements(e.customLabels[`${a}`]);
    } else {
        return atcb_translate(t, e.language);
    }
}
function atcb_translate(t, e) {
    if (!e) {
        e = "en";
    }
    if (i18nStrings[`${e}`][`${t}`]) {
        return i18nStrings[`${e}`][`${t}`];
    }
    return t;
}
let atcbInitialGlobalInit = false;
let atcbBtnCount = 0;
const lightModeMutationObserver = [];
const template = `<div class="atcb-initialized" style="display:none;position:relative;width:fit-content;"></div>`;
if (isBrowser()) {
    class AddToCalendarButton extends HTMLElement {
        constructor() {
            super();
            const t = document.createElement("template");
            t.innerHTML = template;
            this.attachShadow({ mode: "open", delegateFocus: true });
            this.shadowRoot.append(t.content.cloneNode(true));
            this.initialized = false;
            this.data = {};
            this.error = false;
        }
        connectedCallback() {
            this.debug = this.hasAttribute("debug");
            if (this.getAttribute("proKey") != null && this.getAttribute("proKey") != "") {
                this.data = atcb_get_pro_data(this.getAttribute("proKey"));
            }
            if (this.data.name == null || this.data.name == "") {
                try {
                    this.data = atcb_read_attributes(this);
                } catch (t) {
                    if (this.debug) {
                        atcb_render_debug_msg(this.shadowRoot, t);
                        console.error(t);
                        return;
                    }
                }
                this.data.proKey = "";
            }
            atcbBtnCount = atcbBtnCount + 1;
            if (this.identifier && this.identifier != "") {
                this.data.identifier = this.identifier;
            } else {
                if (this.data.identifier && this.data.identifier != "") {
                    if (!/^[\w\-_]+$/.test(this.data.identifier)) {
                        this.data.identifier = "";
                        if (this.debug) {
                            console.warn("Add to Calendar Button generation: identifier invalid - using auto numbers instead");
                        }
                    } else {
                        this.data.identifier = "atcb-btn-" + this.data.identifier;
                    }
                }
                if (this.data.identifier == null || this.data.identifier == "") {
                    this.data.identifier = "atcb-btn-" + atcbBtnCount;
                }
                this.identifier = this.data.identifier;
            }
            this.setAttribute("atcb-button-id", this.data.identifier);
            this.initialized = true;
            try {
                atcb_build_button(this.shadowRoot, this.data, this.debug);
            } catch (t) {
                if (this.debug) {
                    atcb_render_debug_msg(this.shadowRoot, t);
                    console.error(t);
                    return;
                }
            }
        }
        disconnectedCallback() {
            atcb_cleanup(this.shadowRoot, this.data);
            if (this.debug) {
                console.log('Add to Calendar Button "' + this.data.identifier + '" destroyed');
            }
            if (document.querySelectorAll("add-to-calendar-button").length == 0) {
                atcbBtnCount = 0;
            }
        }
        static get observedAttributes() {
            const t = ["instance"];
            return atcbWcParams
                .map((t) => {
                    return t.toLowerCase();
                })
                .concat(t);
        }
        attributeChangedCallback(t, e, a) {
            if (this.data.proKey != null && this.data.proKey != "") {
                return;
            }
            if (!this.initialized) {
                return;
            }
            if (this.debug) {
                console.log(`${t}'s value has been changed from ${e} to ${a}`);
            }
            atcb_cleanup(this.shadowRoot, this.data);
            this.data = {};
            this.shadowRoot.querySelector(".atcb-initialized").remove();
            const o = document.createElement("template");
            o.innerHTML = template;
            this.shadowRoot.append(o.content.cloneNode(true));
            try {
                this.data = atcb_read_attributes(this);
            } catch (t) {
                if (this.debug) {
                    atcb_render_debug_msg(this.shadowRoot, t);
                    console.error(t);
                    return;
                }
            }
            this.data.identifier = this.identifier;
            try {
                atcb_build_button(this.shadowRoot, this.data, this.debug);
            } catch (t) {
                if (this.debug) {
                    atcb_render_debug_msg(this.shadowRoot, t);
                    console.error(t);
                    return;
                }
            }
        }
    }
    if (!customElements.get("add-to-calendar-button")) {
        customElements.define("add-to-calendar-button", AddToCalendarButton);
    }
}
function atcb_read_attributes(o) {
    let n = {};
    n["hideBranding"] = true;
    for (let t = 0; t < atcbWcParams.length; t++) {
        let a = atcbWcParams[`${t}`];
        if (o.hasAttribute(`${a}`)) {
            let e = atcb_secure_content(o.getAttribute(`${a}`).replace(/(\r\n|\n|\r)/g, ""), false);
            let t;
            if (atcbWcBooleanParams.includes(a)) {
                if (e == "") {
                    t = true;
                } else {
                    t = e === "true";
                }
            } else if (atcbWcObjectParams.includes(a)) {
                t = JSON.parse(e);
            } else if (atcbWcArrayParams.includes(a)) {
                const i = (function () {
                    let t = e;
                    if (e.includes('"') || e.includes("'")) {
                        if (e.includes("[")) {
                            t = e.substring(2, e.length - 2);
                        } else {
                            t = e.substring(1, e.length - 1);
                        }
                    }
                    if (!e.includes("|")) {
                        t = t.replace(/\s/g, "");
                    }
                    return t;
                })();
                if (i.includes("','")) {
                    t = i.split("','");
                } else {
                    t = i.split('","');
                }
            } else {
                t = e;
            }
            n[`${a}`] = t;
        }
        const e = o.getAttribute("identifier");
        if (e != null && e != "") {
            n["identifier"] = atcb_secure_content(e.replace(/(\r\n|\n|\r)/g, ""), false);
        }
    }
    if (!atcb_check_required(n, false)) {
        const t = o.innerHTML;
        const a = (function () {
            if (t != "") {
                try {
                    return JSON.parse(atcb_secure_content(t.replace(/(\r\n|\n|\r)/g, ""), false));
                } catch (t) {
                    throw new Error("Add to Calendar Button generation failed: JSON content provided, but badly formatted (in doubt, try some tool like https://jsonformatter.org/ to validate).\r\nError message: " + t);
                }
            }
            return "";
        })();
        if (a.length == 0) {
            throw new Error("Add to Calendar Button generation failed: no data provided or missing required fields - see console logs for details");
        }
        n = a;
    }
    return n;
}
function atcb_build_button(t, e, a = false) {
    if (atcb_check_required(e)) {
        e = atcb_decorate_data(e);
        if (atcb_validate(e)) {
            const o = t.querySelector(".atcb-initialized");
            atcb_set_light_mode(t, e);
            o.setAttribute("lang", e.language);
            atcb_load_css(t, o, e.buttonStyle, e.inline, e.buttonsList, e.customCss);
            atcb_setup_state_management(e);
            atcb_set_global_event_listener(t, e);
            atcb_init_log(e.proKey, a);
            atcb_generate_button(t, o, e, a);
            if (!e.hideRichData && e.name && e.dates[0].location && e.dates[0].startDate) {
                atcb_generate_rich_data(e, t.host);
                e.schemaEl = t.host.previousSibling;
            }
            atcb_log_event("initialization", e.identifier, e.identifier);
        } else if (a) {
            atcb_render_debug_msg(t, "Add to Calendar Button generation failed: invalid data; see console logs for details");
        }
    }
}
function atcb_cleanup(t, e) {
    atcb_close(t);
    atcb_unset_global_event_listener(e.identifier);
    if (e.schemaEl != null) {
        e.schemaEl.remove();
    }
    Array.from(t.querySelectorAll(".atcb-debug-error-msg"))
        .concat(Array.from(t.querySelectorAll("style")))
        .concat(Array.from(t.querySelectorAll(".atcb-button-wrapper")))
        .forEach((t) => t.remove());
    delete atcbStates[`${e.identifier}`];
}
function atcb_set_light_mode(t, e) {
    t.host.classList.remove("atcb-dark", "atcb-light", "atcb-bodyScheme");
    const a = (function () {
        if (e.lightMode == "bodyScheme") {
            if (document.body.classList.contains("atcb-dark") || document.documentElement.classList.contains("atcb-dark")) {
                return "dark";
            } else {
                return "light";
            }
        }
        return e.lightMode;
    })();
    t.host.classList.add("atcb-" + a);
}
function atcb_load_css(e, t = null, a = "", o = false, n = false, i = "") {
    if (!document.getElementById("atcb-global-style")) {
        const r = document.createElement("style");
        r.id = "atcb-global-style";
        const l = window.innerWidth - document.documentElement.clientWidth;
        r.innerText = ".atcb-modal-no-scroll { overflow-y: hidden !important; -webkit-overflow-scrolling: touch; } body.atcb-modal-no-scroll { padding-right: " + l + "px; }";
        document.head.append(r);
    }
    if (i != "" && a == "custom") {
        const c = document.createElement("div");
        c.style.cssText = "width: 150px; height: 40px; border-radius: 200px; background-color: #777; opacity: .3;";
        e.prepend(c);
        const s = i;
        const d = document.createElement("link");
        d.setAttribute("rel", "stylesheet");
        d.setAttribute("type", "text/css");
        d.setAttribute("href", s);
        e.prepend(d);
        if (t != null) {
            d.onload = function () {
                c.remove();
                if (o) {
                    t.style.display = "inline-block";
                } else {
                    if (n) {
                        t.style.display = "flex";
                        t.style.flexWrap = "wrap";
                        t.style.justifyContent = "center";
                    } else {
                        t.style.display = "block";
                    }
                }
            };
        }
        return;
    }
    if (a != "none" && atcbCssTemplate[`${a}`] != null) {
        const b = document.createElement("style");
        const u = (function () {
            if (e.host.hasAttribute("styleLight")) {
                const t = ":host { " + atcb_secure_content(e.host.getAttribute("styleLight").replace(/(\r\n|\n|\r)/g, ""), false) + " }";
                return t;
            }
            return "";
        })();
        const m = (function () {
            if (e.host.hasAttribute("styleDark")) {
                const t =
                    ":host(.atcb-dark), :host-context(html.atcb-dark):host(.atcb-bodyScheme), :host-context(body.atcb-dark):host(.atcb-bodyScheme) { " +
                    atcb_secure_content(e.host.getAttribute("styleDark").replace(/(\r\n|\n|\r)/g, ""), false) +
                    " }";
                return t;
            }
            return "";
        })();
        b.innerText = atcbCssTemplate[`${a}`] + u + m;
        e.prepend(b);
    }
    if (t != null) {
        if (o) {
            t.style.display = "inline-block";
        } else {
            if (n) {
                t.style.display = "flex";
                t.style.flexWrap = "wrap";
                t.style.justifyContent = "center";
            } else {
                t.style.display = "block";
            }
        }
    }
}
function atcb_render_debug_msg(t, e) {
    if (t.querySelector(".atcb-debug-error-msg")) return;
    const a = document.createElement("div");
    a.classList.add("atcb-debug-error-msg");
    a.style.cssText = "color: #bf2e2e; font-size: 12px; font-weight: bold; padding: 12px 15px; border: 2px solid #bf2e2e; max-width: 180px; border-radius: 13px;";
    a.textContent = e;
    t.append(a);
}
function atcb_action(t, e, a = false) {
    if (!isBrowser()) {
        return;
    }
    t = atcb_secure_content(t);
    t.hideBranding = true;
    if (t.proKey != null && t.proKey != "") {
        t = atcb_get_pro_data(t.proKey);
    }
    t.debug = t.debug === "true";
    if (!atcb_check_required(t)) {
        throw new Error("Add to Calendar Button generation failed: required data missing; see console logs");
    }
    t = atcb_decorate_data(t);
    let o = document.body;
    t.trigger = "click";
    if (e) {
        o = e;
        if (e.id != null && e.id != "") {
            t.identifier = e.id;
        } else {
            if (t.identifier != null && t.identifier != "" && /^[\w\-_]+$/.test(t.identifier)) {
                t.identifier = "atcb-btn-" + t.identifier;
            } else {
                t.identifier = "atcb-btn-custom";
            }
            e.id = t.identifier;
        }
        if (t.listStyle == "dropdown" || t.listStyle == "dropdown-static") {
            t.listStyle = "modal";
        }
    } else {
        t.identifier = "atcb-btn-custom";
        t.listStyle = "modal";
    }
    if (!atcb_validate(t)) {
        throw new Error("Add to Calendar Button generation (" + t.identifier + ") failed: invalid data; see console logs");
    }
    const n = (function () {
        if (t.options.length === 1) {
            return true;
        }
        return false;
    })();
    const i = document.getElementById("atcb-customTrigger-" + t.identifier + "-host");
    if (i) {
        atcb_close(i.shadowRoot, false);
        if (atcbStates[`${atcbStates["active"]}`]) {
            delete atcbStates[`${atcbStates["active"]}`];
        }
        i.remove();
    }
    let r = document.createElement("div");
    r.id = "atcb-customTrigger-" + t.identifier + "-host";
    if (o == document.body) {
        document.body.append(r);
    } else {
        o.after(r);
    }
    if (e) {
        const s = e.getBoundingClientRect();
        r.style.position = "relative";
        r.style.left = -s.width + "px";
        r.style.top = s.height + "px";
    }
    r.setAttribute("atcb-button-id", t.identifier);
    r.attachShadow({ mode: "open", delegateFocus: true });
    const l = document.createElement("template");
    l.innerHTML = template;
    r.shadowRoot.append(l.content.cloneNode(true));
    const c = r.shadowRoot.querySelector(".atcb-initialized");
    atcb_setup_state_management(t);
    atcb_set_light_mode(r.shadowRoot, t);
    r.shadowRoot.querySelector(".atcb-initialized").setAttribute("lang", t.language);
    atcb_load_css(r.shadowRoot, c, t.buttonStyle, false, false, t.customCss);
    atcb_set_global_event_listener(r.shadowRoot, t);
    atcb_log_event("initialization", t.identifier, t.identifier);
    if (n) {
        atcb_generate_links(r.shadowRoot, t.options[0], t, "all", a);
        atcb_log_event("openSingletonLink", t.identifier, t.identifier);
    } else {
        atcb_toggle(r.shadowRoot, "open", t, e, a);
    }
    atcb_init_log(t.proKey, t.debug);
    if (t.debug) {
        console.log('Add to Calendar Button "' + t.identifier + '" triggered');
    }
    return t.identifier;
}
function atcb_setup_state_management(a) {
    const o = [];
    for (let e = 0; e < a.options.length; e++) {
        o[a.options[`${e}`]] = [];
        for (let t = 1; t <= a.dates.length; t++) {
            o[a.options[`${e}`]].push(0);
        }
    }
    atcbStates[a.identifier] = o;
}
function atcb_init_log(t = "", e = false) {
    if (!atcbInitialGlobalInit) {
        const a = (function () {
            if (e) {
                return " (version " + atcbVersion + ")";
            }
            return "";
        })();
        if (t != "") {
            console.log("Add to Calendar PRO script initialized" + a + " | https://add-to-calendar-pro.com");
        } else {
            console.log("%cAdd to Calendar Button script initialized" + a, "font-weight: bold;");
            console.log("see https://add-to-calendar-button.com for details");
        }
        atcbInitialGlobalInit = true;
    }
}
function atcb_get_pro_data(t) {
    const e = {};
    if (t != null && t != "") {
        e.proKey = t;
        e.identifier = t;
        console.error("Add to Calendar Button proKey invalid! Falling back to local data...");
    }
    return e;
}
function atcb_set_global_event_listener(e, a) {
    if (!isBrowser()) {
        return;
    }
    if (a.lightMode == "bodyScheme") {
        lightModeMutationObserver[a.identifier] = new MutationObserver(function (t) {
            t.forEach((t) => {
                if (t.attributeName === "class") {
                    atcb_set_light_mode(e, a);
                }
            });
        });
        lightModeMutationObserver[a.identifier].observe(document.documentElement, { attributes: true });
        lightModeMutationObserver[a.identifier].observe(document.body, { attributes: true });
    }
    if (!atcbInitialGlobalInit && !a.blockInteraction) {
        document.addEventListener("keyup", atcb_global_listener_keyup);
        document.addEventListener("keydown", atcb_global_listener_keydown);
        window.addEventListener("resize", atcb_global_listener_resize);
    }
}
function atcb_global_listener_keyup(t) {
    const e = (function () {
        const t = document.querySelector('[atcb-button-id="' + atcbStates["active"] + '"]');
        if (t) {
            return t.shadowRoot;
        }
        return null;
    })();
    if (e && t.key === "Escape") {
        atcb_log_event("closeList", "Ecs Hit", atcbStates["active"]);
        atcb_toggle(e, "close", "", "", true);
    }
}
function atcb_global_listener_keydown(a) {
    const o = (function () {
        const t = document.querySelector('[atcb-button-id="' + atcbStates["active"] + '"]');
        const e = document.getElementById(atcbStates["active"] + "-modal-host");
        if (e) {
            return e.shadowRoot;
        }
        if (t) {
            return t.shadowRoot;
        }
        return null;
    })();
    if (o && o.querySelector(".atcb-list") && (a.key === "ArrowDown" || a.key === "ArrowUp" || a.key === "Tab")) {
        a.preventDefault();
        let t = 0;
        let e = o.activeElement;
        const n = o.querySelectorAll(".atcb-list-item").length;
        if (e && e.classList.contains("atcb-list-item")) {
            if (a.key === "ArrowDown" && e.dataset.optionNumber < n) {
                t = parseInt(e.dataset.optionNumber) + 1;
            } else if (a.key === "Tab") {
                if (e.dataset.optionNumber < n) {
                    t = parseInt(e.dataset.optionNumber) + 1;
                } else {
                    t = 1;
                }
            } else if (a.key === "ArrowUp" && e.dataset.optionNumber >= 1) {
                t = parseInt(e.dataset.optionNumber) - 1;
            }
            if (t > 0) {
                o.querySelector('.atcb-list-item[data-option-number="' + t + '"]').focus();
            }
        } else {
            switch (a.key) {
                default:
                    o.querySelector('.atcb-list-item[data-option-number="1"]').focus();
                    break;
                case "ArrowUp":
                    o.querySelector('.atcb-list-item[data-option-number="' + n + '"]').focus();
                    break;
            }
        }
    }
}
function atcb_global_listener_resize() {
    const t = (function () {
        const t = document.querySelector('[atcb-button-id="' + atcbStates["active"] + '"]');
        const e = document.getElementById(atcbStates["active"] + "-modal-host");
        if (e) {
            return e.shadowRoot;
        }
        if (t) {
            return t.shadowRoot;
        }
        return null;
    })();
    if (t) {
        const e = t.querySelector("#atcb-bgoverlay");
        if (e) {
            atcb_set_fullsize(e);
            atcb_manage_body_scroll(t);
        }
    }
}
function atcb_unset_global_event_listener(t) {
    if (typeof lightModeMutationObserver[`${t}`] !== "undefined") {
        lightModeMutationObserver[`${t}`].disconnect();
    }
}

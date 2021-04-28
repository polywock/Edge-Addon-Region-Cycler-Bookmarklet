javascript:(() => {
    let regions = ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BQ', 'BA', 'BW', 'BV', 'BR', 'IO', 'VG', 'BN', 'BG', 'BF', 'BI', 'CV', 'KH', 'CM', 'CA', 'KY', 'CF', 'TD', 'CZ', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CW', 'CY', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'SZ', 'ET', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'MK', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'QA', 'RE', 'RO', 'RU', 'RW', 'BL', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'ES', 'LK', 'SH', 'SR', 'SJ', 'SE', 'CH', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UY', 'UM', 'VI', 'UZ', 'VU', 'VA', 'VE', 'VN', 'WF', 'YE', 'ZM', 'ZW'];
    if (!document.URL.toLowerCase().includes("microsoftedge.microsoft.com/addons")) {
        alert("Bookmarklet must be run on Edge Addon storage pages.");
        return; 
    }
    let url = new URL(document.URL);
    let nextIndex = regions.indexOf((url.searchParams.get("gl") || "").toUpperCase()) + 1; 
    let loaded = url.searchParams.has("pock");
    let restart = false; 

    if (nextIndex !== 0 && !loaded && confirm("Start from first locale? ")) {
        nextIndex = 0;
        restart = true;
    };

	if (!restart) {
		if (nextIndex >= regions.length) { alert("Finished"); return; }
	    if (loaded && nextIndex !== 0 && document.querySelectorAll("#review-list > div[role='listitem']").length && !confirm("Reviews found. Continue to next region?")) { return };  
    }

    url.searchParams.delete("gl");
    url.searchParams.set("pock", true); 
    url.searchParams.set("gl", regions[nextIndex]);
    window.location.href = url.toString(); 

})()

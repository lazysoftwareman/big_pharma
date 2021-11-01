// @ts-check

export const points =
    ['UN', 'US', 'UO', 'UE', 'SN', 'SS', 'SO', 'SE', 'EN', 'ES', 'EO', 'EE',
        'AFN', 'AFS', 'AFO', 'AFE', 'ASN', 'ASS', 'ASO', 'ASE', 'IN', 'IS', 'IO', 'IE'];
/**
 * @type {string[][]}
 */
export const links = [];
links['UN'] = ['UE', 'UO', 'EN'];
links['US'] = ['UE', 'UO', 'SN', 'SO', 'IN', 'IE'];
links['UO'] = ['UE', 'UN', 'US', 'IN'];
links['UE'] = ['UO', 'UN', 'US', 'SN', 'EO'];
links['SN'] = ['US', 'UE', 'EO', 'SO', 'SE'];
links['SS'] = ['SE', 'SO'];
links['SO'] = ['US', 'SN', 'SE', 'SS', 'IE'];
links['SE'] = ['AFO', 'AFS', 'SN', 'SO', 'SS'];
links['EN'] = ['UN', 'EO', 'EE', 'ES'];
links['ES'] = ['EN', 'EE', 'EO', 'ASO', 'AFN'];
links['EO'] = ['EN', 'ES', 'UE', 'SN'];
links['EE'] = ['EN', 'ES', 'ASO', 'ASN'];
links['AFN'] = ['AFE', 'AFO', 'ES'];
links['AFS'] = ['AFE', 'SE', 'IE'];
links['AFO'] = ['AFN', 'AFE', 'SE'];
links['AFE'] = ['AFN', 'AFS', 'AFO'];
links['ASN'] = ['ASE', 'ASS', 'EE'];
links['ASS'] = ['ASO', 'ASE', 'ASN', 'IO'];
links['ASO'] = ['ES', 'EE', 'ASS'];
links['ASE'] = ['ASN', 'ASS', 'IN'];
links['IN'] = ['IO', 'ASE', 'UO', 'US'];
links['IS'] = ['IE'];
links['IO'] = ['IN', 'IE', 'ASS'];
links['IE'] = ['IO', 'IS', 'AFS', 'US', 'SO'];

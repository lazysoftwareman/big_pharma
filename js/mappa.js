// @ts-check

export const points =
    ['UN', 'US', 'UO', 'UE', 'SN', 'SS', 'SO', 'SE', 'EN', 'ES', 'EO', 'EE',
        'AFN', 'AFS', 'AFO', 'AFE', 'ASN', 'ASS', 'ASO', 'ASE', 'IN', 'IS', 'IO', 'IE'];
/**
 * @type {string[][]}
 */
export const links = [];
export const rotella = [];
export const colori = [];
links['UN'] = ['UE', 'UO', 'EN', 'ASN'];
links['US'] = ['UE', 'UO', 'SN', 'IN'];
links['UO'] = ['UE', 'UN', 'US', 'IN'];
links['UE'] = ['UO', 'UN', 'US', 'SN', 'EO'];
links['SN'] = ['US', 'UE', 'EO', 'SO', 'SE'];
links['SS'] = ['SE', 'SO', 'IS', 'AFS'];
links['SO'] = ['SN', 'SE', 'SS', 'IS'];
links['SE'] = ['AFO', 'SN', 'SO', 'SS'];
links['EN'] = ['UN', 'EO', 'EE', 'ES'];
links['ES'] = ['EN', 'EE', 'EO', 'ASO', 'AFN'];
links['EO'] = ['EN', 'ES', 'UE', 'SN'];
links['EE'] = ['EN', 'ES', 'ASO', 'ASN'];
links['AFN'] = ['AFE', 'AFO', 'ES'];
links['AFS'] = ['AFE', 'SS', 'IS'];
links['AFO'] = ['AFN', 'AFE', 'SE'];
links['AFE'] = ['AFN', 'AFS', 'AFO', 'ASS'];
links['ASN'] = ['ASE', 'ASS', 'EE', 'UN'];
links['ASS'] = ['ASO', 'ASE', 'ASN', 'IO', 'AFE'];
links['ASO'] = ['ES', 'EE', 'ASS'];
links['ASE'] = ['ASN', 'ASS', 'IN'];
links['IN'] = ['IO', 'IE', 'ASE', 'UO', 'US'];
links['IS'] = ['IE', 'IO', 'SO', 'SS', 'AFS'];
links['IO'] = ['IN', 'IE', 'IS', 'ASS'];
links['IE'] = ['IO', 'IS', 'IN'];

rotella['UN'] = 0;
rotella['US'] = 0;
rotella['UO'] = 0;
rotella['UE'] = 0;
rotella['SN'] = 0;
rotella['SS'] = 0;
rotella['SO'] = 0;
rotella['SE'] = 0;
rotella['EN'] = 0;
rotella['ES'] = 0;
rotella['EO'] = 0;
rotella['EE'] = 0;
rotella['AFN'] = 0;
rotella['AFS'] = 0;
rotella['AFO'] = 0;
rotella['AFE'] = 0;
rotella['ASN'] = 0;
rotella['ASS'] = 0;
rotella['ASO'] = 0;
rotella['ASE'] = 0;
rotella['IN'] = 0;
rotella['IS'] = 0;
rotella['IO'] = 0;
rotella['IE'] = 0;

colori['UN'] = [0,1,1,2,2];
colori['US'] = [0,1,2,2,4];
colori['UO'] = [0,1,2,3,3];
colori['UE'] = [0,1,2,3,4];
colori['SN'] = [0,1,2,2,4];
colori['SS'] = [0,1,2,3,4];
colori['SO'] = [0,1,1,2,4];
colori['SE'] = [0,0,0,1,2];
colori['EN'] = [0,1,1,2,3];
colori['ES'] = [0,1,2,3,4];
colori['EO'] = [0,1,2,3,4];
colori['EE'] = [0,1,2,3,4];
colori['AFN'] = [0,0,1,1,4];
colori['AFS'] = [0,1,2,2,3];
colori['AFO'] = [0,0,2,2,3];
colori['AFE'] = [0,0,0,2,2];
colori['ASN'] = [0,0,2,3,4];
colori['ASS'] = [0,1,1,2,4];
colori['ASO'] = [0,1,2,2,4];
colori['ASE'] = [0,2,2,4,4];
colori['IN'] = [0,1,2,3,4];
colori['IS'] = [0,1,2,3,4];
colori['IO'] = [0,2,2,3,4];
colori['IE'] = [0,1,3,3,4];

// remove diacratics from a string along with HTML entity &nbsp;
// could take anything for exemple you coul add {'base':' ','letters':/&nbsp;/gi}
// to remove HTML entity &nbsp;
var rmDiacritics = function(str) {
    var removalMap = [
        {'base':'a','letters':/[àâä]/gi},
        {'base':'e','letters':/[éèê]/gi},
        {'base':'i','letters':/[îï]/gi},
        {'base':'o','letters':/[ôö]/gi},
        {'base':'u','letters':/[ùûü]/gi},
        {'base':'c','letters':/ç/gi}
    ];
    for(var i=0; i<removalMap.length; i++) {
        str = str.replace(removalMap[i].letters, removalMap[i].base);
    }
    return str;
};
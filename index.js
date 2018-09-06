module.exports.getLinksFromMd = function getLinksFromMd(string){
    if (string === undefined || string === ""){
        throw new Error("Parameter not defined");
    }
    if (typeof string === "number"){
        throw new Error("Enter text.");
    }

    const regex_url = new RegExp(/(((http|https):\/{2})?(www.)?([a-z0-9-]+\.){1,2})([a-z]{2,3}(\/([\w\?\=\&\%\@\.\-\_\!\#]*\/*)*\b|\b))/g);
    const regex_name= new RegExp(/(?<=\[)([A-Za-z0-9]*)+(?=\])/g);
    let urls = string.match(regex_url);
    let name = string.match(regex_name);

    if (urls === null){
        return [];
    }

    let arrObj = urls.map((aUrl,iName)=>({
        href: aUrl,
        text: name[iName]
    }));

    return arrObj;
};



// /(((http|https):\/{2})?(www.)?([a-z0-9-]+\.){1,2})([a-z]{2,3}(\/([\w\?\=\&\%\@\.\-\_\!\#]*\/*)*\b|\b))/g

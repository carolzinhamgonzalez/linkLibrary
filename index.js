module.exports.getLinksFromMd = function getLinksFromMd(string){
  if (string === undefined || string === ''){
    throw new Error('Parameter not defined');
  };
  const regex_url = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,3}){1,2}/g);
  const regex_name= new RegExp(/(?<=\[)([A-Za-z0-9]*)+(?=\])/g);
  let urls = string.match(regex_url);
  let name = string.match(regex_name);

  let arrObj = urls.map((aUrl,iName)=>({
    href: aUrl,
    text: name[iName]
  }));

  return arrObj;
};

const tmpl = function (id, data) {
  const strDom = document.getElementById(id);
  if (strDom) {
    const str = strDom.innerHTML;
    const result =
      `var p = [];p.push('` +
      str
        .replace(/[\r\t\n]/g, "")
        .replace(/<%=(.*?)%>/g, `');p.push($1);p.push('`)
        .replace(/<%/g, `');`)
        .replace(/%>/g, `p.push('`) +
      `')`;
    eval(result);
    return;
  }
};

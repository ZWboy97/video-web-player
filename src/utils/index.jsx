//解析当前浏览器地址中url？之后的参数，返回一个参数对象
export const getUrlParams = () => {
    let _queryString = {};//最终结果，初始化空对象
    const _query = window.location.search.substr(1);//截取？之后的参数字段
    const _vars = _query.split('&');
    _vars.forEach((v, i) => {
        const _pair = v.split('=');//{ property ： value }
        if (!_queryString.hasOwnProperty(_pair[0])) {
            _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
        } else if (typeof _queryString[_pair[0]] === 'string') {
            const _arr = [_queryString[_pair[0]], decodeURIComponent(_pair[1])];
            _queryString[_pair[0]] = _arr;
        } else {
            _queryString[_pair[0]].push(decodeURIComponent(_pair[1]));
        }
    });
    return _queryString;
};

// 获取URL参数
export const getUrlParam = (name) => {
    // param=123&param1=456
    let queryString = window.location.href.split('?')[1] || '',
        reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        result = queryString.match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}

export const IsPC = () => {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}
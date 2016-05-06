/**
 * 过滤字符串中换行符
 */
String.prototype.TransferString = function () {
    var rs = '';
    rs = this.replace(/\r\n/g, "")
    rs = rs.replace(/\n/g, "");
    return rs;
}
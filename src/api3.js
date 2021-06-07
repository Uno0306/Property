/* Javascript 샘플 코드 */

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
var url = 'http://api.hf.go.kr/service/rest/rentloanduedatearrival/getRentLoanDueDateArrival'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'egd8ZdObO1vnzY2yn6ASX574VD/RFgjA910g79W9EM6VTWPANwpPAckNhs1wrgZoh/hGat2ZxbKDo5PYbV3qTA=='; /*Service Key*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('due_ym') + '=' + encodeURIComponent('201712'); /**/
queryParams += '&' + encodeURIComponent('city') + '=' + encodeURIComponent('부산광역시'); /**/
queryParams += '&' + encodeURIComponent('sggu') + '=' + encodeURIComponent('남구'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');

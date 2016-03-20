StringUtil = {
/**
 * 공백여부체크
 *
 * @param {String} str : [필수] 입력 스트링
 * @return {Boolean} true /false 값
 * @constructor jysong 2013.10.31
 **/
 emptyCheck : function( str) {
     if(!str) return true;
     if(str.length == 0) return true;
     for(var i = 0; i<str.length; i++) {
         if( (" " == str.charAt(i)) || ("　" == str.charAt(i)) ) {
             return false;
         }
     }
     return true;
 },
/**
 * 입력값이 NULL인지 체크
 *
 * @param {String} str : [필수] 입력 스트링
 * @return {Boolean} true /false 값
 * @constructor jysong 2013.10.31
 **/
 isNull : function(str)    {
     if( str == null ||
         str == undefined ||
         str == 'null' ||
         str.toString().replace(/ /g,"") == "") {
         return true;
     }
     return false;
 },
/**
 * 입력값이 not null인지 체크
 *
 * @param {String} str : [필수] 입력 스트링
 * @return {Boolean} true /false 값
 * @constructor jysong 2013.10.31
 **/
 isNotNull : function(str) {
     return !StringUtil.isNull(str);
 },

/**
 * 널인 경우 공백 문자열로 변경.( null -> &nbsp;)
 *
 * @param {String} str : [필수] 입력 스트링
 * @return {String} 변경된 공백문자열
 * @constructor jysong 2013.10.31
 **/
 emptyToNbsp : function( str) {
     return StringUtil.emptyToReplace(str,"&nbsp;");
 },
/**
 * 공백을 특정문자로 변경
 *
 * @param {String} argStr : [필수] 입력 스트링
 * @param {String} conString : [필수] 특정문자
 * @return {String} 변경된 공백문자열
 * @example StringUtil.emptyToReplace(체크할 문자,변경할 문자)
 * @constructor jysong 2013.10.31
 **/
 emptyToReplace : function( argStr,conString) {
     if(StringUtil.emptyCheck(argStr+"") || argStr == "null" || argStr == null ) {
         return conString ;
     } else {
         return argStr ;
     }
 },
/**
 * arrData가 token 문자를 가지고 있는지 여부 확인
 *
 * @param {Array} arrData : [필수] 입력된 Array data
 * @param {String} token : [필수] token 문자
 * @return {Boolean} true / false 값
 * @constructor jysong 2013.10.31
 **/
 contains : function( arrData, token ) {
     var hasToken = false;
     if( arrData && arrData.length ) {
         for( var idx = 0; idx < arrData.length; idx++ ) {
             if( arrData[idx] === token ) {
                 hasToken = true;
                 break;
             }
         }
     }
     return hasToken;
 },
/**
 * 공백 제거
 *
 * @param {String} argStr : [필수] 입력 스트링
 * @return {String} 공백 제거된 스트링
 * @example StringUtil.trim(' 테스트다 ') = '테스트다'
 * @constructor jysong 2013.10.31
 **/
 trim : function( argStr ) {
     if( argStr == null ) return "";
     argStr = argStr.toString();
     var pos1, pos2 ;
     for(pos1=0; (argStr.charAt(pos1) == ' ' || argStr.charAt(pos1) == '　') && pos1 < argStr.length ; pos1++) ;
         for(pos2=argStr.length-1; (argStr.charAt(pos2) == ' ' || argStr.charAt(pos2) == '　') && pos2 >= 0 ; pos2--) ;
             if(pos1 > pos2) return "" ;
     return argStr.substr(0,pos2+1).substring(pos1) ;
 },
/**
 * 왼쪽공백 제거
 *
 * @param {String} argStr : [필수] 입력 스트링
 * @return {String} 공백 제거된 스트링
 * @example StringUtil.ltrim(' 테스트다 ') = '테스트다 '
 * @constructor jysong 2013.10.31
 **/
 ltrim : function( argStr ) {
     var i;
     i = 0;
     while (argStr.substring(i,i+1) == ' ' || argStr.substring(i,i+1) == '　')  i = i + 1;
     return argStr.substring(i);
 },
/**
 * 오늘쪽공백 제거
 *
 * @param {String} argStr : [필수] 입력 스트링
 * @return {String} 공백 제거된 스트링
 * @example StringUtil.rtrim(' 테스트다 ') = ' 테스트다'
 * @constructor jysong 2013.10.31
 **/
 rtrim : function( argStr ) {
     var i;
     i = 0;
     while (argStr.substring(i,i+1) == ' ' || argStr.substring(i,i+1) == '　')  i = i + 1;
     return argStr.substring(i);
 },
/**
 * 문자열 변경
 *
 * @param {String} originalString : [필수] 원본 스트링
 * @param {String} findText : [필수] 찾을 텍스트
 * @param {String} replaceText : [필수] 변경할 텍스트
 * @return {String} 변경된 스트링
 * @example
 * StringUtil.replaceAll(문자열, 찾을 문자열, 바꿔야할 문자열)
 * destFileName = StringUtil.replaceAll(destFileName,"\n","");
 * destFileName = StringUtil.replaceAll(destFileName,"\r","");
 * @constructor jysong 2013.10.31
 **/
 replaceAll : function( originalString, findText, replaceText ) {
     originalString = StringUtil.trim(originalString);
     var pos = 0 ;
     pos = originalString.indexOf(findText);
     while (pos != -1) {
         preString = originalString.substr(0,pos);
         postString = originalString.substring(pos+findText.length);
         originalString = preString + replaceText + postString;
         pos = originalString.indexOf(findText);
     }
     return originalString;
 },
/**
 * 문자열(한글. 영문구분) 길이 체크
 *
 * @param {String} message : [필수] 입력 메시지
 * @return {String} 바이트수
 * @constructor jysong 2013.10.31
 **/
 length : function( message ) {
     var i = 0;
     var nbytes = 0;

     for (; i<message.length; i++) {
         var ch = message.charAt(i);
         if (escape(ch).length > 4) {
             nbytes += 2;
         } else if (ch != '\r') {
             nbytes++;
         }
     }
     return nbytes;
 },
/**
 * 문자열 길이제한(문자열을 최대 자리수만큼 자름)
 *
 * @param {String} message : [필수] 문자열
 * @param {String} maximum : [필수] 최대자리수
 * @param {String} objname : [선택] 입력자리수표시Id
 * @return {String} 변경된 메시지
 * @example StringUtil.cutString(문자열, 최대자리수, 입력자리수표시Id );
 * @constructor jysong 2013.10.31
 **/
 cutString : function( message, maximum, objname ) {
     var i = 0;
     var inc = 0;
     var nbytes = 0;
     var msg = "";
     var msglen = message.length;
     for (; i<msglen; i++) {
         var ch = message.charAt(i);
         inc = 0 ;
         if (escape(ch).length > 4) {
             inc = 2;
         } else if(ch == '\n' ) {
             if(message.charAt(i-1) != '\r') {
                 inc = 1;
             }
         } else {
             inc =  1;
         }
         if((nbytes + inc) > maximum) {
             break;
         }
         nbytes += inc;
         msg += ch;
     }
     if(objname != "") document.getElementById(objname).innerText = nbytes;
     return msg;
 },
 /**
 * 문자열 html 제거
 *
 * @param {String} text : [필수] 입력 문자열
 * @return {String} 변경된 문자열
 * @constructor jysong 2013.10.31
 **/
 removeHTML : function( text ) {
     var objReg = new RegExp(RegExpUtil.getTitleExp());
     // <...> 태그를 대소문자 구분 없이[/gi 옵션](g=global / i=insensitive) 모두 찾는다.
     text= text.replace(objReg, "");
     return text;
 },
 /**
 * JSON 형식의 문자열을 전달된 토큰과 구분자를 사용해 맵으로 반환한다.
 *
 * @param {String} json         : [필수] 분리할 문자열 (JSON 형식)
 * @param {String} replace      : [필수] 제거가 필요한 문자 배열 (배열 형식)
 * @param {String} token        : [선택] 문자열을 분리할 토큰 문자
 * @param {String} delimeter    : [선택] 토큰을 분리할 문자
 * @return {Object} Map 오브젝트
 * @example
 * var mapAttribute = StringUtil.splitDataToMap(attribute, ['{', '}'], ',', ':');
 * @constructor SIC 2013.12.12
 **/
 splitDataToMap : function(json, replace, token, delimeter) {
 // 입력값 검증
 if (StringUtil.isNull(json)
         || StringUtil.isNull(token)
         || StringUtil.isNull(delimeter)) {
     return {};
 }
 // JSON 형식의 문자열에서 치환 문자 제거
 if (StringUtil.isNotNull(replace)) {
     for (var i = 0; i < replace.length; i++) {
         json = StringUtil.replaceAll(json, replace[i], '');
     }
 }
 // 토큰과 구분자를 사용해 파싱한 결과를 Map 객체로 생성
 var splitData = {};
 if (json.length != 0) {
  var tokenSplit = json.split(token);
  var tokenSplitSize = tokenSplit.length;
  for (var i = 0; i < tokenSplitSize; i++) {
      var delimeterSplit = tokenSplit[i].split(delimeter);
      splitData[StringUtil.trim(delimeterSplit[0])] = StringUtil.trim(delimeterSplit[1]);
  }
 }
 return splitData;
 }

};

// ====================================================================
// ==   Date
// ====================================================================

/**
 * 날짜 관련 유틸 클래스
 *
 * @constructor jysong 2013.10.31
 **/
DateUtil = {
/**
 * 오늘 날짜 리턴(요청(dateFormat)에 따른 날자리턴)
 *
 * @param {String} sdate : 특정 날자를 넘길 경우.
 * @param {String} dateformat : 요청 데이터 형식
 * @param {String} split : 데이터 구분자
 * @return {String} 오늘 날짜
 * @constructor jysong 2013.10.31
 **/
 getToday : function( sdate, dateFormat, split) {
     var date;
     if( sdate == "" || sdate == null){
         date = new Date();
     } else {
         date = new Date(sdate);
     }

     var year    = date.getFullYear();
     var month   = date.getMonth() + 1;
     var day     = date.getDate();

     if (("" + month).length == 1) { month = "0" + month; }
     if (("" + day).length  == 1) { day  = "0" + day;  }

     if(dateFormat=="yyyy")  return year ;
     else if(dateFormat=="mm")  return month ;
     else if(dateFormat=="dd")  return day ;
     else if(dateFormat=="yyyymm")  return year + split + month ;
     else if(dateFormat=="mmdd")  return month + split + day ;
     else return  year + split + month + split + day;
 },
/**
 * 월의 마지막 날짜 구하기
 *
 * @param {String} year : 년
 * @param {String} month : 월
 * @return {String} 월의 마지막 날짜
 * @constructor jysong 2013.10.31
 **/
 getMonthLastDay : function( year, month) {
     // 월별 마지막 날짜
     var arrLastDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
     // 윤년인 경우 2월의 마지막은 29일
     if( ( 0 == year%4 && 0 != year%100 ) || 0 == year%400 ) {
         arrLastDay[1]=29;
     }
     return arrLastDay[month-1];
 },
/**
 * 년월일(YYYYMMDD)의 유효성을 체크
 *
 * @param {String} ymd : 년월일
 * @return {Boolean} true / false
 * @example DateUtil.ymdFormatChk(yyyymmdd)
 * @constructor jysong 2013.10.31
 **/
 ymdFormatChk : function( ymd) {
     // 날자 키입력이 가능하도록 처리
     ymd = ymd.replace(/\//gi,"");
     if( isNaN(ymd) || ymd==null ) {
         return false;
     } else {
         //if(i<2) {alert('ymd: '+ymd); i++;}
         var year = ymd.substring(0, 4);
         var month = parseInt(ymd.substring(4, 6), 10) -1;
         var day = parseInt(ymd.substring(6), 10);
         var endDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
         if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
             endDay[1] = 29;
         }
         return (day >= 1 && day <= endDay[month]);
     }
 },
/**
 * 날짜 차이를 일이나 월로계산 한다
 *
 * @param {String} fromDate : 시작일
 * @param {String} toDate : 종료일
 * @return {String} 계산결과
 * @example
 * // 년월일 구분은 "/"가 없어도 되며, "-"로 처리해도 된다.
 * DateUtil.diffDate('2002/02/01','2003/03/01') or DateUtil.diffDate('20020201','20030301') : 일차이
 * DateUtil.diffDate('2002/02','2003/03') or DateUtil.diffDate('200202','200303') : 월차이
 * @constructor jysong 2013.10.31
 **/
 diffDate : function(fromDate, toDate) {
     // 값이 없는 경우 0일을 리턴한다.(조회 최소기간:하루)
     if( StringUtil.isNull(fromDate) || StringUtil.isNull(toDate)) return "0";
     // 값이 date일 경우 0을 리턴
     if( $.type(fromDate) === "date" || $.type(toDate) === "date" ) return "0";
     var check = true;
     fromDate = fromDate.replace(/\//gi,"").replace(/-/gi,"");
     toDate = toDate.replace(/\//gi,"").replace(/-/gi,"");
     if(fromDate.length >= 8 ){
         fromDate = fromDate.substring(0,4)+"/"+fromDate.substring(4,6)+"/"+fromDate.substring(6);
         check = false;
     }else if(fromDate.length == 6 ){
         fromDate = fromDate.substring(0,4)+"/"+fromDate.substring(4)+"/01";
     }
     if(toDate.length >= 8 ){
         toDate = toDate.substring(0,4)+"/"+toDate.substring(4,6)+"/"+toDate.substring(6);
         check = false;
     }else if(toDate.length == 6 ){
         toDate = toDate.substring(0,4)+"/"+toDate.substring(4)+"/01";
     }
     if( fromDate.replace(/\//gi,"") >= toDate.replace(/\//gi,"") ) {
         return 0;
     }
     // 날자 표현형식 통일 : yyyy/mm/dd
     var d1 = new Date(fromDate);
     var d2 = new Date(toDate);
     // 월체크
     if( check ){
         var fm = d1.getMonth();
         var fy = d1.getFullYear();
         var sm = d2.getMonth();
         var sy = d2.getFullYear();
         var months = Math.abs(((fy - sy) * 12) + fm - sm);
         var firstBefore = d1 > d2;
         d1.setFullYear(sy);
         d1.setMonth(sm);
         firstBefore ? d1 < d2 ? months-- : "" : d2 < d1 ? months-- : "";
         return months;
     }

     var MinMilli = 1000 * 60;
     var HrMilli = MinMilli * 60;
     var DyMilli = HrMilli * 24;
     var d3 = d2 - d1;
     var str = d3 / DyMilli;
     return str;
 },
/**
 * 특정 날짜에 대해 지정한 값만큼 가감(+-)한 날짜를 반환
 * @param {String}  aType : 가감타입 yyyy(연도), m(월),  d(일)
 * @param {String}  aDay  : 가감일
 * @param {String}  aDate : 가감기준일
 * @param {String}  split : 날자구분자
 * @return {String} 가감한 날짜
 * @example
 * DateUtil.addDate(aType, aDay, aDate, split)
 * 20130304 로부터 2달뒤 ==> DateUtil.addDate("m", 2, "20130304", "/");
 * @constructor jysong 2013.10.31
 **/
 addDate : function (aType, aDay, aDate, split) {
     var yyyy;
     var mm;
     var dd;
     var cDate;
     var cYear, cMonth, cDay;
     aDate = aDate.replace(/\/|-/gi, "");
     yyyy = aDate.substr(0, 4);
     mm  = aDate.substr(4, 2);
     dd  = aDate.substr(6, 2);

     if (aType == "yyyy") {
         yyyy = (yyyy * 1) + (aDay * 1);
     } else if (aType == "m") {
         mm  = (mm * 1) + (aDay * 1);
     } else if (aType == "d") {
         dd  = (dd * 1) + (aDay * 1);
     }

     // 12월, 31일을 초과하는 입력값에 대해 자동으로 계산된 날짜가 만들어짐.
     cDate = new Date(yyyy, mm - 1, dd);
     cYear = cDate.getFullYear();
     cMonth = cDate.getMonth() + 1;
     cDay = cDate.getDate();
     cMonth = cMonth < 10 ? "0" + cMonth : cMonth;
     cDay = cDay < 10 ? "0" + cDay : cDay;

     if( split ) return ""+ cYear + split + cMonth + split + cDay;
     else return ""+ cYear + cMonth + cDay;
 }

};

// ====================================================================
// ==   Form
// ====================================================================

/**
 * Form 관련 유틸 클래스
 *
 * @constructor jysong 2013.10.31
 **/
FormUtil = {

/**
 * 날짜 포맷만 입력가능(yyyy-mm-dd)
 *
 * @param {Object} object : [필수] 사용할 객체
 * @return {void}
 * @example $('#startDate').keyup(function (e){ FormUtil.addDateFormat(this); });
 * @constructor jysong 2013.10.31
 **/
 addDateFormat : function(obj) {
     if(event.keyCode == 8){ return; } // backspace제외
     var ymd = obj.value.replace(/\//gi,"").replace(/-/gi,"");
     if( isNaN(ymd) || ymd==null ) {
         return;
     }
     var ymdLen = ymd.length;
     if(ymdLen >= 8){
         if(!DateUtil.ymdFormatChk(ymd)){
             obj.select();
             alert(fnComGetMessage("M001"));
             return;
         }
     }
     if(ymdLen >= 6 ){
         obj.value = ymd.substring(0,4) +"-" + ymd.substring(4,6) + "-" + ymd.substring(6);
     }else if(ymdLen >= 4 ){
         obj.value = ymd.substring(0,4) +"-" + ymd.substring(4);
     }
 },
/**
 * 입력 글자수 제한(자리수, 입력byte표시Id, formId)
 *
 * @param {Integer} lengthLimit : [필수] 제한할 길이
 * @param {String} objname : [필수] 사용할 객체명
 * @param {Object} obj : [필수] 사용할 객체
 * @return {void}
 * @example $('#title').keyup(function (e){ FormUtil.maxChar(100,'', this); });
 * @constructor jysong 2013.10.31
 **/
 maxChar : function( lengthLimit, objname, obj) {
     var length = StringUtil.length(obj.value);
     if( objname != "" )
         document.getElementById(objname).innerText = length;

     if (length > lengthLimit) {
         alert(fnComGetMessage("M002",lengthLimit));
         obj.value = obj.value.replace(/\r\n$/, "");
         obj.value = StringUtil.cutString(obj.value, lengthLimit,objname);
         if( objname != "" ){
             length = StringUtil.length(obj.value);
             document.getElementById(objname).innerText = length;
         }
     }
 },
/**
 * 경고창 및 포커싱처리
 *
 * @param {Object} obj : [필수] 사용할 객체
 * @param {String} alertMsg : [필수] 출력 메시지
 * @return {void}
 * @example FormUtil.alertNfocus($("#title"), "제목을 입력해주세요.");
 * @constructor jysong 2013.10.31
 **/
 alertNfocus : function( obj, alertMsg) {
     alert(alertMsg);
     obj.select();
     obj.focus();
     return false;
 },
/**
 * 엔터키 포함 여부
 *
 * @param {String} str : [필수] 입력 스트링
 * @return {Boolean} true / false
 * @example FormUtil.isIncludeEnterKey($("#title").val())
 * @constructor jysong 2013.10.31
 **/
 isIncludeEnterKey : function( str) {
     var strSplit = str.split("\r\n");
     if(strSplit.length > 1) {
         return true;
     }
     return false;
 }

};

// ====================================================================
// ==   regExp : 정규식관련
// ====================================================================

/**
 * 정규식관련 유틸 클래스
 * @example
 * // 제목에 특수문자 체크
 * var reg = new RegExp(RegExpUtil.getTitleExp());
 * if(reg.test($("#name").val())) {
 *    var str = "제목에 다음의 특수문자가 포함되어 있습니다: " + RegExpUtil.getExpKeyword(RegExpUtil.getTitleExp())
 *    return FormUtil.alertNfocus( $("#title"), str ); }
 * @constructor jysong 2013.10.31
 **/
RegExpUtil = {

/**
 * 제목 제한 정규표현식
 *
 * @return {String} 결과값
 * @example var reg = new RegExp(RegExpUtil.getTitleExp());
 * @constructor jysong 2013.10.31
 **/
 getTitleExp : function() {
     return "\"|'|<|>|~|!|@|#|%|&|\\|";
 },
/**
 * 제한된 정규표현식 보여주기
 *
 * @param {String} exp : [필수] 입력 스트링
 * @return {String} 결과값
 * @example RegExpUtil.getExpKeyword(RegExpUtil.getTitleExp())
 * @constructor jysong 2013.10.31
 **/
 getExpKeyword : function(exp) {
     return exp.replace(/([^\\]{1})\|/g, "$1 ").replace(/\\\|/, "\|");
 },
 getCardNo : function() {
     return "^[0-9]{13,20}$";
 },
 getAlphabet : function() {
     return "^[a-zA-Z]+$";
 },
 getAlphaNumeric : function() {
     return "^[a-zA-Z0-9]+$";
 }
};

// ====================================================================
// ==   Window
// ====================================================================

/**
 * 팝업(외 Window) 관련 유틸 클래스
 *
 * @constructor jysong 2013.10.31
 **/
WindowUtil = {

/**
 * 팝업을 연다
 *
 * @param {String} url : URL
 * @param {String} windowName : 팝업명
 * @param {String} width : 가로사이즈
 * @param {String} height : 세로사이즈
 * @param {String} strScroll : 스크롤여부
 * @param {String} strResize : 리사이즈 여부
 * @return {void}
 * @constructor jysong 2013.10.31
 **/
 open: function(url, windowName, width, height, strScroll, strResize) {
     var pop = "" ;
     windowX = Math.ceil( (window.screen.width  - width) / 2 );
     windowY = Math.ceil( (window.screen.height - height) / 2 );
     if(strResize == undefined || strResize == '') {
         strResize = 0 ;
     }

     pop = window.open(url, windowName, "width=" + width + ", height=" + height + ", top="+ windowY +", left="+ windowX +", scrollbars="+ strScroll+", resizable="+ strResize);
     if(!pop) {
         alert(fnComGetMessage("M003"));
     } else {
         try {pop.focus(); } catch(e){}
     }
 },
/**
 * 팝업을 닫는다
 *
 * @constructor jysong 2013.10.31
 **/
 close : function() {
     window.open('', '_self', '');
     window.close();
 }
};



;
$(document).ready(function(){

    //монтируем адресс_________________________________________
    var tmp = location.hostname.replace('www.', '');
    var tmpProtocol = window.location.protocol;
    var tmpIf = $('form').attr('method');
    // if (tmpIf == "post" || tmpIf == "POST"){
    // 	if (tmpProtocol == "https:"){
    // 		var tmp = location.hostname.replace('www.', '').replace(/[a-z]{2}\./,'')
    //     	tmp = tmpProtocol + '//cabinet.' + tmp + '/register';
    //     	console.log('for https= ' + tmp)
    // 	}else {
    //     	tmp = tmpProtocol + '//cabinet.' + tmp + '/register';
    //     	console.log('for http= ' + tmp)
    // 	}
    //     $('form').prop('action', tmp);
    // }

    if (tmpProtocol == "https:"){
         tmp = location.hostname.replace('www.', '').replace(/^[^.]{2,3}\./,'')
         tmp = tmpProtocol + '//cabinet.' + tmp + '/register';
         console.log('for https= ' + tmp)
     }else {
         tmp = tmpProtocol + '//cabinet.' + tmp + '/register';
         console.log('for http= ' + tmp)
     }

    var forms = $('form');
    for(var i=0; i<forms.length; i++){
        if(forms[i].method == "post"){
                
        }
    }

    // $('form').each(
    //     function(){
    //         if ($(this).attr('method') == 'post' || $(this).attr('method') == 'POST' ){
    //              if (tmpProtocol == "https:"){
    //                  var tmp = location.hostname.replace('www.', '').replace(/[a-z]{2}\./,'')
    //                  tmp = tmpProtocol + '//cabinet.' + tmp + '/register';
    //                  console.log('for https= ' + tmp)
    //              }else {
    //                  tmp = tmpProtocol + '//cabinet.' + tmp + '/register';
    //                  console.log('for http= ' + tmp)
    //              }
    //                 $('form').prop('action', tmp);
    //         }
    //     }
    // )
    
    //END монтируем адресс_________________________________________

    // Добавляем поле всегда current_url_____________________________________
    // if (tmpIf == "post" || tmpIf == "POST"){
        var nameUrl = window.location.host;
        $(document).find('form').append('<input type="hidden" name="current_url" value="' + nameUrl + '"></input>')
    // }
    //END Добавляем поле current_url_____________________________________
    
});
$(function(){
    var aff_preland = $.urlParam('aff_id');     //запомним аффа для приленда
    var aff_land = $.urlParam('affiliate_id');  // запомним аффа для ленда
    var tmp = location.hostname.replace('www.', '');
    var tmpIf = $('form').attr('method');
	// console.log(tmp)


	//отработка пикселя_________________________________________
	// if($.urlParam('fpp')){
    		var facebook_px_id = ($.urlParam('fbid') || $.urlParam('px'));
	// }
	// if(!facebook_px_id){
 //    		facebook_px_id = 363316310740483;
	// }

	var is_fb_pixel_on_page = $('body').html().search(/facebook.com\/tr\?id=/) != -1;

	if(facebook_px_id && !is_fb_pixel_on_page && aff_preland !=1 && aff_land != 1 ){
		$('body').prepend('<img style="display:none;"  src="https://www.facebook.com/tr?id=' + facebook_px_id + '&ev=PageView&noscript=1" width="1px" height="1px">');
		// console.log('subject pixel')
	}
    //END отработка пикселя_________________________________________


    // Прячем попАп по запросу____________________________________
    if($.urlParam('bp') == 1){
        $('.hover-modal').hide();
    }
    // END Прячем попАп по запросу____________________________________



    // специальная фича для андрея_________________________________________
    if (tmpIf == "post" || tmpIf == "POST"){	//разделение на ленд
    	if(aff_land == 1){
			$('body').prepend('<img style="display:none;"  src="https://www.facebook.com/tr?id=' + facebook_px_id + '&ev=AddToCart&noscript=1" width="1px" height="1px">');
    		// console.log('land for Andrew')
    	}
    }else {										//разделение на приленд
    	if(aff_preland == 1){			
			$('body').prepend('<img style="display:none;"  src="https://www.facebook.com/tr?id=' + facebook_px_id + '&ev=ViewContent&noscript=1" width="1px" height="1px">');
    		// console.log('preland for Andrew')
    	}
    }
    //END специальная фича для андрея_________________________________________

});

// добавление инпутов + инклуд и юрл параметров 
(function () {

    function getSearchParameters() {
        var prmstr = window.location.search.substr(1);
        return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
    }

    function transformToAssocArray( prmstr ) {
        var params = {};
        var prmarr = prmstr.split("&");
        for ( var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
            params[tmparr[0]] = decodeURIComponent(tmparr[1]);
        }
        return params;
    }

    var params = getSearchParameters();

    Object.keys(params).map(function(key, index) {
      // console.log(params[key]);
      if (key!='aff_id' & key!='affiliate_id' & key!='session_id' & key!='session' & key!='email' & key!='first_name'  & key!='last_name') {

        for (i = 0; i < document.forms.length; i++) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            document.forms[i].appendChild(hiddenField) ;
        }
      }

    });


})();

// добавление данных из рефферера

(function () {

    function getSearchParameters() {
        var prmstr = document.referrer.split('?')[1];
        return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
    }

    function transformToAssocArray( prmstr ) {
        var params = {};
        var prmarr = prmstr.split("&");
        for ( var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
        }
        return params;
    }

    var params = getSearchParameters();

    var tmp_session = document.getElementsByClassName('session_id');
    var tmp_affiliate = document.getElementsByClassName('affiliate_id');

    Object.keys(params).map(function(key, index) {
        if(key=='session'){
            // console.log('start session key')
            for (var i = 0; i < tmp_session.length; i++) {
            if (tmp_session[i].value == ''){
                tmp_session[i].value = params[key]
                }
            }
        }

        if (key=='aff_id'){
            // console.log('start aff key')
            for (var i = 0; i < tmp_session.length; i++) {
            if (tmp_affiliate[i].value == ''){
                tmp_affiliate[i].value = params[key]
                }
            }
        }
    });


})();


// если браузер сафари - то убераем антикликер________________________________
function get_name_browser(){
    var ua = navigator.userAgent;    
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    // if (ua.search(/Firefox/) > 0) return 'Firefox';
    // if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    // if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    return 'Не определен';
}
var browser = get_name_browser();
(function(){
    if (browser == 'Safari'){
        // $('.anticlicker').hide()
        console.log('safary + anticlicker.nohide()')

    }
    if (browser == 'Google Chrome'){
        // console.log('chrome')
    }
})();
// END если браузер сафари - то убераем антикликер________________________________

// (function(){
//     $('body').find('.anticlicker').hide();
// })();

$((function(){var e=function(e,n){var t=e.attr("name"),r=e.parents("form");$.trim(e.val());if(n&&e.is(":invalid"))return!1;if("phone"!=t){var o=$("[name=phone]",r),i=o.val();return(i==phonePrefix||i.length<phonePrefix.length)&&o.val(""),!0}};$(document).on("focus",".main-order-form [type=text], .main-order-form [type=tel]",(function(n){var t=$(this);e(t,!0)})),$(document).on("click",".main-order-form [type=text], .main-order-form [type=tel]",(function(n){var t=$(this);e(t,!1)})),$(document).on("keypress",".main-order-form [name=phone]",(function(e){var n=$(this),t=$.trim(n.val());return!!/[\d\+]+/.test(e.key)&&("+"!=t.substr(0,1)&&"+"!=e.key&&n.val("+"+t),!(t.length>0&&!/\d+/.test(e.key)))}))}));
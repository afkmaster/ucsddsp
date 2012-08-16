/*!
 * Scroll Sneak
 * http://mrcoles.com/scroll-sneak/
 *
 * Copyright 2010, Peter Coles
 * Licensed under the MIT licenses.
 * http://mrcoles.com/media/mit-license.txt
 *
 * Date: Mon Mar 8 10:00:00 2010 -0500
 */
var ScrollSneak=function(a,b){if(typeof b=="undefined"&&a===true)a=null,b=true;a=(typeof a=="string"?a:window.location.host).split("_").join("");var c;this.scroll=function(){if(window.name.search("^"+a+"_(\\d+)_(\\d+)_")==0){var b=window.name.split("_");window.scrollTo(b[1],b[2]);window.name=b.slice(3).join("_")}};if(!b)this.scroll();this.sneak=function(){if(typeof c=="undefined")c=window.name;var b=0,d=0;if(typeof window.pageYOffset=="number"){b=window.pageYOffset,d=window.pageXOffset}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){b=document.body.scrollTop,d=document.body.scrollLeft}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){b=document.documentElement.scrollTop,d=document.documentElement.scrollLeft}if(b||d)window.name=a+"_"+d+"_"+b+"_"+c;return true}}
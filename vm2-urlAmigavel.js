$.fn.urlAmigavel = function(valor){
	var str_acento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
	var str_sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
	var url_amigavel = "";

	for(var i = 0; i < valor.length; i++){
		if(str_acento.indexOf(valor.charAt(i)) != -1){
			url_amigavel += str_sem_acento.substr(str_acento.search(valor.substr(i,1)),1);
		}else{
			url_amigavel += valor.substr(i, 1);
		}
	}
	url_amigavel = url_amigavel.replace(/ /g, '-');
	return url_amigavel;
}
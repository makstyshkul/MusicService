const secondToMinutes = (duration) => {
	
	const hours = ~~(duration / 3600);
	const minutes = ~~((duration % 3600) / 60);
	const seconds = ~~(duration % 60);

	let res = '';

	if(hours <= 9){
		res+= '0' + hours + ':'; 
	}else{
		res+= hours + ':'; 
	}

	if(minutes <= 9){
		res+= '0' + minutes + ':'; 
	}else{
		res+= minutes + ':'; 
	}

	if(seconds <= 9){
		res+= '0' + seconds; 
	}else{
		res+= seconds; 
	}

	return res;
}

export default secondToMinutes;
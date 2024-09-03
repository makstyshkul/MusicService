
const SongItem = ({name, isActive}) => {

	return(
		<li style={isActive ? {backgroundColor: 'blue'} : null}>{name}</li>
	)

}

export default SongItem;
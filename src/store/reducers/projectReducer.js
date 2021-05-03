const initState = {
	projects:[
		{
			id:'1',
			title:'This is title 1',
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non facilisis metus. Sed volutpat massa dui, a volutpat lorem elementum eget. Ut quis enim sit amet mi ornare rhoncus eget ac erat. Cras interdum magna nec odio tristique imperdiet. Phasellus a iaculis mauris. Aliquam at tristique orci, eget aliquam urna. Vivamus auctor massa ac nunc ultricies accumsan. Fusce quis eros placerat, placerat lacus quis, pharetra libero. Morbi tempus rhoncus ipsum, sit amet pretium ante convallis id. Aliquam erat volutpat. Donec non purus eu ligula suscipit varius a a mauris. Maecenas leo enim, laoreet at augue non, auctor interdum lectus. Phasellus non ante odio. Morbi ligula nibh, commodo ac volutpat id, malesuada a diam.',
			author: 'Author 1'
		},
				{
			id:2,
			title:'This is title 2',
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non facilisis metus. Sed volutpat massa dui, a volutpat lorem elementum eget. Ut quis enim sit amet mi ornare rhoncus eget ac erat. Cras interdum magna nec odio tristique imperdiet. Phasellus a iaculis mauris. Aliquam at tristique orci, eget aliquam urna. Vivamus auctor massa ac nunc ultricies accumsan. Fusce quis eros placerat, placerat lacus quis, pharetra libero. Morbi tempus rhoncus ipsum, sit amet pretium ante convallis id. Aliquam erat volutpat. Donec non purus eu ligula suscipit varius a a mauris. Maecenas leo enim, laoreet at augue non, auctor interdum lectus. Phasellus non ante odio. Morbi ligula nibh, commodo ac volutpat id, malesuada a diam.',
			author: 'Author 2'
		},
		{
			id:3,
			title:'This is title 3',
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non facilisis metus. Sed volutpat massa dui, a volutpat lorem elementum eget. Ut quis enim sit amet mi ornare rhoncus eget ac erat. Cras interdum magna nec odio tristique imperdiet. Phasellus a iaculis mauris. Aliquam at tristique orci, eget aliquam urna. Vivamus auctor massa ac nunc ultricies accumsan. Fusce quis eros placerat, placerat lacus quis, pharetra libero. Morbi tempus rhoncus ipsum, sit amet pretium ante convallis id. Aliquam erat volutpat. Donec non purus eu ligula suscipit varius a a mauris. Maecenas leo enim, laoreet at augue non, auctor interdum lectus. Phasellus non ante odio. Morbi ligula nibh, commodo ac volutpat id, malesuada a diam.',
			author: 'Author 3'
		}
	]

}

const projectReducer = ( state = initState, action ) => {
	
	//console.log( action.type );

	switch( action.type ){
		case 'CREATE_PROJECT':
			console.log('Created project.',action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('Create project error.',action.project)
			return state;
		default:
			return state;
	}

}

export default projectReducer;
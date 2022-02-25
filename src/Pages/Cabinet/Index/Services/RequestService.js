// import request from 'services/Request';

const requestInitPage = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				balance: {
					total: '4212',
					address: '1GXPWTNnVC8boQeX6HEiaimGNf374iJZmj',
				},
				games: [
					{
						playNumber: '12',
						playId: '20092',
						dateStart: `${new Date()}`,
						dateEnd: `${new Date()}`,
						rate: '5',
						players: '48',
						result: '480',
					},
					{
						playNumber: '13',
						playId: '20052',
						dateStart: `${new Date()}`,
						dateEnd: `${new Date()}`,
						rate: '15',
						players: '481',
						result: '48',
					},
					{
						playNumber: '122',
						playId: '10092',
						dateStart: `${new Date()}`,
						dateEnd: `${new Date()}`,
						rate: '45',
						players: '100',
						result: '4800',
					},
					{
						playNumber: '122',
						playId: '16092',
						dateStart: `${new Date()}`,
						dateEnd: `${new Date()}`,
						rate: '45',
						players: '100',
						result: '4800',
					},
				],

				referals: [
					{
						id: '1',
						name: 'IOP',
						bonus: '84',
						date: `${new Date()}`,
					},
					{
						id: '2',
						name: 'EIO',
						bonus: '184',
						date: `${new Date()}`,
					},
					{
						id: '3',
						name: 'DFG',
						bonus: '456',
						date: `${new Date()}`,
					},
					{
						id: '4',
						name: 'CVB',
						bonus: '814',
						date: `${new Date()}`,
					},
					{
						id: '5',
						name: 'ASD',
						bonus: '8',
						date: `${new Date()}`,
					},
					{
						id: '6',
						name: 'YHN',
						bonus: '8',
						date: `${new Date()}`,
					},
				],

				referalLink: 'www.cco-online.com/ref=24hq14',
			});
		}, 1000);
	});
};

const requestSubmitForm = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log(data));
		}, 500);
	});
};

export { requestInitPage, requestSubmitForm };

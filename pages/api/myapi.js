export default (req, res) => {
	// res.end('Hello From Next JS API');
	res.statusCode == 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ name: 'Sakhawat Hossain' }));
};

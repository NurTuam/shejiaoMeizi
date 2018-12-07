const express=require('express');
const axios=require("axios");
const app=express();
const Router=express.Router();

Router.get('/getRecommend',(req,res)=>{
//	console.log(req)
//	res.end("1")
      res.setHeader('Access-Control-Allow-Origin','*');
    axios({
  		method: 'get',
  		url:"history/content/15/1",
  		baseURL:'http://gank.io/api/',
  		headers: {
  			
  		}
	}).then((response)=>{
		console.log(response)
        res.json(response.data)
	})
})

Router.get('/getAndroid',(req,res)=>{
//	res.end("1")
//console.log(req.query)
   let page=req.query.page;
   res.setHeader('Access-Control-Allow-Origin','*');
    axios({
		method: 'get',
		url:`data/Android/10/${page}`,
		baseURL:'http://gank.io/api/',
		headers: {
			
		}
	}).then((response)=>{
//		console.log(response)
        res.json(response.data)
	})
})

Router.get('/getDay',(req,res)=>{
//	res.end("1")
//console.log(req.query)
			let Y=req.query.Y;
			let M=req.query.M;
			let D=req.query.D;
//			console.log(D)
      res.setHeader('Access-Control-Allow-Origin','*');
    axios({
  		method: 'get',
  		url:`history/content/day/${Y}/${M}/${D}`,
  		baseURL:'http://gank.io/api/',
  		headers: {
  			
  		}
	}).then((response)=>{
//		console.log(response)
        res.json(response.data)
	})
})

Router.get('/getType',(req,res)=>{
//	res.end("1")
//console.log(req.query)
			let page=req.query.page;
			let type=req.query.type;
			console.log(type)
      res.setHeader('Access-Control-Allow-Origin','*');
    axios({
  		method: 'get',
  		url:`data/${type}/10/${page}`,
  		baseURL:'http://gank.io/api/',
  		headers: {
  			
  		}
	}).then((response)=>{
//		console.log(response)
        res.json(response.data)
	})
})

app.use('/api',Router)

app.listen(8888)

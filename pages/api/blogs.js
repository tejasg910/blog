// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
export default async function  handler (req, res) {
try{
 
  let data = await fs.promises.readdir('blogdata');
 // console.log(data) 

 data  = data.slice(0, parseInt(req.query.count));
let blogArr = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
// console.log(item)
      let blogContent  = await fs.promises.readFile(('blogdata/'+item), 'utf-8')
      // console.log(blogContent);
      blogArr.push(JSON.parse(blogContent))
    }
    res.status(200).json(blogArr)
//   


}
  catch(err){
    res.status(500).json({Error: "something went wrong"})
  }
  }
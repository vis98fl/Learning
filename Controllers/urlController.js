
//const urls=require('../models/short');
const shortid=require('shortid');
const urlCheck=require('../Utils/urlCheck')
const urlRepo=require('../Repository/urlRepository');

const UrlRepo=new urlRepo();

class urlController{

    register(app){
        app.route('/shorten').post(async(req,res)=>{

            const {url}=req.body;
            urlCheck.validateUrl(url,res);
            
            const savedUrl=await UrlRepo.insertUrl(url,res);
           /* const urlCode = shortid.generate();
              
               const nUrl=new urls({
                   longUrl:url,
                   shortUrl:urlCode
               })
              console.log(nUrl);
               const savedUrl =await nUrl.save()
               */
            res.json(savedUrl);
            
            
        });

        app.route('/getLongUrl/:uid').get(async(req,res)=>{
            //console.log(document.cookie);
            /*const {id}=req.body;
            if((id in obj)){
                res.send(obj[id]);
            }
            else{
                res.status(404).json('invalid id');
            }*/


            const _id=req.params.uid;
            console.log(`id is `, _id);
        
           /* let {longUrl}= await urls.findOne({shortUrl:_id});
            
           console.log(`long url:${longUrl}`);
            res.send(longUrl);*/
            console.log("before await")
            try{
                const longUrl=await UrlRepo.getUrl(_id);
                console.log("returning longUrl",longUrl);
            return res.json(longUrl);
            }
            catch(err){
                console.log("enter proper id")
            }
            res.send("")
        });

        app.route('/Update/:id').patch(async(req,res)=>{
                let id=req.params.id;
                const updates=req.body
                //console.log("updates",updates);
                try{
                const updatedlongUrl=await UrlRepo.updateUrl(id,updates);
                return res.send(updatedlongUrl)
                }
                catch(error){
                    return res.send("not updated");
                }

        });
        
    }
}

module.exports=urlController;
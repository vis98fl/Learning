const urls=require('../models/short');
const urlCheck=require('../Utils/urlCheck')
const shortid=require('shortid');
const db=require('../dbConfig');


class urlRepo{
      insertUrl(url){
         return new Promise(async(resolve,reject)=>{
        const urlCode = shortid.generate();
              
        const nUrl=new urls({
            longUrl:url,
            shortUrl:urlCode
        })
       console.log(nUrl);
       try{
        let savedUrl =await nUrl.save()
        resolve(savedUrl)
       }
       catch(error){
           reject(error);
       }
     });
    }
     getUrl(_id){
         return new Promise(async(resolve,reject)=>{
             console.log("inside repo");
            try{
        let {longUrl}= await urls.findOne({shortUrl:_id});
            
           console.log("long url",longUrl);
           resolve(longUrl);
            }
            catch(error){
                reject(error)
            }
             
     }
         );
    }

   //updated 
 updateUrl(id,updates){
    return new Promise(async(resolve,reject)=>{
        try{
    let longUrl=await urls.findByIdAndUpdate(id,updates,{new:true});
     resolve(longUrl);
        }
        catch(error){
            reject(error);
        }    
});


    }
           

}

module.exports=urlRepo


class ImageUploader {
   async upload(file,authCtx) {
    let URL = 'http://localhost:8080/image/uploadimages';
   
    try{
        const result = await fetch(URL,{
            method: 'POST',
            body: JSON.stringify({data: file}),
            headers: {'Content-Type': 'application/json',
                       'authtoken': authCtx.token
                    },
        })
        
        return result.json();
    }
    catch(err){
        console.error(err)
    }
   }
}
export default ImageUploader;

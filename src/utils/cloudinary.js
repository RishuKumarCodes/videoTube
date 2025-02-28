import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadONCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        const response  = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        console.log("File has been uploaded to cloudinary", response.url)
        return response;
    }catch{
        fs.unlinkSync(localFilePath) // removes the locally saved temp file as upload operation gets failed for some reason.
    }
}


export {uploadONCloudinary}
// CLOUDINARY_URL=cloudinary://<your_api_key>:<your_api_secret>@dsdabrhxs

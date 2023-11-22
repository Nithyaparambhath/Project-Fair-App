const projects = require('../Models/projectSchema')


exports.addProjects = async (req,res)=>{
    console.log("Inside add project function");
    
    const userId = req.payload
    const projectImage = req.file.filename
    const {title,languages,overview,github,website} = req.body
    // console.log(`${title},${languages},${overview},${github},${website},${projectImage}, ${userId}`);
    try{
        const existingProject = await projects.findOne({github})
        if(existingProject ){
            res.status(406).json("Project Already Exist!!! Upload another")
        }else{
            const newproject = new projects({
                title,languages,overview,github,website,projectImage,userId
            })
            await newproject.save()
            res.status(200).json(newproject)
        }
    }catch(err){
        res.status(401).json(`Request failed,error: ${err}`)
    }
   
}


// getuserprojects - token requried
exports.allUserProjects = async (req,res)=>{
    const userId = req.payload
    try{
        const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)
    }catch(err){
        res.status(401).json(err)
    }
}

// getallprojects -token required
exports.getallProjects = async (req,res)=>{
    try{
        const allProjects = await projects.find()
        res.status(200).json(allProjects)
    }catch(err){
        res.status(401).json(err)
    }
}

// gethomeprojects
exports.getHomeProjects = async (req,res)=>{
    try{
        const homeProjects = await projects.find().limit(3)
        res.status(200).json(homeProjects)
    }catch(err){
        res.status(401).json(err)
    }
}
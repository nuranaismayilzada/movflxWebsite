const Movies=require("../models/model")

const getAllData=async(req,res)=>{
    let allData=await Movies.find({})
    res.send(allData)
}

const postData=async(req,res)=>{
    const obj = req.body;
    const newMovie=await new Movies(obj);
    newMovie.save()
    res.send(newMovie)
}

const deleteById = async (req, res) => {
    const id=req.params.id
    const deleteElem=await Movies.findOneAndDelete({_id:id})
    res.send(deleteElem)
  };


  const getById = async (req, res) => {
     const id=req.params.id
    const getElem=await Movies.find({_id:id})
    res.send(getElem)
  };

  const patchById = async (req, res) => {
    let id=req.params.id
    const newMovie=await Movies.findOneAndUpdate(
        {_id:id},
        req.body
    )
    res.send(newMovie)
  };
  
  const puthById = async (req, res) => {
    let id=req.params.id
    const newMovie=await Movies.findOneAndReplace(
        {_id:id},
        req.body
    )
    res.send(newProducts)
  };
module.exports={getAllData,postData,getById,patchById,puthById,deleteById}
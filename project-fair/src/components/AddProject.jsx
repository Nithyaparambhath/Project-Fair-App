import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addProjectAPI } from '../Services/allAPI';

function AddProject() {
    const [show, setShow] = useState(false);

    const [projectDetails,setProjectDetails] = useState({
      title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })

    const [preview,setPreview] = useState("")
    const [token,setToken] = useState("")

    const handleAdd =async (e)=>{
      e.preventDefault()
      const {title,languages,overview,projectImage,github,website} = projectDetails
      if(!title ||!languages ||!overview ||!projectImage ||!github|| !website) {
        toast.info("Please Fill the form completly!!!")
      }
      else{
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("languages",languages)
        reqBody.append("overview",overview)
        reqBody.append("projectImage",projectImage)
        reqBody.append("github",github)
        reqBody.append("website", website)

        if(token){
          const reqHeader = {
            "content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          const result = await addProjectAPI(reqBody,reqHeader)
          if(result.status ===200){
            console.log(result.data);
            handleClose()
            alert("Project Added")
          }else{
            console.log(result);
            toast.warning(result.response.data);
          }
        }

      }
     
    }

    useEffect(()=>{
      if(projectDetails.projectImage){
        setPreview(URL.createObjectURL(projectDetails.projectImage))
      }
    },[projectDetails.projectImage])

    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
      }else{
        setToken("")
      }
    },[])

  const handleClose = () => {
    setShow(false);
    setProjectDetails({title:"",languages:"",overview:"",github:"",website:"",projectImage:""})
    setPreview("")
  }
  const handleShow = () => setShow(true);
  return (
    <div>
        <button onClick={handleShow} className='btn btn-success'>Add Projects</button>

        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-lg-6">
                    <label>
                        <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} />
                        <img className='img-fluid' src={preview?preview:"https://th.bing.com/th/id/R.5f8b98acd656c6d261777d035c50a112?rik=9e0Xk%2brW5WO0Yg&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20140518072131%2ftowerofsaviors%2fimages%2f4%2f47%2fPlaceholder.png&ehk=CZAAxtW4x95yvm5bFj%2fqN8pJu9M9F1JW8H5KVFRhKnk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"} alt="" />
                    </label>
                </div>
                <div className="col-lg-6">
                        <div className='mb-3'><input  type="text" className="form-control" placeholder='Project Title' value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/></div>

                        <div className='mb-3'><input type="text" className="form-control" placeholder='Languague Used' value={projectDetails.languages} onChange={(e)=>setProjectDetails({...projectDetails,languages:e.target.value})} /></div>

                        <div className='mb-3'><input type="text" className="form-control" placeholder='GitHub Link' value={projectDetails.github} onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})} /></div>

                        <div className='mb-3'><input type="text" className="form-control" placeholder='Website Link' value={projectDetails.website} onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})} /></div>
                </div>
                <div className="mb-3">
                <input type="text" className="form-control" placeholder='Project Overview' value={projectDetails.overview} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})} />
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject
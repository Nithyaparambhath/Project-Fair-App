import React from 'react'

function Profile() {
  return (
    <div className='card shadow p-3'>
        <div className='d-flex justify-content-between'>
            <h3>My Profile</h3>
            <button className='btn btn-light text-success'><i class="fa-solid fa-check"></i></button>
        </div>
        <div className='row justify-content-center mt-3'>
            <label className='text-center'>
                <input style={{display:'none'}} type="file" />
                <img style={{width:'200px',height:'200px'}} className='rounded' src="https://hlyfemethod.com/wp-content/uploads/2015/06/placeholder-man.png" alt="upload-pic" />
            </label>

            <div className="mt-3">
                <input type="text" className='form-control' placeholder='GitHub' />
            </div>
            <div className="mt-3">
                <input type="text" className='form-control' placeholder='LinkedIn' />
            </div>
            <div style={{width:'100%'}} className="mt-3">
                <button className='btn btn-warning '>Update</button>
            </div>
        </div>
    </div>
  )
}

export default Profile
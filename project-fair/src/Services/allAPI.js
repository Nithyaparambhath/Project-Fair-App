// register

import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// login
export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//addproject
export const addProjectAPI = async (reqbody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/projects/add`,reqbody,reqHeader)
}

// HOMEproject
export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/home-projects`,"","")
}
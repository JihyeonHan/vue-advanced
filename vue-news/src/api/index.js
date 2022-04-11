import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config ={
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
async function fetchNewsList(){
    try {
        return await axios.get(`${config.baseUrl}news/1.json`);
    }catch (error){
        console.log(error);
    }
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    }catch (e) {
        console.log(e);
    }
}

async function fetchUserInfo(username) {
    try {
        return await axios.get(`${config.baseUrl}user/${username}.json`);
    }catch (e) {
        console.log(e);
    }
}

async function fetchItemInfo(id) {
    try {
        return await axios.get(`${config.baseUrl}item/${id}.json`);
    }catch (e) {
        console.log(e);
    }
}



export{
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}

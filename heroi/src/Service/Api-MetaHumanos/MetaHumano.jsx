/* eslint-disable import/no-anonymous-default-export */
const API_BASE = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';


const  getList = async () => {
    const profiles = await fetch(API_BASE).then((resp) => resp.json());
    return profiles;
};

export default {getList}
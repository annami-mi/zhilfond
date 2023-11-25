const BASE_URL = process.env.VUE_APP_BASEURL

export const apiGetPersonList = async (arrId) => {
    let url = new URL(BASE_URL + process.env.VUE_APP_GET_PERSON_LIST);
    if(arrId && arrId.length){
        url = constructorUrl(url, 'id', arrId)
    }
    // if(arrName && arrName.length){
    //     url = constructorUrl(url, 'name', arrName)
    // }
    let response = await fetchGet(url)
    return normalizeResponse(response)
}

// Get запрос
export const fetchGet = async (url) =>{
    const request = {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'accept': 'application/json'
        }
    };
    let status, result
    try {
        const response = await fetch(url, request);
        status = response.status;
        result = await response.json()
    } catch (e) {
        status = 500
        result = null
    }

    return {status, result}
}

// Проверка запроса на успешность
export const isStatusSuccess = num => {
    return num >= 200 && num <= 300
}

// Преобразование невалидного пустого ответа к null
export const normalizeResult = result => {
    let res
    if(result === null || result === undefined){
        res = null
    } else if (result.length < 1){
        res = null
    } else if(Object.keys(result).length < 1){
        res = null
    } else {
        res = result
    }
    return res
}

export const normalizeResponse = response => {
    const status = isStatusSuccess(response.status) ? null : response.status
    const result = !status ? normalizeResult(response.result) : null
    return {status, result}
}

const constructorUrl = function (url, key, arr){
    console.log(url, key, arr)
    const u = new URL(url)
    for(let item of arr){
        u.searchParams.append(key, item)
    }
    console.log(u)
    return u
}

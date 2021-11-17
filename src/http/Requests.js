import {$host} from './index'


export const getCurrentCars = async (body) => {
    const response = await $host.post('/car-in-stock/get-cars',JSON.stringify(body))
    return response
}
export const getFilters = async (body) => {
    const response = await $host.post('/car-in-stock/react-filters',JSON.stringify(body))
    return response
}
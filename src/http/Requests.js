import {$host} from './index'

export const getCars = async () => {
    const response = await $host.get('/car-in-stock/get-cars',)
    return response
}
export const getStartedFilter = async () => {
    const response = await $host.post('/car-in-stock/react-filters',)
    return response
}
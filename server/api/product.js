export default defineEventHandler(async (event) => {

    // Handle query params=
    // const {name} = useQuery(event)

    //Handle post data
    // const {age} = await useBody(event)

    // Api call with private key

    // const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=0AREmTsGLjjsFEUgEb6kRUiLujDrPC9Sa8GOpDHQ')

    const {currencyKey} = useRuntimeConfig()
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`
    const {data} = await $fetch(uri)
    return data
    // {
    // //     message: `Product api data for ${name}! You are ${age} old`
    // }
})
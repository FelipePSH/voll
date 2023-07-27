import Api from "./Api"

export async function doLogin(email:string, senha:string) {

    if(!email || !senha) return null

    try{
        const result = await Api.post('/auth/login', {
            email, 
            senha
        })

        console.log(result.data)
        return result.data

    } catch(error){
        console.log(error)
        return null
    }
    
}
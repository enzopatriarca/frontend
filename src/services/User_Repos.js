import {http} from '@/services/config'

export default{
    Usuarios:() =>{
        return http.get('/api/user_repos/:username')
    },
}
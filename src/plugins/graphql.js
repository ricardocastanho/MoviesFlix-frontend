import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import  { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use({
    install(Vue){
        //Apollo Link
        const httpLink = createHttpLink({
            uri: 'http://localhost:7542/'
        })

        //Apollo Link
        const authLink = setContext((_, { headers }) => {
            const token = localStorage.getItem('token')
            return {
                ...headers,
                authorization: token ? token : ''
            }
        })

        Vue.prototype.$api = new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache
        })
    }
})
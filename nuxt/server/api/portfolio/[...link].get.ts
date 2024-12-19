import { SinglePortfolio } from "./index.get"

const config = useRuntimeConfig()

export default defineCachedEventHandler(async event => {
   const url = event.context.params!.link

   const singleURI = new URL(`${url}.json`, config.ych.baseUrl)
   singleURI.searchParams.set('time', `${new Date().getTime()}`)

   try {
      return await $fetch<SinglePortfolio>(singleURI.toString())
   } catch (err: any) {
      throw createError({ statusCode: err.status, statusMessage: err.message })
   }
}, { swr: true })
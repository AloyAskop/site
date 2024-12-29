type Portfolio = {
   status: string
   results: number
   payload: {
      id: number
      url: string
      bid: number
      title?: string
   }[]
}

export type SinglePortfolio = {
   result: string
   time: number
   payload: {
      id: number
      media: {
         preview: string
         thumb: string
         original: string
      }
   }
}

const config = useRuntimeConfig()

export default defineEventHandler(async event => {
   const data = await $fetch<Portfolio>(
      new URL(config.ych.user, config.ych.baseUrl).toString()
   )

   const result = []
   for (const item of data.payload) {
      const singlePost = await $fetch<SinglePortfolio>(`/api/portfolio/${item.url.replace(/^\/(?!\/)/, "")}`)
      result.push({
         id: item.id,
         url: new URL(item.url, config.ych.baseUrl),
         title: item.title,
         price: item.bid,
         thumb: singlePost.payload.media?.original ?? singlePost.payload.media?.thumb ?? ''
      })
   }

   return { portfolio: result }
})
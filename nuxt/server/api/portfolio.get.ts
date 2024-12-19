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

type SinglePortfolio = {
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

export default defineCachedEventHandler(async event => {
   const data = await $fetch<Portfolio>('https://ych.commishes.com/user/history/dech.json')

   const result = []
   for (const item of data.payload) {
      const singleURI = new URL(`${item.url}.json`, 'https://ych.commishes.com')
      singleURI.searchParams.set('time', `${new Date().getTime()}`)

      const singlePost = await $fetch<SinglePortfolio>(singleURI.toString())

      result.push({
         id: item.id,
         url: new URL(item.url, 'https://ych.commishes.com'),
         title: item.title,
         price: item.bid,
         thumb: singlePost.payload.media?.original ?? singlePost.payload.media?.thumb ?? ''
      })
   }

   return { portfolio: result }
}, { swr: true })
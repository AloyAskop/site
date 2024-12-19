export type Portfolio = {
   status: string
   results: number
   payload: {
      id: number
      url: string
      title?: string
   }[]
}

export default defineEventHandler(async event => {
   const data = await $fetch<Portfolio>('https://ych.commishes.com/user/history/dech.json')

   const result = []
   for (const item of data.payload) {
      const singlePost = await $fetch(`https://ych.commishes.com/auction/show/3URQP/.json?time=${new Date().getTime()}`)

      result.push({
         id: item.id,
         url: item.url,
         title: item.title,
         thumb: singlePost
      })
   }

   console.log(result[0].thumb)

   return { portfolio: result }
})
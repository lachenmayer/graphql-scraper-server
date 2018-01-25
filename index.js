const { GraphQLServer } = require('graphql-yoga')
const schema = require('graphql-scraper')

const server = new GraphQLServer({ schema })
server.start(({ port }) => {
  console.log(
    `graphql-scraper endpoint & playground are live on http://localhost:${port}/`
  )
})

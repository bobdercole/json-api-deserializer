module.exports = {
  data: {
    id: 1,
    type: 'posts',
    attributes: {
      content: 'lorem ipsum'
    },
    relationships: {
      author: {
        type: 'users',
        id: 1
      }
    }
  },
  included: [
    {
      type: 'users',
      id: 1,
      attributes: {
        name: 'John'
      }
    }
  ]
}
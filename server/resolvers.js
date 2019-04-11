const resolvers = {
  Query: {
    getCalls: (parent, {key}, {redis}) => {
      try {
        return redis.get(key)
      } catch (error) {
        return null
      }
    }
  },

  Mutation: {
    incrCalls: async (parent, {key}, {redis}) => {
      try {
        const res = await redis.incr(key)
        return res
      } catch (error) {
        console.log(error)
        return false
      }
    },
  }
};

module.exports = resolvers;
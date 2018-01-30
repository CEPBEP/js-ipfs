'use strict'

const print = require('../../utils').print

module.exports = {
  command: 'bw',

  describe: 'Get bandwidth information.',

  builder: {
    peer: {
      type: 'string',
      default: ''
    },
    proto: {
      type: 'string',
      default: ''
    },
    poll: {
      type: 'boolean',
      default: false
    },
    interval: {
      type: 'string',
      default: ''
    }
  },

  handler (argv) {
    argv.ipfs.stats.bw({
      peer: argv.peer,
      proto: argv.proto,
      poll: argv.poll,
      interval: argv.interval
    }, (err, stats) => {
      if (err) {
        throw err
      }

      print(`bandwidth status
  total in: ${stats.totalIn}B
  total out: ${stats.totalOut}B
  rate in: ${stats.rateIn}B/s
  rate out: ${stats.rateOut}B/s`)
    })
  }
}

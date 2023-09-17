const cheerio = require('cheerio')
const axios = require('axios')

const scraper = (link) => {
    axios.get(link)
}
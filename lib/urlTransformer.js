const { URL } = require('url')
let urlTransformer = (link) => {
    const givenURL = new URL(link)
    const {
        origin,
        pathname,
        searchParams,
    } = givenURL;
    if(pathname.includes('/jobs/view/')){
        let newLink = origin + pathname
        return newLink
    }
    else if(pathname.includes('/jobs/collections/recommended')){
        let jobId = searchParams.get('currentJobId')
        let link = origin + '/jobs/view/' + jobId
        return link
    }
    else if(pathname.includes('/jobs/search/')){
        let jobId = searchParams.get('currentJobId')
        let link = origin + '/jobs/view/' + jobId
        return link
    }
}
module.exports = urlTransformer
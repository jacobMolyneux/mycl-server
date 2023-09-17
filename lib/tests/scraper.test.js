
const urlTransformer = require('../urlTransformer')

describe('convert url function', () => {
    test('converting url from sing job posting page', () => {
        const link = 'https://www.linkedin.com/jobs/view/3711698664/?eBP=CwEAAAGKo4gU36iN_6n8M87sq51aTHfKG38fUpuD92x-trx8NBsNHA9K-ZQWlBdnaA5UxM3dnEcqiWlNkHeNRfNYaqrfSwI55cyTJmIbOLKU1dotRGTeYYWICm8q6hiwWKeLuX95zaqrc_cccierLifgEbTBmllzMP09U_ZJ2v4mr5m0exPTXpeqgK6Q7Aj9kll4iTOWt0IvkIBA1LZKq7LpRaRfhelbT-87tgvXu_3F2Rq5F11mS6OmeYvbJFURiDPfPyMI4fAh69bN-Byd192LxCP-dO7P5Qs0paoixEioPz6l7AIfhdqdNgjvJ-nHBvkAEUfCvxk4Nlt4b5nCy0kij0ZQPrPN-uJ8aEbT-yRS&refId=Th8UYVMPMBCCxEU%2F7RUpFg%3D%3D&trackingId=NBQjj83e%2B4VJzTGGuBi%2BXA%3D%3D&trk=flagship3_jobs_discovery_jymbii'
        const result = urlTransformer(link)
        expect(result).toBe('https://www.linkedin.com/jobs/view/3711698664/')
    })
    test('converting from recomended job search page', () => {
        const link = 'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3702498055'
        const result = urlTransformer(link)
        expect(result).toBe('https://www.linkedin.com/jobs/view/3702498055')
    })
    test('convert from search job page', () => {
            const link = 'https://www.linkedin.com/jobs/search/?currentJobId=3676651879&distance=25&f_E=2&geoId=90009496&keywords=product%20analyst&origin=JOB_COLLECTION_PAGE_KEYWORD_HISTORY&refresh=true';
            const result = urlTransformer(link)
            expect(result).toBe('https://www.linkedin.com/jobs/view/3676651879')
    })
})
import ogs, { Options } from "open-graph-scraper";

const options: Options = {
  url: process.argv[2],
  allMedia: false
}
ogs(options, (error, results, response) => {
  console.log('error:', error); // This returns true or false. True if there was an error. The error itself is inside the results object.
  console.log('results:', results); // This contains all of the Open Graph results
  // console.log('response:', response); // This contains the HTML of page
})

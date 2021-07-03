import { unfurl } from "unfurl.js"

async function fetch(url: string) {
    const result = await unfurl(url)
    console.log("result:", result)
    if (result.open_graph && result.open_graph.images) {
        console.log("images:", result.open_graph.images)
    }
}

fetch(process.argv[2])

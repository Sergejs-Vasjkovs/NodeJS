// const server = http.createServer(async (request, respons) => {
//     if (request.method === "GET") {
//         const content = await fs.readFile(path.join(basePath, "index.html"))
//         respons.writeHead(200, {
//             "Conten-type": "text/html"
//         })
//         respons.end(content)
//     } else if (request.method === "POST") {
//         const body = []
//         respons.writeHead(200, {
//             "Conten-type": "text/plain: charset=uft-8"
//         })

//         request.on("data", data => {
//             body.push(Buffer.from(data))
//         })

//         request.on("end", () => {
//             const title = body.toString().split("=")[1].replaceAll("+", " ")
//             addNote(title)
//             respons.end(`Title: ${title}`)
//         })
//     }
// })
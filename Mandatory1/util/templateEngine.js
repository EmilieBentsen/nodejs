import fs from "fs";

const navComponent = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(path, options = {}) {
    const page = fs.readFileSync("./public/pages"+path).toString();

    return navComponent
        .replace("%%TAB_TITLE%%", options.tabTitle || "Pokemon")
        .replace("%%PAGE_CSS_LINK%%",
            options.cssLink || ""
        ) 
        .replace("%%CONTENT%%", options.content)
        .replace("%%TITLE%%", options.title)
        .replace("%%SUBJECT%%", options.subject)


        + page
            
        + footerComponent;
}

export const content = [
    {
        title: "Dette er den første titel",
        text: "Dette er den første text"
    },
    {
        title: "Dette er den anden titel",
        text: "Dette er den anden text"
    }
]

export function injectData(pageString, post) {
    const brokenUpHTML = pageString.split("</body>");
    return brokenUpHTML[0] + 
        `<p>const ${post}</p></body>` + 
        brokenUpHTML[1];
}
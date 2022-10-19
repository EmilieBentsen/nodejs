import fs from "fs";

const navComponent = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(path, options = {}) {
    const page = fs.readFileSync("./public/pages"+path).toString();

    return navComponent
        .replace("%%TAB_TITLE%%", options.subject)
        .replace("%%PAGE_CSS_LINK%%",
            options.cssLink || ""
        ) 
        .replace("%%CONTENT%%", options.content)
        .replace("%%TITLE%%", options.title)
        .replace("%%SUBJECT%%", options.subject)
        + page            
        + footerComponent;
}

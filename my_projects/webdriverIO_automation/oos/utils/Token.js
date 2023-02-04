const fs = require('fs');

class Token {

    async getToken(currentUrl) {
        const output = await browser.mock('**/getUserProfile', { method: 'get' })
        await browser.url(currentUrl)
        await browser.pause(15000)
        fs.writeFile('headerData.json', JSON.stringify(output.calls), function (err) {
            if (err) throw err
        })
        var json_data = output.calls[0].headers;
        var result = [];
        for (var i in json_data)
            result.push([i, json_data[i]]);
        let token = result[10].toString().replace("x-id-token,", "");
        console.log("########" + token);
        return token;
    }
}
export default new Token()
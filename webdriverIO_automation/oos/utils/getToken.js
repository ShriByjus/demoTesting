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
        let contentType = result[1].toString().replace("Content-Type,", "");
        let accessToken = result[8].toString().replace("x-access-token,", "");
        let idToken = result[10].toString().replace("x-id-token,", "");
        let refreshToken = result[11].toString().replace("x-refresh-token,", "");
        return { contentType, accessToken, idToken, refreshToken };
    }
}
export default new Token()

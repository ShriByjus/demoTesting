/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    openOMSPage() {
        return browser.url(`${process.env.OMS_BYJUS_URL}`)
    }
    openWMSPage() {
        return browser.url(`${process.env.WMS_BYJUS_URL}`)
    }
    goToUrl(urlText) {
        return browser.url(urlText)
    }
    openSalesOrderId(ssoId) {
        return browser.url(`${process.env.OMS_BYJUS_URL}${"orders/product-sales-sub-orders/"}${ssoId}`)
    }

    async openOmsUrl(count,ssoId) {
        if (count <= 1) {
            return browser.url(`${process.env.OMS_BYJUS_URL}`)
        }
        else if (count >= 3) {
            return browser.url(`${process.env.OMS_BYJUS_URL}${"orders/product-sales-sub-orders/"}${ssoId}`)
        }
    }
}

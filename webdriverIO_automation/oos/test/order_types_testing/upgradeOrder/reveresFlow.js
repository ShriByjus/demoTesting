import SDcardOrderPage from '../../../pages/omsSmokeData';
import sdCardAndTabletOrderPage from '../../pages/sd.card.and.tablet.order.page';
import mongoconnect from '../../utils/mongoconnect';
import { allureUtil as allure } from '../../utils/util.allure';
const salesOrderId = require('../../orders.json')
const ssoId = salesOrderId.substring(3);
// let awbnumber = '';
describe('btlp workflow', async()=>{
    it('log in into WMS',async()=>{
        allure.startStep("Maximize the window");
        await browser.maximizeWindow();
        await SDcardOrderPage.openWMSPage();
        console.log("Opened wms page");
        await SDcardOrderPage.logInToWms(process.env.USER_EMAIL_ACHIEVETESTING, process.env.PWD_ACHIEVETESTING);
        console.log("WMS Login completed");
        await browser.pause(12000);
        await SDcardOrderPage.selectWmsWarehouse(ssoId);
        let tabletItemID = await mongoconnect.getTabletItemIdFromDB(ssoId);
        let sdCardItemID = await mongoconnect.getSdCradItemIdFromDB(ssoId);
        console.log(tabletItemID);
        console.log(sdCardItemID);
        await SDcardOrderPage.QcCheckWms(tabletItemID,sdCardItemID);
    })
})
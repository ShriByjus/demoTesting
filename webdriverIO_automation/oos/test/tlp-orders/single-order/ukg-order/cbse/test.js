
import verifyOmsOrderDetails from '../../../../../pages/verifyOmsOrderDetails';
import mongoconnect from '../../../../../utils/mongoconnect';

describe('btlp workflow', async()=>{
    it('byjusPay' , async() => {
        await browser.maximizeWindow();
        browser.url('https://dev-pay.byjusorders.com/');
        await browser.pause(2000);
       $("(//button[normalize-space()='Sign In With Google'])[1]").click();
       await browser.pause(2000);
       $("(//span[contains(text(),'Continue with Google')])[2]").click();
       await browser.pause(6000);
       $("#identifierId").setValue("shrinath.mirashi@byjus.com");
       await browser.pause(2000);
       $("//span[text()='Next']/..").click();
       await browser.pause(8000);
       $("input[type='password']").setValue("mirashiByjus@8025");
       await browser.pause(5000);
       $("//span[text()='Next']/..").click();
       await browser.pause(5000);
       $("//a[@href='/razorpay']").waitForDisplayed({ timeout: 12000 });
       $("//a[@href='/razorpay']").click();
       $("input[name='customerName']").setValue("ByjusPay");
       await browser.pause(3000);
       $("input[name='phone']").setValue("9481474817"); 
       await browser.pause(3000);
       $("input[name='amount']").setValue("500000");    
       await browser.pause(3000);
       $("input[name='course']").setValue("The Learning App"); 
       await browser.pause(3000);
       $("//input[@name='customerEmail']").setValue("shrinath.mirashi@byjus.com"); 
       await browser.pause(3000);
       $("//div[contains(text(),'Select...')]").click();
       await browser.pause(3000);
       await browser.keys("Enter");
       await browser.pause(3000);
       $("button[class='mr-2 btn btn-success']").click();
       $("i[class='fa fa-refresh']").waitForDisplayed({ timeout: 12000 });

       
      let copyReferenceIdAndEmailID = await verifyOmsOrderDetails.copyRefernceID()
      let ref_id = copyReferenceIdAndEmailID.referenceID;
      console.log(' From UI ' + copyReferenceIdAndEmailID.referenceID)

      let copyRazorPayUrl = mongoconnect.getRazorPayUrl(ref_id);
      console.log((await copyRazorPayUrl).razorpay_url);
      
      await browser.newWindow((await copyRazorPayUrl).razorpay_url);
      // let switchToPaymentUrl = await verifyOmsOrderDetails.switchToPaymentUrl()
      // await browser.newWindow(switchToPaymentUrl.paymenrUrl);
      // await verifyOmsOrderDetails.payAmountSection();
      // await browser.switchWindow('https://dev-pay.byjusorders.com/')
    //   let getImpersonateUser = await verifyOmsOrderDetails.impersonateUser()
    //   expect(getImpersonateUser.impersonateEmailID).toEqual("shrinath.mirashi@byjus.com");
      await browser.pause(12000);
})         
})
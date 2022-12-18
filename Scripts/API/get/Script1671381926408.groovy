import com.kms.katalon.core.testobject.ConditionType as ConditionType
import com.kms.katalon.core.testobject.RequestObject as RequestObject
import com.kms.katalon.core.testobject.ResponseObject as ResponseObject
import com.kms.katalon.core.testobject.TestObjectProperty as TestObjectProperty
import com.kms.katalon.core.util.KeywordUtil as KeywordUtil
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import common_keyword.SampleResponseObject as SampleResponseObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import internal.GlobalVariable as GlobalVariable


def endpoint = "https://api.punkapi.com/v2/beers?page=2&per_page=$value1"
def endpoint2 = "https://api.punkapi.com/v2/beers?page=2&per_page=$value2"
def endpoint3 = "https://api.punkapi.com/v2/beers?page=2&per_page=$value3"
def requestMethod = 'GET'

TestObjectProperty header2 = new TestObjectProperty('Content-Type', ConditionType.EQUALS, 'application/json')

TestObjectProperty header3 = new TestObjectProperty('Accept', ConditionType.EQUALS, 'application/json')

ArrayList defaultHeaders = Arrays.asList(header2, header3)

/**
* GET requests
*/
RequestObject ro = new RequestObject('objectId')

ro.setRestUrl(endpoint)

ro.setHttpHeaderProperties(defaultHeaders)

ro.setRestRequestMethod(requestMethod)

ResponseObject respObj = WS.sendRequest(ro)

if (SampleResponseObject.getStatusCode(respObj) != 200) {
    KeywordUtil.markFailed('Status code is not 200 as expected. It is ' + SampleResponseObject.getStatusCode(respObj))
}

/**
 * GET requests
 */
 
 ro.setRestUrl(endpoint2)
 
 ro.setHttpHeaderProperties(defaultHeaders)
 
 ro.setRestRequestMethod(requestMethod)
 
 ResponseObject respObj2 = WS.sendRequest(ro)
 
 if (SampleResponseObject.getStatusCode(respObj2) != 200) {
	 KeywordUtil.markFailed('Status code is not 200 as expected. It is ' + SampleResponseObject.getStatusCode(respObj2))
 }
 
 /**
  * GET requests
  */
  
  ro.setRestUrl(endpoint3)
  
  ro.setHttpHeaderProperties(defaultHeaders)
  
  ro.setRestRequestMethod(requestMethod)
  
  ResponseObject respObj3 = WS.sendRequest(ro)
  
  if (SampleResponseObject.getStatusCode(respObj3) != 200) {
	  KeywordUtil.markFailed('Status code is not 200 as expected. It is ' + SampleResponseObject.getStatusCode(respObj3))
  }



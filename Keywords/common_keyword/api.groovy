package common_keyword;

import com.kms.katalon.core.testobject.ResponseObject
 
public class SampleResponseObject {
 
public static int getStatusCode(ResponseObject resp) {
return resp.getStatusCode()
}
public static String getResponseText(ResponseObject resp) {
return resp.getResponseText()
}
public static long getResponseBodySize(ResponseObject resp) {
return resp.getResponseBodySize()
}
public static long getResponseHeaderSize(ResponseObject resp) {
return resp.getResponseHeaderSize()
}
public static long getWaitingTime(ResponseObject resp) {
return resp.getWaitingTime()
}
}

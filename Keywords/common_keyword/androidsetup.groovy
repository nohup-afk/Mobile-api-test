package common_keyword

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.configuration.RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil





public class androidsetup {
	@Keyword
	def open_app() {
		def appPath = PathUtil.relativeToAbsolutePath('APK/mda-1.0.13-15.apk', RunConfiguration.getProjectDir())
		Mobile.startApplication(appPath, false)
	}
}

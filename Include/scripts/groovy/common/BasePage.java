package common;
import java.time.Duration;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class BasePage {
    private static final int TIMEOUT = 20;
    private static final int POLLING = 45;
	
	protected AppiumDriver<?> driver;
    public WebDriverWait wait;
	public BasePage(AppiumDriver<?> driver){
		this.driver = driver;
        wait = new WebDriverWait(driver, TIMEOUT, POLLING);
        PageFactory.initElements(new AppiumFieldDecorator(driver, Duration.ofSeconds(20)), this);
    }

}
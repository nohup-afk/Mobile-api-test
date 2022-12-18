package pages;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords;
import com.kms.katalon.core.model.FailureHandling;

import common.BasePage;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;

public class Products extends BasePage {
	public Products (AppiumDriver<?> driver) {
		super(driver);
	}
	@AndroidFindBy(id = "com.saucelabs.mydemoapp.android:id/productTV")
	private AndroidElement  titlePage ;
	
	@AndroidFindBy(accessibility = "Sauce Lab Back Packs")
	private AndroidElement  Sauce_Lab_Back_Packs ;
	
	@AndroidFindBy(accessibility  = "Blue color")
	private AndroidElement  color_blue ;
	
	@AndroidFindBy(accessibility  = "Increase item quantity")
	private AndroidElement  increase_item ;
	
	
	@AndroidFindBy(accessibility  = "Tap to add product to cart")
	private AndroidElement  add_to_cart ;
	
	
	public void list_product(String item) {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("com.saucelabs.mydemoapp.android:id/productTV")));
		switch(item) {
			case "Sauce Lab Back Packs":
				this.Sauce_Lab_Back_Packs.click();
				break;
		}
		
	}
	
	public void select_colour(String color) {
		wait.until(ExpectedConditions.elementToBeClickable(color_blue));
		switch(color) {
			case "Blue":
				this.color_blue.click();
				break;
		}
	}
	
	public void increase_amount() {
		MobileBuiltInKeywords.scrollToText("Add to cart", FailureHandling.STOP_ON_FAILURE);
		this.increase_item.click();
	}
	
	public void to_cart() {
		this.add_to_cart.click();
	}
	
	
	
	
	
}
package steps;
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.AppiumDriver;
import pages.Products;

public class add_to_cart {
	public AppiumDriver<?>  driver;
	public Products product;
	
	@Given("Alisa open application demo app")
	public void Alisa_open_application_demo_app() {
		new common_keyword.androidsetup().open_app();
		driver = MobileDriverFactory.getDriver();
		product = new Products(driver);
	}
	
	@Given("she select (.*) in product list")
	public void she_select_in_product_list(String item) {
		product.list_product(item);
	}
	
	@Given("she select (.*) item")
	public void she_select_item(String color) {
		product.select_colour(color);
	}
	
	@When("she want add increase amount of the item")
	public void she_want_add_increase_item() {
		product.increase_amount();
	}
	
	@Then("she should able to Add item to cart")
	public void she_should_able_to_Add_item_to_cart() {
		product.to_cart();
	}
	

}
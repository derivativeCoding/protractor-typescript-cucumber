import { by, element, ElementArrayFinder, ElementFinder } from "protractor";
import { threadId } from "worker_threads";

export class CheckoutPage{
    searchBar:ElementFinder;
    searchBtn:ElementFinder;
    add2Cart:ElementArrayFinder;
    productAddedMsg:ElementArrayFinder;
    topSellerTab:ElementFinder;
    proceed2CheckOutBtn:ElementFinder;
    listView:ElementFinder;
    constructor(){
        this.searchBar=element(by.xpath("//input[@id='search_query_top']"));
        this.add2Cart=element.all(by.xpath("//li//span[contains(text(),'Add to cart')]"));
        this.productAddedMsg=element.all(by.xpath("//div[@id='layer_cart']//h2"));
        this.searchBtn=element(by.xpath("//button[@name='submit_search']"));
        this.topSellerTab=element(by.xpath("//h4[@class='title_block']//a"));
        this.proceed2CheckOutBtn=element(by.xpath("//div[@class='button-container']/a/span"));
        this.listView=element(by.xpath("//li[@id='list']/a/i"));
    }
}
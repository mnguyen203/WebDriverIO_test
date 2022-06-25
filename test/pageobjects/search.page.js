import Page from './page';

class SearchPage extends Page{

    get searchInput() {
        return $('input[id="gh-ac"]');
    }

    get searchBtn() {
        return $('#gh-btn');
    }

   async searchLaptopitems(item) {
       await this.searchInput.setValue(item);
       await this.searchBtn.click();
    }

    open () {
        return super.open('https://www.ebay.com/');
    }
}

export default new SearchPage();
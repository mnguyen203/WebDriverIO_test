import SearchPage from '../pageobjects/search.page';

describe('Search tool', ()=>  {
    it('should input the items to searchbox', async () => {
        await SearchPage.open();
        await SearchPage.searchLaptopitems('Laptop');
        //console.log(SearchPage.inputSearch).getText();

    });
});

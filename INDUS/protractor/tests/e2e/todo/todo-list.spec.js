var fs = require('fs');

describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        browser.get('http://127.0.0.1:8080');

        var todoList = element.all(by.repeater('todo in todoList.todos'));

        expect(todoList.count()).toEqual(2);

        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);

        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'final.png');
        });
    });
});

function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

(function (global) {
    var dc = {};

    // Список коротких имен категорий
    var categoryShortNames = ["Lunch", "Dinner", "Sushi", "Desserts", "Drinks"];

    // Загрузка случайной категории при клике на Specials
    dc.loadRandomCategory = function () {
        // Получаем случайный индекс категории
        var randomIndex = Math.floor(Math.random() * categoryShortNames.length);
        var randomCategory = categoryShortNames[randomIndex];

        // Формируем путь к сниппету соответствующей категории
        var snippetUrl = "snippets/" + randomCategory + "-menu.html";

        // Загружаем и вставляем контент категории
        insertHtml("#main-content", snippetUrl);
    };

    // Вставка HTML-контента на страницу
    function insertHtml(selector, url) {
        $ajaxUtils.sendGetRequest(url, function (responseText) {
            document.querySelector(selector).innerHTML = responseText;
        }, false);
    }

    global.$dc = dc;
})(window);

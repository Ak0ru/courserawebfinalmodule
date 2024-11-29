(function (global) {
    var dc = {};

    // ������ �������� ���� ���������
    var categoryShortNames = ["Lunch", "Dinner", "Sushi", "Desserts", "Drinks"];

    // �������� ��������� ��������� ��� ����� �� Specials
    dc.loadRandomCategory = function () {
        // �������� ��������� ������ ���������
        var randomIndex = Math.floor(Math.random() * categoryShortNames.length);
        var randomCategory = categoryShortNames[randomIndex];

        // ��������� ���� � �������� ��������������� ���������
        var snippetUrl = "snippets/" + randomCategory + "-menu.html";

        // ��������� � ��������� ������� ���������
        insertHtml("#main-content", snippetUrl);
    };

    // ������� HTML-�������� �� ��������
    function insertHtml(selector, url) {
        $ajaxUtils.sendGetRequest(url, function (responseText) {
            document.querySelector(selector).innerHTML = responseText;
        }, false);
    }

    global.$dc = dc;
})(window);

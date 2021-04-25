// 仿照jQuery的$.ajax()

var $ = {
    ajax: function (options) {
        var url = options.url;
        var type = options.type;
        var dataType = options.dataType;
        //判断是否同源（协议，域名，端口号）
        //获取目标url的域
        var targetProtocol = ""; //目标接口的协议
        var targetHost = ""; //目标接口的host，host是包涵域名和端口的

        //如果url不带http，那么访问的一定是相对路径，相对路径一定是同源的。
        if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
            var targetUrl = new URL(url);
            targetProtocol = targetUrl.protocol;
            targetHost = targetUrl.host;
        } else {
            targetProtocol = location.protocol;
            targetHost = location.host;
        }
        //首先判断是否为jsonp，因为不是jsonp不用做其他的判断，直接发送ajax
        if (dataType == "jsonp") {
            //要看是否同源
            if (location.protocol == targetProtocol && location.host == targetHost) { 
                //表示同源
                //此处省略。因为同源，jsonp会当做普通的ajax做请求
            } else { //不同源，跨域
                //随机生成一个callback
                var callback = "cb" + Math.floor(Math.random() * 1000000);
                //给window上添加一个方法
                window[callback] = options.success;
                //生成script标签。
                var script = document.createElement("script");
                if (url.indexOf("?") > 0) { //表示已经有参数了
                    script.src = url + "&callback=" + callback;
                } else { //表示没有参数
                    script.src = url + "?callback=" + callback;
                }
                script.id = callback;
                document.head.appendChild(script);
            }
        }
    }
}

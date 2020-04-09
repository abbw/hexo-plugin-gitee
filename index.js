hexo.extend.filter.register('after_post_render', function(data) {
	var giteementConfig = hexo.config.giteement;
	if (giteementConfig) {
		data.content = data.content + '\n<div id="giteement-ctn"></div>\n<script src="https://abbw.ml/js/crc32.js"></script><link rel="stylesheet" href="https://abbw.ml/css/gitee.css"><script src="https://abbw.ml/js/gitee.js"></script>';
		var str = `
		<script>
		var giteementConfig = ${JSON.stringify(giteementConfig)};
	    giteementConfig.id = crc32(location.pathname);
        var giteement = new Giteement(giteementConfig);
	    giteement.render("giteement-ctn");
	    </script>`;
		data.content = data.content + '\n' + str;
	}
	return data;
});

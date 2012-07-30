module("baidu.lang.decontrol");

test('guid', function() {
	var m = window[baidu.guid];
	m._maps_id['a'] = {};
	baidu.lang.decontrol('a');
	equals(m._maps_id['a'], undefined, 'obj is deleted');
});
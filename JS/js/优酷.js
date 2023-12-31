var rule = {
    title:'优酷',
    host:'https://www.%79%6f%75%6b%75.com',
    homeUrl:'',
    searchUrl:'https://search.%79%6f%75%6b%75.com/api/search?pg=fypage&keyword=**',
    searchable:2,
    quickSearch:1,
    filterable:1,
    multi:1,
    // 分类链接fypage参数支持1个()表达式
    url:'/category/data?optionRefresh=1&pageNo=fypage&params=fyfilter',
    // url:'/category/data?pageNo=fypage&params=fyfilter',
    // filter_url:'&u=fyarea&s=fyyear={{fl.order}}',
    // filter_url:'{{fl|safe}}',
    filter_url:'{{fl}}',
    // filter_url:'{{fl}}',
    // filter_url:'{{fl}}',
    filter:{"电视剧": [{"key": "main_area", "name": "全部地区", "value": [{"n": "全部地区", "v": ""}, {"n": "内地剧", "v": "中国内地"}, {"n": "港剧", "v": "中国香港"}, {"n": "台剧", "v": "中国台湾"}, {"n": "韩剧", "v": "韩国"}, {"n": "美剧", "v": "美国"}, {"n": "英剧", "v": "英国"}, {"n": "日剧", "v": "日本"}, {"n": "泰剧", "v": "泰国"}]}, {"key": "tags", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "青春", "v": "青春"}, {"n": "古装", "v": "古装"}, {"n": "爱情", "v": "爱情"}, {"n": "都市", "v": "都市"}, {"n": "喜剧", "v": "喜剧,搞笑"}, {"n": "战争", "v": "战争"}, {"n": "军旅", "v": "军旅"}, {"n": "谍战", "v": "谍战"}, {"n": "偶像", "v": "偶像"}, {"n": "警匪", "v": "警匪"}, {"n": "冒险", "v": "冒险"}, {"n": "穿越", "v": "穿越"}, {"n": "仙侠", "v": "仙侠"}, {"n": "武侠", "v": "武侠"}, {"n": "悬疑", "v": "悬疑"}, {"n": "罪案", "v": "罪案"}, {"n": "家庭", "v": "家庭"}, {"n": "历史", "v": "历史"}, {"n": "年代", "v": "年代"}, {"n": "农村", "v": "农村"}]}, {"key": "year", "name": "全部年份", "value": [{"n": "全部年份", "v": ""}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {"n": "2015", "v": "2015"}, {"n": "2014-2011", "v": "2011-2014"}, {"n": "更早", "v": "-2010"}]}, {"key": "status", "name": "全部规格", "value": [{"n": "全部规格", "v": ""}, {"n": "全网独播", "v": "1"}, {"n": "优酷自制", "v": "2"}, {"n": "已完结", "v": "3"}, {"n": "即将上线", "v": "4"}, {"n": "短剧", "v": "5"}]}, {"key": "pay_type", "name": "付费类型", "value": [{"n": "付费类型", "v": ""}, {"n": "免费", "v": "0"}, {"n": "VIP", "v": "2"}, {"n": "付费", "v": "1"}]}, {"key": "sort", "name": "综合排序", "value": [{"n": "综合排序", "v": ""}, {"n": "热度最高", "v": "7"}, {"n": "最新上线", "v": "1"}, {"n": "最好评", "v": "3"}, {"n": "最多播放", "v": "2"}]}], "电影": [{"key": "main_area", "name": "全部地区", "value": [{"n": "全部地区", "v": ""}, {"n": "内地", "v": "中国内地"}, {"n": "中国香港", "v": "中国香港"}, {"n": "中国台湾", "v": "中国台湾"}, {"n": "美国", "v": "美国"}, {"n": "印度", "v": "印度"}, {"n": "日韩", "v": "韩国,日本"}, {"n": "泰国", "v": "泰国"}, {"n": "欧洲", "v": "欧洲"}]}, {"key": "tags", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "喜剧", "v": "喜剧,搞笑"}, {"n": "动作", "v": "动作"}, {"n": "怪兽", "v": "怪兽"}, {"n": "战争", "v": "战争"}, {"n": "爱情", "v": "爱情"}, {"n": "悬疑", "v": "悬疑"}, {"n": "武侠", "v": "武侠"}, {"n": "奇幻", "v": "奇幻"}, {"n": "科幻", "v": "科幻"}, {"n": "冒险", "v": "冒险"}, {"n": "警匪", "v": "警匪"}, {"n": "动画", "v": "动画"}, {"n": "惊悚", "v": "惊悚"}, {"n": "犯罪", "v": "犯罪"}, {"n": "恐怖", "v": "恐怖"}, {"n": "剧情", "v": "剧情"}, {"n": "历史", "v": "历史"}, {"n": "纪录片", "v": "纪录片"}, {"n": "传记", "v": "传记"}, {"n": "歌舞", "v": "歌舞"}, {"n": "短片", "v": "短片"}, {"n": "其他", "v": "其他"}]}, {"key": "source", "name": "全部规格", "value": [{"n": "全部规格", "v": ""}, {"n": "院线", "v": "1"}, {"n": "网络电影", "v": "0"}, {"n": "独播", "v": "2"}, {"n": "高清修复", "v": "3"}, {"n": "1080P", "v": "4"}]}, {"key": "year", "name": "全部年份", "value": [{"n": "全部年份", "v": ""}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {"n": "2015", "v": "2015"}, {"n": "2014-2010", "v": "2010-2014"}, {"n": "2009-2000", "v": "2000-2009"}, {"n": "90年代", "v": "1990-1999"}, {"n": "80年代", "v": "1980-1989"}, {"n": "70年代", "v": "1970-1979"}, {"n": "更早", "v": "-1969"}]}, {"key": "pay_type", "name": "付费类型", "value": [{"n": "付费类型", "v": ""}, {"n": "免费", "v": "0"}, {"n": "会员", "v": "2"}, {"n": "点播", "v": "1"}]}, {"key": "sort", "name": "综合排序", "value": [{"n": "综合排序", "v": ""}, {"n": "热度最高", "v": "7"}, {"n": "最多播放", "v": "2"}, {"n": "最新上线", "v": "1"}, {"n": "最好评", "v": "3"}]}, {"key": "tag_label_name", "name": "为你推荐", "value": [{"n": "为你推荐", "v": ""}, {"n": "高分必看", "v": "高分必看"}, {"n": "卖座电影", "v": "卖座电影"}, {"n": "小说改编", "v": "小说改编"}, {"n": "铁血硬汉", "v": "铁血硬汉"}, {"n": "视效大片", "v": "视效大片"}, {"n": "漫画改编", "v": "漫画改编"}, {"n": "绝地求生", "v": "绝地求生"}, {"n": "真人真事改编", "v": "真人真事改编"}, {"n": "范伟", "v": "范伟"}, {"n": "火爆枪战", "v": "火爆枪战"}, {"n": "影史经典", "v": "影史经典"}, {"n": "拯救世界", "v": "拯救世界"}, {"n": "万茜", "v": "万茜"}, {"n": "马思纯", "v": "马思纯"}, {"n": "王俊凯", "v": "王俊凯"}, {"n": "豪华阵容", "v": "豪华阵容"}, {"n": "李玉", "v": "李玉"}, {"n": "无厘头喜剧", "v": "无厘头喜剧"}, {"n": "超能力", "v": "超能力"}, {"n": "欢喜搭档", "v": "欢喜搭档"}]}], "综艺": [{"key": "main_area", "name": "全部地区", "value": [{"n": "全部地区", "v": ""}, {"n": "内地", "v": "中国内地"}, {"n": "中国台湾", "v": "中国台湾"}, {"n": "美国", "v": "美国"}, {"n": "英国", "v": "英国"}]}, {"key": "tags", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "偶像", "v": "偶像"}, {"n": "舞蹈", "v": "舞蹈"}, {"n": "音乐", "v": "音乐"}, {"n": "情感", "v": "情感"}, {"n": "喜剧", "v": "喜剧,搞笑"}, {"n": "体育", "v": "体育"}, {"n": "游戏", "v": "游戏"}, {"n": "相声", "v": "相声"}, {"n": "婚恋", "v": "婚恋"}, {"n": "时尚", "v": "时尚"}, {"n": "晚会", "v": "晚会"}, {"n": "明星访谈", "v": "明星访谈"}, {"n": "亲子", "v": "亲子"}, {"n": "生活", "v": "生活"}, {"n": "文化", "v": "文化"}, {"n": "美食", "v": "美食"}, {"n": "旅游", "v": "旅游"}, {"n": "益智", "v": "益智"}]}, {"key": "year", "name": "全部年份", "value": [{"n": "全部年份", "v": ""}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {"n": "2015", "v": "2015"}, {"n": "2014-2011", "v": "2011-2014"}, {"n": "更早", "v": "-2010"}]}, {"key": "status", "name": "全部规格", "value": [{"n": "全部规格", "v": ""}, {"n": "优酷自制", "v": "2"}, {"n": "优酷独播", "v": "1"}, {"n": "电视综艺", "v": "6"}, {"n": "已完结", "v": "3"}, {"n": "即将上线", "v": "4"}]}, {"key": "pay_type", "name": "付费类型", "value": [{"n": "付费类型", "v": ""}, {"n": "免费", "v": "0"}, {"n": "VIP", "v": "2"}, {"n": "付费", "v": "1"}]}, {"key": "sort", "name": "热度最高", "value": [{"n": "热度最高", "v": ""}, {"n": "最新更新", "v": "8"}, {"n": "最近开播", "v": "9"}, {"n": "最多评论", "v": "4"}]}, {"key": "tag_label_name", "name": "为你推荐", "value": [{"n": "为你推荐", "v": ""}, {"n": "舞台竞演", "v": "舞台竞演"}, {"n": "刘雨昕", "v": "刘雨昕"}, {"n": "王一博", "v": "王一博"}, {"n": "韩庚", "v": "韩庚"}, {"n": "李承铉", "v": "李承铉"}, {"n": "户外竞技", "v": "户外竞技"}, {"n": "浙江卫视", "v": "浙江卫视"}, {"n": "东方卫视", "v": "东方卫视"}, {"n": "岳云鹏", "v": "岳云鹏"}, {"n": "王迅", "v": "王迅"}, {"n": "杨迪", "v": "杨迪"}, {"n": "杨超越", "v": "杨超越"}, {"n": "黄明昊", "v": "黄明昊"}, {"n": "郭京飞", "v": "郭京飞"}, {"n": "欧阳娜娜", "v": "欧阳娜娜"}, {"n": "德云社", "v": "德云社"}, {"n": "郑恺", "v": "郑恺"}, {"n": "华少", "v": "华少"}, {"n": "郭德纲", "v": "郭德纲"}, {"n": "贾玲", "v": "贾玲"}]}], "动漫": [{"key": "sort", "name": "综合排序", "value": [{"n": "综合排序", "v": ""}, {"n": "最多播放", "v": "2"}, {"n": "最好评", "v": "3"}, {"n": "最新上线", "v": "1"}]}, {"key": "main_area", "name": "全部地区", "value": [{"n": "全部地区", "v": ""}, {"n": "内地", "v": "中国内地"}, {"n": "日本", "v": "日本"}, {"n": "美国", "v": "美国"}, {"n": "中国台湾", "v": "中国台湾"}, {"n": "其他", "v": "其他"}]}, {"key": "tags", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "热血", "v": "热血,战斗"}, {"n": "励志", "v": "励志"}, {"n": "玄幻", "v": "玄幻"}, {"n": "古风", "v": "历史,古风"}, {"n": "恋爱", "v": "恋爱"}, {"n": "青春", "v": "青春"}, {"n": "校园", "v": "校园"}, {"n": "运动", "v": "社团,运动"}, {"n": "科幻", "v": "科幻"}, {"n": "冒险", "v": "冒险"}, {"n": "魔法", "v": "魔法"}, {"n": "日常", "v": "日常"}, {"n": "治愈", "v": "治愈"}, {"n": "机战", "v": "机战"}, {"n": "推理", "v": "推理"}, {"n": "都市", "v": "都市"}, {"n": "小说改", "v": "小说改编"}, {"n": "游戏改", "v": "游戏改编"}, {"n": "漫画改", "v": "漫画改编"}, {"n": "动态漫", "v": "动态漫画"}, {"n": "特摄", "v": "特摄"}, {"n": "布袋戏", "v": "布袋戏"}]}, {"key": "completed", "name": "连载情况", "value": [{"n": "连载情况", "v": ""}, {"n": "更新中", "v": "0"}, {"n": "已完结", "v": "1"}]}, {"key": "pay_type", "name": "付费类型", "value": [{"n": "付费类型", "v": ""}, {"n": "免费", "v": "0"}, {"n": "会员", "v": "2"}]}, {"key": "year", "name": "全部年份", "value": [{"n": "全部年份", "v": ""}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {"n": "2015", "v": "2015"}, {"n": "2014", "v": "2014"}, {"n": "2013", "v": "2013"}, {"n": "2012", "v": "2012"}, {"n": "2011", "v": "2011"}, {"n": "00年代", "v": "2000-2010"}, {"n": "更早", "v": "-1999"}]}, {"key": "tag_label_name", "name": "为你推荐", "value": [{"n": "为你推荐", "v": ""}, {"n": "3D动画", "v": "3D动画"}, {"n": "搞笑日常", "v": "搞笑日常"}, {"n": "大男主", "v": "大男主"}, {"n": "高燃", "v": "高燃"}, {"n": "萌系", "v": "萌系"}, {"n": "修真", "v": "修真"}, {"n": "怀旧", "v": "怀旧"}, {"n": "超级英雄", "v": "超级英雄"}, {"n": "水树奈奈", "v": "水树奈奈"}, {"n": "张杰", "v": "张杰"}, {"n": "石田彰", "v": "石田彰"}, {"n": "守护地球", "v": "守护地球"}, {"n": "圆谷", "v": "圆谷"}, {"n": "山新", "v": "山新"}, {"n": "复仇", "v": "复仇"}, {"n": "废柴逆袭", "v": "废柴逆袭"}, {"n": "侦探", "v": "侦探"}, {"n": "无厘头", "v": "无厘头"}, {"n": "青山刚昌", "v": "青山刚昌"}, {"n": "悬疑", "v": "悬疑"}]}], "少儿": [{"key": "main_area", "name": "全部地区", "value": [{"n": "全部地区", "v": ""}, {"n": "中国", "v": "中国,香港,台湾"}, {"n": "美国", "v": "美国"}, {"n": "英国", "v": "英国"}, {"n": "其他国家", "v": "其他"}]}, {"key": "show_label_type", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "动画", "v": "动画"}, {"n": "儿歌", "v": "儿歌"}, {"n": "玩具", "v": "玩具"}, {"n": "动画电影", "v": "电影"}, {"n": "绘本故事", "v": "绘本故事"}, {"n": "真人", "v": "真人"}, {"n": "少儿综艺", "v": "少儿综艺"}, {"n": "亲子", "v": "亲子"}, {"n": "探索纪实", "v": "探索纪实"}, {"n": "音频", "v": "音频"}]}, {"key": "child_tags", "name": "全部分类", "value": [{"n": "全部分类", "v": ""}, {"n": "益智", "v": "益智"}, {"n": "冒险", "v": "冒险"}, {"n": "幽默", "v": "幽默"}, {"n": "机甲", "v": "机甲"}, {"n": "公主魔法", "v": "公主,魔法"}, {"n": "交通工具", "v": "交通工具"}, {"n": "恐龙", "v": "恐龙"}, {"n": "动物", "v": "动物"}, {"n": "励志", "v": "励志"}, {"n": "友情", "v": "友情"}, {"n": "战斗", "v": "战斗"}, {"n": "校园", "v": "校园"}, {"n": "正义", "v": "正义"}, {"n": "热血", "v": "热血"}, {"n": "科幻", "v": "科幻"}, {"n": "童话", "v": "童话"}, {"n": "运动", "v": "运动"}, {"n": "专注力", "v": "专注力"}, {"n": "创造力", "v": "创造力"}, {"n": "想象力", "v": "想象力"}, {"n": "科普", "v": "科普"}, {"n": "情商", "v": "情商"}, {"n": "思维逻辑", "v": "思维逻辑"}, {"n": "兴趣培养", "v": "兴趣培养"}, {"n": "语文", "v": "语文"}, {"n": "英语", "v": "英语"}, {"n": "数学", "v": "数学"}, {"n": "课程辅导", "v": "课程辅导"}]}, {"key": "age", "name": "全部年龄", "value": [{"n": "全部年龄", "v": ""}, {"n": "0-2岁", "v": "0-2"}, {"n": "3-4岁", "v": "3-4"}, {"n": "5-6岁", "v": "5-6"}, {"n": "7岁以上", "v": "7-"}]}, {"key": "pay_type", "name": "付费类型", "value": [{"n": "付费类型", "v": ""}, {"n": "免费", "v": "0"}, {"n": "付费", "v": "1"}, {"n": "VIP", "v": "2"}]}, {"key": "sort", "name": "综合排序", "value": [{"n": "综合排序", "v": ""}, {"n": "最新上线", "v": "1"}, {"n": "最多播放", "v": "2"}, {"n": "最多评论", "v": "4"}, {"n": "最多收藏", "v": "5"}]}], "纪录片": [{"key": "tags", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "美食", "v": "美食"}, {"n": "自然", "v": "自然"}, {"n": "历史", "v": "历史"}, {"n": "探险", "v": "探险"}, {"n": "军事", "v": "军事"}, {"n": "人物", "v": "人物"}, {"n": "宇宙", "v": "宇宙"}, {"n": "刑侦", "v": "刑侦"}, {"n": "社会", "v": "社会"}, {"n": "科技", "v": "科技"}, {"n": "旅游", "v": "旅游"}]}, {"key": "company", "name": "全部出品", "value": [{"n": "全部出品", "v": ""}, {"n": "BBC", "v": "bbc,british"}, {"n": "央视", "v": "央视,中央电视台,cctv,中国广播电影电视节目交易中心"}, {"n": "国家地理", "v": "国家地理"}, {"n": "Love Nature", "v": "love nature"}, {"n": "LGI", "v": "looking"}, {"n": "A&E", "v": "ae"}, {"n": "OTF", "v": "fence"}]}, {"key": "year", "name": "全部年份", "value": [{"n": "全部年份", "v": ""}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {"n": "2015", "v": "2015"}, {"n": "2014-2011", "v": "2011-2014"}, {"n": "更早", "v": "-2010"}]}, {"key": "pay_type", "name": "付费类型", "value": [{"n": "付费类型", "v": ""}, {"n": "免费", "v": "0"}, {"n": "会员", "v": "2"}]}, {"key": "sort", "name": "热度最高", "value": [{"n": "热度最高", "v": ""}, {"n": "综合排序", "v": "0"}, {"n": "最新上线", "v": "1"}, {"n": "最好评", "v": "3"}, {"n": "最多收藏", "v": "5"}]}], "文化": [{"key": "tags", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "谈话", "v": "谈话"}, {"n": "脱口秀", "v": "脱口秀"}, {"n": "访谈", "v": "访谈"}, {"n": "讲座论坛", "v": "讲座论坛"}, {"n": "戏曲曲艺", "v": "戏曲,曲艺"}, {"n": "舞台剧", "v": "舞台剧"}, {"n": "文学", "v": "文学"}, {"n": "国学", "v": "国学"}, {"n": "艺术", "v": "艺术"}, {"n": "培训课程", "v": "培训课程"}, {"n": "有声书", "v": "有声书"}]}, {"key": "people", "name": "文化大咖", "value": [{"n": "文化大咖", "v": ""}, {"n": "窦文涛", "v": "窦文涛"}, {"n": "马未都", "v": "马未都"}, {"n": "白岩松", "v": "白岩松"}, {"n": "梅毅", "v": "梅毅"}, {"n": "陈鲁豫", "v": "陈鲁豫"}, {"n": "樊登", "v": "樊登"}, {"n": "罗振宇", "v": "罗振宇"}, {"n": "蒋方舟", "v": "蒋方舟"}, {"n": "其他", "v": "其他"}]}, {"key": "year", "name": "全部年份", "value": [{"n": "全部年份", "v": ""}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {"n": "2015", "v": "2015"}, {"n": "2014-2011", "v": "2011-2014"}, {"n": "更早", "v": "-2010"}]}, {"key": "pay_type", "name": "付费类型", "value": [{"n": "付费类型", "v": ""}, {"n": "免费", "v": "0"}, {"n": "会员", "v": "2"}]}, {"key": "sort", "name": "热度最高", "value": [{"n": "热度最高", "v": ""}, {"n": "综合排序", "v": "0"}, {"n": "最新上线", "v": "1"}, {"n": "最好评", "v": "3"}, {"n": "最多收藏", "v": "5"}]}], "亲子": [{"key": "qinzi_genre", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "孕产", "v": "孕产"}, {"n": "育儿知识", "v": "育儿知识,育儿达人,育儿专家,爸爸育儿,隔代育儿,育儿明星"}, {"n": "好物种草", "v": "母婴用品,测评,母婴用品种草"}, {"n": "美食", "v": "儿童美食,辅食,孕期饮食"}, {"n": "手工DIY", "v": "手工diy"}, {"n": "教育观念", "v": "教育观念"}, {"n": "亲子综艺", "v": "亲子综艺"}, {"n": "亲子互动", "v": "亲子旅游,亲子游戏,亲子阅读,玩具,早教,启蒙"}, {"n": "萌娃", "v": "萌娃"}, {"n": "搞笑", "v": "搞笑"}, {"n": "美妆", "v": "美妆"}]}, {"key": "pregnancy_stage", "name": "全部阶段", "value": [{"n": "全部阶段", "v": ""}, {"n": "备孕", "v": "备孕"}, {"n": "孕早期", "v": "孕早"}, {"n": "孕中期", "v": "孕中"}, {"n": "孕晚期", "v": "孕晚"}]}, {"key": "show_label_baby_age", "name": "全部分龄", "value": [{"n": "全部分龄", "v": ""}, {"n": "0-1岁", "v": "0-1"}, {"n": "1-3岁", "v": "1-3"}, {"n": "3-6岁", "v": "3-6"}, {"n": "6岁+", "v": "6-"}]}, {"key": "pay_type", "name": "全部", "value": [{"n": "全部", "v": ""}, {"n": "免费", "v": "0"}, {"n": "会员免费", "v": "2"}]}, {"key": "sort", "name": "热度最高", "value": [{"n": "热度最高", "v": ""}, {"n": "综合排序", "v": "0"}, {"n": "最新上线", "v": "1"}, {"n": "最多播放", "v": "2"}, {"n": "最多评论", "v": "3"}, {"n": "最多收藏", "v": "5"}]}], "教育": [{"key": "tags", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "公开课", "v": "公开课"}, {"n": "名人名嘴", "v": "名人名嘴"}, {"n": "文化", "v": "文化"}, {"n": "艺术", "v": "艺术"}, {"n": "伦理社会", "v": "伦理社会"}, {"n": "理工", "v": "理工"}, {"n": "历史", "v": "历史"}, {"n": "心理学", "v": "心理学"}, {"n": "经济", "v": "经济"}, {"n": "管理学", "v": "管理学"}, {"n": "外语", "v": "外语"}, {"n": "法律", "v": "法律"}, {"n": "计算机", "v": "计算机"}, {"n": "哲学", "v": "哲学"}, {"n": "职业培训", "v": "职业培训"}, {"n": "家庭教育", "v": "家庭教育"}]}, {"key": "company", "name": "全部出品", "value": [{"n": "全部出品", "v": ""}, {"n": "TED", "v": "ted"}, {"n": "耶鲁大学", "v": "耶鲁大学"}, {"n": "哈佛大学", "v": "哈佛大学"}, {"n": "斯坦福大学", "v": "斯坦福大学"}, {"n": "麻省理工学院", "v": "麻省理工学院"}]}, {"key": "pay_type", "name": "全部节目", "value": [{"n": "全部节目", "v": ""}, {"n": "免费", "v": "0"}, {"n": "付费", "v": "1"}, {"n": "VIP", "v": "2"}]}, {"key": "sort", "name": "综合排序", "value": [{"n": "综合排序", "v": ""}, {"n": "最多播放", "v": "2"}, {"n": "最多收藏", "v": "5"}, {"n": "最好评", "v": "3"}, {"n": "最新上线", "v": "1"}]}], "搞笑": [{"key": "division", "name": "全部专区", "value": [{"n": "全部专区", "v": ""}, {"n": "1080P", "v": "3"}, {"n": "独播", "v": "6"}, {"n": "免费", "v": "5"}]}, {"key": "sort", "name": "综合排序", "value": [{"n": "综合排序", "v": ""}, {"n": "最多播放", "v": "2"}, {"n": "最好评", "v": "3"}, {"n": "最新上线", "v": "1"}]}], "生活": [{"key": "division", "name": "全部专区", "value": [{"n": "全部专区", "v": ""}, {"n": "1080P", "v": "3"}, {"n": "独播", "v": "6"}, {"n": "VIP", "v": "4"}, {"n": "免费", "v": "5"}]}, {"key": "sort", "name": "综合排序", "value": [{"n": "综合排序", "v": ""}, {"n": "最多播放", "v": "2"}, {"n": "最好评", "v": "3"}, {"n": "最新上线", "v": "1"}]}], "体育": [{"key": "division", "name": "全部专区", "value": [{"n": "全部专区", "v": ""}, {"n": "1080P", "v": "3"}, {"n": "独播", "v": "6"}, {"n": "VIP", "v": "4"}, {"n": "免费", "v": "5"}]}, {"key": "tags", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "篮球", "v": "篮球"}, {"n": "足球", "v": "足球"}, {"n": "台球", "v": "台球"}, {"n": "CBA", "v": "CBA"}, {"n": "钓鱼", "v": "钓鱼"}]}, {"key": "sort", "name": "综合排序", "value": [{"n": "综合排序", "v": ""}, {"n": "最多播放", "v": "2"}, {"n": "最好评", "v": "3"}, {"n": "最新上线", "v": "1"}]}], "音乐": [{"key": "division", "name": "全部专区", "value": [{"n": "全部专区", "v": ""}, {"n": "1080P", "v": "3"}, {"n": "独播", "v": "6"}, {"n": "免费", "v": "5"}]}, {"key": "main_area", "name": "全部地区", "value": [{"n": "全部地区", "v": ""}, {"n": "中国", "v": "中国"}, {"n": "中国台湾", "v": "中国台湾"}, {"n": "中国香港", "v": "中国香港"}, {"n": "美国", "v": "美国"}, {"n": "其他", "v": "其他"}]}, {"key": "music_show_type", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "演唱会", "v": "演唱会"}, {"n": "live现场", "v": "live现场"}, {"n": "颁奖典礼", "v": "颁奖典礼"}, {"n": "舞蹈", "v": "舞蹈"}, {"n": "影视原声", "v": "影视原声"}, {"n": "音乐达人", "v": "音乐达人"}, {"n": "音乐教学", "v": "音乐教学"}, {"n": "音乐纪录片", "v": "音乐纪录片"}, {"n": "音乐mv", "v": "音乐mv"}, {"n": "音乐自制", "v": "音乐自制"}]}, {"key": "sort", "name": "综合排序", "value": [{"n": "综合排序", "v": ""}, {"n": "最多播放", "v": "2"}, {"n": "最好评", "v": "3"}, {"n": "最新上线", "v": "1"}]}], "游戏": [{"key": "division", "name": "全部专区", "value": [{"n": "全部专区", "v": ""}, {"n": "1080P", "v": "3"}, {"n": "独播", "v": "6"}, {"n": "VIP", "v": "4"}, {"n": "免费", "v": "5"}]}, {"key": "game_brand", "name": "全部节目", "value": [{"n": "全部节目", "v": ""}, {"n": "王者荣耀", "v": "王者荣耀"}, {"n": "和平精英", "v": "和平精英"}, {"n": "绝地求生", "v": "绝地求生"}, {"n": "迷你世界", "v": "迷你世界"}, {"n": "我的世界", "v": "我的世界"}, {"n": "植物大战僵尸", "v": "植物大战僵尸"}, {"n": "方舟生存进化", "v": "方舟生存进化"}, {"n": "第五人格", "v": "第五人格"}, {"n": "猫和老鼠", "v": "猫和老鼠"}, {"n": "香肠派对", "v": "香肠派对"}, {"n": "穿越火线", "v": "穿越火线"}, {"n": "英雄联盟", "v": "英雄联盟"}]}, {"key": "tags", "name": "全部类型", "value": [{"n": "全部类型", "v": ""}, {"n": "资讯", "v": "资讯"}, {"n": "解说", "v": "解说"}, {"n": "主播", "v": "主播"}, {"n": "沙盒", "v": "沙盒"}, {"n": "益智", "v": "益智"}, {"n": "生存", "v": "生存"}, {"n": "电子竞技", "v": "电子竞技"}, {"n": "单机主机", "v": "单机主机"}, {"n": "真人秀", "v": "真人秀"}, {"n": "动画", "v": "动画"}, {"n": "盘点", "v": "盘点"}, {"n": "游戏文化", "v": "游戏文化"}, {"n": "游戏节目", "v": "游戏节目"}, {"n": "评测", "v": "评测"}, {"n": "射击", "v": "射击"}, {"n": "策略", "v": "策略"}, {"n": "冒险", "v": "冒险"}, {"n": "即时战略", "v": "即时战略"}, {"n": "卡牌", "v": "卡牌"}, {"n": "角色扮演", "v": "角色>扮演"}]}, {"key": "sort", "name": "综合排序", "value": [{"n": "综合排序", "v": ""}, {"n": "最多播放", "v": "2"}, {"n": "最好评", "v": "3"}, {"n": "最新上线", "v": "1"}]}]},
    headers:{
        'User-Agent':'PC_UA',
        'Cookie':'cna=VvNvGX3e0ywCAavVEXlnA2bg; __ysuid=1626676228345Rl1; __ayft=1652434048647; __arycid=dm-1-00; __arcms=dm-1-00; __ayvstp=85; __arpvid=1667204023100cWWdgM-1667204023112; __ayscnt=10; __aypstp=60; isg=BBwcqxvvk3BxkWQGugbLpUSf7TrOlcC_U7GAj_YdfYfvQbzLHqYGT4Hgp6m5TvgX; tfstk=c3JOByYUH20ilVucLOhh0pCtE40lZfGc-PjLHLLfuX7SWNyAiQvkeMBsIw7PWDC..; l=eBQguS-PjdJFGJT-BOfwourza77OSIRA_uPzaNbMiOCPOb1B5UxfW6yHp4T6C3GVhsGJR3rp2umHBeYBqQd-nxvOF8qmSVDmn',
    },
    timeout:5000,
    class_name:'电视剧&电影&综艺&动漫&少儿&纪录片&亲子',
    class_url:'电视剧&电影&综艺&动漫&少儿&纪录片&亲子',
    limit:20,
    play_parse:true,
    // 手动调用解析请求json的url,此lazy不方便
    // lazy:'js:print(input);fetch_params.headers["user-agent"]=MOBILE_UA;let html=request(input);let rurl=html.match(/window\\.open\\(\'(.*?)\',/)[1];rurl=urlDeal(rurl);input={parse:1,url:rurl};',
    lazy:'js:input={parse:1,jx:1,url:input};',
    // 推荐:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    // 一级:'json:data.filterData.listData;title;img;subTitle;videoLink;summary',
    一级:'',
    一级:'js:let d=[];MY_FL.type=MY_CATE;let fl=stringify(MY_FL);fl=encodeUrl(fl);input=input.split("{")[0]+fl;if(MY_PAGE>1){let old_session=getItem("yk_session_"+MY_CATE,"{}");if(MY_PAGE===2){input=input.replace("optionRefresh=1","session="+encodeUrl(old_session))}else{input=input.replace("optionRefresh=1","session="+encodeUrl(old_session))}}let html=fetch(input,fetch_params);try{html=JSON.parse(html);let lists=html.data.filterData.listData;let session=html.data.filterData.session;session=stringify(session);if(session!==getItem("yk_session_"+MY_CATE,"{}")){setItem("yk_session_"+MY_CATE,session)}lists.forEach(function(it){let vid;if(it.videoLink.includes("id_")){vid=it.videoLink.split("id_")[1].split(".html")[0]}else{vid="msearch:"}d.push({title:it.title,img:it.img,desc:it.summary,url:"https://search.youku.com/api/search?appScene=show_episode&showIds="+vid,content:it.subTitle})})}catch(e){log("一级列表解析发生错误:"+e.message)}setResult(d);',
    二级:'',
    二级:'js:var d=[];VOD={};let html=request(input);let json=JSON.parse(html);if(/keyword/.test(input)){input="https://search.youku.com/api/search?appScene=show_episode&showIds="+json.pageComponentList[0].commonData.showId;json=JSON.parse(fetch(MY_URL,fetch_params))}let video_lists=json.serisesList;var name=json.sourceName;if(/优酷/.test(name)&&video_lists.length>0){let ourl="https://v.youku.com/v_show/id_"+video_lists[0].videoId+".html";let _img=video_lists[0].thumbUrl;let html=fetch(ourl,{headers:{Referer:"https://v.youku.com/","User-Agent":PC_UA}});let json=/__INITIAL_DATA__/.test(html)?html.split("window.__INITIAL_DATA__ =")[1].split(";")[0]:"{}";if(json==="{}"){log("触发了优酷人机验证");VOD.vod_remarks=ourl;VOD.vod_pic=_img;VOD.vod_name=video_lists[0].title.replace(/(\\d+)/g,"");VOD.vod_content="触发了优酷人机验证,本次未获取详情,但不影响播放("+ourl+")"}else{try{json=JSON.parse(json);let data=json.data.data;let data_extra=data.data.extra;let img=data_extra.showImgV;let model=json.data.model;let m=model.detail.data.nodes[0].nodes[0].nodes[0].data;let _type=m.showGenre;let _desc=m.updateInfo||m.subtitle;let JJ=m.desc;let _title=m.introTitle;VOD.vod_pic=img;VOD.vod_name=_title;VOD.vod_type=_type;VOD.vod_remarks=_desc;VOD.vod_content=JJ}catch(e){log("海报渲染发生错误:"+e.message);print(json);VOD.vod_remarks=name}}}if(!/优酷/.test(name)){VOD.vod_content="非自家播放源,暂无视频简介及海报";VOD.vod_remarks=name}function adhead(url){return urlencode(url)}play_url=play_url.replace("&play_url=","&type=json&play_url=");video_lists.forEach(function(it){let url="https://v.youku.com/v_show/id_"+it.videoId+".html";if(it.thumbUrl){d.push({desc:it.showVideoStage?it.showVideoStage.replace("期","集"):it.displayName,pic_url:it.thumbUrl,title:it.title,url:play_url+adhead(url)})}else if(name!=="优酷"){d.push({title:it.displayName?it.displayName:it.title,url:play_url+adhead(it.url)})}});VOD.vod_play_from=name;VOD.vod_play_url=d.map(function(it){return it.title+"$"+it.url}).join("#");',
    搜索:'',
    搜索:'js:var d=[];let html=request(input);let json=JSON.parse(html);json.pageComponentList.forEach(function(it){if(it.hasOwnProperty("commonData")){it=it.commonData;d.push({title:it.titleDTO.displayName,img:it.posterDTO.vThumbUrl,desc:it.stripeBottom,content:it.updateNotice+" "+it.feature,url:"https://search.youku.com/api/search?appScene=show_episode&showIds="+it.showId+"&appCaller=h5"})}});setResult(d);',
}
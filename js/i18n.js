/* ============================================
   白羽大学 Shiroha University - Full i18n System
   Languages: 中文 / English / Русский / 日本語
   ============================================ */
(function() {
  'use strict';

  var I18N = {
    current: localStorage.getItem('ycu-lang') || 'zh',

    dict: {
      zh: {},
      en: {},
      ru: {},
      ja: {}
    },

    // ===== INDEX PAGE =====
    add: function(key, zh, en, ru, ja) {
      this.dict.zh[key] = zh;
      this.dict.en[key] = en;
      this.dict.ru[key] = ru;
      this.dict.ja[key] = ja;
    },

    initDict: function() {
      var d = this.add.bind(this);
      
      // ---- INDEX PAGE ----
      d('hero-uni','白 羽 大 学','SHIROHA UNIVERSITY','EЧЭНСКИЙ УНИВЕРСИТЕТ','ギョウジョウ ダイガク');
      d('hero-title','Shiroha<br>University','Shiroha<br>University','Shiroha<br>University','Shiroha<br>University');
      d('hero-quote','为世界上所有的美好而战。','Fight for all the beauty in this world.','Сражаться за всю красоту этого мира.','この世界のすべての美しさのために戦う。');
      d('hero-btn','探索白大','Explore YCU','Открыть YCU','YCUを探検');
      d('scroll','SCROLL','SCROLL','ПРОКРУТКА','SCROLL');
      
      d('sec-mission-label','创校理念','Our Mission','Наша Миссия','創校理念');
      d('mission-quote','科学负责回答世界如何运行，<br>哲学负责回答人为何存在，<br>而白羽大学负责保存两者之间的空白。','Science answers how the world works.<br>Philosophy answers why we exist.<br>Shiroha University preserves the space between them.','Наука отвечает, как устроен мир.<br>Философия отвечает, зачем мы существуем.<br>Университет Сироха хранит пространство между ними.','科学は世界の仕組みを答え、<br>哲学は人の存在理由を答える。<br>白羽大学はその間の空白を保存する。');
      d('mission-desc','我们建立于一个简单的观察之上：当技术能够解释万物运行的机制，当思辨能够追问存在的意义，夹在两者之间的那片领地却在沉默中萎缩。那里存放着无法被算法归纳的感受、不能被论文穷尽的困惑、以及每一个普通人生命里那些说不清却极其珍贵的瞬间。本校的全部工作，就是在加速度的时代里为这些东西留出一片不受打扰的空间。','We were founded on a simple observation: when technology can explain how everything works, and philosophy can interrogate the meaning of existence, the territory between them shrinks in silence. That territory holds feelings that algorithms cannot classify, perplexities that no thesis can exhaust, and moments in ordinary lives that resist articulation yet remain irreplaceable. Our entire work is to preserve an undisturbed space for such things in an era of acceleration.','Мы основаны на простом наблюдении: когда технологии могут объяснить, как всё работает, а философия может вопрошать смысл существования, территория между ними сжимается в тишине. Эта территория хранит чувства, которые алгоритмы не могут классифицировать, недоумения, которые не исчерпать диссертациями, и моменты обычных жизней, которые не поддаются описанию, но остаются незаменимыми. Вся наша работа — сохранить нетронутое пространство для таких вещей в эпоху ускорения.','我々は一つの素朴な観察の上に設立された。技術があらゆる仕組みを説明できるようになり、思弁が存在の意味を問い続けるとき、その間にある領域は静かに萎縮していく。そこには、アルゴリズムに分類できない感情、いかなる論文も尽くせない困惑、そして名状しがたくともかけがえのない、普通の人々の生の瞬間が眠っている。本校のすべての仕事は、加速する時代の中で、そうしたものたちのために一片の侵されざる空間を残すことである。');
      
      d('sec-about-label','关于白大','About YCU','О YCU','白羽大学について');
      d('about-title','2048年，四个领域的思想者决定做一件反常的事','In 2048, thinkers from four fields decided to do something反常.','В 2048 году мыслители из четырёх областей решили сделать нечто反常ное.','2048年、四つの領域の思想家たちは異常なことを決断した。');
      d('about-subtitle','那一年，人工智能已经能写出及格的诗，量子计算机开始拆解意识的物质基础，深空探测器带回了系外行星的大气样本。也正是在那一年，一座没有"应用前景"的大学在一个被人遗忘的旧址上动了第一锹土。','That year, AI could already write passable poetry, quantum computers had begun dismantling the material basis of consciousness, and deep-space probes had returned atmospheric samples from exoplanets. And it was precisely that year that a university with no "practical prospects" broke ground on a forgotten site.','В том году ИИ уже мог писать сносные стихи, квантовые компьютеры начали разбирать материальную основу сознания, а глубоководные зонды привезли образцы атмосферы экзопланет. И именно в том году университет без "практических перспектив" заложил первый камень на забытом месте.','その年、AIはすでに及第点の詩を書け、量子コンピュータは意識の物質的基盤を分解し始め、深宇宙探査機は系外惑星の大気サンプルを持ち帰っていた。そしてまさにその年、「実用的展望」を持たない大学が、忘れ去られた旧址に最初の鍬を入れた。');
      
      d('card-history-title','创校历史','Founding History','История Основания','創校歴史');
      d('card-history-desc','东方哲学界、俄罗斯科学院、日本文学界与深空科学组织——四方学者在共同的忧虑下汇聚。他们担心的不是技术不够快，而是太快了以后，人类会忘记自己曾经为什么出发。','Scholars from Eastern philosophy, the Russian Academy of Sciences, Japanese literary circles, and deep-space science organizations converged under a shared concern. Their worry was not that technology was too slow, but that in its acceleration, humanity would forget why it had set out in the first place.','Учёные из восточной философии, Российской академии наук, японских литературных кругов и организаций глубокого космоса сошлись под общей тревогой. Их беспокоило не то, что технологии слишком медленны, а то, что в ускорении человечество забудет, зачем оно вообще отправилось в путь.','東洋哲学界、ロシア科学アカデミー、日本文学界、そして深宇宙科学機構——四方の学者たちが共通の憂慮のもとに集った。彼らが危惧したのは技術が遅すぎることではなく、速すぎるがゆえに、人類がかつて何のために出発したのかを忘れてしまうことだった。');
      
      d('card-motto-title','校训','University Motto','Девиз Университета','校訓');
      d('card-motto-desc','为世界上所有的美好而战。九个字，来自一场关于文明脆弱性的漫长讨论。本校创校者们在建校前夕达成的唯一共识是：人类创造出来的最珍贵的东西——一首诗、一段记忆、一个夏天的傍晚——从来不是坚不可摧的。它们需要被守护，有时需要用一生的时间去守护。','Fight for all the beauty in this world. Nine words, born from a long discussion about the fragility of civilization. The only consensus reached by our founders on the eve of establishment: the most precious things humans create—a poem, a memory, a summer evening—were never indestructible. They need to be protected, sometimes with a lifetime of devotion.','Сражаться за всю красоту этого мира. Девять слов, рождённых из долгой дискуссии о хрупкости цивилизации. Единственный консенсус, достигнутый нашими основателями накануне создания: самые драгоценные вещи, созданные людьми — стихотворение, воспоминание, летний вечер — никогда не были нерушимыми. Их нужно защищать, иногда всей жизнью.','この世のすべての美しさのために戦え。九文字。文明の脆弱性をめぐる長い議論から生まれた。創設者たちが建校前夜に達した唯一の合意——人間が創り出す最も貴重なもの——一篇の詩、一片の記憶、ひとつの夏の夕べ——は、決して破壊不能ではない。それは守られねばならない。時に一生をかけて。');
      
      d('card-worldview-title','世界观','Worldview','Мировоззрение','世界観');
      d('card-worldview-desc','我们不相信知识树只有一个方向。在白大，航天工程师和俳句诗人共用一间食堂，量子物理学家在茶道部学习如何等待水烧开。不是因为这样很有趣，而是因为这是完整的文明该有的样子。','We do not believe the tree of knowledge has only one direction. At YCU, aerospace engineers and haiku poets share a cafeteria. Quantum physicists learn how to wait for water to boil in the tea ceremony club. Not because it is amusing, but because this is what a complete civilization should look like.','Мы не верим, что у древа знаний есть только одно направление. В YCU аэрокосмические инженеры и поэты хайку делят одну столовую. Квантовые физики учатся ждать, пока закипит вода, в клубе чайной церемонии. Не потому что это забавно, а потому что так должна выглядеть полная цивилизация.','我々は知の樹に一方向しかないとは信じない。YCUでは、航空宇宙技師と俳人が同じ食堂を使い、量子物理学者が茶道部で湯の沸くのを待つことを学ぶ。面白いからではない。完全な文明とはそういうものであるべきだからだ。');
      
      d('card-shiroha-title','白羽精神','The Shiroha Spirit','Дух Сирохи','白羽精神');
      d('card-shiroha-desc','鸣濑白羽是这所学校做过的最私人的决定。当一个机构选择用一个人的形象来面对世界——而非盾徽、格言或大理石雕像——它在承认一件事：抽象的概念无法回答具体的问题。一盏灯比一句口号更能解释为什么要在冬天坚持下去。这正是白羽的全部意义。','Naruse Shiroha is the most personal decision this university has ever made. When an institution chooses to face the world through the image of a person—rather than a crest, a motto, or a marble statue—it admits one thing: abstract concepts cannot answer concrete questions. A lamp explains why one persists through winter better than any slogan ever could. That is the entire meaning of Shiroha.','Нарусэ Сироха — самое личное решение, которое когда-либо принимал этот университет. Когда учреждение решает встретить мир образом человека — а не гербом, девизом или мраморной статуей — оно признаёт одну вещь: абстрактные понятия не могут ответить на конкретные вопросы. Лампа объясняет, почему стоит держаться зимой, лучше любого лозунга. В этом весь смысл Сирохи.','鳴瀬白羽は、この大学がこれまでに下した最も私的な決断である。ある機構が——紋章でも、標語でも、大理石の彫像でもなく——一人の人間の像をもって世界に向き合うことを選ぶとき、それは一つのことを認めている。抽象的な概念は具体的な問いに答えられない、と。冬を耐え抜く理由を、ランプはどんなスローガンよりもよく説明する。それが白羽のすべての意味である。');
      
      d('sec-campuses-label','三大校区','Three Campuses','Три Кампуса','三キャンパス');
      d('campuses-title','三处地点，一个问题','Three Locations, One Question','Три Места, Один Вопрос','三つの場所、一つの問い');
      d('campuses-subtitle','应天府的雪、莫斯科港的极光、鸟白岛的蝉——自然景观各不相同，但三座校区在追问同一件事：人类的情感与记忆，应该被放置在怎样的空间里？','The snow of Yingtian, the aurora of Moscow Port, the cicadas of Torishiro—each landscape is distinct, yet all three campuses ask the same question: in what kind of space should human emotion and memory be housed?','Снег Интяня, полярное сияние Московского Порта, цикады Торисиро — каждый пейзаж уникален, но все три кампуса задают один вопрос: в каком пространстве должны храниться человеческие эмоции и память?','応天府の雪、モスクワ港のオーロラ、鳥白島の蝉——風景はそれぞれ異なるが、三つのキャンパスは同じ問いを追っている。人間の感情と記憶は、どのような空間に収められるべきか。');
      
      d('campus-yingtian-tag','东方文明 × 俄罗斯建筑','Eastern Civilization × Russian Architecture','Восточная Цивилизация × Русская Архитектура','東洋文明 × ロシア建築');
      d('campus-yingtian-title','应天府校区','Yingtian Campus','Кампус Интянь','応天府キャンパス');
      d('campus-yingtian-desc','苏州园林与诺夫哥罗德建筑的融合。雅罗斯拉夫尔风格的钟楼每日正午鸣响。半地下图书馆藏有基日岛木结构教堂的图纸摹本。','A fusion of Suzhou gardens and Novgorod architecture. The bell tower, in the Yaroslavl style, chimes at noon each day. The semi-underground library holds facsimiles of Kizhi Pogost blueprints.','Слияние садов Сучжоу и новгородской архитектуры. Колокольня в ярославском стиле звонит каждый день в полдень. Полуподземная библиотека хранит копии чертежей Кижского погоста.','蘇州園林とノヴゴロド建築の融合。ヤロスラヴリ様式の鐘楼が毎日正午に鳴り響く。半地下図書館にはキジ島木造教会の図面模写が収蔵されている。');
      
      d('campus-moscow-tag','极夜 × 科学','Polar Night × Science','Полярная Ночь × Наука','極夜 × 科学');
      d('campus-moscow-title','莫斯科港研究区','Moscow Port Research Zone','Исследовательская Зона Московский Порт','モスクワ港研究区');
      d('campus-moscow-desc','北纬六十九度，科拉半岛北岸。与摩尔曼斯克共享同一条冰封海岸线。极夜持续六十八天。研究塔同时容纳深空天线阵列和一间暖黄色阅览室。','69th parallel north, Kola Peninsula. Shares the same frozen coastline as Murmansk. The polar night lasts sixty-eight days. The research tower houses both a deep-space antenna array and a warm-lit reading room.','69-я параллель, Кольский полуостров. Делит ту же замёрзшую береговую линию с Мурманском. Полярная ночь длится шестьдесят восемь дней. Исследовательская башня вмещает и антенную решётку дальнего космоса, и читальный зал с тёплым светом.','北緯六十九度、コラ半島北岸。ムルマンスクと同じ凍てついた海岸線を共有する。極夜は六十八日間続く。研究塔は深宇宙アンテナアレイと暖色の灯る閲覧室を同時に収容する。');
      
      d('campus-torishiro-tag','夏日 × 记忆','Summer × Memory','Лето × Память','夏日 × 記憶');
      d('campus-torishiro-title','鸟白岛校区','Torishiro Island Campus','Кампус Остров Торисиро','鳥白島キャンパス');
      d('campus-torishiro-desc','屋久岛以南九十海里。明治末年铺设的窄轨铁路尽头直接沉入海中。川端康成研究院在此设立——与鹿儿岛大学人文学部保持学术交流。','Ninety nautical miles south of Yakushima. A narrow-gauge railway laid in the late Meiji era terminates directly into the sea. The Kawabata Institute is established here, maintaining academic exchange with Kagoshima University.','В девяноста морских милях к югу от Якусимы. Узкоколейная железная дорога, проложенная в конце эпохи Мэйдзи, заканчивается прямо в море. Здесь расположен Институт Кавабаты, поддерживающий академический обмен с Университетом Кагосимы.','屋久島の南九十海里。明治末年敷設の狭軌鉄道はそのまま海に沈む。川端康成研究院はここに設置され、鹿児島大学人文学部と学術交流を維持している。');
      
      d('sec-academic-label','学术体系','Academic System','Академическая Система','学術体系');
      d('academic-title','在同一个校园里，庄子和齐奥尔科夫斯基可以是同事','On the same campus, Zhuangzi and Tsiolkovsky can be colleagues.','В одном кампусе Чжуан-цзы и Циолковский могут быть коллегами.','同じキャンパスで、荘子とツィオルコフスキーが同僚になりうる。');
      d('academic-subtitle','六个学院，四十七个研究机构。岳麓书院与计算机与数学基础研究所联合开设形式系统与古代逻辑的交叉课程；普希金文学院的一年级生须在首学期逐行读完《叶甫盖尼·奥涅金》；深空研究所要求所有项目申报书附加一项非功利性陈述。','Six colleges, forty-seven research institutes. Yuelu Academy and the Institute of Computer Science co-offer a cross-listed course on formal systems and ancient logic. First-year students at the Pushkin Institute must complete a line-by-line reading of Eugene Onegin in their first semester. The Deep Space Institute requires all project proposals to include a non-utilitarian statement.','Шесть колледжей, сорок семь исследовательских институтов. Академия Юэлу и Институт компьютерных наук совместно предлагают курс по формальным системам и древней логике. Первокурсники Пушкинского института должны завершить построчное чтение "Евгения Онегина" в первом семестре. Институт дальнего космоса требует, чтобы все проектные заявки включали не-утилитарное заявление.','六学院、四十七研究機関。岳麓書院と計算機数学基礎研究所は形式体系と古代論理学の交差科目を共同開講。プーシキン文学院の一年生は初学期に『エヴゲーニイ・オネーギン』の逐行精読を完了しなければならない。深宇宙研究所はすべてのプロジェクト申請書に非功利的陳述の添付を義務づける。');
      
      d('sec-admissions-label','招生','Admissions','Приём','入学');
      d('admissions-title','我们寻找的不是"优秀"','We are not looking for "excellence."','Мы не ищем "превосходства."','我々が探しているのは「優秀」ではない。');
      d('admissions-subtitle','大多数大学在筛选适合它们的人。白羽大学的问题反过来：什么样的人，适合一座以保存人类可能性为使命的学校？','Most universities filter for people who fit them. YCU asks the reverse: what kind of person suits a school whose mission is to preserve human possibility?','Большинство университетов фильтруют людей, которые им подходят. YCU задаёт обратный вопрос: какой человек подходит школе, чья миссия — сохранять человеческую возможность?','ほとんどの大学は自分に合う人を選別する。YCUの問いはその逆だ——人間の可能性を保存することを使命とする学校に、いかなる人間がふさわしいのか。');
      
      d('sec-life-label','校园生活','Campus Life','Студенческая Жизнь','学生生活');
      d('life-title','一年有四季，四季有四问','Four seasons, four questions.','Четыре сезона, четыре вопроса.','一年に四季、四季に四問。');
      d('life-subtitle','季节在这里不只是气候。它是一套完整的追问体系，在每一个季节的转折点上，全校停下来，问一个值得花三个月去思考的问题。','Seasons here are not merely climate. They form a complete system of inquiry. At each seasonal turning point, the entire university pauses to ask a question worth spending three months contemplating.','Времена года здесь — не просто климат. Они образуют полную систему вопрошания. В каждой сезонной точке поворота весь университет останавливается, чтобы задать вопрос, достойный трёх месяцев размышлений.','ここで季節は単なる気候ではない。それは一つの完全な問いかけの体系である。季節の節目ごとに、大学全体が立ち止まり、三ヶ月かけて考えるに値する一つの問いを発する。');
      
      d('sec-os-label','Shiroha OS','Shiroha OS','Shiroha OS','Shiroha OS');
      d('os-title','以一片羽毛命名的系统','A system named after a feather.','Система, названная в честь пера.','一枚の羽根にちなんで名づけられたシステム。');
      d('os-subtitle','技术在这里有一个反常识的定位：它不负责加速，它负责保存。Shiroha OS是白羽大学对数字时代如何安放记忆的完整回答。','Technology here occupies a counterintuitive position: it is not responsible for acceleration, but for preservation. Shiroha OS is YCU''s complete answer to the question of how memory should be housed in the digital age.','Технологии здесь занимают контр-интуитивную позицию: они отвечают не за ускорение, а за сохранение. Shiroha OS — полный ответ YCU на вопрос о том, как память должна храниться в цифровую эпоху.','技術はここで反直感的な位置を占める。それは加速を担うのではなく、保存を担う。Shiroha OSは、デジタル時代に記憶をいかに安置すべきかという問いに対するYCUの完全な回答である。');
      
      d('sec-alumni-label','校友网络','Alumni Network','Сеть Выпускников','同窓ネットワーク');
      d('alumni-title','毕业证上写的不是"授予学位"，是"委托保管"','The diploma does not read "degree conferred." It reads "entrusted with preservation."','В дипломе написано не "присвоена степень", а "вверено на хранение".','学位記に書かれているのは「学位授与」ではない。「保管を委託する」である。');
      d('alumni-subtitle','离开校园的人并没有离开这所大学。他们只是换了一种方式，在世界的不同角落里继续同一件事情。','Those who leave the campus have not left the university. They have merely changed their method, continuing the same work in different corners of the world.','Покинувшие кампус не покинули университет. Они лишь изменили способ, продолжая ту же работу в разных уголках мира.','キャンパスを去った者たちは、大学を去ったのではない。ただ方法を変え、世界の異なる片隅で同じことを続けているだけだ。');
      
      // NAV
      d('nav-about','关于白大','About YCU','О YCU','白羽大学について');
      d('nav-campuses','三大校区','Campuses','Кампусы','キャンパス');
      d('nav-academic','学术体系','Academics','Академия','学術');
      d('nav-admissions','招生','Admissions','Приём','入学');
      d('nav-life','校园生活','Campus Life','Жизнь','学生生活');
      d('nav-shiroha','Shiroha OS','Shiroha OS','Shiroha OS','Shiroha OS');
      d('nav-alumni','校友网络','Alumni','Выпускники','同窓');
      
      // FOOTER
      d('footer-explore','探索','Explore','Исследовать','探検');
      d('footer-campus','校园','Campus','Кампус','キャンパス');
      d('footer-lang','语言','Language','Язык','言語');
      d('footer-copy','© 2048 Shiroha University. Shiroha OS v1.0','© 2048 Shiroha University. Shiroha OS v1.0','© 2048 Университет Сироха. Shiroha OS v1.0','© 2048 白羽大学. Shiroha OS v1.0');
      d('footer-motto','为世界上所有的美好而战。','Fight for all the beauty in this world.','Сражаться за всю красоту этого мира.','この世界のすべての美しさのために戦う。');
      
      // ---- ABOUT PAGE ----
      d('about-hero-title','关于白大','About YCU','О YCU','白羽大学について');
      d('about-hero-sub','About Shiroha University','About Shiroha University','Об Университете Ечэн','Shiroha Universityについて');
      d('about-hist-title','创校历史','Founding History','История Основания','創校歴史');
      d('about-hist-p1','二十一世纪中叶，人类遇到了一道奇怪的算术题：我们掌握的数据量每一天都在翻倍，但能说清「自己是谁」的人却在减少。历史档案在数字化过程中被压缩成了关键词，传统技艺变成了博物馆里的视频简介，人们在社交媒体上记录了每一顿晚餐，却想不起上一次真正被什么东西打动是什么时候。','By mid-century, humanity faced a strange equation: the volume of data we possessed doubled every day, yet the number of people who could articulate who they were was shrinking. Historical archives were compressed into keywords during digitization. Traditional crafts became video introductions in museums. People documented every dinner on social media, yet could not recall the last time something truly moved them.','К середине века человечество столкнулось со странным уравнением: объём данных, которыми мы обладали, удваивался каждый день, но число людей, способных сформулировать, кто они, сокращалось. Исторические архивы сжимались в ключевые слова при оцифровке. Традиционные ремёсла становились видео-введениями в музеях. Люди документировали каждый ужин в соцсетях, но не могли вспомнить, когда в последний раз что-то по-настоящему их тронуло.','世紀半ば、人類は奇妙な算術問題に直面した。我々の掌握するデータ量は日々倍増するのに、「自分が誰であるか」を明言できる人は減っていた。歴史資料はデジタル化の過程でキーワードに圧縮され、伝統技芸は博物館の映像紹介になり、人々はSNSに毎日の夕食を記録しながら、最後に本当に何かに心を動かされたのがいつだったか思い出せなくなっていた。');
    },

    translate: function(lang) {
      this.current = lang;
      localStorage.setItem('ycu-lang', lang);
      var self = this;
      
      document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        var text = self.dict[lang] && self.dict[lang][key];
        if (text !== undefined) {
          el.innerHTML = text;
        }
      });
      
      // Update html lang
      var langMap = { zh: 'zh-CN', en: 'en', ru: 'ru', ja: 'ja' };
      document.documentElement.lang = langMap[lang] || 'zh-CN';
      
      // Update active button
      document.querySelectorAll('.lang-switch').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      });
    },

    createSwitcher: function() {
      var self = this;
      document.querySelectorAll('.footer-col').forEach(function(col) {
        var h4 = col.querySelector('h4');
        if (h4 && (h4.getAttribute('data-i18n') === 'footer-lang' || h4.textContent.trim() === '语言')) {
          col.innerHTML = '<h4 data-i18n="footer-lang">语言</h4>';
          var langs = [
            { code: 'zh', label: '中文' },
            { code: 'en', label: 'English' },
            { code: 'ru', label: 'Русский' },
            { code: 'ja', label: '日本語' }
          ];
          langs.forEach(function(l) {
            var a = document.createElement('a');
            a.href = '#';
            a.className = 'lang-switch';
            a.setAttribute('data-lang', l.code);
            a.textContent = l.label;
            if (l.code === self.current) a.classList.add('active');
            a.addEventListener('click', function(e) {
              e.preventDefault();
              self.translate(l.code);
            });
            col.appendChild(a);
          });
        }
      });
    }
  };

  I18N.initDict();
  window.YCU_I18N = I18N;

  document.addEventListener('DOMContentLoaded', function() {
    I18N.createSwitcher();
    I18N.translate(I18N.current);
  });
})();

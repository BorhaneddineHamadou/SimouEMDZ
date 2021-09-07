let wilayas_arr = new Array("01 Adrar", "02 Chlef", "03 Laghouat", "04 Oum El Bouaghi", "05 Batna", "06 Béjaïa", "07 Biskra", "08 Béchar", "09 Blida", 
"10 Bouira", "11 Tamanrasset", "12 Tébessa", "13 Tlemcen", "14 Tiaret", "15 Tizi Ouzou", "16 Alger", "17 Djelfa", "18 Jijel", "19 Sétif", "20 Saïda", "21 Skikda", 
"22 Sidi Bel Abbès", "23 Annaba", "24 Guelma", "25 Constantine", "26 Médéa", "27 Mostaganem", "28 M'Sila", "29 Mascara", "30 Ouargla", "31 Oran", "32 El Bayadh", "33 Illizi", 
"34 Bordj Bou Arreridj", "35 Boumerdès", "36 El Tarf", "37 Tindouf", "38 Tissemsilt", "39 El Oued", "40 Khenchela", "41 Souk Ahras", "42 Tipaza", "43 Mila", "44 Aïn Defla", "45 Naâma", 
"46 Aïn Témouchent", "47 Ghardaïa", "48 Relizane", "49 Timimoun", "50 Bordj Badji Mokhtar", "51 Ouled Djellal", "52 Béni Abbès", "53 In Salah", "54 In Guezzam", "55 Touggourt", "56 Djanet",
"57 El M'Ghair", "58 El Meniaa");
var s_a = new Array();
s_a[0]="";
s_a[1]="Adrar|Tamest|Reggane|In Zghmir|Tit|Tsabit|Zaouiet Kounta|Aoulef|Tamekten|Tamantit|Fenoughil|Sali|Akabli|Ouled Ahmed Tammi|Bouda|Sebaa";
s_a[2]="Chlef|Ténès|Bénairia|El Karimia|Tadjena|Taougrite|Beni Haoua|Sobha|Harchoun|Ouled Fares|Sidi Akkacha|Boukadir|Beni Rached|Talassa|Harenfa|Oued Goussine|Dahra|Ouled Abbes|Sendjas|Zeboudja|Oued Sly|Abou El Hassan|El Marsa|Chettia|Sidi Abderrahmane|Moussadek|El Hadjadj|Labiod Medjadja|Oued Fodda|Ouled Ben Abdelkader|Bouzeghaia|Aïn Merane|Oum Drou|Breira|Beni Bouateb";
s_a[3]="Laghouat|Ksar El Hirane|Bennasser Benchohra|Sidi Makhlouf|Hassi Delaa|Hassi R'Mel|Aïn Madhi|Tadjemout|Kheneg|Gueltat Sidi Saad|Aïn Sidi Ali|Beidha|Brida|El Ghicha|Hadj Mechri|Sebgag|Taouiala|Tadjrouna|Aflou|El Assafia|Oued Morra|Oued M'Zi|El Houaita|Sidi Bouzid";
s_a[4]="Oum el Bouaghi|Aïn Beïda|Aïn M'lila|Behir Chergui|El Amiria|Sigus|El Belala|Aïn Babouche|Berriche|Ouled Hamla|Dhalaa|Aïn Kercha|Hanchir Toumghani|El Djazia|Aïn Diss|Fkirina|Souk Naamane|Zorg|El Fedjoudj Boughrara Saoudi|Ouled Zouaï|Bir Chouhada|Ksar Sbahi|Oued Nini|Meskiana|Aïn Fakroun|Rahia|Aïn Zitoun|Ouled Gacem|El Harmilia";
s_a[5]="Batna|Ghassira|Maafa|Merouana|Seriana|Menaa|El Madher|Tazoult|N'Gaous|Guigba|Inoughissen|Ouyoun El Assafir|Djerma|Bitam|Abdelkader Azil|Arris|Kimmel|Tilatou|Aïn Djasser|Ouled Sellam|Tigherghar|Aïn Yagout|Sefiane|Fesdis|Rahbat|Tighanimine|Lemsane|Ksar Bellezma|Seggana|Ichmoul|Foum Toub|Ben Foudhala El Hakania|Oued El Ma|Talkhamt|Bouzina|Chemora|Oued Chaaba|Taxlent|Gosbat|Ouled Aouf|Boumagueur|Barika|Djezar|T'Kout|Aïn Touta|Hidoussa|Teniet El Abed|Oued Taga|Ouled Fadel|Timgad|Ras El Aioun|Chir|Ouled Si Slimane|Zanat El Beida|M'doukel|Ouled Ammar|El Hassi|Lazrou|Boumia (Batna)|Boulhilat|Larbaâ";
s_a[6]="Béjaïa|Amizour|Ferraoun|Taourirt Ighil|Chellata|Tamokra|Timezrit|Souk El Ténine|M'cisna|Tinabdher|Tichy|Semaoun|Kendira|Tifra|Ighram|Amalou|Ighil Ali|Fenaïa Ilmaten|Toudja|Darguina|Sidi-Ayad|Aokas|Ait Djellil|Adekar|Akbou|Seddouk|Tazmalt|Aït-R'zine|Chemini|Souk-Oufella|Taskriout|Tibane|Tala Hamza|Barbacha|Aït Ksila|Ouzellaguen|Bouhamza|Beni Mellikeche|Sidi-Aïch|El Kseur|Melbou|Akfadou|Leflaye|Kherrata|Draâ El-Kaïd|Tamridjet|Aït-Smail|Boukhelifa|Tizi N'Berber|Aït Maouche|Oued Ghir|Boudjellil";
s_a[7]="Aïn Naga|Aïn Zaatout|Biskra|Bordj Ben Azzouz|Bouchagroune|Branis|Chetma|Djemorah|El Feidh|El Ghrous|El Hadjeb|El Haouch|El Kantara|El Mizaraa|El Outaya|Foughala|Khenguet Sidi Nadji|Lichana|Lioua|M'Chouneche|Mekhadma|M'Lili|Oumache|Ourlal|Sidi Okba|Tolga|Zeribet El Oued";
s_a[8]="Béchar|Erg Ferradj|Meridja|Lahmar|Mechraa Houari Boumedienne|Kenadsa|Taghit|Boukais|Mougheul|Abadla|Beni Ounif";
s_a[9]="Blida|Chebli|Bouinan|Oued Alleug|Ouled Yaïch|Chréa|El Affroun|Chiffa|Hammam Melouane|Benkhelil|Soumaa|Mouzaia|Souhane|Meftah|Ouled Slama|Boufarik|Larbaa|Oued Djer|Beni Tamou|Bouarfa|Beni Mered|Bougara|Guerouaou|Aïn Romana|Djebabra";
s_a[10]="Aïn Bessem|Hanif|Aghbalou|Aïn El Hadjar|Ahl El Ksar|Aïn Laloui|Ath Mansour|Aomar|Aïn El Turc|Aït Laziz|Bouderbala|Bechloul|Bir Ghbalou|Boukram|Bordj Okhriss|Bouira|Chorfa|Dechmia|Dirrah|Djebahia|El Hakimia|El Hachimia|El Adjiba|El Khabouzia|El Mokrani|El Asnam|Guerrouma|Haizer|Hadjera Zerga|Kadiria|Lakhdaria|M'Chedallah|Mezdour|Maala|Maamora|Oued El Berdi|Ouled Rached|Raouraoua|RidaneSaharidj|Sour El Ghouzlane|Souk El Khemis|Taguedit|Taghzout|Zbarbar";
s_a[11]="Tamanrasset|Abalessa|Idles|Tazrouk|In Amguel";
s_a[12]="Tébessa|Bir el-Ater|Cheria|Stah Guentis|El Aouinet|El Houidjbet|Safsaf El Ouesra|Hammamet|Negrine|Bir Mokkadem|El Kouif|Morsott|El Ogla|Bir Dheb|Ogla Melha|Guorriguer|Bekkaria|Boukhadra|Ouenza|El Ma Labiodh|Oum Ali|Tlidjene|Aïn Zerga|El Meridj|Boulhaf Dir|Bedjene|El Mezeraa|Ferkane";
s_a[13]="Tlemcen|Beni Mester|Aïn Tallout|Remchi|El Fehoul|Sabra|Ghazaouet|Souani|Djebala|El Gor|Oued Lakhdar|Aïn Fezza|Ouled Mimoun|Amieur|Aïn Youcef|Zenata|Beni Snous|Bab El Assa|Dar Yaghmouracene|Fellaoucene|Azails|Sebaa Chioukh|Terny Beni Hdiel|Bensekrane|Aïn Nehala|Hennaya|Maghnia|Hammam Boughrara|Souahlia|MSirda Fouaga|Aïn Fetah|El Aricha|Souk Tlata|Sidi Abdelli|Sebdou|Beni Ouarsous|Sidi Medjahed|Beni Boussaid|Marsa Ben M'Hidi|Nedroma|Sidi Djillali|Beni Bahdel|El Bouihi|Honaïne|Tienet|Ouled Riyah|Bouhlou|Beni Khellad|Aïn Ghoraba|Chetouane|Mansourah|Beni Semiel|Aïn Kebira";
s_a[14]="Aïn Bouchekif|Aïn Deheb|Aïn El Hadid|Aïn Kermes|Aïn Dzarit|Bougara|Chehaima|Dahmouni|Djebilet Rosfa|Djillali Ben Amar|Faidja|Frenda|Guertoufa|Hamadia|Ksar Chellala|Madna|Mahdia|Mechraa Safa|Medrissa|Medroussa|Meghila|Mellakou|Nadorah|Naima|Oued Lilli|Rahouia|Rechaïga|Sebaïne|Sebt|Serghine|Si Abdelghani|Sidi Abderahmane|Sidi Ali Mellal|Sidi Bakhti|Sidi Hosni|Sougueur|Tagdemt|Takhemaret|Tiaret|Tidda|Tousnina|Zmalet El Emir Abdelkader";
s_a[15]="Abi Youcef | Aghribs | Agouni Gueghrane | Aïn El Hammam | Aïn Zaouia | Aït Aouggacha | Aït Bouaddou | Aït Boumahdi | Aït Chafâa | Aït Khellili | Aït Mahmoud | Aït Oumalou | Aït Toudert | Aït Yahia | Aït Yahia Moussa | Akbil | Akerrou | Assi Youcef | Azazga | Azeffoun | Beni Aïssi | Beni Douala | Beni Yenni | Ath Zikki | Beni Zmenzer | Boghni | Boudjima | Bounouh | Bouzguen | Aït Aïssa Mimoun | Draâ Ben Khedda | Draâ El Mizan | Freha | Frikat | Iboudraren | Idjeur | Iferhounène | Ifigha | Iflissen | Illilten | Illoula Oumalou | Imsouhel | Irdjen | Larbaâ Nath Irathen | Maâtkas | Makouda | Mechtras | Mekla | M'Kira | Mizrana | Ouacif | Ouadhia | Ouaguenoun | Sidi Namane | Souk El Thenine | Souamaâ | Tadmaït | Tigzirt | Timizart | Tirmitine | Tizi Gheniff | Tizi N'Tleta | Tizi Ouzou | Tizi Rached | Yakouren | Yatafen | Zekri";
s_a[16]="Aïn Benian | Aïn Taya | Alger-Centre | Baba Hassen | Bab El Oued | Bab Ezzouar | Bachdjerrah | Baraki | Belouizdad | Ben Aknoun | Beni Messous | Birkhadem | Bir Mourad Raïs | Birtouta | Bologhine | Bordj El Bahri | Bordj El Kiffan | Bourouba | Bouzareah | Casbah | Chéraga | Dar El Beïda | Dely Ibrahim | Djasr Kasentina | Douera | Draria | El Achour | El Biar | El Hammamet | El Harrach | El Madania | El Marsa | El Mouradia | El Magharia | H'raoua | Hussein Dey | Hydra | Khraïssia | Kouba | Les Eucalyptus | Mahelma | Mohammadia | Oued Koriche | Oued Smar | Ouled Chebel | Ouled Fayet | Rahmania | Raïs Hamidou | Réghaïa | Rouïba | Saoula | Sidi M'Hamed | Sidi Moussa | Souidania | Staoueli | Tessala El Merdja | Zéralda";
s_a[17]="Aïn Chouhada|Aïn El Ibel|Aïn Feka|Aïn Maabed|Aïn Oussara|Amourah|Benhar|Beni Yagoub|Birine|Bouira Lahdab|Charef|Dar Chioukh|Deldoul|Djelfa|Douis|El Guedid|El Idrissia|El Khemis|Faidh El Botma|Guernini|Guettara|Had-Sahary|Hassi Bahbah|Hassi El Euch|Hassi Fedoul|Messaad|M'Liliha|Moudjebara|Oum Laadham|Sed Rahal|Selmana|Sidi Baizid|Sidi Ladjel|Tadmit|Zaafrane|Zaccar";
s_a[18]="Jijel|Eraguene|El Aouana|Ziama Mansouriah|Taher|Emir Abdelkader|Chekfa|Chahna|El Milia|Sidi Maarouf|Settara|El Ancer|Sidi Abdelaziz|Kaous|Ghebala|Bouraoui Belhadef|Djimla|Selma Benziada|Boucif Ouled Askeur|El Kennar Nouchfi|Ouled Yahia Khedrouche|Boudriaa Ben Yadjis|Kheïri Oued Adjoul|Texenna|Djemaa Beni Habibi|Bordj Tahar|Ouled Rabah|Ouadjana";
s_a[19]="Aïn Abessa|Aïn Arnat|Aïn Azel|Aïn El Kebira|Aïn Lahdjar|Aïn Legradj|Aïn Oulmene|Aïn Roua|Aïn Sebt|Aït Naoual Mezada|Aït Tizi|Beni Ouartilene|Amoucha|Babor|Bazer Sakhra|Beidha Bordj|Belaa|Beni Aziz|Beni Chebana|Beni Fouda|Beni Hocine|Beni Mouhli|Bir El Arch|Bir Haddada|Bouandas|Bougaa|Bousselam|Boutaleb|Dehamcha|Djemila|Draa Kebila|El Eulma, site archéologique de Tarlist|El Ouldja|El Ouricia|Guellal|Guelta Zerka, sites archéologiques de Aïn El Ahnech et Aïn Boucherit|Guenzet|Guidjel|Hamma|Hammam Guergour|Hammam Soukhna|Harbil|Ksar El Abtal|Maaouia|Maoklane|Mezloug|Oued El Barad|Ouled Addouane|Ouled Sabor|Ouled Si Ahmed|Ouled Tebben|Rasfa|Salah Bey|Serdj El Ghoul|Sétif|Tachouda|Talaifacene|Taya|Tell|Tizi N'Bechar";
s_a[20]="Aïn El Hadjar|Aïn Sekhouna|Aïn Soltane|Doui Thabet|El Hassasna|Hounet|Maamora|Moulay Larbi|Ouled Brahim|Ouled Khaled|Saïda|Sidi Ahmed|Sidi Amar|Sidi Boubekeur|Tircine|Youb";
s_a[21]="Aïn Bouziane|Aïn Charchar|Aïn Kechra|Aïn Zouit|Azzaba|Bekkouche Lakhdar|Bin El Ouiden|Ben Azzouz|Beni Bechir|Beni Oulbane|Beni Zid|Bouchtata|Cheraia|Collo|Djendel Saadi Mohamed|El Ghedir|El Hadaiek|El Harrouch|El Marsa|Emdjez Edchich|Es Sebt|Filfila|Hamadi Krouma|Kanoua|Kerkera|Kheneg Mayoum|Oued Zehour|Ouldja Boulballout|Ouled Attia|Ouled Hbaba|Oum Toub|Ramdane Djamel|Salah Bouchaour|Sidi Mezghiche|Skikda|Tamalous|Zerdaza|Zitouna";
s_a[22]="Aïn Adden|	Aïn El Berd|Aïn Kada|Aïn Thrid|Aïn Tindamine|Amarnas|Badredine El Mokrani|Belarbi|Ben Badis|Benachiba Chelia|Bir El Hammam|Boudjebaa El Bordj|Boukhanafis|Chettouane Belaila|Dhaya|El Haçaiba|Hassi Dahou|Hassi Zehana|Lamtar|Makedra|Marhoum|M'Cid|Merine|Mezaourou|Mostefa Ben Brahim|Moulay Slissen|Oued Sebaa|Oued Sefioun|Oued Taourira|Ras El Ma|Redjem Demouche|Sehala Thaoura|Sfisef|Sidi Ali Benyoub|Sidi Ali Boussidi|Sidi Bel Abbes|Sidi Brahim|Sidi Chaib|Sidi Daho des Zairs|Sidi Hamadouche|Sidi Khaled|Sidi Lahcene|Sidi Yacoub|Tabia|Tafissour|Taoudmout|Teghalimet|Telagh|Tenira|Tessala|Tilmouni|Zerouala";
s_a[23]="Annaba|Berrahal|El Hadjar|Eulma|El Bouni|Oued El Aneb|Cheurfa|Seraïdi|Aïn Berda|Chetaïbi|Sidi Amar|Treat";
s_a[24]="Aïn Ben Beida|Aïn Larbi|Aïn Makhlouf|Aïn Reggada|Aïn Sandel|Belkheir|Ben Djerrah|Beni Mezline|Bordj Sabath|Bouhachana|Bouhamdane|Bouati Mahmoud|Bouchegouf|Boumahra Ahmed|Dahouara|Djeballah Khemissi|El Fedjoudj|Guellat Bou Sbaa|Guelma|Hammam Debagh|Hammam N'Bail|Héliopolis|Houari Boumédiène|Khezarra|Medjez Amar|Medjez Sfa|Nechmaya|Oued Cheham|Oued Fragha|Oued Zenati|Ras El Agba|Roknia|Sellaoua Announa|Tamlouka";
s_a[25]="Aïn Abid|Aïn Smara|Beni Hamiden|Constantine|Didouche Mourad|El Khroub|Hamma Bouziane|Ibn Badis|Ibn Ziad|Messaoud Boudjriou|Ouled Rahmoune|Zighoud Youcef";
s_a[26]="Aïn Boucif|Aïn Ouksir|Aissaouia|Aziz|Baata|Benchicao|Beni Slimane|Berrouaghia|Bir Ben Laabed|Boghar|Bou Aiche|Bouaichoune|Bouchrahil|Boughezoul|Bouskene|Chahbounia|Chellalet El Adhaoura|Cheniguel|Derrag|Deux Bassins|Djouab|Draa Essamar|El Azizia|El Guelb El Kebir|El Hamdania|El Omaria|El Ouinet|Hannacha|Kef Lakhdar|Khams Djouamaa|Ksar Boukhari|Meghraoua|Médéa|Moudjbar|Meftaha|Mezerana|Mihoub|Ouamri|Oued Harbil|Ouled Antar|Ouled Bouachra|Ouled Brahim|Ouled Deide|Ouled Hellal|Ouled Maaref|Oum El Djalil|Ouzera|Rebaia|Saneg|Sedraia|Seghouane|Si Mahdjoub|Sidi Damed|Sidi Errabia|Sidi Naamane|Sidi Zahar|Sidi Ziane|Souagui|Tablat|Tafraout|Tamesguida|Tizi Mahdi|Tlatet Eddouar|Zoubiria";
s_a[27]="Abdelmalek Ramdane|Achaacha|Aïn Boudinar|Aïn Nouissy|Aïn Sidi Cherif|Aïn Tedles|Blad Touahria|Bouguirat|El Hassiane|Fornaka|Hadjadj|Hassi Mameche|Khadra|Kheireddine|Mansourah|Mesra|Mazagran|Mostaganem|Nekmaria|Oued El Kheir|Ouled Boughalem|Ouled Maallah|Safsaf|Sayada|Sidi Ali|Sidi Belattar|Sidi Lakhdar|Sirat|Souaflia|Sour|Stidia|Tazgait";
s_a[28]="Aïn El Hadjel|Aïn El Melh|Aïn Errich|Aïn Fares|Aïn Khadra|Belaiba|Ben Srour|Beni Ilmane|Benzouh|Berhoum|Bir Foda|Bou Saâda|Bouti Sayah|Chellal|Dehahna|Djebel Messaad|El Hamel|El Houamed|Hammam Dhalaa|Khettouti Sed El Djir|Khoubana|Maadid|Maarif|Magra|M'Cif|Medjedel|M'Sila|M'Tarfa|Ouanougha|Ouled Addi Guebala|Ouled Atia|Mohammed Boudiaf|Ouled Derradj|Ouled Madhi|Ouled Mansour|Ouled Sidi Brahim|Ouled Slimane|Oultem|Sidi Aïssa|Sidi Ameur|Sidi Hadjeres|Sidi M'Hamed|Slim|Souamaa|Tamsa|Tarmount|Zarzour";
s_a[29]="Aïn Fares|Aïn Fekan|Aïn Ferah|Aïn Fras|Alaïmia|Aouf|Beniane|Bou Hanifia|Bou Henni|Chorfa|El Bordj|El Gaada|El Ghomri|El Guettana|El Keurt|El Menaouer|Ferraguig|Froha|Gharrous|Guerdjoum|Ghriss|Hachem|Hacine|Khalouia|Makdha|Mamounia|Maoussa|Mascara|Matemore|Mocta Douz|Mohammadia|Nesmoth|Oggaz|Oued El Abtal|Oued Taria|Ras El Aïn Amirouche|Sedjerara|Sehailia|Sidi Abdeldjebar|Sidi Abdelmoumen|Sidi Kada|Sidi Boussaid|Sig|Tighennif|Tizi|Zahana|Zelmata";
s_a[30]="Aïn Beida|El Borma|Hassi Ben Abdellah|Hassi Messaoud|N'Goussa|Ouargla|Rouissat|Sidi Khouiled";
s_a[31]="Oran|Gdyel|Bir El Djir|Hassi Bounif|Es Senia|Arzew|Bethioua|Marsat El Hadjadj|Aïn El Turk|El Ançor|Oued Tlelat|Tafraoui|Sidi Chami|Boufatis|Mers El Kébir|Bousfer|El Kerma|El Braya|Hassi Ben Okba|Ben Freha|Hassi Mefsoukh|Sidi Benyebka|Misserghin|Boutlelis|Aïn El Kerma|Aïn El Bia";
s_a[32]="El Bayadh|Rogassa|Stitten|Brezina|Ghassoul|Boualem|El Abiodh Sidi Cheikh|Aïn El Orak|Arbaouat|Bougtoub|El Kheiter|Kef El Ahmar|Boussemghoun|Chellala|Kraakda|El Bnoud|Cheguig|Sidi Ameur|El Mehara|Tousmouline|Sidi Slimane|Sidi Tifour";
s_a[33]="Illizi|Debdeb|Bordj Omar Driss|In Amenas";
s_a[34]="Aïn Taghrout|Aïn Tesra|Belimour|Ben Daoud|Bir Kasdali|Bordj Bou Arreridj|Bordj Ghédir|Bordj Zemoura|Colla|Djaafra|El Ach|El Achir|El Anseur|El Hamadia|El Main|El M'hir|Ghilassa|Haraza|Hasnaoua|Khelil|Ksour|Mansoura|Medjana|Ouled Brahem|Ouled Dahmane|Ouled Sidi Brahim|Rabta|Ras El Oued|Sidi Embarek|Tefreg|Taglait|Teniet En Nasr|Tassameurt|Tixter";
s_a[35]="Afir|Ammal|Baghlia|Ben Choud|Beni Amrane|Bordj Menaïel|Boudouaou|Boudouaou-El-Bahri|Boumerdes|Bouzegza Keddara|Chabet el Ameu|Corso|Dellys|Djinet|El Kharrouba|Hammedi|Issers|Khemis El-Khechna|Larbatache|Leghata|Naciria|Ouled Aïssa|Ouled Hedadj|Ouled Moussa|Si Mustapha|Sidi Daoud|Souk El Had|Taourga|Thenia|Tidjelabine|Timezrit|Zemmouri";
s_a[36]="Aïn El Assel|Aïn Kerma|Asfour|Ben Mehidi|Berrihane|Besbes|Bougous|Bouhadjar|Bouteldja|Chebaita Mokhtar|Chefia|Chihani|Dréan|Echatt|El Aioun|El Kala|El Tarf|Hammam Beni Salah|Lac des Oiseaux|Oued Zitoun|Raml Souk|Souarekh|Zerizer|Zitouna";
s_a[37]="Oum el Assel|Tindouf";
s_a[38]="Ammari|Beni Chaib|Beni Lahcene|Boucaid|Bordj Bou Naama|Bordj El Emir Abdelkader|Khemisti|Larbaa|Lardjem|Layoune|Lazharia|Maacem|Melaab|Ouled Bessem|Sidi Abed|Sidi Boutouchent|Sidi Lantri|Sidi Slimane|Tamalaht|Theniet El Had|Tissemsilt|Youssoufia";
s_a[39]="El Oued  | Robbah  | Oued El Alenda  | Bayadha  | Nakhla  | Guemar  | Kouinine | Reguiba  | Hamraia  | Taghzout  | Debila  | Hassani Abdelkrim  | Hassi Khalifa  | Taleb Larbi  | Douar El Ma  | Sidi Aoun | Trifaoui  | Magrane  | Beni Guecha  | Ourmas  | El Ogla  | Mih Ouansa ";
s_a[40]="Aïn Touila|Babar|Baghai|Bouhmama|Chechar|Chelia|Djellal|El Hamma|El Mahmal|El Oueldja|Ensigha|Kais|Khenchela|Khirane|M'Sara|M'Toussa|Ouled Rechache|Remila|Tamza|Taouzient|Yabous";
s_a[41]="Souk Ahras|Sedrata|Hanancha|Mechroha|Ouled Driss|Tiffech|Zaarouria|Taoura|Dréa|Heddada|Khedara|Merahna|Ouled Moumene|Bir Bou Haouch|M'daourouch|Oum El Adhaim|Aïn Zana|Aïn Soltane|Ouillen|Sidi Fredj|Safel El Ouiden|Ragouba|Khemissa|Oued Keberit|Terraguelt|Zouabi";
s_a[42]="Tipaza|Menaceur|Larhat|Douaouda|Bourkika|Khemisti|Aghbal|Hadjout|Sidi Amar|Gouraya|Nador|Chaiba|Aïn Tagourait|Cherchell|Damous|Merad|Fouka|Bou Ismaïl|Ahmar El Aïn|Bouharoun|Sidi Ghiles|Messelmoun|Sidi RachedKoléa|Attatba|Sidi Semiane|Beni Milleuk|Hadjeret Ennous";
s_a[43]="Ahmed Rachedi | Aïn Beida Harriche | Aïn Mellouk | Aïn Tine | Amira Arrès | Benyahia Abderrahmane | Bouhatem | Chelghoum Laïd | Chigara | Derrahi Bousselah | El Mechira | Elayadi Barbes | Ferdjioua | Grarem Gouga | Hamala | Mila | Minar Zarza | Oued Athmania | Oued Endja | Oued Seguen | Ouled Khalouf | Rouached | Sidi Khelifa | Sidi Mérouane | Tadjenanet | Tassadane Haddada | Teleghma | Terrai Bainen | Tessala Lemtaï | Tiberguent | Yahia Beni Guecha | Zeghaia";
s_a[44]="Aïn Benian | Aïn Bouyahia | Aïn Defla | Aïn Lechiekh | Aïn Soltane | Aïn Torki | Arib | Bathia | Belaas | Ben Allal | Birbouche | Bir Ould Khelifa | Bordj Emir Khaled | Boumedfaa | Bourached | Djelida | Djemaa Ouled Cheikh | Djendel | El Abadia | El Amra | El Attaf | El Hassania | El Maine | Hammam Righa | Hoceinia | Khemis Miliana | Mekhatria | Miliana | Oued Chorfa | Oued Djemaa | Rouina | Sidi Lakhdar | Tacheta Zougagha | Tarik Ibn Ziad | Tiberkanine | Zeddine";
s_a[45]="Naâma|Mecheria|Aïn Sefra|Tiout|Sfissifa|Moghrar|Assela|Djeniene Bourezg|Aïn Ben Khelil|Makman Ben Amer|Kasdir|El Biod";
s_a[46]="Aghlal|Aïn El Arbaa|Aïn Kihal|Aïn Témouchent|Aïn Tolba|Aoubellil|Beni Saf|Bouzedjar|Chaabat El Leham|Chentouf|El Amria|El Emir Abdelkader|El Malah|El Messaid|Hammam Bouhadjar|Hassasna|Hassi El Ghella|Oued Berkeche|Oued Sabah|Ouled Boudjemaa|Ouled Kihal|Oulhaça El Gheraba|Sidi Ben Adda|Sidi Boumedienne|Sidi Ouriache|Sidi Safi|Tamzoura|Terga";
s_a[47]="Berriane|Bounoura|Dhayet Bendhahoua|El Atteuf|El Guerrara|Ghardaïa|Mansoura|Metlili|Sebseb|Zelfana";
s_a[48]="Aïn Rahma|Aïn Tarek|Aarch Meknassa|Ammi Moussa|Belassel Bouzegza|Bendaoud|Beni Dergoun|Beni Zentis|Dar Ben Abdellah|Djidioua|El Guettar|El Hamadna|El Hassi|El Matmar|El Ouldja|Had Echkalla|Hamri|Kalaa|Lahlef|Mazouna|Mediouna|Mendes|Merdja Sidi Abed|Ouarizane|Oued Essalem|Oued Rhiou|Ouled Aiche|Oued El Djemaa|Ouled Sidi Mihoub|Ramka|Relizane|Sidi Khettab|Sidi Lazreg|Sidi M'Hamed Ben Ali|Sidi M'Hamed Benaouda|Sidi Saada|Souk El Had|Yellel|Zemmora";
s_a[49]="Aougrout|Charouine|Deldoul|Ksar Kaddour|Metarfa|Ouled Aïssa|Ouled Saïd|Talmine|Timimoun|Tinerkouk";
s_a[50]="Bordj Badji Mokhtar|Timiaouine";
s_a[51]="Besbes|Ech Chaïba|Doucen|Ouled Djellal|Sidi Khaled|Ras El Miaad";
s_a[52]="Béni Abbès|Beni Ikhlef|El Ouata|Igli|Kerzaz|Ksabi|Oulad khodeir|Tabelbala|Tamtert|Timoudi";
s_a[53]="Foggaret Ezzaouia|In Ghar|In Salah";
s_a[54]="In Guezzam|Tin Zaouatine";
s_a[55]="Benaceur|Blidet Amor|El Allia|El Hadjira|Megarine|M'Naguer|Nezla|Sidi Slimane|Taibet|Temacine|Tebesbest|Touggourt|Zaouia El Abidia";
s_a[56]="Djanet|Bordj El Haouas";
s_a[57]="Djamaa|El M'Ghair|Merara|Oum Touyour|Sidi Amrane|Sidi Khellil|Still|Tendla";
s_a[58]="El Menia|Hassi Fehal|Hassi Gara";


function populateCommune( wilayaElementId, communeElementId ){
	
	var selectedWilayaIndex = document.getElementById( wilayaElementId ).selectedIndex;

	var communeElement = document.getElementById( communeElementId );
	
	communeElement.length=0;	// Fixed by Julian Woods
	communeElement.options[0] = new Option('Votre Commune','');
	communeElement.selectedIndex = 0;
	
	var communes_arr = s_a[selectedWilayaIndex].split("|");
	
	for (var i=0; i<communes_arr.length; i++) {
		communeElement.options[communeElement.length] = new Option(communes_arr[i],communes_arr[i]);
	}
}

export default function populateWilayas(wilayaElementId, communeElementId){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var wilayaElement = document.getElementById(wilayaElementId);
	wilayaElement.length=0;
	wilayaElement.options[0] = new Option('Votre Wilaya','');
	wilayaElement.selectedIndex = 0;
	for (var i=0; i<wilayas_arr.length; i++) {
		wilayaElement.options[wilayaElement.length] = new Option(wilayas_arr[i],wilayas_arr[i]);
	}

	// Assigned all countries. Now assign event listener for the states.

	if( communeElementId ){
		wilayaElement.onchange = function(){
			populateCommune( wilayaElementId, communeElementId );
		};
	}
}
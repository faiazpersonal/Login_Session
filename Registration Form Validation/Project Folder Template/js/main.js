function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var country = document.Form.country.value;
    var gender = document.Form.gender.value;
    

    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    

    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    

    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    
 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }
    

    if(country == "Select") {
        printError("countryErr", "Please select your country");
        var elem = document.getElementById("country");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("countryErr", "");
        countryErr = false;
        var elem = document.getElementById("country");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    

    if(gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    
    
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
       return false;
    } 
};


// Dropdown option =============================================
function ddlpopulate(ddl, arr) {
    ddl.options.length = 0;

    iteropt = document.createElement('option');
    iteropt.innerHTML = iteropt.value = '';
    ddl.appendChild(iteropt);

    for (i=0; i<arr.length; i++) {
        iteropt = document.createElement('option');
        iteropt.innerHTML = iteropt.value = arr[i]; //.text
        ddl.appendChild(iteropt);
    }
}

function ddlcascade(upper, lower, ht) {
  objUpper = document.getElementById(upper);
  objLower = document.getElementById(lower);
  if (objUpper.options.length == 0) {
    ddlpopulate(objUpper, Object.keys(ht));
  }
  objUpper.onchange = function() {
    ddlpopulate(objLower, ht[objUpper.value]);
  }
}









//If using jQuery, use $(document).ready, or find and call other onload handlers
window.onload = function() {
  select = { 'BAGERHAT' : ['BAGERHAT SADAR',	'CHITALMARI',	'FAKIRHAT',	'KACHUA',	'MOLLAHAT',	'MONGLA',	'MORRELGANJ',	'RAMPAL',	'SARANKHOLA'], 
'BANDARBAN' : ['ALIKADAM',	'BANDARBAN SADAR',	'LAMA',	'NAIKHONGCHHARI',	'ROWANGCHARI',	'RUMA',	'THANCHI'], 
'BARGUNA': ['AMTOLI',	'BAMNA',	'BARGUNA',	'BETAGI',	'PATHARGHATA',	'TALTOLI'],
'BARISHAL' : ['AGAILJHARA',	'AIRPORT',	'BABUGANJ',	'BAKERGANJ',	'BANARIPARA',	'BANDAR',	'GOURNADI',	'HIZLA',	'KAWNIA',	'KAZIRHAT',	'KOTWALI MODEL',	'MEHENDIGANJ',	'MULADI',	'WAZIRPUR'],
'BHOLA' : ['BHOLA SADAR',	'BURHANUDDIN',	'CHARFASSON',	'DAKSHIN AICHA',	'DAULATKHAN',	'DULARHAT',	'LALMOHAN',	'MANPURA',	'SOSHIVUSION',	'TAZUMUDDIN'],
'BOGURA' : ['ADAMDIGHI',	'BOGURA SADAR',	'DHUNAT',	'DHUPCHANCHIA',	'GABTALI',	'KAHALOO',	'NANDIGRAM',	'SARIAKANDI',	'SHAJAHANPUR',	'SHERPUR',	'SHIBGANJ',	'SONATOLA'],
'BRAHMANBARIA' : ['AKHAURA',	'ASHUGANJ',	'BANCHARAMPUR',	'BIJOYNAGAR',	'BRAHMANBARIA SADAR',	'KASBA',	'NABINAGAR',	'NASIRNAGAR',	'SARAIL'],
'CHANDPUR' : ['CHANDPUR SADAR',	'FARIDGANJ',	'HAIMCHAR',	'HAZIGANJ',	'MATLAB DAKSHIN',	'MATLAB UTTAR',	'SHAHRASTI'],
'CHAPAINAWABGANJ' : ['BHOLAHAT',	'GOMOSTAPUR',	'NACHOL',	'CHAPAINAWABGANJ SADAR',	'SHIBGANJ'],
'CHATTOGRAM' : ['AKBARSHAH',	'ANWARA',	'BAKALIA',	'BANDAR',	'BANSHKHALI',	'BAYEZID BOSTAMI',	'BHUJPUR',	'BOALKHALI',	'CHANDANAISH',	'CHANDGAON',	'CHAWKBAZAR',	'DOUBLE MOORING',	'EPZ',	'FATIKCHHARI',	'HALISHAHAR',	'HATHAZARI',	'JORARGANJ',	'KARNAPHULI',	'KHULSHI',	'KOTOWALI',	'LOHAGARA',	'MIRSHARAI',	'PAHARTOLI',	'PANCHLAISH',	'PATENGA',	'PATIYA',	'RANGUNIA',	'RAOZAN',	'SADARGHAT',	'SANDWIP',	'SATKANIA',	'SITAKUNDA'],
'CHUADANGA' : ['ALAMDANGA',	'CHUADANGA SADAR',	'DAMURHUDA',	'DARSHANA',	'JIBANNAGAR'],
'COX`S BAZAR' : ['CHAKARIA',	'COX`S BAZAR',	'EIDGAON',	'KUTUBDIA',	'MAHESHKHALI',	'PEKUA',	'RAMU',	'TEKNAF',	'UKHIA'],
'CUMILLA' : ['BANGORA BAZAR',	'BARURA',	'BRAHMANPARA',	'BURICHONG',	'CHANDINA',	'CHAUDDAGRAM',	'DAUDKANDI',	'DEBIDWAR',	'HOMNA',	'KOTWALI MODEL',	'LAKSAM',	'LALMAI',	'MANOHARGANJ',	'MEGHNA',	'MURADNAGAR',	'NANGALKOT',	'SADAR DAKSHIN',	'TITAS'],
'DHAKA' : ['ADABOR',	'AIRPORT',	'ASHULIA',	'BADDA',	'BANANI',	'BANGSHAL',	'CANTONMENT',	'CHAWKBAZAR',	'DAKSHINKHAN',	'DARUS SALAM',	'DEMRA',	'DHAMRAI',	'DHANMONDI',	'DOHAR',	'GENDARIA',	'GULSHAN',	'HATIRJHEEL',	'HAZARIBAGH',	'JATRABARI',	'KADOMTOLI',	'KAFRUL',	'KALABAGAN',	'KAMRANGIRCHAR',	'KERANIGANJ',	'KHILGAON',	'KHILKHET',	'KOTWALI',	'LALBAGH',	'MIRPUR',	'MOHAMMADPUR',	'MOTIJHEEL',	'MUGDA',	'NAWABGONJ',	'NEW MARKET',	'PALLABI',	'PALTAN',	'RAMNA',	'RAMPURA',	'RUPNAGAR',	'SABUJBAGH',	'SAVAR',	'SHAH ALI',	'SHAHBAGH',	'SHAHJAHANPUR',	'SHAMPUR',	'SHER-E-BANGLA NAGAR',	'SOUTH KERANIGANJ',	'SUTRAPUR',	'TEJGAON',	'TEJGAON INDUSTRIAL AREA',	'TURAG',	'UTTARA EAST',	'UTTARA WEST',	'UTTARKHAN',	'VASHANTEK',	'VATARA',	'WARI'],
'DINAJPUR' : ['BIRAL',	'BIRAMPUR',	'BIRGANJ',	'BOCHAGANJ',	'CHIRIRBANDAR',	'GHORAGHAT',	'HAKIMPUR',	'KAHAROLE',	'KHANSAMA',	'KOTWALI',	'NAWABGANJ',	'PARBATIPUR',	'PHULBARI'],
'FARIDPUR' : ['ALFADANGA',	'BHANGA',	'BOALMARI',	'CHAR BHADRASAN',	'KOTWALI',	'MADHUKHALI',	'NAGARKANDA',	'SADARPUR',	'SALTHA'],
'FENI' : ['CHHAGALNAIYA',	'DAGONBHUIYAN',	'FENI SADAR',	'FULGAZI',	'PARSHURAM',	'SONAGAZI'],
'GAIBANDHA' : ['FULCHHARI',	'GAIBANDHA SADAR',	'GOBINDAGANJ',	'PALASHBARI',	'SADULLAPUR',	'SHAGHATA',	'SUNDARGANJ'],
'GAZIPUR' : ['BASON',	'GACHA',	'GAZIPUR SADAR',	'JOYDEBPUR',	'KALIAKAIR',	'KALIGANJ',	'KAPASIA',	'KASIMPUR',	'KONABARI',	'PUBAIL',	'SREEPUR',	'TONGI EAST',	'TONGI WEST'],
'GOPALGANJ' : ['GOPALGANJ',	'KASHIANI',	'KOTALIPARA',	'MUKSUDPUR',	'TUNGIPARA'],
'HABIGANJ' : ['AJMIRIGANJ',	'BAHUBAL',	'BANIYACHONG',	'CHUNARUGHAT',	'HABIGANJ',	'LAKHAI',	'MADHABPUR',	'NABIGANJ',	'SHAESTAGONJ'],
'JAMALPUR' : ['BAKSHIGONJ',	'DEWANGANJ',	'ISLAMPUR',	'JAMALPUR SADAR',	'MADARGANJ',	'MELANDOHO',	'SARISHABARI'],
'JASHORE' : ['ABHAYNAGAR',	'BAGHERPARA',	'BENAPOLE PORT',	'CHAUGACHHA',	'JHIKARGACHHA',	'KESHABPUR',	'KOTWALI',	'MANIRAMPUR',	'SHARSHA'],
'JHALAKATI' : ['JHALOKATI',	'KATHALIA',	'NALCHITY',	'RAJAPUR'],
'JHENAIDAH' : ['HARINAKUNDA',	'JHENAIDAH',	'KALIGANJ',	'KOTCHANDPUR',	'MAHESHPUR',	'SHAILKUPA'],
'JOYPURHAT' : ['AKKELPUR',	'JOYPURHAT',	'KALAI',	'KHETLAL',	'PANCHBIBI'],
'KHAGRACHARI' : ['DIGHINALA',	'GUIMARA',	'KHAGRACHARI',	'LAKSHMICHARI',	'MAHALCHARI',	'MANIKCHARI',	'MATIRANGA',	'PANCHHARI',	'RAMGARH'],
'KHULNA' : ['ARONGHATA',	'BATIAGHATA',	'DACOPE',	'DAULATPUR',	'DIGHOLIA',	'DUMURIA',	'HORINTANA',	'KHALISHPUR',	'KHAN JAHAN ALI',	'KHULNA SADAR',	'KOYRA',	'LABANCHORA',	'PAIKGACHA',	'PHULTALA',	'RUPSHA',	'SONADANGA MODEL',	'TEROKHADA'],
'KISHOREGANJ' : ['AUSTAGRAM',	'BAJITPUR',	'BHAIRAB',	'HOSSAINPUR',	'ITNA',	'KARIMGANJ',	'KATIADI',	'KISHOREGANJ SADAR',	'KULIARCHAR',	'MITHAMAIN',	'NIKLI',	'PAKUNDIA',	'TARAIL'],
'KURIGRAM' : ['BHURUNGAMARI',	'CHAR RAJIBPUR',	'CHILMARI',	'DUSMARA',	'KACHAKATA',	'KURIGRAM SADAR',	'NAGESHWARI',	'PHULBARI',	'RAJARHAT',	'ROWMARI',	'ULIPUR'],
'KUSHTIA' : ['BHERAMARA',	'DAULATPUR',	'ISLAMIC UNIVERSITY',	'KHOKSA',	'KUMARKHALI',	'KUSHTIA MODEL',	'MIRPUR'],
'LAKSHMIPUR' : ['CHANDRAGONJ',	'KAMALNAGAR',	'LAKSHMIPUR SADAR',	'RAIPUR',	'RAMGANJ',	'RAMGATI'],
'LALMONIRHAT' : ['ADITMARI',	'HATIBANDHA',	'KALIGANJ',	'LALMONIRHAT',	'PATGRAM'],
'MADARIPUR' : ['DASHAR',	'KALKINI',	'MADARIPUR SADAR',	'RAJOIR',	'SHIBCHAR'],
'MAGURA' : ['MAGURA SADAR',	'MOHAMMADPUR',	'SHALIKHA',	'SREEPUR'],
'MANIKGANJ' : ['DAULATPUR',	'GHIOR',	'HARIRAMPUR',	'MANIKGANJ SADAR',	'SATURIA',	'SHIBALAYA',	'SINGAIR'],
'MEHERPUR' : ['GANGNI',	'MEHERPUR SADAR',	'MUJIBNAGAR'],
'MOULVIBAZAR' : ['BARLEKHA',	'JURI',	'KOMOLGANJ',	'KULAURA',	'MOULVIBAZAR SADAR',	'RAJNAGAR',	'SRIMANGAL'],
'MUNSHIGANJ' : ['GAZARIA',	'LOUHAJONG',	'MUNSHIGANJ',	'PADMA SETU NORTH',	'SIRAJDIKHAN',	'SREENAGAR',	'TONGIBARI'],
'MYMENSINGH' : ['BHALUKA',	'DHOBAURA',	'FULBARIA',	'GAFORGAON',	'GOURIPUR',	'HALUAGHAT',	'ISHWARGANJ',	'KOTWALI',	'MUKTAGACHA',	'NANDAIL',	'PAGLA',	'PHULPUR',	'TARAKANDA',	'TRISHAL'],
'NAOGAON' : ['ATRAI',	'BADALGACHHI',	'DHAMOIRHAT',	'MAHADEBPUR',	'MANDA',	'NAOGAON SADAR',	'NIAMATPUR',	'PATNITALA',	'PORSHA',	'RANINAGAR',	'SAPAHAR'],
'NARAIL' : ['KALIA',	'LOHAGARA',	'NARAGATI',	'NARAIL SADAR'],
'NARAYANGANJ' : ['ARAIHAZAR',	'BANDAR',	'FATULLAH',	'NARAYANGANJ SADAR',	'RUPGANJ',	'SIDDHIRGANJ',	'SONARGAON'],
'NARSINGDI' : ['BELABO',	'MADHABDI',	'MONOHARDI',	'NARSINGDI SADAR',	'PALASH',	'RAIPURA',	'SHIBPUR'],
'NATORE' : ['BAGATIPARA',	'BARAIGRAM',	'GURUDASPUR',	'LALPUR',	'NALDANGA',	'NATORE',	'SINGRA'],
'NETROKONA' : ['ATPARA',	'BARHATTA',	'DURGAPUR',	'KALMAKANDA',	'KENDUA',	'KHALIAJURI',	'MODON',	'MOHANGANJ',	'NETROKONA SADAR ',	'PURBODHALA'],
'NILPHAMARI' : ['DIMLA',	'DOMAR',	'JALDHAKA',	'KISHOREGANJ',	'NILPHAMARI SADAR',	'SAIDPUR'],
'NOAKHALI' : ['BEGUMGANJ',	'BHASAN CHAR',	'CHARJABBAR',	'CHATKHIL',	'COMPANIGONJ',	'HATIYA',	'KABIRHAT',	'SENBAGH',	'SONAIMURI',	'SUDHARAM'],
'PABNA' : ['AMINPUR',	'ATAIKULA',	'ATGHARIA',	'BERA',	'BHANGURA',	'CHATMOHAR',	'FARIDPUR',	'ISHWARDI',	'PABNA SADAR',	'SANTHIA',	'SUJANAGAR'],
'PANCHAGARH' : ['ATWARI',	'BODA',	'DEBIGANJ',	'PANCHAGARH SADAR',	'TETULIA'],
'PATUAKHALI' : ['BAUPHAL',	'DASHMINA',	'DUMKI',	'GALACHIPA',	'KALAPARA',	'MIRZAGANJ',	'MOHIPUR',	'PATUAKHALI SADAR',	'RANGABALI'],
'PIROJPUR' : ['BHANDARIA',	'INDURKANI',	'KAWKHALI',	'MATHBARIA',	'NAZIRPUR',	'NESARABAD',	'PIROJPUR SADAR'],
'RAJBARI' : ['BALIAKANDI',	'GOALANDA GHAT',	'KALUKHALI',	'PANGSHA',	'RAJBARI'],
'RAJSHAHI' : ['AIRPORT',	'BAGHA',	'BAGMARA',	'BILPUKUR',	'BOALIA MODEL',	'CHANDRIMA',	'CHARGHAT',	'DAMKURA',	'DURGAPUR',	'GODAGARI',	'KASHIADANGA',	'KATAKHALI',	'KORNAHAR',	'MOHANPUR',	'MOTIHAR',	'PABA',	'PUTHIA',	'RAJPARA',	'SHAH MAKHDUM',	'TANOR'],
'RANGAMATI' : ['BAGHAICHHARI',	'BARKAL',	'BELAICHHARI',	'CHANDROGHONA',	'JURAICHHARI',	'KAPTAI	','KAWKHALI',	'KOTWALI',	'LANGADU',	'NANIARCHAR',	'RAJASTHALI',	'SAJEK'],
'RANGPUR' : ['BADARGANJ',	'GANGACHARA',	'HARAGACH',	'HAZIRHAT',	'KAUNIA',	'KOTWALI METRO',	'MAHIGONJ',	'MITHA PUKUR',	'PIRGACHHA',	'PIRGANJ',	'PORSHURAM',	'RANGPUR SADAR',	'TAJHAT',	'TARAGANJ'  ],
'SATKHIRA' : ['ASHASHUNI',	'DEBHATA',	'KALAROA',	'KALIGANJ',	'PATKELGHATA',	'SATKHIRA SADAR',	'SHYAMNAGAR',	'TALA'],
'SHARIATPUR' : ['BHEDARGANJ',	'DAMUDYA',	'GOSAIRHAT',	'JAJIRA',	'NARIA',	'PADMA SETU SOUTH',	'PALONG MODEL',	'SHAKHIPUR'],
'SHERPUR' : ['JHINAIGATI',	'NAKLA',	'NALITABARI',	'SHERPUR',	'SRIBARDI'],
'SIRAJGANJ' : ['BANGABANDHU SETU WEST',	'BELKUCHI',	'CHOWHALI',	'ENAYETPUR',	'KAMARKHANDA',	'KAZIPUR',	'RAIGONJ',	'SALANGA',	'SHAHZADPUR',	'SIRAJGANJ',	'TARASH',	'ULLAPARA MODEL'],
'SUNAMGANJ' : ['BISHWAMBARPUR',	'CHHATAK',	'DAKSHIN SUNAMGANJ',	'DERAI',	'DHARAMPASHA',	'DOWARABAZAR',	'JAGANNATHPUR',	'JAMALGANJ',	'MADHANAGAR',	'SULLAH',	'SUNAMGANJ SADAR',	'TAHIRPUR'],
'SYLHET' : ['AIRPORT',	'BALAGANJ',	'BEANIBAZAR',	'BISHWANATH',	'COMPANYGONJ',	'FENCHUGONJ',	'GOLAPGONJ',	'GOWAINGHAT',	'JAINTAPUR',	'JALALABAD',	'KANAIGHAT',	'KOTWALI',	'MOGLABAZAR',	'OSMANINAGAR',	'SHAHPORAN',	'SOUTH SURMA',	'ZOKIGANJ'],
'TANGAIL' : ['BANGABANDHU SETU EAST',	'BASAIL',	'BHUAPUR',	'DELDUAR',	'DHANBARI',	'GHATAIL',	'GOPALPUR',	'KALIHATI',	'MADHUPUR',	'MIRZAPUR',	'NAGARPUR',	'SAKHIPUR',	'TANGAIL SADAR'],
'THAKURGAON' : ['BALIADANGI',	'HARIPUR',	'PIRGANJ',	'RANISANKAIL',	'RUHIA',	'THAKURGAON SADAR']









};
  ddlcascade('country', 'city', select);
}





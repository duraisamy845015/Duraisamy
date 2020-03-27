$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/OpencartTestFile.feature");
formatter.feature({
  "line": 2,
  "name": "OpenCart Website",
  "description": "",
  "id": "opencart-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"\u003cfirst\u003e\" and \"\u003clast\u003e\"and \"\u003cemail\u003e\"and\"\u003ctelephone\u003e\"and\"\u003caddress\u003e\"and\"\u003ccity\u003e\"and\"\u003cpost\u003e\"and\"\u003ccountry\u003e\"and\"\u003cregion\u003e\"and\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"\u003cregister\u003e\" to create a new account",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;",
  "rows": [
    {
      "cells": [
        "first",
        "last",
        "email",
        "telephone",
        "address",
        "city",
        "post",
        "country",
        "region",
        "password",
        "register"
      ],
      "line": 11,
      "id": "opencart-website;to-register-in-the-opencart;;1"
    },
    {
      "cells": [
        "akil",
        "kumar",
        "akil@gmail.com",
        "23456789",
        "ganhi street",
        "chennai",
        "600002",
        "India",
        "Tamil",
        "password",
        "register1"
      ],
      "line": 12,
      "id": "opencart-website;to-register-in-the-opencart;;2"
    },
    {
      "cells": [
        "jothi",
        "kumar",
        "jk98@gmail.com",
        "23458796",
        "nehru street",
        "chennai",
        "600065",
        "India",
        "Tamil",
        "paswords",
        "register2"
      ],
      "line": 13,
      "id": "opencart-website;to-register-in-the-opencart;;3"
    },
    {
      "cells": [
        "mangal",
        "pandi",
        "mp2@gmail.com",
        "23905678",
        "bose street",
        "chennai",
        "600078",
        "India",
        "Tamil",
        "passwopd",
        "register3"
      ],
      "line": 14,
      "id": "opencart-website;to-register-in-the-opencart;;4"
    },
    {
      "cells": [
        "john",
        "kevin",
        "john1998@gmail.com",
        "25646789",
        "gundu street",
        "mumbai",
        "654378",
        "India",
        "Maha",
        "opencart1",
        "register4"
      ],
      "line": 15,
      "id": "opencart-website;to-register-in-the-opencart;;5"
    },
    {
      "cells": [
        "kanna",
        "suresh",
        "ks987@gmail.com",
        "24680876",
        "Kongu street",
        "pune",
        "543789",
        "India",
        "Maha",
        "opencart2",
        "register5"
      ],
      "line": 16,
      "id": "opencart-website;to-register-in-the-opencart;;6"
    },
    {
      "cells": [
        "suresh",
        "Pillai",
        "han765@gmail.com",
        "23456789",
        "Jothi street",
        "chennai",
        "609876",
        "India",
        "Tamil",
        "openc@rt3",
        "register6"
      ],
      "line": 17,
      "id": "opencart-website;to-register-in-the-opencart;;7"
    },
    {
      "cells": [
        "mukil",
        "gnaesh",
        "mge98@gmail.com",
        "24365789",
        "Rahl street",
        "chennai",
        "600034",
        "India",
        "Tamil",
        "openc@rt4",
        "register7"
      ],
      "line": 18,
      "id": "opencart-website;to-register-in-the-opencart;;8"
    },
    {
      "cells": [
        "Surya",
        "kumarr",
        "sk1998@gmail.com",
        "23098475",
        "mei street",
        "chennai",
        "654890",
        "India",
        "Tamil",
        "opencart6",
        "register8"
      ],
      "line": 19,
      "id": "opencart-website;to-register-in-the-opencart;;9"
    },
    {
      "cells": [
        "karthi",
        "keyan",
        "kk90@gmail.com",
        "23456755",
        "ruba street",
        "chennai",
        "987069",
        "India",
        "Tamil",
        "openca#t5",
        "register9"
      ],
      "line": 20,
      "id": "opencart-website;to-register-in-the-opencart;;10"
    },
    {
      "cells": [
        "maneesh",
        "erat",
        "man1@gmail.com",
        "23434556",
        "Palaka street",
        "kerala",
        "767987",
        "India",
        "ker",
        "opencart0",
        "register10"
      ],
      "line": 21,
      "id": "opencart-website;to-register-in-the-opencart;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"akil\" and \"kumar\"and \"akil@gmail.com\"and\"23456789\"and\"ganhi street\"and\"chennai\"and\"600002\"and\"India\"and\"Tamil\"and\"password\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register1\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 6864656838,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 5905504192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akil",
      "offset": 20
    },
    {
      "val": "kumar",
      "offset": 31
    },
    {
      "val": "akil@gmail.com",
      "offset": 42
    },
    {
      "val": "23456789",
      "offset": 61
    },
    {
      "val": "ganhi street",
      "offset": 74
    },
    {
      "val": "chennai",
      "offset": 91
    },
    {
      "val": "600002",
      "offset": 103
    },
    {
      "val": "India",
      "offset": 114
    },
    {
      "val": "Tamil",
      "offset": 124
    },
    {
      "val": "password",
      "offset": 134
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 23386555394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register1",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7566093137,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"jothi\" and \"kumar\"and \"jk98@gmail.com\"and\"23458796\"and\"nehru street\"and\"chennai\"and\"600065\"and\"India\"and\"Tamil\"and\"paswords\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register2\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3700829366,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 3817301636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jothi",
      "offset": 20
    },
    {
      "val": "kumar",
      "offset": 32
    },
    {
      "val": "jk98@gmail.com",
      "offset": 43
    },
    {
      "val": "23458796",
      "offset": 62
    },
    {
      "val": "nehru street",
      "offset": 75
    },
    {
      "val": "chennai",
      "offset": 92
    },
    {
      "val": "600065",
      "offset": 104
    },
    {
      "val": "India",
      "offset": 115
    },
    {
      "val": "Tamil",
      "offset": 125
    },
    {
      "val": "paswords",
      "offset": 135
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 23847314708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register2",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 8024621122,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"mangal\" and \"pandi\"and \"mp2@gmail.com\"and\"23905678\"and\"bose street\"and\"chennai\"and\"600078\"and\"India\"and\"Tamil\"and\"passwopd\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register3\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3828322057,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 3971073436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mangal",
      "offset": 20
    },
    {
      "val": "pandi",
      "offset": 33
    },
    {
      "val": "mp2@gmail.com",
      "offset": 44
    },
    {
      "val": "23905678",
      "offset": 62
    },
    {
      "val": "bose street",
      "offset": 75
    },
    {
      "val": "chennai",
      "offset": 91
    },
    {
      "val": "600078",
      "offset": 103
    },
    {
      "val": "India",
      "offset": 114
    },
    {
      "val": "Tamil",
      "offset": 124
    },
    {
      "val": "passwopd",
      "offset": 134
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24835077623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register3",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7449031660,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"john\" and \"kevin\"and \"john1998@gmail.com\"and\"25646789\"and\"gundu street\"and\"mumbai\"and\"654378\"and\"India\"and\"Maha\"and\"opencart1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register4\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3700412304,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 3989878082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 20
    },
    {
      "val": "kevin",
      "offset": 31
    },
    {
      "val": "john1998@gmail.com",
      "offset": 42
    },
    {
      "val": "25646789",
      "offset": 65
    },
    {
      "val": "gundu street",
      "offset": 78
    },
    {
      "val": "mumbai",
      "offset": 95
    },
    {
      "val": "654378",
      "offset": 106
    },
    {
      "val": "India",
      "offset": 117
    },
    {
      "val": "Maha",
      "offset": 127
    },
    {
      "val": "opencart1",
      "offset": 136
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24235377871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register4",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7093473213,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"kanna\" and \"suresh\"and \"ks987@gmail.com\"and\"24680876\"and\"Kongu street\"and\"pune\"and\"543789\"and\"India\"and\"Maha\"and\"opencart2\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register5\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3927364494,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 4088424150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kanna",
      "offset": 20
    },
    {
      "val": "suresh",
      "offset": 32
    },
    {
      "val": "ks987@gmail.com",
      "offset": 44
    },
    {
      "val": "24680876",
      "offset": 64
    },
    {
      "val": "Kongu street",
      "offset": 77
    },
    {
      "val": "pune",
      "offset": 94
    },
    {
      "val": "543789",
      "offset": 103
    },
    {
      "val": "India",
      "offset": 114
    },
    {
      "val": "Maha",
      "offset": 124
    },
    {
      "val": "opencart2",
      "offset": 133
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 23828572575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register5",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 6926960028,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"suresh\" and \"Pillai\"and \"han765@gmail.com\"and\"23456789\"and\"Jothi street\"and\"chennai\"and\"609876\"and\"India\"and\"Tamil\"and\"openc@rt3\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register6\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3768143365,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 4042343926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suresh",
      "offset": 20
    },
    {
      "val": "Pillai",
      "offset": 33
    },
    {
      "val": "han765@gmail.com",
      "offset": 45
    },
    {
      "val": "23456789",
      "offset": 66
    },
    {
      "val": "Jothi street",
      "offset": 79
    },
    {
      "val": "chennai",
      "offset": 96
    },
    {
      "val": "609876",
      "offset": 108
    },
    {
      "val": "India",
      "offset": 119
    },
    {
      "val": "Tamil",
      "offset": 129
    },
    {
      "val": "openc@rt3",
      "offset": 139
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25009372699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register6",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7207808857,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"mukil\" and \"gnaesh\"and \"mge98@gmail.com\"and\"24365789\"and\"Rahl street\"and\"chennai\"and\"600034\"and\"India\"and\"Tamil\"and\"openc@rt4\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register7\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3958978170,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 5312267968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukil",
      "offset": 20
    },
    {
      "val": "gnaesh",
      "offset": 32
    },
    {
      "val": "mge98@gmail.com",
      "offset": 44
    },
    {
      "val": "24365789",
      "offset": 64
    },
    {
      "val": "Rahl street",
      "offset": 77
    },
    {
      "val": "chennai",
      "offset": 93
    },
    {
      "val": "600034",
      "offset": 105
    },
    {
      "val": "India",
      "offset": 116
    },
    {
      "val": "Tamil",
      "offset": 126
    },
    {
      "val": "openc@rt4",
      "offset": 136
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25006262928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register7",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 6911082280,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"Surya\" and \"kumarr\"and \"sk1998@gmail.com\"and\"23098475\"and\"mei street\"and\"chennai\"and\"654890\"and\"India\"and\"Tamil\"and\"opencart6\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register8\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3712404004,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 3625697553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surya",
      "offset": 20
    },
    {
      "val": "kumarr",
      "offset": 32
    },
    {
      "val": "sk1998@gmail.com",
      "offset": 44
    },
    {
      "val": "23098475",
      "offset": 65
    },
    {
      "val": "mei street",
      "offset": 78
    },
    {
      "val": "chennai",
      "offset": 93
    },
    {
      "val": "654890",
      "offset": 105
    },
    {
      "val": "India",
      "offset": 116
    },
    {
      "val": "Tamil",
      "offset": 126
    },
    {
      "val": "opencart6",
      "offset": 136
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 23991657826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register8",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7222143848,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"karthi\" and \"keyan\"and \"kk90@gmail.com\"and\"23456755\"and\"ruba street\"and\"chennai\"and\"987069\"and\"India\"and\"Tamil\"and\"openca#t5\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register9\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 4074635910,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 3671877609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karthi",
      "offset": 20
    },
    {
      "val": "keyan",
      "offset": 33
    },
    {
      "val": "kk90@gmail.com",
      "offset": 44
    },
    {
      "val": "23456755",
      "offset": 63
    },
    {
      "val": "ruba street",
      "offset": 76
    },
    {
      "val": "chennai",
      "offset": 92
    },
    {
      "val": "987069",
      "offset": 104
    },
    {
      "val": "India",
      "offset": 115
    },
    {
      "val": "Tamil",
      "offset": 125
    },
    {
      "val": "openca#t5",
      "offset": 135
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 23213802141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register9",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7477855592,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"maneesh\" and \"erat\"and \"man1@gmail.com\"and\"23434556\"and\"Palaka street\"and\"kerala\"and\"767987\"and\"India\"and\"ker\"and\"opencart0\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register10\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 4049290295,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 3626377261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maneesh",
      "offset": 20
    },
    {
      "val": "erat",
      "offset": 34
    },
    {
      "val": "man1@gmail.com",
      "offset": 44
    },
    {
      "val": "23434556",
      "offset": 63
    },
    {
      "val": "Palaka street",
      "offset": 76
    },
    {
      "val": "kerala",
      "offset": 94
    },
    {
      "val": "767987",
      "offset": 105
    },
    {
      "val": "India",
      "offset": 116
    },
    {
      "val": "ker",
      "offset": 126
    },
    {
      "val": "opencart0",
      "offset": 134
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25703153530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register10",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7135853993,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the \"\u003clogin\u003e\" button user nagivate to the next page",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "login"
      ],
      "line": 31,
      "id": "opencart-website;to-login-in-the-opencart;;1"
    },
    {
      "cells": [
        "akil@gmail.com",
        "password",
        "login1"
      ],
      "line": 32,
      "id": "opencart-website;to-login-in-the-opencart;;2"
    },
    {
      "cells": [
        "jk98@gmail.com",
        "paswords",
        "login2"
      ],
      "line": 33,
      "id": "opencart-website;to-login-in-the-opencart;;3"
    },
    {
      "cells": [
        "mp2@gmail.com",
        "passwopd",
        "login3"
      ],
      "line": 34,
      "id": "opencart-website;to-login-in-the-opencart;;4"
    },
    {
      "cells": [
        "john1998@gmail.com",
        "opencart1",
        "login4"
      ],
      "line": 35,
      "id": "opencart-website;to-login-in-the-opencart;;5"
    },
    {
      "cells": [
        "ks987@gmail.com",
        "opencart2",
        "login5"
      ],
      "line": 36,
      "id": "opencart-website;to-login-in-the-opencart;;6"
    },
    {
      "cells": [
        "han765@gmail.com",
        "openc@rt3",
        "login6"
      ],
      "line": 37,
      "id": "opencart-website;to-login-in-the-opencart;;7"
    },
    {
      "cells": [
        "mge98@gmail.com",
        "openc@rt4",
        "login7"
      ],
      "line": 38,
      "id": "opencart-website;to-login-in-the-opencart;;8"
    },
    {
      "cells": [
        "sk1998@gmail.com",
        "opencart6",
        "login8"
      ],
      "line": 39,
      "id": "opencart-website;to-login-in-the-opencart;;9"
    },
    {
      "cells": [
        "kk90@gmail.com",
        "openca#t5",
        "login9"
      ],
      "line": 40,
      "id": "opencart-website;to-login-in-the-opencart;;10"
    },
    {
      "cells": [
        "man1@gmail.com",
        "opencart0",
        "login10"
      ],
      "line": 41,
      "id": "opencart-website;to-login-in-the-opencart;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 23,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user login using \"akil@gmail.com\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the \"login1\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3908285539,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 4436769383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akil@gmail.com",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 43
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 8277446087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login1",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5241276452,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 23,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user login using \"jk98@gmail.com\" and \"paswords\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the \"login2\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3681023118,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3706671033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jk98@gmail.com",
      "offset": 22
    },
    {
      "val": "paswords",
      "offset": 43
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 9037022420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login2",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 6031580086,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 23,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user login using \"mp2@gmail.com\" and \"passwopd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the \"login3\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3900763028,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3821024872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mp2@gmail.com",
      "offset": 22
    },
    {
      "val": "passwopd",
      "offset": 42
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 8766531098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login3",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5256075157,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 23,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user login using \"john1998@gmail.com\" and \"opencart1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the \"login4\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3626489224,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 4146640225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john1998@gmail.com",
      "offset": 22
    },
    {
      "val": "opencart1",
      "offset": 47
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 12754581851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login4",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5417785130,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 23,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user login using \"ks987@gmail.com\" and \"opencart2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the \"login5\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3768255328,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3618537521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ks987@gmail.com",
      "offset": 22
    },
    {
      "val": "opencart2",
      "offset": 44
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 6644042684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login5",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5166608353,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 23,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user login using \"han765@gmail.com\" and \"openc@rt3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the \"login6\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3785464502,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3428272328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "han765@gmail.com",
      "offset": 22
    },
    {
      "val": "openc@rt3",
      "offset": 45
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 7827529920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login6",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5203033170,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 23,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user login using \"mge98@gmail.com\" and \"openc@rt4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the \"login7\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3915411515,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 4165872663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mge98@gmail.com",
      "offset": 22
    },
    {
      "val": "openc@rt4",
      "offset": 44
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 6432373438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login7",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5078154813,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 23,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user login using \"sk1998@gmail.com\" and \"opencart6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the \"login8\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3766085579,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3552796601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sk1998@gmail.com",
      "offset": 22
    },
    {
      "val": "opencart6",
      "offset": 45
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 7960881074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login8",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5225297472,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 23,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user login using \"kk90@gmail.com\" and \"openca#t5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the \"login9\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3721968439,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3579090637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kk90@gmail.com",
      "offset": 22
    },
    {
      "val": "openca#t5",
      "offset": 43
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 7597411510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login9",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5116933652,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 23,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user login using \"man1@gmail.com\" and \"opencart0\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the \"login10\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3924801010,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3478295980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "man1@gmail.com",
      "offset": 22
    },
    {
      "val": "opencart0",
      "offset": 43
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 8072797385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login10",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5111384487,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the user giving invalid details \"\u003cuser\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on \"\u003clogin\u003e\" appropriate error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;",
  "rows": [
    {
      "cells": [
        "user",
        "pass",
        "login"
      ],
      "line": 51,
      "id": "opencart-website;to-login-with-invalid-details;;1"
    },
    {
      "cells": [
        "ak",
        "1234",
        "testcase1"
      ],
      "line": 52,
      "id": "opencart-website;to-login-with-invalid-details;;2"
    },
    {
      "cells": [
        "jk98",
        "paswords",
        "testcase2"
      ],
      "line": 53,
      "id": "opencart-website;to-login-with-invalid-details;;3"
    },
    {
      "cells": [
        "mp2",
        "passwopd",
        "testcase3"
      ],
      "line": 54,
      "id": "opencart-website;to-login-with-invalid-details;;4"
    },
    {
      "cells": [
        "john1998",
        "opencart1",
        "testcase4"
      ],
      "line": 55,
      "id": "opencart-website;to-login-with-invalid-details;;5"
    },
    {
      "cells": [
        "ks987",
        "opencart2",
        "testcase5"
      ],
      "line": 56,
      "id": "opencart-website;to-login-with-invalid-details;;6"
    },
    {
      "cells": [
        "han765",
        "openc@rt3",
        "testcase6"
      ],
      "line": 57,
      "id": "opencart-website;to-login-with-invalid-details;;7"
    },
    {
      "cells": [
        "mge98",
        "openc@rt4",
        "testcase7"
      ],
      "line": 58,
      "id": "opencart-website;to-login-with-invalid-details;;8"
    },
    {
      "cells": [
        "sk1998",
        "opencart6",
        "testcase8"
      ],
      "line": 59,
      "id": "opencart-website;to-login-with-invalid-details;;9"
    },
    {
      "cells": [
        "kk90",
        "openca#t5",
        "testcase9"
      ],
      "line": 60,
      "id": "opencart-website;to-login-with-invalid-details;;10"
    },
    {
      "cells": [
        "man1",
        "opencart0",
        "testcase10"
      ],
      "line": 61,
      "id": "opencart-website;to-login-with-invalid-details;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 52,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 43,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the user giving invalid details \"ak\" and \"1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on \"testcase1\" appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 3957271668,
  "status": "passed"
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 3494041238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ak",
      "offset": 33
    },
    {
      "val": "1234",
      "offset": 42
    }
  ],
  "location": "InvalidDetailsLogin.the_user_giving_invalid_details_and(String,String)"
});
formatter.result({
  "duration": 7361637570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase1",
      "offset": 10
    }
  ],
  "location": "InvalidDetailsLogin.click_on_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 4976958022,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 43,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the user giving invalid details \"jk98\" and \"paswords\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on \"testcase2\" appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 3714942764,
  "status": "passed"
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 3762514427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jk98",
      "offset": 33
    },
    {
      "val": "paswords",
      "offset": 44
    }
  ],
  "location": "InvalidDetailsLogin.the_user_giving_invalid_details_and(String,String)"
});
formatter.result({
  "duration": 9454998353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase2",
      "offset": 10
    }
  ],
  "location": "InvalidDetailsLogin.click_on_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 4554507769,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 43,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the user giving invalid details \"mp2\" and \"passwopd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on \"testcase3\" appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 3930645009,
  "status": "passed"
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 3630817059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mp2",
      "offset": 33
    },
    {
      "val": "passwopd",
      "offset": 43
    }
  ],
  "location": "InvalidDetailsLogin.the_user_giving_invalid_details_and(String,String)"
});
formatter.result({
  "duration": 8224414830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase3",
      "offset": 10
    }
  ],
  "location": "InvalidDetailsLogin.click_on_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 8917446909,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 43,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the user giving invalid details \"john1998\" and \"opencart1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on \"testcase4\" appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 3530513173,
  "status": "passed"
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 3528655055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john1998",
      "offset": 33
    },
    {
      "val": "opencart1",
      "offset": 48
    }
  ],
  "location": "InvalidDetailsLogin.the_user_giving_invalid_details_and(String,String)"
});
formatter.result({
  "duration": 7104571541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase4",
      "offset": 10
    }
  ],
  "location": "InvalidDetailsLogin.click_on_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 4872546028,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 43,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the user giving invalid details \"ks987\" and \"opencart2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on \"testcase5\" appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 3757856768,
  "status": "passed"
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 3401865396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ks987",
      "offset": 33
    },
    {
      "val": "opencart2",
      "offset": 45
    }
  ],
  "location": "InvalidDetailsLogin.the_user_giving_invalid_details_and(String,String)"
});
formatter.result({
  "duration": 8112158431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase5",
      "offset": 10
    }
  ],
  "location": "InvalidDetailsLogin.click_on_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 5102340679,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 43,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the user giving invalid details \"han765\" and \"openc@rt3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on \"testcase6\" appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 3835403715,
  "status": "passed"
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 3619197170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "han765",
      "offset": 33
    },
    {
      "val": "openc@rt3",
      "offset": 46
    }
  ],
  "location": "InvalidDetailsLogin.the_user_giving_invalid_details_and(String,String)"
});
formatter.result({
  "duration": 7465129135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase6",
      "offset": 10
    }
  ],
  "location": "InvalidDetailsLogin.click_on_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 4669417223,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 43,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the user giving invalid details \"mge98\" and \"openc@rt4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on \"testcase7\" appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 3850666599,
  "status": "passed"
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 3401575692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mge98",
      "offset": 33
    },
    {
      "val": "openc@rt4",
      "offset": 45
    }
  ],
  "location": "InvalidDetailsLogin.the_user_giving_invalid_details_and(String,String)"
});
formatter.result({
  "duration": 8330512800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase7",
      "offset": 10
    }
  ],
  "location": "InvalidDetailsLogin.click_on_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 5007297187,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 43,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the user giving invalid details \"sk1998\" and \"opencart6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on \"testcase8\" appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 3990078216,
  "status": "passed"
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 3825270601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sk1998",
      "offset": 33
    },
    {
      "val": "opencart6",
      "offset": 46
    }
  ],
  "location": "InvalidDetailsLogin.the_user_giving_invalid_details_and(String,String)"
});
formatter.result({
  "duration": 8239190676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase8",
      "offset": 10
    }
  ],
  "location": "InvalidDetailsLogin.click_on_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 6149612375,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 43,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the user giving invalid details \"kk90\" and \"openca#t5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on \"testcase9\" appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 3969692559,
  "status": "passed"
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 3569035430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kk90",
      "offset": 33
    },
    {
      "val": "openca#t5",
      "offset": 44
    }
  ],
  "location": "InvalidDetailsLogin.the_user_giving_invalid_details_and(String,String)"
});
formatter.result({
  "duration": 7353180634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase9",
      "offset": 10
    }
  ],
  "location": "InvalidDetailsLogin.click_on_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 5150136735,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 43,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the user giving invalid details \"man1\" and \"opencart0\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on \"testcase10\" appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 3925920639,
  "status": "passed"
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 3891546143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "man1",
      "offset": 33
    },
    {
      "val": "opencart0",
      "offset": 44
    }
  ],
  "location": "InvalidDetailsLogin.the_user_giving_invalid_details_and(String,String)"
});
formatter.result({
  "duration": 8425414007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase10",
      "offset": 10
    }
  ],
  "location": "InvalidDetailsLogin.click_on_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 6074004252,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 63,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the user gives the \"\u003cfirst\u003e\" and \"\u003clast\u003e\"and \"\u003cemail\u003e\"and\"\u003ctelephone\u003e\"and\"\u003caddress\u003e\"and\"\u003ccity\u003e\"and\"\u003cpost\u003e\"and\"\u003ccountry\u003e\"and\"\u003cregion\u003e\"and\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "the user click on \"\u003cregister\u003e\" to create a new account",
  "keyword": "Then "
});
formatter.examples({
  "line": 70,
  "name": "",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;",
  "rows": [
    {
      "cells": [
        "first",
        "last",
        "email",
        "telephone",
        "address",
        "city",
        "post",
        "country",
        "region",
        "password",
        "register"
      ],
      "line": 71,
      "id": "opencart-website;to-register-with-invalid-email-details;;1"
    },
    {
      "cells": [
        "akil",
        "kumar",
        "akil.gmail.com",
        "23456789",
        "ganhi street",
        "chennai",
        "600002",
        "India",
        "Tamil",
        "password",
        "testcase11"
      ],
      "line": 72,
      "id": "opencart-website;to-register-with-invalid-email-details;;2"
    },
    {
      "cells": [
        "jothi",
        "kumar",
        "jk98%gmail.com",
        "23458796",
        "nehru street",
        "chennai",
        "600065",
        "India",
        "Tamil",
        "paswords",
        "testcase12"
      ],
      "line": 73,
      "id": "opencart-website;to-register-with-invalid-email-details;;3"
    },
    {
      "cells": [
        "mangal",
        "pandi",
        "mp2*gmail.com",
        "23905678",
        "bose street",
        "chennai",
        "600078",
        "India",
        "Tamil",
        "passwopd",
        "testcase13"
      ],
      "line": 74,
      "id": "opencart-website;to-register-with-invalid-email-details;;4"
    },
    {
      "cells": [
        "john",
        "kevin",
        "john1998\u003dgmail.com",
        "25646789",
        "gundu street",
        "mumbai",
        "654378",
        "India",
        "Maha",
        "opencart1",
        "testcase14"
      ],
      "line": 75,
      "id": "opencart-website;to-register-with-invalid-email-details;;5"
    },
    {
      "cells": [
        "kanna",
        "suresh",
        "ks987-gmail.com",
        "24680876",
        "Kongu street",
        "pune",
        "543789",
        "India",
        "Maha",
        "opencart2",
        "testcase15"
      ],
      "line": 76,
      "id": "opencart-website;to-register-with-invalid-email-details;;6"
    },
    {
      "cells": [
        "suresh",
        "Pillai",
        "han765\u0027gmail.com",
        "23456789",
        "Jothi street",
        "chennai",
        "609876",
        "India",
        "Tamil",
        "openc@rt3",
        "testcase16"
      ],
      "line": 77,
      "id": "opencart-website;to-register-with-invalid-email-details;;7"
    },
    {
      "cells": [
        "mukil",
        "gnaesh",
        "mge98[gmail.com",
        "24365789",
        "Rahl street",
        "chennai",
        "600034",
        "India",
        "Tamil",
        "openc@rt4",
        "testcase17"
      ],
      "line": 78,
      "id": "opencart-website;to-register-with-invalid-email-details;;8"
    },
    {
      "cells": [
        "Surya",
        "kumarr",
        "sk1998/gmail.com",
        "23098475",
        "mei street",
        "chennai",
        "654890",
        "India",
        "Tamil",
        "opencart6",
        "testcase18"
      ],
      "line": 79,
      "id": "opencart-website;to-register-with-invalid-email-details;;9"
    },
    {
      "cells": [
        "karthi",
        "keyan",
        "kk90.gmail.com",
        "23456755",
        "ruba street",
        "chennai",
        "987069",
        "India",
        "Tamil",
        "openca#t5",
        "testcase19"
      ],
      "line": 80,
      "id": "opencart-website;to-register-with-invalid-email-details;;10"
    },
    {
      "cells": [
        "maneesh",
        "erat",
        "man1.gmail.com",
        "23434556",
        "Palaka street",
        "kerala",
        "767987",
        "India",
        "ker",
        "opencart0",
        "testcase20"
      ],
      "line": 81,
      "id": "opencart-website;to-register-with-invalid-email-details;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 72,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 63,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the user gives the \"akil\" and \"kumar\"and \"akil.gmail.com\"and\"23456789\"and\"ganhi street\"and\"chennai\"and\"600002\"and\"India\"and\"Tamil\"and\"password\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "the user click on \"testcase11\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_opencart_webpage()"
});
formatter.result({
  "duration": 3724076609,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_registration_webpage()"
});
formatter.result({
  "duration": 3457386430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akil",
      "offset": 20
    },
    {
      "val": "kumar",
      "offset": 31
    },
    {
      "val": "akil.gmail.com",
      "offset": 42
    },
    {
      "val": "23456789",
      "offset": 61
    },
    {
      "val": "ganhi street",
      "offset": 74
    },
    {
      "val": "chennai",
      "offset": 91
    },
    {
      "val": "600002",
      "offset": 103
    },
    {
      "val": "India",
      "offset": 114
    },
    {
      "val": "Tamil",
      "offset": 124
    },
    {
      "val": "password",
      "offset": 134
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25115957708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase11",
      "offset": 19
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 4749967111,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 63,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the user gives the \"jothi\" and \"kumar\"and \"jk98%gmail.com\"and\"23458796\"and\"nehru street\"and\"chennai\"and\"600065\"and\"India\"and\"Tamil\"and\"paswords\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "the user click on \"testcase12\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_opencart_webpage()"
});
formatter.result({
  "duration": 3953321708,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_registration_webpage()"
});
formatter.result({
  "duration": 5458377302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jothi",
      "offset": 20
    },
    {
      "val": "kumar",
      "offset": 32
    },
    {
      "val": "jk98%gmail.com",
      "offset": 43
    },
    {
      "val": "23458796",
      "offset": 62
    },
    {
      "val": "nehru street",
      "offset": 75
    },
    {
      "val": "chennai",
      "offset": 92
    },
    {
      "val": "600065",
      "offset": 104
    },
    {
      "val": "India",
      "offset": 115
    },
    {
      "val": "Tamil",
      "offset": 125
    },
    {
      "val": "paswords",
      "offset": 135
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24781623239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase12",
      "offset": 19
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 4917004655,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 63,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the user gives the \"mangal\" and \"pandi\"and \"mp2*gmail.com\"and\"23905678\"and\"bose street\"and\"chennai\"and\"600078\"and\"India\"and\"Tamil\"and\"passwopd\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "the user click on \"testcase13\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_opencart_webpage()"
});
formatter.result({
  "duration": 3928263464,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_registration_webpage()"
});
formatter.result({
  "duration": 4992483086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mangal",
      "offset": 20
    },
    {
      "val": "pandi",
      "offset": 33
    },
    {
      "val": "mp2*gmail.com",
      "offset": 44
    },
    {
      "val": "23905678",
      "offset": 62
    },
    {
      "val": "bose street",
      "offset": 75
    },
    {
      "val": "chennai",
      "offset": 91
    },
    {
      "val": "600078",
      "offset": 103
    },
    {
      "val": "India",
      "offset": 114
    },
    {
      "val": "Tamil",
      "offset": 124
    },
    {
      "val": "passwopd",
      "offset": 134
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24397776882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase13",
      "offset": 19
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 4683816594,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 63,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the user gives the \"john\" and \"kevin\"and \"john1998\u003dgmail.com\"and\"25646789\"and\"gundu street\"and\"mumbai\"and\"654378\"and\"India\"and\"Maha\"and\"opencart1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "the user click on \"testcase14\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_opencart_webpage()"
});
formatter.result({
  "duration": 3833193380,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_registration_webpage()"
});
formatter.result({
  "duration": 3819309039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 20
    },
    {
      "val": "kevin",
      "offset": 31
    },
    {
      "val": "john1998\u003dgmail.com",
      "offset": 42
    },
    {
      "val": "25646789",
      "offset": 65
    },
    {
      "val": "gundu street",
      "offset": 78
    },
    {
      "val": "mumbai",
      "offset": 95
    },
    {
      "val": "654378",
      "offset": 106
    },
    {
      "val": "India",
      "offset": 117
    },
    {
      "val": "Maha",
      "offset": 127
    },
    {
      "val": "opencart1",
      "offset": 136
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24404099057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase14",
      "offset": 19
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 4684026524,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 63,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the user gives the \"kanna\" and \"suresh\"and \"ks987-gmail.com\"and\"24680876\"and\"Kongu street\"and\"pune\"and\"543789\"and\"India\"and\"Maha\"and\"opencart2\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "the user click on \"testcase15\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_opencart_webpage()"
});
formatter.result({
  "duration": 3419140814,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_registration_webpage()"
});
formatter.result({
  "duration": 3227188712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kanna",
      "offset": 20
    },
    {
      "val": "suresh",
      "offset": 32
    },
    {
      "val": "ks987-gmail.com",
      "offset": 44
    },
    {
      "val": "24680876",
      "offset": 64
    },
    {
      "val": "Kongu street",
      "offset": 77
    },
    {
      "val": "pune",
      "offset": 94
    },
    {
      "val": "543789",
      "offset": 103
    },
    {
      "val": "India",
      "offset": 114
    },
    {
      "val": "Maha",
      "offset": 124
    },
    {
      "val": "opencart2",
      "offset": 133
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 23957771302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase15",
      "offset": 19
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 4469424315,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 63,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the user gives the \"suresh\" and \"Pillai\"and \"han765\u0027gmail.com\"and\"23456789\"and\"Jothi street\"and\"chennai\"and\"609876\"and\"India\"and\"Tamil\"and\"openc@rt3\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "the user click on \"testcase16\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_opencart_webpage()"
});
formatter.result({
  "duration": 3835452233,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_registration_webpage()"
});
formatter.result({
  "duration": 3395904302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suresh",
      "offset": 20
    },
    {
      "val": "Pillai",
      "offset": 33
    },
    {
      "val": "han765\u0027gmail.com",
      "offset": 45
    },
    {
      "val": "23456789",
      "offset": 66
    },
    {
      "val": "Jothi street",
      "offset": 79
    },
    {
      "val": "chennai",
      "offset": 96
    },
    {
      "val": "609876",
      "offset": 108
    },
    {
      "val": "India",
      "offset": 119
    },
    {
      "val": "Tamil",
      "offset": 129
    },
    {
      "val": "openc@rt3",
      "offset": 139
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 43264179876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase16",
      "offset": 19
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 9393620257,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 63,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the user gives the \"mukil\" and \"gnaesh\"and \"mge98[gmail.com\"and\"24365789\"and\"Rahl street\"and\"chennai\"and\"600034\"and\"India\"and\"Tamil\"and\"openc@rt4\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "the user click on \"testcase17\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_opencart_webpage()"
});
formatter.result({
  "duration": 3638244869,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_registration_webpage()"
});
formatter.result({
  "duration": 3091961245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukil",
      "offset": 20
    },
    {
      "val": "gnaesh",
      "offset": 32
    },
    {
      "val": "mge98[gmail.com",
      "offset": 44
    },
    {
      "val": "24365789",
      "offset": 64
    },
    {
      "val": "Rahl street",
      "offset": 77
    },
    {
      "val": "chennai",
      "offset": 93
    },
    {
      "val": "600034",
      "offset": 105
    },
    {
      "val": "India",
      "offset": 116
    },
    {
      "val": "Tamil",
      "offset": 126
    },
    {
      "val": "openc@rt4",
      "offset": 136
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 23934541320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase17",
      "offset": 19
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 4888447102,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 63,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the user gives the \"Surya\" and \"kumarr\"and \"sk1998/gmail.com\"and\"23098475\"and\"mei street\"and\"chennai\"and\"654890\"and\"India\"and\"Tamil\"and\"opencart6\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "the user click on \"testcase18\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_opencart_webpage()"
});
formatter.result({
  "duration": 3751104468,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_registration_webpage()"
});
formatter.result({
  "duration": 3562965637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surya",
      "offset": 20
    },
    {
      "val": "kumarr",
      "offset": 32
    },
    {
      "val": "sk1998/gmail.com",
      "offset": 44
    },
    {
      "val": "23098475",
      "offset": 65
    },
    {
      "val": "mei street",
      "offset": 78
    },
    {
      "val": "chennai",
      "offset": 93
    },
    {
      "val": "654890",
      "offset": 105
    },
    {
      "val": "India",
      "offset": 116
    },
    {
      "val": "Tamil",
      "offset": 126
    },
    {
      "val": "opencart6",
      "offset": 136
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 23916585727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase18",
      "offset": 19
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 4790754285,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 63,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the user gives the \"karthi\" and \"keyan\"and \"kk90.gmail.com\"and\"23456755\"and\"ruba street\"and\"chennai\"and\"987069\"and\"India\"and\"Tamil\"and\"openca#t5\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "the user click on \"testcase19\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_opencart_webpage()"
});
formatter.result({
  "duration": 3796582424,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_registration_webpage()"
});
formatter.result({
  "duration": 3642880136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karthi",
      "offset": 20
    },
    {
      "val": "keyan",
      "offset": 33
    },
    {
      "val": "kk90.gmail.com",
      "offset": 44
    },
    {
      "val": "23456755",
      "offset": 63
    },
    {
      "val": "ruba street",
      "offset": 76
    },
    {
      "val": "chennai",
      "offset": 92
    },
    {
      "val": "987069",
      "offset": 104
    },
    {
      "val": "India",
      "offset": 115
    },
    {
      "val": "Tamil",
      "offset": 125
    },
    {
      "val": "openca#t5",
      "offset": 135
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 23547178393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase19",
      "offset": 19
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 4844068249,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 63,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the user gives the \"maneesh\" and \"erat\"and \"man1.gmail.com\"and\"23434556\"and\"Palaka street\"and\"kerala\"and\"767987\"and\"India\"and\"ker\"and\"opencart0\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "the user click on \"testcase20\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_opencart_webpage()"
});
formatter.result({
  "duration": 3915735741,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_registration_webpage()"
});
formatter.result({
  "duration": 3481125843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maneesh",
      "offset": 20
    },
    {
      "val": "erat",
      "offset": 34
    },
    {
      "val": "man1.gmail.com",
      "offset": 44
    },
    {
      "val": "23434556",
      "offset": 63
    },
    {
      "val": "Palaka street",
      "offset": 76
    },
    {
      "val": "kerala",
      "offset": 94
    },
    {
      "val": "767987",
      "offset": 105
    },
    {
      "val": "India",
      "offset": 116
    },
    {
      "val": "ker",
      "offset": 126
    },
    {
      "val": "opencart0",
      "offset": 134
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 22692098587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase20",
      "offset": 19
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 4943830981,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "To Display all desktops and to add a desktop",
  "description": "",
  "id": "opencart-website;to-display-all-desktops-and-to-add-a-desktop",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 83,
      "name": "@TC_05_DesktopDisplay"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "user open the opencart",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "the user clicks on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the user clicks on all desktop",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "the user adds to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopPageSteps.user_open_the_opencart()"
});
formatter.result({
  "duration": 4107554888,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.the_user_clicks_on_desktop_tab()"
});
formatter.result({
  "duration": 4276498134,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.the_user_clicks_on_all_desktop()"
});
formatter.result({
  "duration": 8919795331,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.the_user_adds_to_cart()"
});
formatter.result({
  "duration": 6412990782,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "To Choose the product and add to cart",
  "description": "",
  "id": "opencart-website;to-choose-the-product-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 90,
      "name": "@TC_06_AddtoCart"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "the user launch the web",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "the user launches the application",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "the user search for the products",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "click on add to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "addToCartstepDefinition.the_user_launch_the_web()"
});
formatter.result({
  "duration": 4164811813,
  "status": "passed"
});
formatter.match({
  "location": "addToCartstepDefinition.the_user_launches_the_application()"
});
formatter.result({
  "duration": 3395653784,
  "status": "passed"
});
formatter.match({
  "location": "addToCartstepDefinition.the_user_search_for_the_products()"
});
formatter.result({
  "duration": 22138891455,
  "status": "passed"
});
formatter.match({
  "location": "addToCartstepDefinition.click_on_add_to_cart()"
});
formatter.result({
  "duration": 2439463026,
  "status": "passed"
});
});
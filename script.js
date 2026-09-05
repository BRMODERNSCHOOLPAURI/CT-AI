/* =========================================================
   BR MODERN SCHOOL PAURI
   CT & AI LEARNING LAB
   FINAL UPDATED SCRIPT
========================================================= */


/* =========================================================
   CENTRAL CONNECTION
========================================================= */

const CENTRAL_SCRIPT_URL =
'https://script.google.com/macros/s/AKfycbyUCofbAMQEbhl-fUsqB3TNYjAU6x_UFObCQdGfteTV3QmcEUzA5sZmNbEI1GvJKhd5Zw/exec';

const CENTRAL_API = CENTRAL_SCRIPT_URL;


/* =========================================================
   GOOGLE DRIVE CLASSROOM EVIDENCE
========================================================= */

const CLASS_MEDIA_DRIVE_LINK =
'https://drive.google.com/drive/folders/1TKROa1zMEdNvEfFVKS_uw_Q30k8C-ehL?usp=sharing';


/* =========================================================
   ADMIN
========================================================= */

const ADMIN_PASSWORD = "Sristi@22";

const AUTH_KEY = "ctAdminAuthenticated";

const RESULT_KEY = "ctResults";

const SF_KEY = "ctStudentFeedback";

const TF_KEY = "ctTeacherFeedback";


/* =========================================================
   GLOBAL STATE
========================================================= */

const state = {

    name:"",
    cls:"",
    section:"",
    roll:"",

    activity:0,
    level:0,

    start:0,
    timer:null,

    total:0,
    score:0,

    nextLevel:null

};


/* =========================================================
   ACTIVITY DATA
========================================================= */

const data = {

    1:{
        title:"Time Pattern Sorter",
        phase:"PHASE I • PATTERN RECOGNITION"
    },

    2:{
        title:"Time Detective",
        phase:"PHASE II • DECODE • DECIDE • DESCRIBE"
    },

    3:{
        title:"Story Sequencing Challenge",
        phase:"PHASE III • SEQUENCE • REASON • ARRANGE"
    },

    4:{
        title:"Grammar Debugger",
        phase:"PHASE IV • FIND • FIX • EXPLAIN"
    },

    5:{
        title:"Human Chatbot Challenge",
        phase:"AI READINESS • ASK • PROCESS • RESPOND"
    }

};


/* =========================================================
   SCHOOLS
========================================================= */

const schools = [

    "Army Public School Clement Town",
    "Army Public School Lansdowne",
    "Army Public School Roorkee",
    "B R Modern School Pauri",
    "Bal Bharati Public School Kotdwar",
    "Brightlands School Dehradun",
    "Brooklyn School Dehradun",
    "Convent of Jesus and Mary Dehradun",
    "Delhi Public School Dehradun",
    "Delhi Public School Ranipur",
    "Devbhumi Public School Srinagar",
    "Doon International School",
    "Doon Public School Dehradun",
    "Grace Academy Dehradun",
    "Gyan Bharti Public School Kotdwar",
    "Guru Nanak Fifth Centenary School",
    "Heritage Academy Kotdwara",
    "Him Jyoti School Dehradun",
    "Holy Angel School Dehradun",
    "Kasiga School Dehradun",
    "Kendriya Vidyalaya Kotdwara",
    "Kendriya Vidyalaya Pauri",
    "Kendriya Vidyalaya Srinagar",
    "Mount Fort Academy",
    "Navyug Public School Kotdwar",
    "Oak Grove School",
    "Pine Hall School",
    "Rainbow Public School Srinagar",
    "SGRR Public School Dehradun",
    "SGRR Public School Kotdwar",
    "SGRR Public School Pauri",
    "St. Joseph's Academy Dehradun",
    "St. Thomas College Dehradun",
    "TCG Public School Kotdwar",
    "The Asian School Dehradun",
    "The Doon School",
    "Unison World School",
    "Welham Boys' School",
    "Welham Girls' School",
    "Woodstock School"

].sort((a,b)=>a.localeCompare(b));

schools.push("Other CBSE School");


/* =========================================================
   ACTIVITY 1
   LEVEL 1 = VERB FORM DROPDOWN
   LEVEL 2 = CONTEXT CLASSIFICATION
   LEVEL 3 = VERB FORM CHALLENGE
========================================================= */

const sortData = {


    /* =====================================================
       LEVEL 1
    ===================================================== */

    1:[

        {
            sentence:"I ___ to school yesterday.",
            options:[
                "go",
                "went",
                "going",
                "goes"
            ],
            answer:"went"
        },

        {
            sentence:"She ___ football every day.",
            options:[
                "play",
                "plays",
                "played",
                "playing"
            ],
            answer:"plays"
        },

        {
            sentence:"They are ___ cricket.",
            options:[
                "play",
                "plays",
                "played",
                "playing"
            ],
            answer:"playing"
        },

        {
            sentence:"He ___ to the library last week.",
            options:[
                "go",
                "went",
                "going",
                "goes"
            ],
            answer:"went"
        },

        {
            sentence:"We ___ English every day.",
            options:[
                "study",
                "studies",
                "studied",
                "studying"
            ],
            answer:"study"
        },

        {
            sentence:"She is ___ a book now.",
            options:[
                "read",
                "reads",
                "reading",
                "readed"
            ],
            answer:"reading"
        },

        {
            sentence:"They ___ the match yesterday.",
            options:[
                "win",
                "wins",
                "won",
                "winning"
            ],
            answer:"won"
        },

        {
            sentence:"He ___ to school every morning.",
            options:[
                "go",
                "went",
                "going",
                "goes"
            ],
            answer:"goes"
        },

        {
            sentence:"I am ___ a story.",
            options:[
                "write",
                "writes",
                "wrote",
                "writing"
            ],
            answer:"writing"
        },

        {
            sentence:"We ___ the museum last Sunday.",
            options:[
                "visit",
                "visits",
                "visited",
                "visiting"
            ],
            answer:"visited"
        }

    ],


    /* =====================================================
       LEVEL 2
    ===================================================== */

    2:[

        {
            clue:"The school trip happened two days ago.",
            sentence:"We visited the museum two days ago.",
            answer:"past"
        },

        {
            clue:"The students are doing the activity at this moment.",
            sentence:"The students are doing the activity now.",
            answer:"present"
        },

        {
            clue:"The science exhibition will happen next Friday.",
            sentence:"We will visit the science exhibition next Friday.",
            answer:"future"
        },

        {
            clue:"The football match happened yesterday.",
            sentence:"Our team played football yesterday.",
            answer:"past"
        },

        {
            clue:"The class is working on a project today.",
            sentence:"The class is working on a project today.",
            answer:"present"
        },

        {
            clue:"The annual function will happen next month.",
            sentence:"The school will hold the annual function next month.",
            answer:"future"
        },

        {
            clue:"The art competition happened last week.",
            sentence:"I participated in the art competition last week.",
            answer:"past"
        },

        {
            clue:"The teacher is explaining the rule now.",
            sentence:"The teacher is explaining the rule now.",
            answer:"present"
        },

        {
            clue:"The students will present their models tomorrow.",
            sentence:"The students will present their models tomorrow.",
            answer:"future"
        },

        {
            clue:"The reading activity happened this morning.",
            sentence:"We completed the reading activity this morning.",
            answer:"past"
        }

    ],


    /* =====================================================
       LEVEL 3
    ===================================================== */

    3:[

        {
            sentence:"I am ___ a story.",
            options:[
                "read",
                "reads",
                "reading",
                "readed"
            ],
            answer:"reading"
        },

        {
            sentence:"I am ___ to school.",
            options:[
                "go",
                "went",
                "going",
                "gone"
            ],
            answer:"going"
        },

        {
            sentence:"He did not ___ the answer.",
            options:[
                "know",
                "knows",
                "knew",
                "knowing"
            ],
            answer:"know"
        },

        {
            sentence:"He is ___ a letter.",
            options:[
                "write",
                "writes",
                "wrote",
                "writing"
            ],
            answer:"writing"
        },

        {
            sentence:"She does not ___ football.",
            options:[
                "play",
                "plays",
                "played",
                "playing"
            ],
            answer:"play"
        },

        {
            sentence:"She does not ___ coffee.",
            options:[
                "drink",
                "drinks",
                "drank",
                "drinking"
            ],
            answer:"drink"
        },

        {
            sentence:"They have ___ the work.",
            options:[
                "finish",
                "finishes",
                "finished",
                "finishing"
            ],
            answer:"finished"
        },

        {
            sentence:"She has ___ her homework.",
            options:[
                "finish",
                "finished",
                "finishing",
                "finishes"
            ],
            answer:"finished"
        },

        {
            sentence:"They are ___ cricket.",
            options:[
                "play",
                "plays",
                "played",
                "playing"
            ],
            answer:"playing"
        },

        {
            sentence:"We were ___ dinner.",
            options:[
                "eat",
                "eats",
                "ate",
                "eating"
            ],
            answer:"eating"
        }

    ]

};
/* =========================================================
   ACTIVITY 2
========================================================= */

const detectiveLevels = {

    /* ---------------------------------------------------------
       LEVEL 1 — EASY / DIRECT TIME CLUES
       Very clear expressions students can recognise quickly.
    --------------------------------------------------------- */
    1: [
        ["Yesterday", "Science Fair", "past"],
        ["Today", "Library Visit", "present"],
        ["Tomorrow", "School Picnic", "future"],
        ["Last week", "Football Match", "past"],
        ["Now", "Classroom Activity", "present"],
        ["Next week", "Quiz Competition", "future"],
        ["Two days ago", "Art Event", "past"],
        ["Next month", "Annual Function", "future"],
        ["Last Sunday", "Sports Day", "past"],
        ["Today", "English Activity", "present"],
        ["Yesterday", "Music Practice", "past"],
        ["Tomorrow", "Drawing Competition", "future"]
    ],

    /* ---------------------------------------------------------
       LEVEL 2 — MODERATE
       More varied but still familiar time expressions.
    --------------------------------------------------------- */
    2: [
        ["The day before yesterday", "Science Exhibition", "past"],
        ["Three days ago", "Football Practice", "past"],
        ["Last Monday", "Computer Class", "past"],
        ["Last month", "Reading Competition", "past"],
        ["This week", "Library Activity", "present"],
        ["These days", "English Project", "present"],
        ["At present", "Classroom Discussion", "present"],
        ["Right now", "Group Activity", "present"],
        ["Next Monday", "Quiz Competition", "future"],
        ["In two days", "School Assembly", "future"],
        ["Next month", "Sports Competition", "future"],
        ["In the coming week", "Art Workshop", "future"]
    ],

    /* ---------------------------------------------------------
       LEVEL 3 — CHALLENGING, BUT AGE-APPROPRIATE
       Longer and less obvious time clues; still only Past,
       Present and Future, so the task remains fair.
    --------------------------------------------------------- */
    3: [
        ["The previous evening", "Drama Rehearsal", "past"],
        ["A week ago", "Science Project", "past"],
        ["The previous Monday", "Basketball Practice", "past"],
        ["Two weeks ago", "Inter-House Competition", "past"],
        ["In 2024", "School Exhibition", "past"],
        ["At this very moment", "Computer Lab Activity", "present"],
        ["At the moment", "English Presentation", "present"],
        ["At the present time", "Group Discussion", "present"],
        ["In the days ahead", "Science Fair", "future"],
        ["A week from now", "Storytelling Competition", "future"],
        ["In the following month", "Annual Sports Meet", "future"],
        ["By next Friday", "Class Presentation", "future"]
    ]
};

// Backward-compatible alias for any existing references.
const detective = detectiveLevels[1];


/* =========================================================
   ACTIVITY 3
========================================================= */

const stories = {

    1:{

        pictures:[
            "🌅",
            "🪥",
            "👕",
            "🎒",
            "🍳",
            "👟",
            "🚶",
            "🏫"
        ],

        s:[

            "I woke up early.",
            "I brushed my teeth.",
            "I got dressed.",
            "I packed my school bag.",
            "I had breakfast.",
            "I wore my shoes.",
            "I left home.",
            "I reached school."

        ]

    },


    2:{

        pictures:[
            "☁️",
            "💨",
            "🌧️",
            "☂️"
        ],

        s:[

            "The clouds became dark.",
            "The wind started blowing.",
            "It began to rain.",
            "The children looked outside.",
            "They opened their umbrellas.",
            "They walked carefully.",
            "The rain became lighter.",
            "The sky became clear."

        ]

    },


    3:{

        pictures:[
            "🗺️",
            "🏛️"
        ],

        s:[

            "We planned our museum visit.",
            "We discussed the route.",
            "We packed our notebooks.",
            "We reached the museum.",
            "We observed the exhibits.",
            "We wrote important notes.",
            "We discussed our observations.",
            "We shared what we learned."

        ]

    }

};


/* =========================================================
   ACTIVITY 4
========================================================= */

const debugData = {

    1:[

        [
            "She go to school yesterday.",
            "She went to school yesterday."
        ],

        [
            "They is playing football.",
            "They are playing football."
        ],

        [
            "I will went tomorrow.",
            "I will go tomorrow."
        ],

        [
            "We was happy.",
            "We were happy."
        ],

        [
            "He are reading.",
            "He is reading."
        ],

        [
            "They plays cricket.",
            "They play cricket."
        ],

        [
            "I has a book.",
            "I have a book."
        ],

        [
            "She were tired.",
            "She was tired."
        ]

    ],


    2:[

        [
            "She were happy yesterday.",
            "She was happy yesterday."
        ],

        [
            "We is going to the market.",
            "We are going to the market."
        ],

        [
            "I will played tomorrow.",
            "I will play tomorrow."
        ],

        [
            "He do his work yesterday.",
            "He did his work yesterday."
        ],

        [
            "They was studying.",
            "They were studying."
        ],

        [
            "She have completed the work.",
            "She has completed the work."
        ],

        [
            "I am go to school every day.",
            "I go to school every day."
        ],

        [
            "He don't likes tea.",
            "He doesn't like tea."
        ]

    ],


    3:[

        [
            "Yesterday I go to school and meet my friends. We was excited because our teacher announce a science activity.",

            "Yesterday I went to school and met my friends. We were excited because our teacher announced a science activity."
        ],

        [
            "Tomorrow we went to the museum and we will saw many interesting things.",

            "Tomorrow we will go to the museum and we will see many interesting things."
        ],

        [
            "She are reading a book while her friends was discussing the story.",

            "She is reading a book while her friends are discussing the story."
        ],

        [
            "Last week our class organise an event and everyone enjoy it.",

            "Last week our class organised an event and everyone enjoyed it."
        ],

        [
            "My brother play cricket yesterday and then he go home.",

            "My brother played cricket yesterday and then he went home."
        ],

        [
            "The students was preparing while the teacher check their work.",

            "The students were preparing while the teacher checked their work."
        ],

        [
            "I will completed the project tomorrow because I have finish the research.",

            "I will complete the project tomorrow because I have finished the research."
        ],

        [
            "She do not understand the rule, so her friend explain it.",

            "She does not understand the rule, so her friend explains it."
        ]

    ]

};


/* =========================================================
   HUMAN CHATBOT PROFILE
========================================================= */

const profile = {

    name:"Sristi",

    bestFriend:"Lalit",

    hobby:"reading books and talking to Lalit",

    hometown:"Pauri",

    location:"near Power House",

    age:"30",

    favouriteSubject:"English",

    favouriteActivity:
        "learning through logical activities",

    role:
        "a Human Chatbot Challenge character"

};


/* =========================================================
   HELPERS
========================================================= */

function $(id){

    return document.getElementById(id);

}


function getJSON(key,fallback=[]){

    try{

        const raw=
            localStorage.getItem(key);

        return raw===null
            ? fallback
            : JSON.parse(raw);

    }catch(e){

        return fallback;

    }

}


function setJSON(key,value){

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );

}


function fmt(ms){

    let seconds=
        Math.floor(ms/1000);

    let minutes=
        Math.floor(seconds/60);

    return String(minutes).padStart(2,"0")+
        ":"+
        String(seconds%60).padStart(2,"0");

}


function norm(value){

    return String(value||"")
        .trim()
        .replace(/\s+/g," ")
        .toLowerCase();

}


function escapeHTML(value){

    return String(value||"").replace(
        /[&<>"']/g,
        function(m){

            return {

                "&":"&amp;",
                "<":"&lt;",
                ">":"&gt;",
                '"':"&quot;",
                "'":"&#039;"

            }[m];

        }
    );

}


/* =========================================================
   NAVIGATION
========================================================= */

function show(id,btn){

    document.querySelectorAll(".page")
        .forEach(function(page){

            page.classList.remove("active");

        });


    if($(id)){

        $(id).classList.add("active");

    }


    if(btn){

        document.querySelectorAll(".navBtn")
            .forEach(function(x){

                x.classList.remove("active");

            });

        btn.classList.add("active");

    }


    if(id==="progress"){

        renderProgress();

    }


    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}


/* =========================================================
   PROFILE
========================================================= */

function begin(){

    state.name=
        $("studentName").value.trim();

    state.cls=
        $("studentClass").value;

    state.section=
        $("section").value.trim();

    state.roll=
        $("roll").value.trim();


    if(!state.name || !state.cls){

        alert(
            "Please enter your name and class."
        );

        return;

    }


    $("sfName").value=
        state.name;

    $("sfClass").value=
        state.cls;


    show("activities");

}


/* =========================================================
   OPEN ACTIVITY
========================================================= */

function openAct(activity){

    if(!state.name){

        alert(
            "Please complete your student profile first."
        );

        show("student");

        return;

    }


    state.activity=
        activity;

    state.level=0;


    $("phase").textContent=
        data[activity].phase;

    $("gameTitle").textContent=
        data[activity].title;


    const levelBox=
        document.querySelector(".levels");


    /* =====================================================
       CHATBOT HAS NO LEVEL
    ===================================================== */

    if(activity===5){

        state.level=0;


        if(levelBox){

            levelBox.style.display="none";

        }


        $("gameMeta").textContent=
            "AI Lab • ask • analyse • respond";


        $("timer").textContent=
            "00:00";


        $("gameArea").innerHTML="";


        show("game");


        buildGame();


        return;

    }


    /* =====================================================
       NORMAL ACTIVITIES
    ===================================================== */

    if(levelBox){

        levelBox.style.display="flex";

    }


    $("gameMeta").textContent=
        "Choose a level • complete the challenge • review your score";


    $("gameArea").innerHTML=
        "<p>Select a level to begin your challenge.</p>";


    $("timer").textContent=
        "00:00";


    show("game");

}


/* =========================================================
   LEVEL START
========================================================= */

function startLevel(level){

    if(state.activity===5){

        return;

    }


    clearInterval(state.timer);


    state.level=
        level;

    state.start=
        Date.now();

    state.total=
        0;

    state.score=
        0;

    state.nextLevel=
        null;


    sortSelections={};

    selectedSortItem="";


    $("timer").textContent=
        "00:00";


    state.timer=
        setInterval(function(){

            $("timer").textContent=
                fmt(
                    Date.now()-
                    state.start
                );

        },1000);


    buildGame();

}


/* =========================================================
   BUILD GAME
========================================================= */

function buildGame(){

    let html="";


    if(state.activity===1){

        html=
            sorter(state.level);

    }

    else if(state.activity===2){

        html=
            timeDetective(state.level);

    }

    else if(state.activity===3){

        html=
            sequence(state.level);

    }

    else if(state.activity===4){

        html=
            debuggerGame(state.level);

    }

    else if(state.activity===5){

        html=
            chatbot();

    }


    $("gameArea").innerHTML=
        html;

}


/* =========================================================
   CENTRAL SAVE
========================================================= */

function saveCentral(type,payload){

    try{

        fetch(

            CENTRAL_API,

            {

                method:"POST",

                mode:"no-cors",

                headers:{

                    "Content-Type":
                    "text/plain;charset=utf-8"

                },

                body:
                    JSON.stringify(

                        Object.assign(

                            {
                                type:type
                            },

                            payload

                        )

                    ),

                keepalive:true

            }

        ).catch(function(){});


    }catch(e){}

}


/* =========================================================
   RESPONSE REVIEW
========================================================= */

function renderResponseReview(
    activity,
    review
){

    const box=
        $("responseReview");


    if(!box){

        return;

    }


    if(
        activity===5 ||
        !review ||
        !review.length
    ){

        box.innerHTML="";

        return;

    }


    const rows=
        review.map(function(item,index){

            const answer=
                item.answer;

            const correct=
                item.correct;


            const isAnswered=
                String(answer||"")
                .trim()!=="";


            let isCorrect=
                isAnswered &&
                norm(answer)===
                norm(correct);


            if(typeof item.isCorrect==="boolean"){

                isCorrect=
                    isAnswered &&
                    item.isCorrect;

            }


            const marks=
                isCorrect
                ? "1 / 1"
                : "0 / 1";


            const status=
                !isAnswered
                ? "⚠ Not Answered"
                : isCorrect
                ? "✓ Correct"
                : "✕ Wrong";


            const statusClass=
                !isAnswered
                ? "notAnswered"
                : isCorrect
                ? "markCorrect"
                : "markWrong";


            return `

                <tr>

                    <td class="reviewQuestion">
                        ${index+1}.
                        ${escapeHTML(item.question)}
                    </td>

                    <td class="reviewAnswer">
                        ${
                            isAnswered
                            ? escapeHTML(answer)
                            : "Not answered"
                        }
                    </td>

                    <td class="reviewAnswer">
                        ${escapeHTML(correct)}
                    </td>

                    <td>
                        <strong>
                            ${marks}
                        </strong>
                    </td>

                    <td class="${statusClass}">
                        ${status}
                    </td>

                </tr>

            `;

        }).join("");


    box.innerHTML=`

        <div class="reviewTitle">

            <h3>
                RESPONSE REVIEW
            </h3>

            <span>
                QUESTION-BY-QUESTION ANALYSIS
            </span>

        </div>


        <div class="reviewTableWrap">

            <table class="reviewTable">

                <thead>

                    <tr>

                        <th>
                            Question
                        </th>

                        <th>
                            Your Answer
                        </th>

                        <th>
                            Correct Answer
                        </th>

                        <th>
                            Marks
                        </th>

                        <th>
                            Status
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

    `;

}


/* =========================================================
   FINISH SCORE
========================================================= */

function finishScore(

    activity,
    correct,
    total,
    review=[],
    levelLabel=null

){

    clearInterval(state.timer);


    const time=
        state.start
        ? Date.now()-
          state.start
        : 0;


    const score=
        total
        ? Math.round(
            correct/
            total*
            100
        )
        : 0;


    state.score=
        score;

    state.total=
        total;


    const actualLevelLabel=
        levelLabel ||
        (
            "Level "+
            state.level
        );


    const rec={

        id:
            "R-"+Date.now(),

        date:
            new Date()
            .toLocaleString(),

        studentName:
            state.name,

        className:
            state.cls,

        section:
            state.section,

        roll:
            state.roll,

        activity:
            activity,

        activityName:
            data[activity].title,

        level:
            activity===5
            ? "N/A"
            : state.level,

        levelLabel:
            actualLevelLabel,

        score:
            score,

        correct:
            correct,

        total:
            total,

        time:
            time

    };


    const all=
        getJSON(
            RESULT_KEY
        );


    all.push(rec);


    setJSON(
        RESULT_KEY,
        all
    );


    saveCentral(
        "student_result",
        rec
    );


    saveCentral(
        "activity_attempt",
        rec
    );


    $("finalScore").textContent=
        score+"%";


    $("correct").textContent=
        correct+
        " / "+
        total;


    $("finalTime").textContent=
        fmt(time);


    $("finalLevel").textContent=
        actualLevelLabel;


    $("resultHeading").textContent=

        score>=80

        ? "Excellent Work!"

        : score>=60

        ? "Good Work!"

        : "Keep Practising!";


    $("resultMessage").textContent=

        score>=80

        ? "Strong logical thinking. Ready for the next challenge?"

        : score>=60

        ? "Good progress. Review the patterns and try again."

        : "Every mistake is useful data. Debug your thinking and try again.";


    renderResponseReview(
        activity,
        review
    );


    state.nextLevel=

        activity===5

        ? null

        : state.level<3

        ? state.level+1

        : null;


    $("resultNext").textContent=

        state.nextLevel

        ? "Next Level →"

        : "Back to Learning Path";


    show("result");

}


/* =========================================================
   NEXT RESULT
========================================================= */

function nextFromResult(){

    if(state.nextLevel){

        show("game");

        startLevel(
            state.nextLevel
        );

    }

    else{

        show("activities");

    }

}


/* =========================================================
   ACTIVITY 1
========================================================= */

let sortSelections={};

let selectedSortItem="";


/* =========================================================
   ACTIVITY 1 — NEW LEVEL 1 & LEVEL 2 DATA
   LEVEL 3 remains unchanged
========================================================= */

const timeExpressionData = [
    ["Yesterday", "past"],
    ["Now", "present"],
    ["Tomorrow", "future"],
    ["Last week", "past"],
    ["Today", "present"],
    ["2029", "future"],
    ["Next year", "future"],
    ["Two days ago", "past"]
];


const helpingVerbData = [
    ["is", "present"],
    ["was", "past"],
    ["are", "present"],
    ["were", "past"],
    ["am", "present"],
    ["will", "future"],
    ["did", "past"],
    ["does", "present"],
    ["do", "present"]
];


function sorter(level){


    /* =====================================================
       LEVEL 1 — TIME EXPRESSION
    ===================================================== */

    if(level===1){

        const questions =
            timeExpressionData;


        return `

            <div class="gameIntro">

                <span class="tag">
                    LEVEL 1 • TIME EXPRESSION
                </span>

                <h3>
                    Identify the Tense
                </h3>

                <p class="muted">
                    Read each time expression and choose
                    whether it refers to the past, present or future.
                </p>

            </div>


            <div class="questionList">

                ${questions.map(
                    function(item,index){

                        return `

                            <div class="questionCard">

                                <div class="questionNo">
                                    QUESTION ${index+1}
                                </div>

                                <h3>
                                    ${escapeHTML(item[0])}
                                </h3>


                                <select

                                    id="sortTimeL1Q${index}"

                                    class="sortSelect"

                                    data-answer="${item[1]}"

                                >

                                    <option value="">
                                        Select tense
                                    </option>

                                    <option value="past">
                                        PAST
                                    </option>

                                    <option value="present">
                                        PRESENT
                                    </option>

                                    <option value="future">
                                        FUTURE
                                    </option>

                                </select>

                            </div>

                        `;

                    }
                ).join("")}

            </div>


            <button

                class="primary"

                onclick="checkSorter(1)">

                Submit →

            </button>

        `;

    }


    /* =====================================================
       LEVEL 2 — HELPING VERB
    ===================================================== */

    if(level===2){

        const questions =
            helpingVerbData;


        return `

            <div class="gameIntro">

                <span class="tag">
                    LEVEL 2 • HELPING VERB
                </span>

                <h3>
                    Identify the Tense
                </h3>

                <p class="muted">
                    Look at each helping verb and decide
                    whether it belongs to the past, present or future.
                </p>

            </div>


            <div class="questionList">

                ${questions.map(
                    function(item,index){

                        return `

                            <div class="questionCard">

                                <div class="questionNo">
                                    QUESTION ${index+1}
                                </div>

                                <h3>
                                    ${escapeHTML(item[0])}
                                </h3>


                                <select

                                    id="sortHelpingL2Q${index}"

                                    class="sortSelect"

                                    data-answer="${item[1]}"

                                >

                                    <option value="">
                                        Select tense
                                    </option>

                                    <option value="past">
                                        PAST
                                    </option>

                                    <option value="present">
                                        PRESENT
                                    </option>

                                    <option value="future">
                                        FUTURE
                                    </option>

                                </select>

                            </div>

                        `;

                    }
                ).join("")}

            </div>


            <button

                class="primary"

                onclick="checkSorterLevel2()">

                Submit →

            </button>

        `;

    }


    /* =====================================================
       LEVEL 3
    ===================================================== */

    if(level===3){

    const arr = sortData[3];


        return `

            <div class="gameIntro">

                <span class="tag">
                    LEVEL 3 • VERB FORM CHALLENGE
                </span>

                <h3>
                    Complete the Sentence
                </h3>

                <p class="muted">
                    Choose the correct verb form for each sentence.
                </p>

            </div>


            <div class="questionList">

                ${arr.map(
                    function(item,index){

                        return `

                            <div class="questionCard">

                                <div class="questionNo">
                                    QUESTION ${index+1}
                                </div>

                                <h3>
                                    ${escapeHTML(
                                        item.sentence
                                    )}
                                </h3>


                                <select

                                    id="sortQ${index}"

                                    class="sortSelect">

                                    <option value="">
                                        Select answer
                                    </option>


                                    ${item.options.map(
                                        function(option){

                                            return `

                                                <option
                                                    value="${
                                                        escapeHTML(
                                                            option
                                                        )
                                                    }">

                                                    ${
                                                        escapeHTML(
                                                            option
                                                        )
                                                    }

                                                </option>

                                            `;

                                        }
                                    ).join("")}

                                </select>

                            </div>

                        `;

                    }
                ).join("")}

            </div>


            <button

                class="primary"

                onclick="checkSorterLevel3()">

                Submit →

            </button>

        `;

    }


    return "";

}


/* =========================================================
   CHECK ACTIVITY 1
========================================================= */

function checkSorter(level){


    /* =====================================================
       LEVEL 1 — TIME EXPRESSION CHECK
    ===================================================== */

    if(level===1){

        const questions =
            timeExpressionData;


        let correct=0;


        const review=[];


        questions.forEach(
            function(q,index){

                const select =
                    $("sortTimeL1Q"+index);


                const answer =
                    select
                    ? select.value
                    : "";


                const isCorrect =
                    answer === q[1];


                if(isCorrect){

                    correct++;

                }


                review.push({

                    question:
                        q[0],

                    answer:
                        answer
                        ? answer.toUpperCase()
                        : "",

                    correct:
                        q[1].toUpperCase(),

                    isCorrect:
                        isCorrect

                });

            }
        );


        finishScore(

            1,

            correct,

            questions.length,

            review,

            "Level 1"

        );


        return;

    }


    /* =====================================================
       LEGACY FALLBACK
    ===================================================== */

    const source=
        sortData[level];


    let correct=0;


    const review=[];


    source.forEach(
        function(item){

            const word=
                item[0];

            const answer=
                item[1];


            const userGroup=
                sortSelections[word]||
                "";


            const isCorrect=
                userGroup===
                answer;


            if(isCorrect){

                correct++;

            }


            review.push({

                question:
                    "Classify the time expression: "+
                    word,

                answer:
                    userGroup
                    ? userGroup.toUpperCase()
                    : "",

                correct:
                    answer.toUpperCase(),

                isCorrect:
                    isCorrect

            });

        }
    );


    finishScore(

        1,

        correct,

        source.length,

        review

    );

}


/* =========================================================
   ACTIVITY 1 LEVEL 2 CHECK
========================================================= */

function checkSorterLevel2(){

    const questions =
        helpingVerbData;


    let correct=0;


    const review =
        questions.map(
            function(item,index){

                const select =
                    $("sortHelpingL2Q"+index);


                const answer =
                    select
                    ? select.value
                    : "";


                const correctAnswer =
                    item[1];


                const isCorrect =
                    answer === correctAnswer;


                if(isCorrect){

                    correct++;

                }


                return {

                    question:
                        item[0],

                    answer:
                        answer
                        ? answer.toUpperCase()
                        : "",

                    correct:
                        correctAnswer.toUpperCase(),

                    isCorrect:
                        isCorrect

                };

            }
        );


    finishScore(

        1,

        correct,

        questions.length,

        review,

        "Level 2"

    );

}


/* =========================================================
   ACTIVITY 1 LEVEL 3 CHECK

========================================================= */

function checkSorterLevel3(){

    const questions=
        sortData[3];


    let correct=0;


    const review=[];


    questions.forEach(
        function(q,index){

            const select=
                $("sortQ"+index);


            const answer=
                select
                ? select.value
                : "";


            const isCorrect=
                norm(answer)===
                norm(q.answer);


            if(isCorrect){

                correct++;

            }


            review.push({

                question:
                    q.sentence,

                answer:
                    answer,

                correct:
                    q.answer,

                isCorrect:
                    isCorrect

            });

        }
    );


    finishScore(

        1,

        correct,

        questions.length,

        review,

        "Level 3"

    );

}


/* =========================================================
   ACTIVITY 2
========================================================= */

function timeDetective(level){

    const count=

        level===1
        ? 10

        : level===2
        ? 12

        : 15;


    const questionBank = detectiveLevels[level] || detectiveLevels[1];

    const questions=

        [...questionBank]

        .sort(
            ()=>Math.random()-.5
        )

        .slice(
            0,
            Math.min(count, questionBank.length)
        );


    return `

        <div class="gameIntro">

            <span class="tag">
                LEVEL ${level} • TIME DETECTIVE
            </span>

            <h3>
                Decode the Time Clue
            </h3>

            <p class="muted">
                Read the clue and choose the sentence
                that matches the tense.
            </p>

        </div>


        ${questions.map(
            function(item,index){

                const time=
                    item[0];

                const situation=
                    item[1];

                const tense=
                    item[2];


                const answer=

                    tense==="past"

                    ? `I participated in the ${situation}.`

                    : tense==="present"

                    ? `I am participating in the ${situation}.`

                    : `I will participate in the ${situation}.`;


                const options=[

                    `I participated in the ${situation}.`,

                    `I am participating in the ${situation}.`,

                    `I will participate in the ${situation}.`

                ].sort(
                    ()=>Math.random()-.5
                );


                return `

                    <div

                        class="question detectiveQuestion"

                        data-question="${
                            escapeHTML(time)
                        }">

                        <div class="questionNo">
                            CLUE ${index+1}
                        </div>

                        <h4>
                            ${escapeHTML(time)}
                        </h4>

                        <p>
                            ${escapeHTML(situation)}
                        </p>


                        <select

                            class="td"

                            data-question="${
                                escapeHTML(time)
                            }"

                            data-answer="${
                                escapeHTML(answer)
                            }">

                            <option value="">
                                Select the best sentence
                            </option>


                            ${options.map(
                                function(option){

                                    return `

                                        <option
                                            value="${
                                                escapeHTML(
                                                    option
                                                )
                                            }">

                                            ${
                                                escapeHTML(
                                                    option
                                                )
                                            }

                                        </option>

                                    `;

                                }
                            ).join("")}

                        </select>

                    </div>

                `;

            }
        ).join("")}


        <button

            class="primary"

            onclick="checkDetective()">

            Submit →

        </button>

    `;

}


/* =========================================================
   CHECK DETECTIVE
========================================================= */

function checkDetective(){

    const questions=
        [
            ...document.querySelectorAll(
                ".td"
            )
        ];


    let correct=0;


    const review=
        questions.map(
            function(select,index){

                const answer=
                    select.value.trim();


                const correctAnswer=
                    select.dataset.answer;


                const isCorrect=
                    answer &&
                    norm(answer)===
                    norm(correctAnswer);


                if(isCorrect){

                    correct++;

                }


                const parent=
                    select.closest(
                        ".detectiveQuestion"
                    );


                const question=

                    parent

                    ? parent.dataset.question

                    : "Time clue "+
                      (index+1);


                return {

                    question:
                        "Time clue: "+
                        question,

                    answer:
                        answer,

                    correct:
                        correctAnswer,

                    isCorrect:
                        !!isCorrect

                };

            }
        );


    finishScore(

        2,

        correct,

        questions.length,

        review

    );

}


/* =========================================================
   ACTIVITY 3
========================================================= */

function sequence(level){

    const story=
        stories[level];


    const shuffled=
        [...story.s]
        .sort(
            ()=>Math.random()-.5
        );


    const pictureCount=

        level===1
        ? 8

        : level===2
        ? 4

        : 2;


    return `

        <div class="gameIntro">

            <span class="tag">
                LEVEL ${level} • SEQUENCING
            </span>

            <h3>
                Build the Story
            </h3>

            <p class="muted">
                Drag the sentence strips into the
                most logical order.
            </p>

        </div>


        <div class="picture">

            ${story.pictures
                .slice(0,pictureCount)
                .join(" ")}

        </div>


        <div id="seq">

            ${shuffled.map(
                function(sentence){

                    return `

                        <div

                            class="gameOption seqItem"

                            draggable="true"

                            ondragstart="dragSeq(event)">

                            ${escapeHTML(sentence)}

                        </div>

                    `;

                }
            ).join("")}

        </div>


        <button

            class="primary"

            onclick="checkSequence(${level})">

            Submit →

        </button>

    `;

}


let dragged=null;


function dragSeq(event){

    dragged=
        event.currentTarget;

}


document.addEventListener(

    "dragover",

    function(event){

        if(
            event.target.closest("#seq")
        ){

            event.preventDefault();

        }

    }

);


document.addEventListener(

    "drop",

    function(event){

        const target=
            event.target.closest(
                "#seq .seqItem"
            );


        if(
            !dragged ||
            !target ||
            dragged===target
        ){

            return;

        }


        const parent=
            target.parentNode;


        const items=
            [...parent.children];


        const a=
            items.indexOf(
                dragged
            );


        const b=
            items.indexOf(
                target
            );


        if(a<b){

            parent.insertBefore(
                dragged,
                target.nextSibling
            );

        }

        else{

            parent.insertBefore(
                dragged,
                target
            );

        }


        dragged=null;

    }

);


function checkSequence(level){

    const actual=

        [
            ...document.querySelectorAll(
                "#seq .seqItem"
            )
        ]

        .map(
            item=>
                item.textContent.trim()
        );


    const answer=
        stories[level].s;


    let correct=0;


    const review=
        answer.map(
            function(correctSentence,index){

                const userAnswer=
                    actual[index]||
                    "";


                const isCorrect=
                    norm(userAnswer)===
                    norm(correctSentence);


                if(isCorrect){

                    correct++;

                }


                return {

                    question:
                        "Position "+
                        (index+1),

                    answer:
                        userAnswer,

                    correct:
                        correctSentence,

                    isCorrect:
                        isCorrect

                };

            }
        );


    finishScore(

        3,

        correct,

        answer.length,

        review

    );

}


/* =========================================================
   ACTIVITY 4
========================================================= */

function debuggerGame(level){

    const questions=
        debugData[level];


    if(level<3){

        return `

            <div class="gameIntro">

                <span class="tag">
                    LEVEL ${level} • DEBUGGING
                </span>

                <h3>
                    Find & Fix the Error
                </h3>

                <p class="muted">
                    Rewrite each sentence correctly.
                </p>

            </div>


            ${questions.map(
                function(item,index){

                    return `

                        <label class="question">

                            <div class="questionNo">
                                ERROR ${index+1}
                            </div>

                            ${escapeHTML(item[0])}


                            <input

                                class="dbg"

                                data-question="${
                                    escapeHTML(
                                        item[0]
                                    )
                                }"

                                data-answer="${
                                    escapeHTML(
                                        item[1]
                                    )
                                }"

                                placeholder="Write the corrected sentence">

                        </label>

                    `;

                }
            ).join("")}


            <button

                class="primary"

                onclick="checkDebugger()">

                Submit →

            </button>

        `;

    }


    return `

        <div class="gameIntro">

            <span class="tag">
                LEVEL 3 • PARAGRAPH DEBUGGER
            </span>

            <h3>
                Debug the Paragraph
            </h3>

            <p class="muted">
                Find the hidden grammar errors and rewrite
                the paragraph correctly.
            </p>

        </div>


        ${questions.map(
            function(item,index){

                return `

                    <div class="question">

                        <div class="questionNo">
                            PARAGRAPH ${index+1}
                        </div>

                        <p>
                            ${escapeHTML(item[0])}
                        </p>


                        <textarea

                            class="dbg"

                            data-question=
                                "Paragraph ${index+1}"

                            data-answer="${
                                escapeHTML(item[1])
                            }"

                            rows="4"

                            placeholder="Rewrite the corrected paragraph...">

                        </textarea>

                    </div>

                `;

            }
        ).join("")}


        <button

            class="primary"

            onclick="checkDebugger()">

            Submit →

        </button>

    `;

}


/* =========================================================
   CHECK DEBUGGER
========================================================= */

function checkDebugger(){

    const questions=
        [
            ...document.querySelectorAll(
                ".dbg"
            )
        ];


    let correct=0;


    const review=
        questions.map(
            function(input,index){

                const answer=
                    input.value.trim();


                const correctAnswer=
                    input.dataset.answer;


                const isCorrect=
                    answer &&
                    norm(answer)===
                    norm(correctAnswer);


                if(isCorrect){

                    correct++;

                }


                return {

                    question:
                        input.dataset.question ||
                        "Question "+
                        (index+1),

                    answer:
                        answer,

                    correct:
                        correctAnswer,

                    isCorrect:
                        !!isCorrect

                };

            }
        );


    finishScore(

        4,

        correct,

        questions.length,

        review

    );

}


/* =========================================================
   HUMAN CHATBOT
   NO LEVEL
========================================================= */

function chatbot(){

    return `

        <div class="panel chatbotPanel">

            <span class="tag">
                AI READINESS • HUMAN CHATBOT
            </span>

            <h3>
                Meet Sristi
            </h3>


            <p class="muted">

                Ask a complete and sensible question.

                Try:
                WHO, WHAT, WHEN, WHERE, WHY,
                WHICH, WHOSE, WHOM, HOW,
                HOW MANY, HOW MUCH, HOW OFTEN,
                HOW LONG or HOW FAR.

                Paraphrasing is encouraged.

            </p>


            <div
                class="chatLog"
                id="chatA">

                Sristi is ready.

                Ask me something from my information profile.

            </div>


            <input

                id="chatQ"

                maxlength="300"

                placeholder="Example: What does Sristi enjoy doing?">


            <button

                class="primary"

                onclick="chatAnswer()">

                Ask →

            </button>


            <button

                onclick="finishChat()"

                style="
                    margin-left:8px;
                    padding:12px 16px;
                    border:1px solid #dce2eb;
                    border-radius:8px;
                    background:#fff;
                ">

                Finish Challenge

            </button>


            <p class="muted">

                Training library:

                <b id="patternCount">
                    1000+
                </b>

                paraphrased question patterns generated
                from multiple WH forms.

            </p>

        </div>

    `;

}


/* =========================================================
   CHAT QUESTION LIBRARY
========================================================= */

const templates=[

    "what is {x}",
    "tell me about {x}",
    "can you tell me {x}",
    "could you tell me {x}",
    "i want to know {x}",
    "please explain {x}",
    "what do you know about {x}",
    "who is connected with {x}",
    "where is {x}",
    "how would you describe {x}",
    "what can you say about {x}",
    "tell me something about {x}",
    "i am curious about {x}",
    "give me information about {x}",
    "please tell me {x}",
    "what is known about {x}",
    "can you explain {x}",
    "what would you say about {x}",
    "how can i know {x}"

];


const topics=[

    "your name",
    "your best friend",
    "your hobby",
    "your hometown",
    "where you live",
    "your age",
    "your favourite subject",
    "your favourite activity",
    "your role"

];


const questionLibrary=[];


for(
    const template of templates
){

    for(
        const topic of topics
    ){

        questionLibrary.push(

            template.replace(
                "{x}",
                topic
            )

        );

    }

}


for(
    let i=0;
    i<60;
    i++
){

    for(
        const template of templates
    ){

        questionLibrary.push(

            template.replace(

                "{x}",

                topics[
                    i%topics.length
                ]

            )

        );

    }

}


/* =========================================================
   CHAT INTENT
========================================================= */

function chatIntent(question){

    const s=
        norm(question);


    if(

        /\b(who|what).*(name)|\bname\b/

        .test(s)

    ){

        return "name";

    }


    if(

        /best friend|close friend|friend is|who.*friend/

        .test(s)

    ){

        return "friend";

    }


    if(

        /hobby|free time|enjoy|like doing/

        .test(s)

    ){

        return "hobby";

    }


    if(

        /hometown|home town|native place|from where|where.*from/

        .test(s)

    ){

        return "hometown";

    }


    if(

        /where.*live|live.*where|home.*located/

        .test(s)

    ){

        return "location";

    }


    if(

        /how old|what.*age|age/

        .test(s)

    ){

        return "age";

    }


    if(

        /favourite subject|favorite subject|subject.*like/

        .test(s)

    ){

        return "subject";

    }


    if(

        /favourite activity|favorite activity|activity.*like/

        .test(s)

    ){

        return "activity";

    }


    if(

        /role|what do you do|what.*purpose/

        .test(s)

    ){

        return "role";

    }


    return "";

}


/* =========================================================
   CHAT ANSWER
========================================================= */

function chatAnswer(){

    const input=
        $("chatQ");


    const box=
        $("chatA");


    const question=
        input.value.trim();


    if(!question){

        box.innerHTML=
            "Please ask a complete question.";

        return;

    }


    if(question.length<5){

        box.innerHTML+=`

            <div class="chatBubble">

                <b>Sristi:</b>

                Please ask a complete question.

            </div>

        `;


        input.value="";


        return;

    }


    const intent=
        chatIntent(
            question
        );


    const answers={

        name:
            "My name is Sristi.",

        friend:
            "My best friend is Lalit.",

        hobby:
            "My hobby is reading books and talking to Lalit.",

        hometown:
            "My hometown is Pauri.",

        location:
            "I live near Power House.",

        age:
            "I am 30 years old.",

        subject:
            "My favourite subject is English.",

        activity:
            "My favourite activity is learning through logical activities.",

        role:
            "I am a Human Chatbot Challenge character in the learning lab."

    };


    const answer=
        answers[intent] ||

        "I don't have enough information to answer that question.";


    box.innerHTML+=`

        <div class="chatBubble">

            <b>You:</b>

            ${escapeHTML(question)}

        </div>


        <div class="chatBubble">

            <b>Sristi:</b>

            ${escapeHTML(answer)}

        </div>

    `;


    input.value="";


    box.scrollTop=
        box.scrollHeight;

}


/* =========================================================
   CHAT FINISH
========================================================= */

function finishChat(){

    const bubbles=
        document.querySelectorAll(
            "#chatA .chatBubble"
        );


    if(bubbles.length<2){

        alert(
            "Ask at least one question before finishing."
        );

        return;

    }


    /*

       Chatbot has NO LEVEL.

       Therefore "N/A" is explicitly passed.

    */

    finishScore(

        5,

        1,

        1,

        [],

        "N/A"

    );

}


/* =========================================================
   PROGRESS
========================================================= */

function renderProgress(){

    const results=
        getJSON(
            RESULT_KEY
        );


    const scores=
        results.map(
            item=>
                Number(item.score)||0
        );


    const average=

        results.length

        ? Math.round(

            scores.reduce(
                (a,b)=>
                    a+b,
                0
            )
            /
            results.length

        )

        : 0;


    const best=

        results.length

        ? Math.max(
            ...scores
        )

        : 0;


    $("progressBox").innerHTML=[

        [
            "Activities Completed",
            results.length
        ],

        [
            "Average Score",
            average+"%"
        ],

        [
            "Levels Completed",

            results.filter(
                x=>
                    x.activity!==5
            ).length
        ],

        [
            "Best Score",
            best+"%"
        ]

    ].map(
        function(item){

            return `

                <div class="stat">

                    <b>
                        ${item[0]}
                    </b>

                    <h2>
                        ${item[1]}
                    </h2>

                </div>

            `;

        }
    ).join("");


    if(!results.length){

        $("progressDetails").innerHTML=

            `<p class="muted">
                No activity attempts yet.
            </p>`;

        return;

    }


    $("progressDetails").innerHTML=`

        <h3>
            Recent Attempts
        </h3>


        <div style="overflow:auto">

            <table class="miniTable">

                <tr>

                    <th>
                        Student
                    </th>

                    <th>
                        Activity
                    </th>

                    <th>
                        Level
                    </th>

                    <th>
                        Score
                    </th>

                    <th>
                        Time
                    </th>

                </tr>


                ${results

                    .slice(-10)

                    .reverse()

                    .map(
                        function(item){

                            return `

                                <tr>

                                    <td>
                                        ${escapeHTML(
                                            item.studentName
                                        )}
                                    </td>

                                    <td>
                                        ${escapeHTML(
                                            item.activityName
                                        )}
                                    </td>

                                    <td>
                                        ${escapeHTML(

                                            item.levelLabel ||

                                            (

                                                item.level==="N/A"

                                                ? "N/A"

                                                : "Level "+
                                                  item.level

                                            )

                                        )}
                                    </td>

                                    <td>
                                        ${item.score}%
                                    </td>

                                    <td>
                                        ${fmt(item.time)}
                                    </td>

                                </tr>

                            `;

                        }
                    ).join("")}

            </table>

        </div>

    `;

}


/* =========================================================
   FEEDBACK TAB
========================================================= */

function feedbackTab(tab,btn){

    [

        "studentFeedbackBox",
        "teacherFeedbackBox",
        "adminLoginBox"

    ].forEach(
        function(id){

            if($(id)){

                $(id).style.display=
                    "none";

            }

        }
    );


    const target=

        tab==="student"

        ? "studentFeedbackBox"

        : tab==="teacher"

        ? "teacherFeedbackBox"

        : "adminLoginBox";


    if($(target)){

        $(target).style.display=
            "block";

    }


    document.querySelectorAll(".tab")
        .forEach(
            button=>
                button.classList.remove(
                    "active"
                )
        );


    if(btn){

        btn.classList.add(
            "active"
        );

    }


    if(tab==="teacher"){

        loadRememberedFeedback();

    }

}


/* =========================================================
   FEEDBACK LEVEL HANDLER
========================================================= */

function updateFeedbackLevel(){

    const activity=
        $("sfActivity").value;


    const wrap=
        $("sfLevelWrap");


    const level=
        $("sfLevel");


    if(!wrap || !level){

        return;

    }


    if(
        activity===
        "Human Chatbot Challenge"
    ){

        wrap.style.opacity=
            ".6";


        level.value=
            "N/A";


        level.disabled=
            true;


        level.required=
            false;

    }

    else{

        wrap.style.opacity=
            "1";


        level.disabled=
            false;


        level.required=
            true;


        if(level.value==="N/A"){

            level.value="";

        }

    }

}


/* =========================================================
   STUDENT FEEDBACK
========================================================= */

function submitStudentFeedback(event){

    event.preventDefault();


    const activity=
        $("sfActivity").value;


    const isChatbot=
        activity===
        "Human Chatbot Challenge";


    const level=

        isChatbot

        ? "N/A"

        : $("sfLevel").value;


    const row={

        id:
            "SF-"+Date.now(),

        date:
            new Date()
            .toLocaleString(),

        studentName:
            $("sfName")
            .value
            .trim(),

        className:
            $("sfClass")
            .value,

        activity:
            activity,

        level:
            level,

        rating:
            $("sfRating")
            .value,

        feedback:
            $("sfFeedback")
            .value
            .trim()

    };


    if(

        !row.studentName ||

        !row.className ||

        !row.activity ||

        (!isChatbot &&
            !row.level) ||

        !row.rating ||

        !row.feedback

    ){

        alert(
            "Please complete all required fields."
        );

        return;

    }


    const records=
        getJSON(
            SF_KEY
        );


    records.push(row);


    setJSON(
        SF_KEY,
        records
    );


    saveCentral(
        "student_feedback",
        row
    );


    $("studentFeedbackMsg").innerHTML=`

        <p class="success">

            ✓ Student feedback recorded successfully.

        </p>

    `;


    $("studentFeedbackForm")
        .reset();


    updateFeedbackLevel();


    if(state.name){

        $("sfName").value=
            state.name;

    }


    if(state.cls){

        $("sfClass").value=
            state.cls;

    }

}


/* =========================================================
   TEACHER FEEDBACK
========================================================= */

function submitTeacherFeedback(event){

    event.preventDefault();


    const row={

        id:
            "TF-"+Date.now(),

        date:
            new Date()
            .toLocaleString(),

        school:
            $("school").value,

        designation:
            $("designation").value,

        rating:
            $("rating").value,

        feedback:
            $("feedbackText")
            .value
            .trim()

    };


    if(

        !row.school ||

        !row.designation ||

        !row.rating ||

        !row.feedback

    ){

        alert(
            "Please complete all fields."
        );

        return;

    }


    const records=
        getJSON(
            TF_KEY
        );


    records.push(row);


    setJSON(
        TF_KEY,
        records
    );


    saveCentral(
        "teacher_feedback",
        row
    );


    if(
        $("remember").checked
    ){

        localStorage.setItem(

            "rememberFeedback",

            JSON.stringify({

                school:
                    row.school,

                designation:
                    row.designation

            })

        );

    }

    else{

        localStorage.removeItem(
            "rememberFeedback"
        );

    }


    $("feedbackMsg").innerHTML=`

        <p class="success">

            ✓ Teacher feedback recorded successfully.

        </p>

    `;


    $("teacherFeedbackForm")
        .reset();


    loadRememberedFeedback();

}


/* =========================================================
   REMEMBER FEEDBACK
========================================================= */

function loadRememberedFeedback(){

    const saved=
        getJSON(
            "rememberFeedback",
            null
        );


    if(!saved){

        return;

    }


    if($("school")){

        $("school").value=
            saved.school||"";

    }


    if($("designation")){

        $("designation").value=
            saved.designation||"";

    }

}


/* =========================================================
   ADMIN LOGIN
========================================================= */

function adminLogin(event){

    event.preventDefault();


    const msg=
        $("adminLoginMsg");


    if(

        $("adminPassword").value===
        ADMIN_PASSWORD

    ){

        sessionStorage.setItem(

            AUTH_KEY,

            "true"

        );


        msg.innerHTML=`

            <p class="success">

                ✓ Login successful.
                Opening Admin Panel...

            </p>

        `;


        setTimeout(

            function(){

                location.href=
                    "admin.html";

            },

            350

        );

    }

    else{

        msg.innerHTML=`

            <p class="error">

                ✕ Incorrect password.

            </p>

        `;


        $("adminPassword").value="";

    }

}


/* =========================================================
   QR / DRIVE LINK INITIALIZER
========================================================= */

function initDriveQR(){

    const links=
        document.querySelectorAll(
            ".driveSection a, .driveButton"
        );


    links.forEach(
        function(link){

            link.href=
                CLASS_MEDIA_DRIVE_LINK;

            link.target=
                "_blank";

            link.rel=
                "noopener";

        }
    );


    const qrImages=
        document.querySelectorAll(
            ".qrBox img, .class-media-qr img"
        );


    qrImages.forEach(
        function(img){

            if(
                img.src.includes(
                    "drive-qr.png"
                )
            ){

                img.src=
                    "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+
                    encodeURIComponent(
                        CLASS_MEDIA_DRIVE_LINK
                    );

            }

            img.alt=
                "QR code for CT and AI English Learning Lab classroom evidence";

        }
    );

}


/* =========================================================
   INIT
========================================================= */

function init(){


    /* =====================================================
       SCHOOL DROPDOWN
    ===================================================== */

    if($("school")){

        $("school").innerHTML=

            '<option value="">Select School</option>'+

            schools.map(
                function(school){

                    return `

                        <option>
                            ${escapeHTML(school)}
                        </option>

                    `;

                }
            ).join("");

    }


    /* =====================================================
       REMEMBERED FEEDBACK
    ===================================================== */

    loadRememberedFeedback();


    /* =====================================================
       CHATBOT PATTERN COUNT
    ===================================================== */

    if($("patternCount")){

        $("patternCount").textContent=

            Math.max(
                1000,
                questionLibrary.length
            )+"+";

    }


    /* =====================================================
       STUDENT FEEDBACK LEVEL
    ===================================================== */

    updateFeedbackLevel();


    /* =====================================================
       DRIVE QR
    ===================================================== */

    initDriveQR();


    /* =====================================================
       DEFAULT FEEDBACK TAB
    ===================================================== */

    const firstTab=
        document.querySelector(
            ".tab"
        );


    if(firstTab){

        feedbackTab(
            "student",
            firstTab
        );

    }

}


/* =========================================================
   START
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    init

);
/* =========================================================
   BR MODERN SCHOOL PAURI
   CHATBOT KNOWLEDGE ENGINE
   2000+ QUESTION PATTERN COVERAGE
   PASTE THIS ENTIRE BLOCK AT THE VERY END OF script.js
========================================================= */

(function () {

    "use strict";

    /* =====================================================
       CORE SCHOOL KNOWLEDGE
    ===================================================== */

    const BR_SCHOOL_KNOWLEDGE = {

        school: {
            keywords: [
                "school",
                "br modern school",
                "brms",
                "br modern",
                "br modern school pauri",
                "b r modern school",
                "school name"
            ],
            answer:
                "BR Modern School Pauri is a learning-focused school in Pauri, Uttarakhand. This CT & AI Learning Lab connects English learning with Computational Thinking, AI Readiness, problem solving, sequencing, decision making and creative thinking."
        },

        location: {
            keywords: [
                "where is the school",
                "school location",
                "where is br modern school",
                "where is brms",
                "pauri school",
                "school in pauri",
                "location of school"
            ],
            answer:
                "BR Modern School is in Pauri, Uttarakhand."
        },

        lab: {
            keywords: [
                "lab",
                "labs",
                "laboratory",
                "learning lab",
                "computer lab",
                "ai lab",
                "ct lab",
                "technology lab",
                "school laboratory"
            ],
            answer:
                "The CT & AI Learning Lab is designed as an interactive learning space where students develop Computational Thinking and AI Readiness through English-based activities, challenges, sequencing, grammar debugging, pattern recognition and chatbot interaction."
        },

        ct: {
            keywords: [
                "computational thinking",
                "ct",
                "what is ct",
                "computational thinking lab",
                "ct activity",
                "ct challenge"
            ],
            answer:
                "Computational Thinking means solving problems systematically. In this learning lab, students practise patterns, sequencing, decomposition, logical decisions, debugging and algorithmic thinking through English activities."
        },

        ai: {
            keywords: [
                "artificial intelligence",
                "ai",
                "ai readiness",
                "ai lab",
                "what is ai",
                "artificial intelligence lab"
            ],
            answer:
                "AI Readiness means developing the understanding, thinking skills and responsible habits students need to work with AI. The learning lab introduces AI-related thinking through age-appropriate activities and problem solving."
        },

        activities: {
            keywords: [
                "activities",
                "activity",
                "games",
                "challenges",
                "what activities",
                "learning activities",
                "lab activities"
            ],
            answer:
                "The learning lab currently features five major activities: Time Pattern Sorter, Time Detective, Story Sequencing Challenge, Grammar Debugger and Human Chatbot Challenge."
        },

        timePattern: {
            keywords: [
                "time pattern sorter",
                "time pattern",
                "pattern sorter",
                "activity 1",
                "first activity"
            ],
            answer:
                "Time Pattern Sorter develops pattern recognition and understanding of time expressions and verb forms through interactive questions."
        },

        timeDetective: {
            keywords: [
                "time detective",
                "activity 2",
                "second activity",
                "detective activity"
            ],
            answer:
                "Time Detective asks learners to decode time clues and use them to make meaningful English sentences. It develops temporal reasoning, interpretation and decision making."
        },

        sequencing: {
            keywords: [
                "story sequencing",
                "sequencing",
                "story sequence",
                "activity 3",
                "third activity"
            ],
            answer:
                "Story Sequencing Challenge develops logical order, sequencing, narrative thinking and algorithmic thinking by asking students to arrange events in a meaningful sequence."
        },

        debugger: {
            keywords: [
                "grammar debugger",
                "debugger",
                "grammar debugging",
                "activity 4",
                "fourth activity"
            ],
            answer:
                "Grammar Debugger treats language errors like bugs in a program. Students identify, analyse and correct errors while developing debugging and logical reasoning skills."
        },

        chatbot: {
            keywords: [
                "human chatbot",
                "chatbot challenge",
                "activity 5",
                "fifth activity",
                "chatbot activity",
                "who are you",
                "what are you"
            ],
            answer:
                "I am the Human Chatbot Challenge assistant of the BR Modern School Pauri CT & AI Learning Lab. I am designed to help students explore school-related information and practise sensible questioning."
        },

        levels: {
            keywords: [
                "levels",
                "level",
                "foundation",
                "explorer",
                "challenge level",
                "three levels",
                "learning levels"
            ],
            answer:
                "The first four activities use three learning levels: Foundation, Explorer and Challenge. Each level gradually increases the thinking difficulty."
        },

        foundation: {
            keywords: [
                "foundation level",
                "level 1",
                "first level"
            ],
            answer:
                "Foundation is the introductory level. It helps students understand the basic idea and practise the core skill."
        },

        explorer: {
            keywords: [
                "explorer level",
                "level 2",
                "second level"
            ],
            answer:
                "Explorer is the middle level. Students apply the skill in more varied situations and make more independent decisions."
        },

        challenge: {
            keywords: [
                "challenge level",
                "level 3",
                "third level"
            ],
            answer:
                "Challenge is the advanced level. Students handle more complex situations and demonstrate deeper reasoning."
        },

        stopwatch: {
            keywords: [
                "stopwatch",
                "timer",
                "time limit",
                "watch",
                "clock"
            ],
            answer:
                "The first four learning activities use a stopwatch-style timing feature to make the challenges more interactive and engaging."
        },

        feedback: {
            keywords: [
                "feedback",
                "student feedback",
                "teacher feedback",
                "review",
                "rating",
                "feedback form"
            ],
            answer:
                "The learning lab includes Student Feedback and Teacher Feedback sections so learners and teachers can share their experience of the platform."
        },

        progress: {
            keywords: [
                "progress",
                "progress dashboard",
                "my progress",
                "score",
                "results"
            ],
            answer:
                "The Progress area helps learners review their activity performance and learning journey."
        },

        profile: {
            keywords: [
                "student profile",
                "profile",
                "student name",
                "class",
                "section",
                "roll number"
            ],
            answer:
                "The Student Profile area allows a learner to enter basic learning details such as name, class, section and roll number before participating in activities."
        },

        english: {
            keywords: [
                "english",
                "english learning",
                "english activity",
                "english lab",
                "language learning"
            ],
            answer:
                "English is used as a powerful context for Computational Thinking and AI Readiness. Students learn language while practising sequencing, patterns, decision making, debugging and logical reasoning."
        },

        grammar: {
            keywords: [
                "grammar",
                "grammar activity",
                "grammar learning",
                "grammar skills"
            ],
            answer:
                "Grammar learning in the lab is activity-based. Students do not only memorise rules; they identify patterns, make decisions, detect errors and apply language in meaningful situations."
        },

        teachers: {
            keywords: [
                "teacher",
                "teachers",
                "teacher role",
                "teachers role",
                "what do teachers do",
                "teacher feedback"
            ],
            answer:
                "Teachers guide students, observe learning, encourage reasoning and use the activities to connect English learning with Computational Thinking and AI Readiness."
        },

        students: {
            keywords: [
                "students",
                "student",
                "learners",
                "children",
                "school students"
            ],
            answer:
                "Students are the centre of the learning lab. The activities encourage them to think, question, sequence, debug, decide and communicate rather than simply memorise answers."
        },

        family: {
            keywords: [
                "family",
                "families",
                "parents",
                "mother",
                "father",
                "mom",
                "dad",
                "home",
                "student family"
            ],
            answer:
                "Family plays an important role in supporting learning. Parents and family members can encourage students to ask sensible questions, think logically, practise English and use technology responsibly."
        },

        bestFriend: {
            keywords: [
                "best friend",
                "bestfriend",
                "friend",
                "friends",
                "my friend",
                "school friend",
                "best buddy"
            ],
            answer:
                "Your best friend is a personal detail that I cannot know unless you tell me. I should not invent a student's friend's name or identity."
        },

        schoolLife: {
            keywords: [
                "school life",
                "life at school",
                "student life",
                "school experience",
                "school day"
            ],
            answer:
                "School life is about learning, friendship, communication, activities, creativity, responsibility and discovering new ways to solve problems."
        },

        building: {
            keywords: [
                "building",
                "school building",
                "school campus",
                "campus",
                "school structure",
                "school premises",
                "school rooms"
            ],
            answer:
                "The school building is the physical learning environment where students, teachers and learning activities come together. I will not invent specific room counts, floors or facilities unless those details are provided."
        },

        classroom: {
            keywords: [
                "classroom",
                "class rooms",
                "class room",
                "rooms",
                "my classroom",
                "school classroom"
            ],
            answer:
                "Classrooms are learning spaces where students interact with teachers, peers and learning resources. Specific classroom numbers or layouts should only be stated when verified school information is available."
        },

        technology: {
            keywords: [
                "technology",
                "digital",
                "computer",
                "computers",
                "digital learning",
                "technology in school"
            ],
            answer:
                "Technology in the learning lab is used to support active learning, problem solving, digital interaction and AI Readiness."
        },

        qr: {
            keywords: [
                "qr",
                "qr code",
                "photos",
                "videos",
                "class photos",
                "class videos",
                "drive"
            ],
            answer:
                "The learning lab includes a classroom evidence section with a QR code that can connect users to the school's shared classroom photos and videos."
        },

        values: {
            keywords: [
                "values",
                "school values",
                "good values",
                "responsibility",
                "learning values",
                "responsible technology"
            ],
            answer:
                "The learning approach encourages curiosity, responsibility, logical thinking, creativity, communication, collaboration and responsible use of technology."
        },

        project: {
            keywords: [
                "project",
                "this project",
                "learning project",
                "ct ai project",
                "national level project"
            ],
            answer:
                "The CT & AI Learning Lab is an educational project that integrates English classroom practices with Computational Thinking and AI Readiness."
        }

    };


    /* =====================================================
       QUESTION PATTERN GENERATOR
       Creates thousands of natural variations
    ===================================================== */

    const BR_QUESTION_PATTERNS = [

        "what is {x}",
        "what are {x}",
        "tell me about {x}",
        "tell me something about {x}",
        "can you tell me about {x}",
        "could you tell me about {x}",
        "please tell me about {x}",
        "please explain {x}",
        "explain {x}",
        "can you explain {x}",
        "could you explain {x}",
        "i want to know about {x}",
        "i want information about {x}",
        "give me information about {x}",
        "what do you know about {x}",
        "what can you tell me about {x}",
        "how would you describe {x}",
        "describe {x}",
        "give me details about {x}",
        "share information about {x}",
        "tell me more about {x}",
        "can you give me details about {x}",
        "could you give me details about {x}",
        "i am curious about {x}",
        "i am curious to know about {x}",
        "help me understand {x}",
        "help me learn about {x}",
        "i want to understand {x}",
        "can you help me understand {x}",
        "what should i know about {x}",
        "why is {x} important",
        "why do we have {x}",
        "why do students use {x}",
        "why do students learn {x}",
        "how does {x} work",
        "how is {x} used",
        "how do students use {x}",
        "how do teachers use {x}",
        "how can students learn through {x}",
        "what happens in {x}",
        "what do students do in {x}",
        "what do teachers do with {x}",
        "what is the purpose of {x}",
        "what is the use of {x}",
        "what is the importance of {x}",
        "why should i learn {x}",
        "why should students learn {x}",
        "where can i find {x}",
        "where is {x}",
        "tell me where {x} is",
        "is there {x}",
        "does the school have {x}",
        "does br modern school have {x}",
        "does brms have {x}",
        "what about {x}",
        "anything about {x}",
        "say something about {x}",
        "give me a short introduction to {x}",
        "give me an introduction to {x}",
        "introduce me to {x}",
        "tell me in simple words about {x}",
        "explain {x} simply",
        "explain {x} for a student",
        "explain {x} in easy language",
        "what should a student know about {x}",
        "how would a student understand {x}",
        "why does {x} matter",
        "what makes {x} useful",
        "what makes {x} special"
    ];


    /* =====================================================
       HUMAN-LIKE TOPIC PHRASES
    ===================================================== */

    const BR_TOPIC_NAMES = {

        school: [
            "the school",
            "BR Modern School",
            "BR Modern School Pauri",
            "BRMS",
            "our school",
            "my school",
            "the school in Pauri",
            "BR Modern School in Pauri"
        ],

        lab: [
            "the lab",
            "the labs",
            "the learning lab",
            "the CT lab",
            "the AI lab",
            "the CT and AI Learning Lab",
            "the Computational Thinking lab",
            "the AI Readiness lab"
        ],

        bestFriend: [
            "my best friend",
            "your best friend",
            "a school friend",
            "my friend",
            "my best buddy",
            "a student's best friend",
            "school friends"
        ],

        family: [
            "my family",
            "student families",
            "parents",
            "family members",
            "parents at home",
            "family support",
            "learning support from family"
        ],

        building: [
            "the school building",
            "the school campus",
            "the campus",
            "the school premises",
            "the building",
            "the learning environment"
        ],

        classroom: [
            "the classroom",
            "school classrooms",
            "our classroom",
            "a classroom",
            "classrooms at school",
            "the learning space"
        ],

        activities: [
            "the activities",
            "the learning activities",
            "the five activities",
            "the challenges",
            "the CT activities",
            "the AI activities",
            "the lab activities"
        ],

        teachers: [
            "the teachers",
            "teachers at school",
            "a teacher",
            "the teacher's role",
            "teachers in the lab",
            "teacher support"
        ],

        students: [
            "the students",
            "students",
            "learners",
            "school learners",
            "students in the lab"
        ],

        technology: [
            "technology",
            "digital learning",
            "computers",
            "technology in school",
            "digital tools",
            "AI technology"
        ],

        english: [
            "English learning",
            "English activities",
            "English in the lab",
            "language learning",
            "English classroom learning"
        ],

        ct: [
            "Computational Thinking",
            "CT",
            "computational thinking skills",
            "CT learning",
            "computational thinking activities"
        ],

        ai: [
            "AI",
            "Artificial Intelligence",
            "AI Readiness",
            "AI learning",
            "artificial intelligence learning"
        ],

        chatbot: [
            "the chatbot",
            "this chatbot",
            "Human Chatbot Challenge",
            "the Human Chatbot",
            "your chatbot"
        ],

        project: [
            "this project",
            "the CT and AI project",
            "the learning lab project",
            "the school project",
            "the English CT AI project"
        ]

    };


    /* =====================================================
       BUILD 2000+ QUESTION PATTERNS
    ===================================================== */

    const BR_GENERATED_PATTERNS = [];

    Object.keys(BR_TOPIC_NAMES).forEach(function (topic) {

        BR_TOPIC_NAMES[topic].forEach(function (phrase) {

            BR_QUESTION_PATTERNS.forEach(function (pattern) {

                BR_GENERATED_PATTERNS.push(
                    pattern.replace("{x}", phrase)
                );

            });

        });

    });


    /* =====================================================
       EXTRA NATURAL QUESTIONS
    ===================================================== */

    const BR_EXTRA_QUESTIONS = [

        "who are you",
        "what are you",
        "who made you",
        "why are you here",
        "what can you do",
        "what can you help me with",
        "what can i ask you",
        "can i ask you about my school",
        "can i ask about the labs",
        "can i ask about school activities",
        "can i ask about my friends",
        "can i ask about my family",
        "can i ask about teachers",
        "can i ask about classrooms",
        "can i ask about the school building",
        "tell me about our school",
        "tell me about my school",
        "tell me about brms",
        "tell me about br modern school pauri",
        "what is special about our school",
        "what is special about this learning lab",
        "why is this learning lab useful",
        "what do students learn here",
        "what can students do here",
        "what are the five activities",
        "which activity comes first",
        "which activity comes second",
        "which activity comes third",
        "which activity comes fourth",
        "which activity comes fifth",
        "how many activities are there",
        "how many levels are there",
        "what are the three levels",
        "what is foundation",
        "what is explorer",
        "what is challenge",
        "what is computational thinking",
        "why learn computational thinking",
        "what is ai readiness",
        "why learn ai readiness",
        "how is english connected with computational thinking",
        "how is english connected with ai",
        "how does grammar debugging work",
        "what is story sequencing",
        "what is time detective",
        "what is time pattern sorter",
        "what is human chatbot challenge",
        "how does the chatbot work",
        "what should i ask the chatbot",
        "can the chatbot know my best friend",
        "does the chatbot know my family",
        "does the chatbot know my personal information",
        "can you guess my friend's name",
        "can you guess my family members",
        "do you know my parents",
        "do you know my best friend",
        "do you know everything about me",
        "can you make up information about my school",
        "should you guess school information",
        "can you invent an answer",
        "what happens if i ask a nonsense question",
        "what if my question is incomplete",
        "can you answer incomplete questions",
        "can you answer sensible questions",
        "what kind of questions should i ask",
        "can i ask a complete question",
        "why should my question be clear",
        "how can i ask better questions",
        "how can students become better questioners",
        "how can students think logically",
        "how can students learn through games",
        "how can students improve english through activities",
        "how can students learn grammar differently",
        "how can students practise sequencing",
        "how can students practise debugging",
        "how can students practise patterns",
        "how can students practise decision making",
        "how can students practise problem solving",
        "how can technology help learning",
        "how can ai support learning",
        "how can parents support learning",
        "how can teachers support students",
        "why is family support important",
        "why are teachers important",
        "why are friends important at school",
        "why is school life important",
        "what makes a good learning environment",
        "what makes a good classroom",
        "what is a learning lab",
        "what happens inside a learning lab",
        "what is a digital learning environment",
        "what is a school campus",
        "what is a school building",
        "what should you know about the building",
        "can you tell me the exact number of classrooms",
        "can you tell me the exact number of floors",
        "can you tell me the exact number of labs",
        "will you guess if you do not know",
        "what do you do when information is unavailable"
    ];


    /* =====================================================
       KNOWLEDGE LOOKUP
    ===================================================== */

    function brNormalize(text) {

        return String(text || "")
            .toLowerCase()
            .replace(/[?!.,"'`]/g, " ")
            .replace(/\s+/g, " ")
            .trim();

    }


    function brFindTopic(question) {

        const q = brNormalize(question);

        let bestTopic = null;
        let bestScore = 0;

        Object.keys(BR_SCHOOL_KNOWLEDGE).forEach(function (topic) {

            const data = BR_SCHOOL_KNOWLEDGE[topic];

            let score = 0;

            data.keywords.forEach(function (keyword) {

                const k = brNormalize(keyword);

                if (q === k) {
                    score += 20;
                } else if (q.includes(k)) {
                    score += Math.max(2, k.length / 4);
                }

            });

            if (score > bestScore) {
                bestScore = score;
                bestTopic = topic;
            }

        });

        return bestTopic;

    }


    /* =====================================================
       SENSIBLE QUESTION FILTER
    ===================================================== */

    function brIsSensibleQuestion(question) {

        const q = brNormalize(question);

        if (!q) return false;

        if (q.length < 3) return false;

        const meaningless = [
            "hi",
            "hii",
            "hello",
            "hey",
            "ok",
            "okay",
            "hmm",
            "hmmm",
            "yes",
            "no",
            "yo",
            "lol",
            "abc",
            "test",
            "testing"
        ];

        if (meaningless.includes(q)) return false;

        const words = q.split(" ");

        if (words.length < 2) {

            const topic = brFindTopic(q);

            if (!topic) return false;

        }

        return true;

    }


    /* =====================================================
       PERSONAL INFORMATION PROTECTION
    ===================================================== */

    function brPersonalQuestion(question) {

        const q = brNormalize(question);

        const personalPatterns = [

            "my best friend name",
            "my best friend's name",
            "your best friend name",
            "your best friend's name",
            "my friend name",
            "my mother's name",
            "my father's name",
            "my parents name",
            "my family members",
            "my brother name",
            "my sister name",
            "where does my friend live",
            "where does my family live",
            "my phone number",
            "my address",
            "my password"

        ];

        return personalPatterns.some(function (x) {

            return q.includes(brNormalize(x));

        });

    }


    /* =====================================================
       MAIN CHATBOT RESPONSE FUNCTION
    ===================================================== */

    function BRChatbotAnswer(question) {

        const q = brNormalize(question);

        if (!brIsSensibleQuestion(q)) {

            return "Please ask me a complete and sensible question. You can ask about BR Modern School Pauri, the CT & AI Learning Lab, activities, teachers, students, family support, friends, classrooms, technology or school life.";

        }

        if (brPersonalQuestion(q)) {

            return "I should not guess or invent someone's personal information. If you want, you can tell me the information and I can help you frame a question or sentence about it.";

        }

        const topic = brFindTopic(q);

        if (topic && BR_SCHOOL_KNOWLEDGE[topic]) {

            return BR_SCHOOL_KNOWLEDGE[topic].answer;

        }

        return "I can help with questions about BR Modern School Pauri, the CT & AI Learning Lab, school activities, Computational Thinking, AI Readiness, English learning, teachers, students, family support, friends, classrooms, technology and school life. Please ask a clear question.";

    }


    /* =====================================================
       EXPORT FOR EXISTING CHATBOT
    ===================================================== */

    window.BR_SCHOOL_KNOWLEDGE = BR_SCHOOL_KNOWLEDGE;

    window.BR_CHATBOT_PATTERNS = [
        ...BR_GENERATED_PATTERNS,
        ...BR_EXTRA_QUESTIONS
    ];

    window.BRChatbotAnswer = BRChatbotAnswer;

    window.BRChatbotQuestionCount =
        window.BR_CHATBOT_PATTERNS.length;


    /* =====================================================
       UPDATE PATTERN COUNTER
    ===================================================== */

    document.addEventListener("DOMContentLoaded", function () {

        const counter = document.getElementById("patternCount");

        if (counter) {

            counter.textContent =
                Math.max(
                    1000,
                    window.BRChatbotQuestionCount
                ) + "+";

        }

    });


    /* =====================================================
       OPTIONAL CHATBOT HOOK
       Supports common input/button IDs if present
    ===================================================== */

    document.addEventListener("DOMContentLoaded", function () {

        const input =
            document.getElementById("chatInput") ||
            document.getElementById("chatbotInput") ||
            document.getElementById("humanChatInput") ||
            document.querySelector(
                'input[placeholder*="question" i], textarea[placeholder*="question" i]'
            );

        const button =
            document.getElementById("chatSend") ||
            document.getElementById("chatbotSend") ||
            document.getElementById("sendChat") ||
            document.querySelector(
                '[data-chat-send]'
            );

        const output =
            document.getElementById("chatOutput") ||
            document.getElementById("chatbotOutput") ||
            document.getElementById("chatMessages") ||
            document.querySelector(".chatMessages");

        if (!input || !button || !output) return;

        function sendBRChat() {

            const question = input.value.trim();

            if (!question) return;

            const answer = BRChatbotAnswer(question);

            const userMessage =
                document.createElement("div");

            userMessage.className =
                "chatMessage userMessage";

            userMessage.textContent =
                question;

            const botMessage =
                document.createElement("div");

            botMessage.className =
                "chatMessage botMessage";

            botMessage.textContent =
                answer;

            output.appendChild(userMessage);
            output.appendChild(botMessage);

            input.value = "";

            output.scrollTop =
                output.scrollHeight;

        }

        button.addEventListener(
            "click",
            sendBRChat
        );

        input.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {

                    event.preventDefault();

                    sendBRChat();

                }

            }
        );

    });


    /* =====================================================
       CONSOLE INFORMATION
    ===================================================== */

    console.log(
        "BR Modern School Pauri Chatbot Knowledge Engine loaded."
    );

    console.log(
        "Generated question patterns:",
        window.BRChatbotQuestionCount
    );

})();
/* =========================================================
   BR MODERN SCHOOL PAURI
   CHATBOT FINAL OVERRIDE
   PASTE THIS ENTIRE BLOCK AT THE VERY END OF script.js
========================================================= */

(function () {

"use strict";

/* =========================================================
   EXTENDED SCHOOL KNOWLEDGE
========================================================= */

const BRMS_CHAT = {

schoolName:
"B.R. Modern School, Pauri.",

location:
"B.R. Modern School is located in Pauri, Uttarakhand, India.",

board:
"B.R. Modern School, Pauri is a CBSE-affiliated school.",

lab:
"The CT & AI Learning Lab is a learning environment that connects English learning with Computational Thinking and AI readiness.",

ct:
"Computational Thinking develops logical thinking, pattern recognition, sequencing, problem solving, decision making and debugging skills.",

ai:
"AI readiness means developing the ability to ask sensible questions, understand information, think logically and interact responsibly with AI.",

english:
"The project connects English learning with grammar, communication, sentence construction, sequencing, reasoning and practical language use.",

activities:
"The five activities are Time Pattern Sorter, Time Detective, Story Sequencing Challenge, Grammar Debugger and Human Chatbot Challenge.",

sorter:
"Time Pattern Sorter is the first activity. Students practise recognising time patterns and suitable verb forms.",

detective:
"Time Detective is the second activity. Students use time clues to identify the appropriate sentence and tense.",

sequencing:
"Story Sequencing Challenge is the third activity. Students arrange sentences or events in a logical sequence.",

debugger:
"Grammar Debugger is the fourth activity. Students identify and correct grammar errors.",

chatbot:
"Human Chatbot Challenge is the fifth activity. Students ask complete and sensible questions and practise questioning and information processing.",

levels:
"The first four activities have three learning levels. They progress from basic understanding to more challenging tasks. The Human Chatbot Challenge does not use levels.",

profile:
"The Student Profile section records information such as name, class, section and roll number.",

progress:
"The Progress section helps students review their attempts, scores, average performance, completed levels and best scores.",

feedback:
"The website includes both Student Feedback and Teacher Feedback sections.",

approach:
"The project follows an activity-based, learner-centred and interactive approach.",

skills:
"The project develops communication, logical thinking, sequencing, pattern recognition, reasoning, problem solving, grammar application and AI readiness.",

purpose:
"The purpose of the project is to connect English classroom learning with Computational Thinking and AI readiness.",

evidence:
"Classroom photos and videos can be shared through the classroom evidence section.",

studentLearning:
"Students learn by solving challenges, identifying patterns, arranging information, correcting errors, making decisions and asking questions."

};


/* =========================================================
   NATURAL QUESTION MATCHING
========================================================= */

function brNorm(q){

return String(q || "")
.toLowerCase()
.replace(/[?!.,;:]/g," ")
.replace(/\s+/g," ")
.trim();

}


function brHas(s, words){

return words.some(function(w){

return s.includes(w);

});

}


/* =========================================================
   CHAT INTENT
========================================================= */

function brIntent(question){

const s=brNorm(question);


/* ---------------------------------------------------------
   SCHOOL NAME — ALWAYS CHECK FIRST
--------------------------------------------------------- */

if(

brHas(s,[

"school name",
"what is your school name",
"name of your school",
"name of the school",
"which school",
"what school",
"school are you from",
"school do you belong",
"where do you study",
"which school do you study"

])

){

return "schoolName";

}


/* ---------------------------------------------------------
   PERSONAL NAME
--------------------------------------------------------- */

if(

brHas(s,[

"your name",
"what is your name",
"what are you called",
"who are you",
"tell me your name"

])

){

return "personalName";

}


/* ---------------------------------------------------------
   BEST FRIEND
--------------------------------------------------------- */

if(

brHas(s,[

"best friend",
"close friend",
"your friend",
"who is your friend"

])

){

return "friend";

}


/* ---------------------------------------------------------
   HOBBY
--------------------------------------------------------- */

if(

brHas(s,[

"hobby",
"free time",
"enjoy doing",
"like doing",
"what do you enjoy"

])

){

return "hobby";

}


/* ---------------------------------------------------------
   HOMETOWN
--------------------------------------------------------- */

if(

brHas(s,[

"hometown",
"home town",
"native place",
"where are you from"

])

){

return "hometown";

}


/* ---------------------------------------------------------
   PERSONAL LOCATION
--------------------------------------------------------- */

if(

brHas(s,[

"where do you live",
"where you live",
"your home",
"where is your home"

])

){

return "personalLocation";

}


/* ---------------------------------------------------------
   AGE
--------------------------------------------------------- */

if(

brHas(s,[

"how old are you",
"your age",
"what is your age"

])

){

return "age";

}


/* ---------------------------------------------------------
   FAVOURITE SUBJECT
--------------------------------------------------------- */

if(

brHas(s,[

"favourite subject",
"favorite subject",
"subject do you like",
"subject you like"

])

){

return "subject";

}


/* ---------------------------------------------------------
   FAVOURITE ACTIVITY
--------------------------------------------------------- */

if(

brHas(s,[

"favourite activity",
"favorite activity",
"activity do you like",
"activity you like"

])

){

return "favouriteActivity";

}


/* ---------------------------------------------------------
   ROLE
--------------------------------------------------------- */

if(

brHas(s,[

"your role",
"what do you do",
"what is your role",
"your purpose"

])

){

return "role";

}


/* ---------------------------------------------------------
   SCHOOL LOCATION
--------------------------------------------------------- */

if(

brHas(s,[

"school located",
"school location",
"school situated",
"where is the school",
"which city is the school",
"which town is the school"

])

){

return "location";

}


/* ---------------------------------------------------------
   CBSE / BOARD
--------------------------------------------------------- */

if(

brHas(s,[

"cbse",
"school board",
"education board",
"which board",
"board does your school",
"school affiliated",
"affiliation"

])

){

return "board";

}


/* ---------------------------------------------------------
   LEARNING LAB
--------------------------------------------------------- */

if(

brHas(s,[

"learning lab",
"ct and ai lab",
"ct ai lab",
"ai learning lab",
"digital learning lab",
"what happens in the lab"

])

){

return "lab";

}


/* ---------------------------------------------------------
   COMPUTATIONAL THINKING
--------------------------------------------------------- */

if(

brHas(s,[

"computational thinking",
"what is ct",
"ct mean",
"logical thinking"

])

){

return "ct";

}


/* ---------------------------------------------------------
   AI READINESS
--------------------------------------------------------- */

if(

brHas(s,[

"ai readiness",
"artificial intelligence",
"what is ai",
"ai learning",
"prepare for ai"

])

){

return "ai";

}


/* ---------------------------------------------------------
   ENGLISH
--------------------------------------------------------- */

if(

brHas(s,[

"english learning",
"english skills",
"communication skills",
"grammar learning",
"language skills"

])

){

return "english";

}


/* ---------------------------------------------------------
   ACTIVITIES
--------------------------------------------------------- */

if(

brHas(s,[

"activities",
"how many activities",
"five activities",
"learning games",
"challenges available",
"activity section"

])

){

return "activities";

}


/* ---------------------------------------------------------
   ACTIVITY 1
--------------------------------------------------------- */

if(

brHas(s,[

"time pattern sorter",
"first activity"

])

){

return "sorter";

}


/* ---------------------------------------------------------
   ACTIVITY 2
--------------------------------------------------------- */

if(

brHas(s,[

"time detective",
"second activity"

])

){

return "detective";

}


/* ---------------------------------------------------------
   ACTIVITY 3
--------------------------------------------------------- */

if(

brHas(s,[

"story sequencing",
"story sequencing challenge",
"third activity",
"sequencing activity"

])

){

return "sequencing";

}


/* ---------------------------------------------------------
   ACTIVITY 4
--------------------------------------------------------- */

if(

brHas(s,[

"grammar debugger",
"fourth activity",
"debug grammar"

])

){

return "debugger";

}


/* ---------------------------------------------------------
   ACTIVITY 5
--------------------------------------------------------- */

if(

brHas(s,[

"human chatbot",
"chatbot challenge",
"fifth activity",
"chatbot activity"

])

){

return "chatbot";

}


/* ---------------------------------------------------------
   LEVELS
--------------------------------------------------------- */

if(

brHas(s,[

"how many levels",
"learning levels",
"level 1",
"level 2",
"level 3",
"levels"

])

){

return "levels";

}


/* ---------------------------------------------------------
   STUDENT PROFILE
--------------------------------------------------------- */

if(

brHas(s,[

"student profile",
"profile information",
"student details",
"name class section roll"

])

){

return "profile";

}


/* ---------------------------------------------------------
   PROGRESS
--------------------------------------------------------- */

if(

brHas(s,[

"progress dashboard",
"my progress",
"previous attempts",
"average score",
"best score",
"activity history"

])

){

return "progress";

}


/* ---------------------------------------------------------
   FEEDBACK
--------------------------------------------------------- */

if(

brHas(s,[

"student feedback",
"teacher feedback",
"feedback section",
"give feedback"

])

){

return "feedback";

}


/* ---------------------------------------------------------
   TEACHING APPROACH
--------------------------------------------------------- */

if(

brHas(s,[

"teaching approach",
"learning approach",
"activity based",
"learner centred",
"learner centered",
"interactive learning"

])

){

return "approach";

}


/* ---------------------------------------------------------
   SKILLS
--------------------------------------------------------- */

if(

brHas(s,[

"skills developed",
"skills students gain",
"abilities developed",
"competencies",
"what skills"

])

){

return "skills";

}


/* ---------------------------------------------------------
   PURPOSE
--------------------------------------------------------- */

if(

brHas(s,[

"purpose of the project",
"purpose of this project",
"why was this project",
"main purpose",
"aim of the project"

])

){

return "purpose";

}


/* ---------------------------------------------------------
   EVIDENCE
--------------------------------------------------------- */

if(

brHas(s,[

"class photos",
"class videos",
"photos and videos",
"classroom evidence",
"evidence section",
"qr code"

])

){

return "evidence";

}


/* ---------------------------------------------------------
   STUDENT LEARNING
--------------------------------------------------------- */

if(

brHas(s,[

"how do students learn",
"what do students learn",
"student learning",
"how students learn"

])

){

return "studentLearning";

}


return "";

}


/* =========================================================
   ACTIVITY 5 — HUMAN CHATBOT CHALLENGE
   Single clean Activity-5 implementation.
   Other activities and site logic are intentionally untouched.
========================================================= */

const SRISTI_TOPICS = [
  ["Favourite Food", ["favourite food","favorite food","food you like","food do you like","food you love","food you enjoy"], "My favourite food is rajma-chawal. I like it because it is tasty and reminds me of home."],
  ["Favourite Colour", ["favourite colour","favorite colour","favourite color","favorite color","colour you like","color you like"], "My favourite colour is blue because it feels calm, fresh and cheerful."],
  ["Favourite Book", ["favourite book","favorite book","book you like","book do you like","book you love","book you enjoy"], "My favourite book is The Blue Umbrella by Ruskin Bond. I like its simple story and beautiful hill setting."],
  ["Favourite Movie", ["favourite movie","favorite movie","movie you like","movie do you like","film you like","film do you like"], "My favourite movie is Taare Zameen Par because it shows that every child learns differently and has special strengths."],
  ["Favourite Song", ["favourite song","favorite song","song you like","song do you like","song you love","song you enjoy"], "My favourite song is Ilahi because I enjoy its cheerful feeling and sense of adventure."],
  ["Favourite Singer", ["favourite singer","favorite singer","singer you like","singer do you like","singer you admire"], "My favourite singer is Arijit Singh because I like the emotion and softness in his songs."],
  ["Favourite Actor/Actress", ["favourite actor","favorite actor","favourite actress","favorite actress","actor or actress you like","actor you like","actress you like"], "My favourite actor is Ayushmann Khurrana because I enjoy his natural acting and meaningful stories."],
  ["Favourite Sport", ["favourite sport","favorite sport","sport you like","sport do you like","sport you enjoy","sport you love"], "My favourite sport is badminton because it is energetic, fun and keeps me active."],
  ["Favourite Sports Person", ["favourite sports person","favorite sports person","sports person you like","sports person you admire","sportsperson you admire"], "My favourite sports person is P. V. Sindhu because I admire her discipline, hard work and determination."],
  ["Favourite Game", ["favourite game","favorite game","game you like","game do you like","game you enjoy","game you love"], "My favourite game is badminton. I also enjoy chess when I want to challenge my thinking."],
  ["Favourite Subject", ["favourite subject","favorite subject","subject you like","subject do you like","subject you enjoy","subject you love"], "My favourite subject is English because I enjoy reading, expressing ideas and learning new words."],
  ["Favourite Teacher", ["favourite teacher","favorite teacher","teacher you like","teacher do you like","teacher you admire"], "My favourite teacher is my English teacher because she encourages me to express my ideas clearly and confidently."],
  ["Favourite School Activity", ["favourite school activity","favorite school activity","school activity you like","school activity do you like","school activity you enjoy"], "My favourite school activity is taking part in interactive learning activities because they make learning enjoyable and practical."],
  ["Favourite Place in School", ["favourite place in school","favorite place in school","place in school you like","school place you like","place at school you enjoy"], "My favourite place in school is the library because it is peaceful and lets me explore different books."],
  ["Best School Memory", ["best school memory","favourite school memory","favorite school memory","school memory you like","school memory you remember"], "One of my best school memories is completing a group activity successfully with my classmates."],
  ["Favourite School Event", ["favourite school event","favorite school event","school event you like","school event do you like","school event you enjoy"], "My favourite school event is Annual Day because I enjoy performances, teamwork and celebrating everyone's talents."],
  ["Favourite Hobby", ["favourite hobby","favorite hobby","hobby you like","hobby do you like","hobbies you have","your hobby"], "My favourite hobby is reading books and spending time talking with my best friend Lalit."],
  ["Free-Time Activity", ["free time activity","free-time activity","what you do in free time","free time you spend","pastime you like","free time hobby"], "In my free time, I like reading, listening to music and talking with Lalit."],
  ["Favourite Indoor Activity", ["favourite indoor activity","favorite indoor activity","indoor activity you like","indoor activity do you like","indoor activity you enjoy"], "My favourite indoor activity is reading because I can relax while discovering new ideas and stories."],
  ["Favourite Outdoor Activity", ["favourite outdoor activity","favorite outdoor activity","outdoor activity you like","outdoor activity do you like","outdoor activity you enjoy"], "My favourite outdoor activity is playing badminton because I enjoy being active and playing with others."],
  ["Dream Career", ["dream career","career you dream of","career you want","future career","job you dream of","what you want to become"], "My dream career is to become a teacher because I would like to help children learn with confidence."],
  ["Dream School/College", ["dream school","dream college","school you dream of","college you dream of","college you want to attend","school you want to attend"], "My dream college is the University of Delhi because I would like to experience a lively academic environment and explore new subjects."],
  ["Person They Admire", ["person you admire","who do you admire","person you look up to","who you look up to","person you respect"], "I admire my mother because she is caring, hardworking and always encourages me to do my best."],
  ["Role Model", ["role model","your role model","who is your role model","person who inspires you","who inspires you"], "My role model is Dr. A. P. J. Abdul Kalam because he inspired young people to dream, learn and work hard."],
  ["Person They Would Like to Meet", ["person you would like to meet","person you want to meet","who would you like to meet","who do you want to meet","person you wish to meet"], "I would like to meet Dr. A. P. J. Abdul Kalam if I had the chance, because I would want to hear his advice for students."],
  ["Dream Destination", ["dream destination","destination you dream of","dream place to visit","where is your dream destination","place you dream of visiting"], "My dream destination is Japan because I would love to experience its culture, technology, food and beautiful places."],
  ["Favourite Place They Have Visited", ["favourite place you have visited","favorite place you have visited","favourite place you visited","favorite place you visited","best place you have visited"], "My favourite place I have visited is Mussoorie because I enjoyed the mountains, pleasant weather and beautiful views."],
  ["Place They Want to Visit", ["place you want to visit","place you would like to visit","where do you want to visit","where would you like to visit","place you wish to visit"], "I want to visit Kashmir because I would love to see its mountains, lakes and beautiful landscapes."],
  ["Dream Holiday", ["dream holiday","dream vacation","holiday you dream of","vacation you dream of","what would your dream holiday be"], "My dream holiday would be a peaceful trip to the mountains with my family, with time for sightseeing, reading and enjoying nature."],
  ["Favourite Season", ["favourite season","favorite season","season you like","season do you like","season you enjoy"], "My favourite season is winter because I enjoy cool weather, warm clothes and cosy evenings."],
  ["Favourite Festival", ["favourite festival","favorite festival","festival you like","festival do you like","festival you enjoy"], "My favourite festival is Diwali because I enjoy the lights, decorations, family time and festive atmosphere."],
  ["Favourite Festival Memory", ["favourite festival memory","favorite festival memory","best festival memory","festival memory you like","festival memory you remember most"], "One of my favourite festival memories is decorating the house with my family and sharing a special meal together."],
  ["Favourite Traditional Food", ["favourite traditional food","favorite traditional food","traditional food you like","traditional food do you like","traditional dish you like"], "My favourite traditional food is aloo ke gutke with mandua roti because I enjoy its simple hill-style taste."],
  ["Favourite Family Tradition", ["favourite family tradition","favorite family tradition","family tradition you like","family tradition you enjoy","tradition your family follows"], "My favourite family tradition is having meals together on special days and spending time talking as a family."],
  ["Favourite Childhood Memory", ["favourite childhood memory","favorite childhood memory","best childhood memory","childhood memory you like","childhood memory you remember most"], "One of my favourite childhood memories is playing simple games with family and friends during holidays."],
  ["Favourite Birthday Memory", ["favourite birthday memory","favorite birthday memory","best birthday memory","birthday memory you like","birthday you remember most"], "My favourite birthday memory is celebrating with family, cutting a cake and receiving warm wishes from people I love."],
  ["Favourite Family Activity", ["favourite family activity","favorite family activity","family activity you like","family activity you enjoy","what do you like doing with your family"], "My favourite family activity is sitting together, talking and enjoying a meal or a short outing."],
  ["Favourite Pet/Animal", ["favourite pet","favorite pet","favourite animal","favorite animal","animal you like","pet or animal you like","animal you love"], "My favourite animal is the dog because dogs are friendly, loyal and playful."],
  ["Animal They Would Like to Keep as a Pet", ["animal you would like to keep as a pet","animal you want as a pet","pet you would like to have","pet you want to keep","what pet would you like"], "I would like to keep a dog as a pet because dogs are friendly, loyal and fun to be around."],
  ["Favourite Nature Spot", ["favourite nature spot","favorite nature spot","nature spot you like","nature place you like","nature place you enjoy"], "My favourite nature spot is a hill viewpoint near Pauri because I love the fresh air and mountain views."],
  ["Best Friend", ["best friend","bestfriend","your best friend","your friend","best friend's name","best friends name","friend's name","friends name","close friend"], "My best friend is Lalit. We met at school, gradually became close, and enjoy talking, learning and doing activities together."],
  ["Qualities They Like in a Friend", ["qualities you like in a friend","qualities you want in a friend","qualities you look for in a friend","what qualities do you like in a friend","what makes a good friend"], "I value honesty, kindness, helpfulness, trust and a good sense of humour in a friend."],
  ["What Makes Them Happy", ["what makes you happy","what makes you feel happy","things that make you happy","what makes you happiest","what do you enjoy that makes you happy"], "Spending time with family and friends, reading, learning something new and enjoying nature make me happy."],
  ["What Makes Them Laugh", ["what makes you laugh","what makes you smile and laugh","things that make you laugh","what makes you laugh the most","what do you find funny"], "Funny conversations, harmless jokes and funny moments with my friends make me laugh."],
  ["Something They Are Proud Of", ["something you are proud of","what are you proud of","what makes you proud","something you feel proud about","achievement you are proud of"], "I am proud of becoming more confident at asking questions, learning from mistakes and working with others."],
  ["A Skill They Want to Learn", ["skill you want to learn","a skill you want to learn","what skill do you want to learn","skill you would like to learn","new skill you want to learn"], "I would like to learn basic coding because it can help me solve problems creatively and logically."],
  ["Something They Are Good At", ["something you are good at","what are you good at","things you are good at","what can you do well","what are your strengths"], "I am good at reading, explaining my ideas and working with others during activities."],
  ["Something They Want to Improve", ["something you want to improve","what do you want to improve","skill you want to improve","area you want to improve","what would you like to improve"], "I want to improve my public speaking and become more confident while speaking in front of a group."],
  ["One Thing They Would Change About School", ["one thing you would change about school","what would you change about school","thing you would change in school","change you would make at school","what change would you like in school"], "I would like to have even more activity-based learning opportunities so students can learn by doing."],
  ["One Wish They Would Like to Fulfil", ["one wish you would like to fulfil","one wish you want to fulfil","wish you would like to fulfil","wish you want to fulfil","what is your biggest wish","wish you would like to make true"], "One wish I would like to fulfil is to travel to beautiful places with my family and keep learning new things." ]
];

const QUESTION_FORMS = [
  "What is your {topic}?",
  "What's your {topic}?",
  "Tell me about your {topic}.",
  "Can you tell me your {topic}?",
  "Could you tell me about your {topic}?",
  "Please tell me about your {topic}.",
  "What would you say is your {topic}?",
  "Which one is your {topic}?",
  "Can you share your {topic}?",
  "I want to know about your {topic}."
];

const SRISTI_QUESTION_LIBRARY = [];
SRISTI_TOPICS.forEach(function(item){
  QUESTION_FORMS.forEach(function(form){
    SRISTI_QUESTION_LIBRARY.push(form.replace("{topic}", item[0].toLowerCase()));
  });
});

function activity5Norm(text){
  return String(text || "").toLowerCase()
    .replace(/[?!.,;:'"`’]/g," ")
    .replace(/\s+/g," ").trim();
}

function activity5AddMessage(box, cls, who, text){
  const row=document.createElement("div");
  row.className="chatMessageRow "+cls;
  const bubble=document.createElement("div");
  bubble.className="chatMessageBubble";
  const name=document.createElement("div");
  name.className="chatMessageName";
  name.textContent=who;
  const body=document.createElement("div");
  body.textContent=text;
  bubble.appendChild(name); bubble.appendChild(body); row.appendChild(bubble); box.appendChild(row);
}

function activity5Answer(question){
  const q=activity5Norm(question);

  if(/^(hi|hey|hello|hii|heyy|good morning|good afternoon|good evening)$/.test(q))
    return "Hi! 👋 I'm Sristi. What would you like to know about me, Lalit, BR Modern School Pauri, or the CT & AI Learning Lab?";

  if(/\b(what is your name|what's your name|tell me your name|can you tell me your name|could you tell me your name|may i know your name|who are you|what should i call you)\b/.test(q))
    return "My name is Sristi.";

  if(/\b(what is your school name|what's your school name|what is the name of your school|which school do you go to|which school do you study in|where do you study|what school do you attend|your school name)\b/.test(q))
    return "My school is BR Modern School Pauri, in Pauri, Uttarakhand.";

  if(/\b(where is your school|where is your school located|where is brms|where is br modern school|school located where)\b/.test(q))
    return "BR Modern School is in Pauri, Uttarakhand.";

  if(/\b(where do you live|where do you stay|where is your home|where is your house|what is your address|where are you from|where is your hometown|what is your hometown|where do you reside)\b/.test(q))
    return "I live in Pauri, Uttarakhand, near the Power House.";

  if(/\bhow old are you\b|\bwhat is your age\b|\bwhat's your age\b/.test(q))
    return "I am 30 years old.";

  if(/\b(best friend|bestfriend|friend's name|friends name|who is your friend|who's your friend|who is your best friend|who's your best friend)\b/.test(q)){
    if(/\b(where|when|how) did you (first )?meet\b/.test(q))
      return "I met Lalit at BR Modern School Pauri. We gradually became close while studying together, talking during school and working together in activities.";
    if(/\bwhy\b/.test(q))
      return "Lalit is my best friend because he is supportive, trustworthy, helpful and has a good sense of humour. We understand each other and enjoy spending time together.";
    if(/\bqualities|quality\b/.test(q))
      return "I like honesty, kindness, helpfulness, trust and a good sense of humour in Lalit.";
    if(/\bhow long|since when|how many years\b/.test(q))
      return "I have known Lalit since we met at school, and our friendship became stronger as we spent more time learning and working together.";
    return "My best friend is Lalit. We met at BR Modern School Pauri, gradually became close, and enjoy talking, learning and doing activities together.";
  }

  if(/\b(computational thinking|what is ct|what does ct mean)\b/.test(q))
    return "Computational Thinking is a way of solving problems using ideas such as decomposition, pattern recognition, abstraction, sequencing and algorithms.";
  if(/\b(what is ai|what is artificial intelligence|ai readiness)\b/.test(q))
    return "AI readiness means developing the ability to understand, question, use and evaluate artificial intelligence thoughtfully and responsibly.";
  if(/\bwhat activities|what are the activities|how many activities|activities are there\b/.test(q))
    return "There are five activities: Time Pattern Sorter, Time Detective, Story Sequencing Challenge, Grammar Debugger and Human Chatbot Challenge.";
  if(/\b(what is your role|what do you do|what is your purpose|why were you created)\b/.test(q))
    return "I am a Human Chatbot Challenge character in the CT & AI Learning Lab. My role is to help students practise clear questioning, reasoning and thoughtful responses.";

  let best=null, score=0;
  SRISTI_TOPICS.forEach(function(item){
    item[1].forEach(function(alias){
      const a=activity5Norm(alias);
      if(q===a) { if(10000+a.length>score){score=10000+a.length;best=item;} }
      else if(q.indexOf(a)>=0) { const s=100+a.length; if(s>score){score=s;best=item;} }
    });
  });
  if(best) return best[2];

  return "I can answer questions about Sristi, Lalit, BR Modern School Pauri, my school life, my favourites, hobbies, dreams, family activities, nature and the CT & AI Learning Lab. Please ask one clear question at a time.";
}

function chatbot(){
  return `
  <div class="panel chatbotPanel activity5Chatbot">
    <div class="chatbotHeaderClean">
      <div class="chatbotAvatarClean">S</div>
      <div><strong>Sristi</strong><div class="chatbotOnlineClean">● Online • Human Chatbot</div></div>
      <div class="chatbotBadgeClean">AI READY</div>
    </div>
    <div class="chatbotBodyClean">
      <h3>Hi! 👋 I'm Sristi.</h3>
      <p class="chatbotIntroClean">Ask me one clear question. You can ask about me, Lalit, BR Modern School Pauri, or the CT & AI Learning Lab.</p>
      <div class="chatbotHowClean"><b>Try different question forms:</b> WHO • WHAT • WHEN • WHERE • WHY • WHICH • WHOSE • WHOM • HOW • HOW MANY • HOW MUCH • HOW OFTEN • HOW LONG • HOW FAR. <span>Paraphrasing is encouraged.</span></div>
      <div class="chatbotQuickClean">
        <button type="button" onclick="chatPrompt('What is your name?')">My name</button>
        <button type="button" onclick="chatPrompt('Who is your best friend?')">Best friend</button>
        <button type="button" onclick="chatPrompt('What is your school name?')">My school</button>
        <button type="button" onclick="chatPrompt('Where do you live?')">Where I live</button>
      </div>
      <div class="chatLog chatLogClean" id="chatA"><div class="chatMessageRow aiRow"><div class="chatMessageBubble"><div class="chatMessageName">Sristi</div><div>Hi! 👋 I'm Sristi. What would you like to know about me, Lalit, BR Modern School Pauri, or the CT & AI Learning Lab?</div></div></div></div>
      <div class="chatbotInputClean"><input id="chatQ" maxlength="300" autocomplete="off" placeholder="Type your question here..." onkeydown="if(event.key==='Enter'){event.preventDefault();chatAnswer();}"><button type="button" onclick="chatAnswer()">Send ↗</button></div>
      <div class="chatbotFooterClean"><span><b id="patternCount">500+</b> question patterns • 50 topics × 10 ways</span><button type="button" onclick="finishChat()">Finish Challenge</button></div>
    </div>
  </div>`;
}

function chatPrompt(text){
  const input=document.getElementById("chatQ");
  if(input){ input.value=text; input.focus(); }
}

window.chatAnswer=function(){
  const input=document.getElementById("chatQ"), box=document.getElementById("chatA");
  if(!input||!box) return;
  const question=input.value.trim();
  if(!question) return;
  activity5AddMessage(box,"userRow","You",question);
  activity5AddMessage(box,"aiRow","Sristi",activity5Answer(question));
  input.value=""; input.focus(); box.scrollTop=box.scrollHeight;
};

window.SRISTI_TOPICS=SRISTI_TOPICS;
window.SRISTI_QUESTION_LIBRARY=SRISTI_QUESTION_LIBRARY;
window.BRChatbotQuestionCount=SRISTI_QUESTION_LIBRARY.length;

document.addEventListener("DOMContentLoaded",function(){
  const c=document.getElementById("patternCount");
  if(c) c.textContent="500+";
});

})();

const examsDatabase = [
    {
        id: 1,
        name: 'امتحان  اسم فاعل  - متاح الان',
        subject: 'اللغة العربية متاح الان',
        description: 'امتحان شامل في اسم الفاعل وقواعد اللغة العربية',
        duration: 30,
        passingScore: 50,
        questions: [
            {
                question: 'أراضٍ ضميرك عن قولك وفعلك؟ ما تحته خط: (أراضٍ)',
                answers: ['مبتدأ', 'اسم فاعل', 'مرفوع بضمة مقدرة', 'كل ما سبق'],
                correct: 3
            },
            {
                question: 'ظل الإسلام حافظاً حقوق المرأة. ما تحته خط: (حقوق)',
                answers: ['فاعل', 'نائب فاعل', 'مفعول به', 'مضاف إليه'],
                correct: 2
            },
            {
                question: 'علينا أن نكون حامدين الله على نعمه. ما تحته خط: (حامدين)',
                answers: ['خبر نكون', 'اسم فاعل', 'منصوب بالياء', 'كل ما سبق'],
                correct: 3
            },
            {
                question: 'قال تعالى: "والذاكرين الله كثيراً والذاكرات" سبب عمل اسم الفاعل أنه:',
                answers: ['اعتمد على وصف', 'اعتمد على مبتدأ', 'اقترن بـ(أل)', 'اعتمد على حال'],
                correct: 2
            },
            {
                question: 'ما مهمل عمله إلا الكسول. معمول اسم الفاعل في هذه الجملة:',
                answers: ['مهمل', 'عمله', 'الكسول', 'الثانية والثالثة'],
                correct: 3
            },
            {
                question: 'اسم الفاعل من (يستفهم) هو: .........',
                answers: ['مستفهم', 'فاهم', 'متفهم', 'متفاهم'],
                correct: 0
            },
            {
                question: 'يحب الله الرافعين راية الحق. ما تحته خط: (راية)',
                answers: ['فاعل', 'نائب فاعل', 'مفعول به', 'مضاف إليه'],
                correct: 2
            },
            {
                question: 'يحب الله الرافعين راية الحق. ما تحته خط: (الرافعين)',
                answers: ['اسم فاعل', 'اسم مفعول', 'مفعول به', 'الأولى والثالثة'],
                correct: 3
            },
            {
                question: 'هو محترم رأي الآخرين. ما تحته خط: (الآخرين)',
                answers: ['فاعل', 'نائب فاعل', 'مفعول به', 'مضاف إليه'],
                correct: 3
            },
            {
                question: 'هو محترم رأي الآخرين. اعتمد اسم الفاعل في هذه الجملة على:',
                answers: ['مبتدأ', 'موصوف', 'نفي', 'حال'],
                correct: 0
            }
        ]
    },
    {
        id: 2,
        name: 'امتحان اعمال صيغة المبالغة -  متاح الان',
        subject: 'عربي',
        description: 'امتحان عربي',
        duration: 45,
        passingScore: 50,
        questions: [
    {
        question: '1- الأب العطوف أبناؤه مترابطون. ما تحته خط: (أبناؤه)',
        answers: ['مفعول به', 'فاعل', 'مبتدأ ثانٍ', 'خبر'],
        correct: 2
    },
    {
        question: '2- المصري مقدام في الحروب. ما تحته خط فعله: (مقدام)',
        answers: ['قدَّمَ', 'تقدم', 'أقدم', 'قدم'],
        correct: 2
    },
    {
        question: '3- ما شكورٌ نعمةَ ربه إلا المؤمن. إعراب كلمة نعمة: (نعمة)',
        answers: ['فاعل', 'مفعول به', 'مضاف إليه', 'نائب فاعل'],
        correct: 1
    },
    {
        question: '4- لا تكن معطاء الفضل من لا يستحق. ما تحته خط إعرابه: (من)',
        answers: ['فاعل', 'حرف جر', 'خبر كان', 'مفعول به ثانٍ'],
        correct: 3
    },
    {
        question: '5- المعلم يحب طالبا يقظا عقله. ما تحته خط فعله: (يقظا)',
        answers: ['وقظ', 'يقظ', 'أيقظ', 'أوقظ'],
        correct: 1
    },
    {
        question: '6- المجتمع يظل كريماً نهجه ما دام خلق الحياء. إعراب نهجه: (نهجه)',
        answers: ['خبر ظل', 'اسم ظل', 'مفعول به', 'فاعل'],
        correct: 3
    },
    {
        question: '7- لا يدرك المجد إلا سيد فطنٌ. سبب إعمال ما تحته خط: (فطنٌ)',
        answers: ['اعتمد على مبتدأ', 'وقع حالا', 'اعتمد على موصوف', 'اعتمد على نفي'],
        correct: 2
    },
    {
        question: '8- الأبوان هما الرحيما القلب. إعراب كلمة القلب: (القلب)',
        answers: ['فاعل', 'مضاف إليه', 'مفعول به', 'خبر'],
        correct: 1
    },
    
    {
        question: '10- كل الأمثلة الآتية تحتوي على صيغة مبالغة ما عدا: (ما عدا)',
        answers: [
            'لا تكن قلقا على رزقك',
            'يقدر المعلم الطالب الذكي',
            'الدولة الخلوق أفرادها تكون في الصدارة',
            'بالعزيمة والمثابرة تصل لما تريد'
        ],
        correct: 3
    }

        ]
    },
    {
        id: 3,
        name: 'امتحان شامل اعمال صيغة المبالغة واعمال اسم الفاعل متاح الان',
        subject: 'عربي',
        description: 'امتحان في العربي',
        duration: 30,
        passingScore: 50,
        questions: 
            
       [
    {
        "question": "1- قال الشاعر: «أكاتمٌ أسرارَ الكرامِ ظنُّكمُ ... ومُهنِئٌ نفسًا بما لا تشتهون؟» ما الإعراب الصحيح لكلمة (أسرارَ) في البيت السابق؟",
        "answers": ["مفعول به لاسم الفاعل منصوب", "مضاف إليه مجرور وعلامة جره الكسرة", "مفعول به لصيغة المبالغة منصوب", "فاعل مرفوع سد مسد الخبر"],
        "correct": 0
    },
    {
        "question": "2- «المؤمنُ حذِرٌ عواقِبَ الأمورِ، ولا سيما إن كان بصيرًا بمواطنِ الخطرِ». ما سبب إعمال صيغة المبالغة (حذِرٌ) في الجملة السابقة؟",
        "answers": ["دلت على الحال والاستقبال ووقعت صفة.", "دلت على الحال والاستقبال واعتمدت على مبتدأ.", "دلت على الحال والاستقبال ووقعت خبراً.", "معرفة بأل الدالة على الموصول."],
        "correct": 2
    },
    {
        "question": "3- «أَمُنْجِزٌ الخلُّ الوصيَّـةَ أمْ مضيِّعٌ ... عهدَ الصديقِ وفيٌّ أم خؤونُ؟» ما المعمول الذي رفعه اسم الفاعل (منجز) كفاعل سد مسد الخبر؟",
        "answers": ["الخلُّ", "الوصيَّةَ", "عهدَ", "وفيٌّ"],
        "correct": 0
    },
    {
        "question": "4- أيّ الجمل الآتية جاء فيها اسم الفاعل غير عامل،   ",
        "answers": ["أجانبُ القومِ حاملو رايةِ السلامِ.", "أُمصرُ مانحةٌ أبناءَها التفوقَ؟", "ما طامحٌ العاقلُ إلى ما لا يدرك.", "أُعجبْتُ برجلٍ قارئٍ كتابًا نافعًا أمسِ."],
        "correct": 3
    },
    {
        "question": "5- «أَفَهْمٌ الطالبُ درسَه؟» ... «أَفاهِمٌ الطالبُ درسَه؟» ما الفرق الإعرابي بين كلمة (الطالب) في الجملتين على الترتيب؟",
        "answers": ["فاعل سد مسد الخبر في الأولى، ومفعول به في الثانية.", "مضاف إليه في الأولى، وفاعل سد مسد الخبر في الثانية.", "فاعل سد مسد الخبر في الاثنتين معاً.", "مضاف إليه في الاثنتين معاً."],
        "correct": 3
    },
    {
        "question": "6- قال تعالى: ﴿وَالْحَافِظِينَ فُرُوجَهُمْ وَالْحَافِظَاتِ﴾. ما سبب إعمال اسم الفاعل (الحافظين) في الآية الكريمة؟",
        "answers": ["وقع خبراً لمبتدأ محذوف.", "اقترن بأل الدالة على الموصول (بمعنى الذين).", "اعتمد على موصوف قبله.", "دل على الحال والاستقبال."],
        "correct": 1
    },
    {
        "question": "7- «أحفيظٌ الأصدقاءُ العهدَ عند الشدة؟» إذا أردنا جعل صيغة المبالغة (حفيظ) غير عاملة مع إحداث التغيير النحوي المناسب، تصبح الجملة:",
        "answers": ["أحفيظٌ العهدِ الأصدقاءُ عند الشدة؟", "أحفيظٌ الأصدقاءَ العهدُ عند الشدة؟", "أحفيظَ العهدِ الأصدقاءُ عند الشدة؟", "أِحفيظُ العهدِ الأصدقاءُ عند الشدة؟"],
        "correct": 3
    },
    {
        "question": "8- أسامعٌ محمدٌ النداءَ؟ إعراب كلمة (النداءَ):",
        "answers": ["فاعل", "مضاف إليه", "مفعول به لاسم الفاعل", "خبر"],
        "correct": 2
    },
    {
        "question": "9- الجنديُّ يقظٌ عقلُهُ. صيغة المبالغة في الجملة هي:",
        "answers": ["الجندي", "يقظ", "عقلُه", "لا توجد صيغة مبالغة"],
        "correct": 1
    },
    {
        "question": "10- المعلمُ شارحٌ الدرسَ. سبب إعمال اسم الفاعل (شارحٌ) أنه:",
        "answers": ["معرف بأل", "وقع خبراً", "اعتمد على نفي", "اعتمد على استفهام"],
        "correct": 1
    }
]
    },
    {
        id: 4,
        name: 'ا - غير متاح الان',
        subject: '',
        description: 'امتحان استعارة مكنية وتصريحية',
        duration: 35,
        passingScore: 30,
        questions: []
    },
    {
        id: 5,
        name: 'ا غير متاح الان',
        subject: 'غير متاح الان',
        description: 'عربي',
        duration: 30,
        passingScore: 50,
        questions: []
    }
];

// ==================== Global Variables ====================
let currentStudent = null;
let selectedExam = null;

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    initializeExamsForGrade();
    updateStudentInfo();
    displayExams();
});

// ==================== Login Check ====================
function checkLoginStatus() {
    const student = localStorage.getItem('currentStudent');
    const user = localStorage.getItem('currentUser');
    
    if (student) {
        currentStudent = JSON.parse(student);
    } else if (user) {
        const userData = JSON.parse(user);
        currentStudent = userData;
    } else {
        window.location.href = 'login-advanced.html';
        return;
    }
    
    if (!currentStudent.grade) {
        currentStudent.grade = 'grade1';
        localStorage.setItem('currentUser', JSON.stringify(currentStudent));
    }
}

// ==================== Initialize Exams For Grade ====================
function initializeExamsForGrade() {
    const user = localStorage.getItem('currentUser');
    if (user) {
        const userData = JSON.parse(user);
        const grade = userData.grade || 'grade1';
        
        if (typeof getExamsByGrade === 'function') {
            const gradeExams = getExamsByGrade(grade);
            if (gradeExams && gradeExams.length > 0) {
                // Keep custom updates if needed, otherwise use gradeExams
                console.log(`Loaded exams for ${grade}`);
            }
        }
    }
}

function updateStudentInfo() {
    if (currentStudent) {
        document.getElementById('studentName').textContent = currentStudent.name;
    }
}

function handleLogout() {
    if (confirm('هل تريد تسجيل الخروج؟')) {
        localStorage.removeItem('currentStudent');
        window.location.href = 'login-advanced.html';
    }
}

// ==================== Display Exams ====================
function displayExams() {
    const grid = document.getElementById('examsGrid');
    grid.innerHTML = '';

    examsDatabase.forEach(exam => {
        const card = document.createElement('div');
        card.className = 'exam-card';
        card.innerHTML = `
            <div class="exam-card-header">
                <h3>${exam.name}</h3>
            </div>
            <div class="exam-card-body">
                <div class="exam-card-info">
                    <div class="info-item">
                        <span class="info-label">المادة:</span>
                        <span class="info-value">${exam.subject}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">عدد الأسئلة:</span>
                        <span class="info-value">${exam.questions.length}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">المدة:</span>
                        <span class="info-value">${exam.duration} دقيقة</span>
                    </div>
                </div>
                <p class="exam-description-short">${exam.description}</p>
            </div>
            <div class="exam-card-footer">
                <button class="btn btn-primary btn-large" onclick="openExamModal(${exam.id})">ابدأ الامتحان</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==================== Modal Functions ====================
function openExamModal(examId) {
    selectedExam = examsDatabase.find(e => e.id === examId || e.id === String(examId));
    
    if (selectedExam) {
        if (selectedExam.questions.length === 0) {
            alert('❌ عذراً! هذا الامتحان غير متاح الان');
            return;
        }

        document.getElementById('modalExamName').textContent = selectedExam.name;
        document.getElementById('modalSubject').textContent = selectedExam.subject;
        document.getElementById('modalQuestionsCount').textContent = selectedExam.questions.length;
        document.getElementById('modalDuration').textContent = selectedExam.duration + ' دقيقة';
        document.getElementById('modalPassingScore').textContent = selectedExam.passingScore + '%';
        document.getElementById('modalDescription').textContent = selectedExam.description || 'امتحان شامل';
        
        document.getElementById('examModal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('examModal').style.display = 'none';
    selectedExam = null;
}

function startExamFromModal() {
    if (selectedExam) {
        const completedExams = JSON.parse(localStorage.getItem('completedExams') || '[]');
        if (completedExams.includes(selectedExam.id)) {
            alert('❌ عذراً! لقد أكملت هذا الامتحان بالفعل ولا يمكنك إعادته');
            closeModal();
            return;
        }
        
        localStorage.setItem('currentExam', JSON.stringify(selectedExam));
        window.location.href = 'exam-page.html';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('examModal');
    if (event.target === modal) {
        closeModal();
    }
}

console.log('لوحة التحكم جاهزة');
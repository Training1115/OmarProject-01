const body = document.body;
const home = document.getElementById('home');
const header1 = document.createElement('header');
home.appendChild(header1);
const div = document.createElement('div')
const div1 = home.appendChild(div);
div1.id = 'hom';

const div2 = document.createElement('div')
div1.appendChild(div2);
div2.id = 'name';
const input = document.createElement('input');
input.placeholder = "enter your name";
input.id = 'nameBox';
div2.appendChild(input);
const button = document.createElement("button");
button.innerText="submit";
div2.appendChild(button)

const div3 = document.createElement('div')
div1.appendChild(div3);
div3.id = 'lvl';

const containerWrapper = document.createElement('div');
    containerWrapper.classList.add('container-wrapper');

    // Create Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.id = 'prevButton';
    containerWrapper.appendChild(prevButton);

    // Create levels container
    const levelsContainer = document.createElement('div');
    levelsContainer.classList.add('container');

    const levelsDiv = document.createElement('div');
    levelsDiv.classList.add('levels');
    levelsContainer.appendChild(levelsDiv);

    // Add 10 levels dynamically
    const levelsData = [
        
        { index: 1, text: '' },
        { index: 1, text: 'Level 1', link: 'level1.html' },
        { index: 2, text: 'Level 2', link: 'level2.html' },
        { index: 3, text: 'Level 3', link: 'level3.html' },
        { index: 4, text: 'Level 4', link: 'level4.html' },
        { index: 5, text: 'Level 5', link: 'level5.html' },
        { index: 6, text: 'Level 6', link: 'level6.html' },
        { index: 7, text: 'Level 7', link: 'level7.html' },
        { index: 8, text: 'Level 8', link: 'level8.html' },
        { index: 9, text: 'Level 9', link: 'level9.html' },
        { index: 10, text: 'Level 10', link: 'level10.html'},
        { index: 10, text: ''  }
    ];

    levelsData.forEach(level => {
        const levelDiv = document.createElement('div');
        levelDiv.classList.add('level');
        levelDiv.textContent = level.text;
        levelDiv.dataset.index = level.index;
        levelDiv.dataset.link = level.link;
        levelsDiv.appendChild(levelDiv);
    });

    containerWrapper.appendChild(levelsContainer);

    // Create Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.id = 'nextButton';
    containerWrapper.appendChild(nextButton);

    // Append the whole structure to the body
    div3.appendChild(containerWrapper);

    // JavaScript functionality to scroll through levels
    const levels = document.querySelectorAll('.level');
    let currentIndex = 1; // Start with Level 2 in the center

    function updateLevels() {
        levels.forEach((level, index) => {
            level.classList.remove('center');
            if (index === currentIndex) {
                level.classList.add('center'); // Highlight the center level
            }
            level.style.display = (index >= currentIndex - 1 && index <= currentIndex + 1) ? 'flex' : 'none'; // Show only 3 levels
        });
    }

    // Previous Button functionality
    prevButton.addEventListener('click', () => {
        if (currentIndex > 1) {
            currentIndex--;
            updateLevels();
        }
    });

    // Next Button functionality
    nextButton.addEventListener('click', () => {
        if (currentIndex < levels.length - 2) {
            currentIndex++;
            updateLevels();
        }
    });

    // Level click functionality
    levels.forEach(level => {
        level.addEventListener('click', (event) => {
            event.stopPropagation();
            window.location.href = level.dataset.link;
        });
    });

    // Container click functionality (go to levels page)
    levelsContainer.addEventListener('click', () => {
        window.location.href = '#levels';
    });

    // Initialize with the first 3 levels displayed
    updateLevels();




const div4 = document.createElement('div')
div1.appendChild(div4);
div4.id = 'ctg';



const containerWrapper1 = document.createElement('div');
containerWrapper1.classList.add('container-wrapper');

// Create Previous button
const prevbtn = document.createElement('button');
prevbtn.textContent = 'Previous';
prevbtn.id = 'prevbtn';
containerWrapper1.appendChild(prevbtn);

// Create categories container
const categoriesContainer = document.createElement('div');
categoriesContainer.classList.add('container');

const categoriesDiv = document.createElement('div');
categoriesDiv.classList.add('categories');
categoriesContainer.appendChild(categoriesDiv);

// Add 10 categories dynamically
const categoriesData = [
    
    { index: 1, text: '' },
    { index: 1, text: 'animals', link: 'category1.html' },
    { index: 2, text: 'cars', link: 'category2.html' },
    { index: 3, text: 'schools', link: 'category3.html' },
    { index: 4, text: 'fruits', link: 'category4.html' },
    { index: 10, text: ''  }
];

categoriesData.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    categoryDiv.textContent = category.text;
    categoryDiv.dataset.index = category.index;
    categoryDiv.dataset.link = category.link;
    categoriesDiv.appendChild(categoryDiv);
});

containerWrapper1.appendChild(categoriesContainer);

// Create Next button
const nxtbtn = document.createElement('button');
nxtbtn.textContent = 'Next';
nxtbtn.id = 'nxtbtn';
containerWrapper1.appendChild(nxtbtn);

// Append the whole structure to the body
div4.appendChild(containerWrapper1);

// JavaScript functionality to scroll through categories
const categories = document.querySelectorAll('.category');
let currentIndex1 = 1; // Start with category 2 in the center

function updatecategories() {
    categories.forEach((category, index) => {
        category.classList.remove('center');
        if (index === currentIndex) {
            category.classList.add('center'); // Highlight the center category
        }
        category.style.display = (index >= currentIndex - 1 && index <= currentIndex + 1) ? 'flex' : 'none'; // Show only 3 categories
    });
}

// Previous Button functionality
prevbtn.addEventListener('click', () => {
    if (currentIndex > 1) {
        currentIndex--;
        updatecategories();
    }
});

// Next Button functionality
nxtbtn.addEventListener('click', () => {
    if (currentIndex < categories.length - 2) {
        currentIndex++;
        updatecategories();
    }
});

// category click functionality
categories.forEach(category => {
    category.addEventListener('click', (event) => {
        event.stopPropagation();
        window.location.href = category.dataset.link;
    });
});

// Container click functionality (go to categories page)
categoriesContainer.addEventListener('click', () => {
    window.location.href = '#categories';
});

// Initialize with the first 3 categories displayed
updatecategories();



const footer1 = document.createElement('footer');
home.appendChild(footer1);
footer1.id = 'foot';



const div5 = document.createElement('div')
footer1.appendChild(div5);
div5.id = 'store';
div5.class = 'child';
const div6 = document.createElement('div')
footer1.appendChild(div6);
div6.id = 'start';
div6.class = 'child';
const div7 = document.createElement('div')
footer1.appendChild(div7);
div7.id = 'coin';
div7.class = 'child';
let names = '';
let btn1 = '';



button.addEventListener("click", () => {
    names=input.value;
    header1.innerText = `Hello ${names}`;
    input.value='';
});
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        names = input.value;
        header1.innerText = `Hello ${names}`;
        input.value = '';
    }
});



///////////////////////////




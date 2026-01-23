// Array of Singapore food options with emojis
const foodOptions = [
    { name: "Caifan", emoji: "🍱" },
    { name: "Yong Tau Foo", emoji: "🍲" },
    { name: "Chicken Rice", emoji: "🍗" },
    { name: "Pasta", emoji: "🍝" },
    { name: "Pizza", emoji: "🍕" },
    { name: "Burger", emoji: "🍔" },
    { name: "Chicken Chop", emoji: "🍗" },
    { name: "Fish & Chips", emoji: "🐟" },
    { name: "Mala Hotpot/Stir-fry", emoji: "🌶️" },
    { name: "Prata", emoji: "🫓" },
    { name: "Mee Goreng", emoji: "🍜" },
    { name: "Nasi Padang", emoji: "🍛" },
    { name: "Nasi Lemak", emoji: "🍚" },
    { name: "Mee Rebus", emoji: "🍜" },
    { name: "Laksa", emoji: "🍜" },
    { name: "Mee Siam", emoji: "🍜" },
    { name: "Mee Soto", emoji: "🍲" },
    { name: "Fishball Noodles", emoji: "🍜" },
    { name: "Wanton Mee", emoji: "🍜" },
    { name: "Wrap", emoji: "🌯" },
    { name: "Salad", emoji: "🥗" },
    { name: "Sushi", emoji: "🍣" },
    { name: "Donburi", emoji: "🍱" },
    { name: "Soba", emoji: "🍜" },
    { name: "Ramen", emoji: "🍜" },
    { name: "Biryani", emoji: "🍛" },
    { name: "Curry", emoji: "🍛" },
    { name: "Porridge", emoji: "🥣" },
    { name: "Thosai", emoji: "🫓" },
    { name: "Roti John", emoji: "🥪" },
    { name: "Sandwich", emoji: "🥪" },
    { name: "Taco", emoji: "🌮" }
];

// Get DOM elements
const resultContainer = document.getElementById('resultContainer');
const randomiseBtn = document.getElementById('randomiseBtn');

// Function to get random food item
function getRandomFood() {
    const randomIndex = Math.floor(Math.random() * foodOptions.length);
    return foodOptions[randomIndex];
}

// Function to display the selected food
function displayFood(food) {
    resultContainer.innerHTML = `
        <div class="food-emoji">${food.emoji}</div>
        <div class="food-name">${food.name}</div>
    `;
}

// Function to handle randomisation with animation
function randomiseFood() {
    // Add spinning animation
    resultContainer.classList.add('spinning');
    
    // Change button text
    randomiseBtn.textContent = '🎲 Deciding...';
    randomiseBtn.disabled = true;

    // Simulate randomising effect with quick changes
    let counter = 0;
    const interval = setInterval(() => {
        const tempFood = getRandomFood();
        displayFood(tempFood);
        counter++;
        
        // Stop after 10 quick iterations
        if (counter >= 10) {
            clearInterval(interval);
            
            // Show final result
            setTimeout(() => {
                const finalFood = getRandomFood();
                displayFood(finalFood);
                resultContainer.classList.remove('spinning');
                randomiseBtn.textContent = '🎲 Randomise Again';
                randomiseBtn.disabled = false;
            }, 100);
        }
    }, 100);
}

// Event listener for randomise button
randomiseBtn.addEventListener('click', randomiseFood);

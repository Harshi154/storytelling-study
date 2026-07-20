// Unit content structure
const unitContent = {
    unit1: {
        title: 'Unit 1: Fundamentals & Basics',
        lessons: [
            { name: 'lesson1.html', title: 'What is Python?' },
            { name: 'lesson2.html', title: 'Installation & Setup' },
            { name: 'lesson3.html', title: 'Your First Program' },
            { name: 'lesson4.html', title: 'Variables & Data Types' }
        ]
    },
    unit2: {
        title: 'Unit 2: Control Flow & Functions',
        lessons: [
            { name: 'lesson1.html', title: 'Conditional Statements' },
            { name: 'lesson2.html', title: 'Loops' },
            { name: 'lesson3.html', title: 'Functions Basics' },
            { name: 'lesson4.html', title: 'Function Arguments' }
        ]
    },
    unit3: {
        title: 'Unit 3: Data Structures',
        lessons: [
            { name: 'lesson1.html', title: 'Lists' },
            { name: 'lesson2.html', title: 'Tuples & Sets' },
            { name: 'lesson3.html', title: 'Dictionaries' },
            { name: 'lesson4.html', title: 'List Comprehension' }
        ]
    },
    unit4: {
        title: 'Unit 4: Object-Oriented Programming',
        lessons: [
            { name: 'lesson1.html', title: 'Classes & Objects' },
            { name: 'lesson2.html', title: 'Inheritance' },
            { name: 'lesson3.html', title: 'Encapsulation' },
            { name: 'lesson4.html', title: 'Polymorphism' }
        ]
    },
    unit5: {
        title: 'Unit 5: Advanced Concepts',
        lessons: [
            { name: 'lesson1.html', title: 'Decorators' },
            { name: 'lesson2.html', title: 'Generators' },
            { name: 'lesson3.html', title: 'Async Programming' },
            { name: 'lesson4.html', title: 'Error Handling' }
        ]
    }
};

// Sample content for lessons
const lessonContent = {
    'unit1/lesson1.html': {
        title: 'What is Python?',
        content: `
            <h3>What is Python?</h3>
            <p>Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular programming languages in the world.</p>
            
            <h4>Key Features:</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li><strong>Easy to Learn:</strong> Python's syntax is simple and readable, making it ideal for beginners.</li>
                <li><strong>Versatile:</strong> Used in web development, data science, AI, automation, and more.</li>
                <li><strong>Extensive Libraries:</strong> Rich ecosystem of libraries and frameworks.</li>
                <li><strong>Community:</strong> Large, active community with tons of resources.</li>
                <li><strong>Cross-platform:</strong> Runs on Windows, macOS, and Linux.</li>
            </ul>
            
            <h4>Why Learn Python?</h4>
            <p>Python is used by tech giants like Google, Facebook, Netflix, and Spotify. It's perfect for:</p>
            <ul style="color: #555; line-height: 1.8;">
                <li>Web development (Django, Flask)</li>
                <li>Data analysis & visualization</li>
                <li>Machine Learning & AI</li>
                <li>Automation & scripting</li>
                <li>Game development</li>
            </ul>
        `
    },
    'unit1/lesson2.html': {
        title: 'Installation & Setup',
        content: `
            <h3>Installation & Setup</h3>
            <p>Let's get Python installed on your computer!</p>
            
            <h4>Step 1: Download Python</h4>
            <p>Visit <strong>python.org</strong> and download the latest version of Python 3.</p>
            
            <h4>Step 2: Install Python</h4>
            <p><strong>Important:</strong> During installation, make sure to check the box that says "Add Python to PATH".</p>
            
            <h4>Step 3: Verify Installation</h4>
            <p>Open a terminal/command prompt and type:</p>
            <div class="code-block">python --version</div>
            
            <h4>Step 4: Choose an Editor</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li>Visual Studio Code (Recommended)</li>
                <li>PyCharm</li>
                <li>Sublime Text</li>
                <li>IDLE (comes with Python)</li>
            </ul>
        `
    },
    'unit1/lesson3.html': {
        title: 'Your First Program',
        content: `
            <h3>Your First Program</h3>
            <p>The classic "Hello, World!" program is a great way to start!</p>
            
            <h4>The Code:</h4>
            <div class="code-block">print("Hello, World!")</div>
            
            <h4>How It Works:</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li><code>print()</code> is a built-in function that displays output.</li>
                <li><code>"Hello, World!"</code> is a string (text).</li>
                <li>Strings are enclosed in quotes.</li>
            </ul>
            
            <h4>Try It Yourself:</h4>
            <div class="code-block"># Print your name
print("My name is Python!")

# Print multiple lines
print("Python is awesome!")
print("I love coding!")</div>
            
            <h4>What's Next?</h4>
            <p>Great! You've written your first Python program. Now let's learn about variables!</p>
        `
    },
    'unit1/lesson4.html': {
        title: 'Variables & Data Types',
        content: `
            <h3>Variables & Data Types</h3>
            <p>Variables are containers for storing data values. Python has different data types.</p>
            
            <h4>Creating Variables:</h4>
            <div class="code-block"># Variables
name = "Alice"
age = 25
height = 5.6
is_student = True

print(name)
print(age)
print(height)
print(is_student)</div>
            
            <h4>Data Types:</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li><strong>String (str):</strong> Text data → "Hello"</li>
                <li><strong>Integer (int):</strong> Whole numbers → 42</li>
                <li><strong>Float (float):</strong> Decimal numbers → 3.14</li>
                <li><strong>Boolean (bool):</strong> True or False</li>
                <li><strong>List (list):</strong> Multiple values → [1, 2, 3]</li>
                <li><strong>Dictionary (dict):</strong> Key-value pairs → {"name": "Alice"}</li>
            </ul>
            
            <h4>Check Data Type:</h4>
            <div class="code-block">x = 42
print(type(x))  # Output: &lt;class 'int'&gt;</div>
        `
    },
    'unit2/lesson1.html': {
        title: 'Conditional Statements',
        content: `
            <h3>Conditional Statements</h3>
            <p>Conditional statements allow your program to make decisions.</p>
            
            <h4>If Statement:</h4>
            <div class="code-block">age = 18
if age >= 18:
    print("You are an adult")</div>
            
            <h4>If-Else Statement:</h4>
            <div class="code-block">score = 75
if score >= 80:
    print("Grade: A")
else:
    print("Grade: B")</div>
            
            <h4>If-Elif-Else Statement:</h4>
            <div class="code-block">grade = 45
if grade >= 90:
    print("A - Excellent")
elif grade >= 80:
    print("B - Good")
elif grade >= 70:
    print("C - Average")
else:
    print("F - Fail")</div>
            
            <h4>Comparison Operators:</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li>== (equal to)</li>
                <li>!= (not equal to)</li>
                <li>&gt; (greater than)</li>
                <li>&lt; (less than)</li>
                <li>&gt;= (greater than or equal)</li>
                <li>&lt;= (less than or equal)</li>
            </ul>
        `
    },
    'unit2/lesson2.html': {
        title: 'Loops',
        content: `
            <h3>Loops</h3>
            <p>Loops allow you to repeat code multiple times.</p>
            
            <h4>For Loop:</h4>
            <div class="code-block">for i in range(5):
    print(i)  # Output: 0 1 2 3 4</div>
            
            <h4>For Loop with List:</h4>
            <div class="code-block">fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)</div>
            
            <h4>While Loop:</h4>
            <div class="code-block">count = 1
while count <= 5:
    print(count)
    count += 1</div>
            
            <h4>Loop Control:</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li><strong>break:</strong> Exit the loop</li>
                <li><strong>continue:</strong> Skip to next iteration</li>
                <li><strong>pass:</strong> Do nothing</li>
            </ul>
        `
    },
    'unit2/lesson3.html': {
        title: 'Functions Basics',
        content: `
            <h3>Functions Basics</h3>
            <p>Functions are reusable blocks of code that perform specific tasks.</p>
            
            <h4>Define a Function:</h4>
            <div class="code-block">def greet():
    print("Hello!")

greet()  # Call the function</div>
            
            <h4>Function with Parameters:</h4>
            <div class="code-block">def greet(name):
    print("Hello, " + name)

greet("Alice")
greet("Bob")</div>
            
            <h4>Function with Return Value:</h4>
            <div class="code-block">def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # Output: 8</div>
            
            <h4>Key Points:</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li>Use <code>def</code> keyword to define a function</li>
                <li>Parameters are inputs to a function</li>
                <li>Use <code>return</code> to send a value back</li>
                <li>Functions make code reusable and organized</li>
            </ul>
        `
    },
    'unit2/lesson4.html': {
        title: 'Function Arguments',
        content: `
            <h3>Function Arguments</h3>
            <p>Learn different ways to pass arguments to functions.</p>
            
            <h4>Positional Arguments:</h4>
            <div class="code-block">def introduce(name, age):
    print(f"My name is {name} and I am {age} years old")

introduce("Alice", 25)</div>
            
            <h4>Keyword Arguments:</h4>
            <div class="code-block">def introduce(name, age):
    print(f"My name is {name} and I am {age} years old")

introduce(age=25, name="Alice")</div>
            
            <h4>Default Arguments:</h4>
            <div class="code-block">def greet(name="World"):
    print("Hello, " + name)

greet()  # Output: Hello, World
greet("Alice")  # Output: Hello, Alice</div>
            
            <h4>Variable-Length Arguments:</h4>
            <div class="code-block">def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3, 4, 5))  # Output: 15</div>
        `
    },
    'unit3/lesson1.html': {
        title: 'Lists',
        content: `
            <h3>Lists</h3>
            <p>Lists are used to store multiple items in a single variable.</p>
            
            <h4>Creating a List:</h4>
            <div class="code-block">fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

print(fruits)</div>
            
            <h4>Accessing Items:</h4>
            <div class="code-block">fruits = ["apple", "banana", "cherry"]
print(fruits[0])    # apple
print(fruits[-1])   # cherry (last item)</div>
            
            <h4>List Methods:</h4>
            <div class="code-block">fruits = ["apple", "banana"]
fruits.append("cherry")      # Add item
fruits.insert(1, "orange")   # Insert at index
fruits.remove("banana")      # Remove item
fruits.pop()                 # Remove last item
print(len(fruits))           # Length</div>
            
            <h4>Slicing:</h4>
            <div class="code-block">numbers = [1, 2, 3, 4, 5]
print(numbers[1:4])  # [2, 3, 4]
print(numbers[:3])   # [1, 2, 3]
print(numbers[2:])   # [3, 4, 5]</div>
        `
    },
    'unit3/lesson2.html': {
        title: 'Tuples & Sets',
        content: `
            <h3>Tuples & Sets</h3>
            
            <h4>Tuples:</h4>
            <p>Tuples are immutable (cannot be changed) sequences.</p>
            <div class="code-block">coordinates = (10, 20)
colors = ("red", "green", "blue")

print(colors[0])     # red
print(len(colors))   # 3</div>
            
            <h4>Sets:</h4>
            <p>Sets are unordered collections of unique items.</p>
            <div class="code-block">numbers = {1, 2, 3, 4, 5}
numbers.add(6)
numbers.remove(3)

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1 | set2  # {1, 2, 3, 4, 5}
intersection = set1 & set2  # {3}</div>
            
            <h4>Tuple vs List vs Set:</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li><strong>List:</strong> Ordered, mutable, allows duplicates</li>
                <li><strong>Tuple:</strong> Ordered, immutable, allows duplicates</li>
                <li><strong>Set:</strong> Unordered, mutable, NO duplicates</li>
            </ul>
        `
    },
    'unit3/lesson3.html': {
        title: 'Dictionaries',
        content: `
            <h3>Dictionaries</h3>
            <p>Dictionaries store data in key-value pairs.</p>
            
            <h4>Creating a Dictionary:</h4>
            <div class="code-block">student = {
    "name": "Alice",
    "age": 25,
    "grade": "A",
    "courses": ["Python", "Java", "C++"]
}</div>
            
            <h4>Accessing Values:</h4>
            <div class="code-block">print(student["name"])      # Alice
print(student.get("age"))   # 25
print(student.get("email", "Not found"))  # Not found</div>
            
            <h4>Dictionary Methods:</h4>
            <div class="code-block">student["email"] = "alice@example.com"  # Add key
student.update({"age": 26})              # Update
del student["grade"]                     # Delete key
student.clear()                          # Clear all
keys = student.keys()                    # Get all keys
values = student.values()                # Get all values</div>
        `
    },
    'unit3/lesson4.html': {
        title: 'List Comprehension',
        content: `
            <h3>List Comprehension</h3>
            <p>A concise way to create lists in Python.</p>
            
            <h4>Basic List Comprehension:</h4>
            <div class="code-block"># Square numbers from 1 to 5
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]</div>
            
            <h4>With Condition:</h4>
            <div class="code-block"># Even numbers from 1 to 10
evens = [x for x in range(1, 11) if x % 2 == 0]
print(evens)  # [2, 4, 6, 8, 10]</div>
            
            <h4>With Function:</h4>
            <div class="code-block">def double(x):
    return x * 2

numbers = [double(x) for x in range(1, 6)]
print(numbers)  # [2, 4, 6, 8, 10]</div>
        `
    },
    'unit4/lesson1.html': {
        title: 'Classes & Objects',
        content: `
            <h3>Classes & Objects</h3>
            <p>Classes are blueprints for creating objects.</p>
            
            <h4>Define a Class:</h4>
            <div class="code-block">class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def display(self):
        print(f"This is a {self.brand} {self.model}")

# Create object
my_car = Car("Toyota", "Corolla")
my_car.display()</div>
            
            <h4>Constructor (__init__):</h4>
            <p>The <code>__init__</code> method initializes objects when created.</p>
            
            <h4>Methods:</h4>
            <p>Methods are functions inside classes. The first parameter is always <code>self</code>.</p>
        `
    },
    'unit4/lesson2.html': {
        title: 'Inheritance',
        content: `
            <h3>Inheritance</h3>
            <p>Inheritance allows a class to inherit properties from another class.</p>
            
            <h4>Example:</h4>
            <div class="code-block">class Animal:
    def speak(self):
        print("Some sound")

class Dog(Animal):
    def speak(self):
        print("Woof!")

dog = Dog()
dog.speak()  # Output: Woof!</div>
            
            <h4>Key Concepts:</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li><strong>Parent Class:</strong> The class being inherited from</li>
                <li><strong>Child Class:</strong> The class that inherits</li>
                <li><strong>Override:</strong> Redefine parent methods in child</li>
                <li><strong>super():</strong> Access parent class methods</li>
            </ul>
        `
    },
    'unit4/lesson3.html': {
        title: 'Encapsulation',
        content: `
            <h3>Encapsulation</h3>
            <p>Bundling data and methods within a class and hiding details.</p>
            
            <h4>Public vs Private:</h4>
            <div class="code-block">class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private
    
    def deposit(self, amount):
        self.__balance += amount
    
    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())  # 1500</div>
            
            <h4>Benefits:</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li>Data protection</li>
                <li>Controlled access</li>
                <li>Flexibility in implementation</li>
            </ul>
        `
    },
    'unit4/lesson4.html': {
        title: 'Polymorphism',
        content: `
            <h3>Polymorphism</h3>
            <p>"Many forms" - same method behaves differently in different classes.</p>
            
            <h4>Example:</h4>
            <div class="code-block">class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

def animal_sound(animal):
    print(animal.speak())

dog = Dog()
cat = Cat()

animal_sound(dog)  # Woof!
animal_sound(cat)  # Meow!</div>
        `
    },
    'unit5/lesson1.html': {
        title: 'Decorators',
        content: `
            <h3>Decorators</h3>
            <p>Decorators are functions that modify other functions or classes.</p>
            
            <h4>Simple Decorator:</h4>
            <div class="code-block">def my_decorator(func):
    def wrapper():
        print("Something before function")
        func()
        print("Something after function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()</div>
            
            <h4>Decorators with Arguments:</h4>
            <div class="code-block">def repeat(times):
    def decorator(func):
        def wrapper():
            for _ in range(times):
                func()
        return wrapper
    return decorator

@repeat(3)
def greet():
    print("Hi!")

greet()  # Prints Hi! 3 times</div>
        `
    },
    'unit5/lesson2.html': {
        title: 'Generators',
        content: `
            <h3>Generators</h3>
            <p>Generators are memory-efficient iterators.</p>
            
            <h4>Define a Generator:</h4>
            <div class="code-block">def count_up(n):
    i = 0
    while i < n:
        yield i
        i += 1

for num in count_up(5):
    print(num)  # 0 1 2 3 4</div>
            
            <h4>Benefits:</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li>Memory efficient</li>
                <li>Lazy evaluation</li>
                <li>Generate large sequences</li>
            </ul>
        `
    },
    'unit5/lesson3.html': {
        title: 'Async Programming',
        content: `
            <h3>Async Programming</h3>
            <p>Write concurrent code using async/await.</p>
            
            <h4>Basic Async Function:</h4>
            <div class="code-block">import asyncio

async def say_hello():
    print("Hello")
    await asyncio.sleep(1)
    print("World")

asyncio.run(say_hello())</div>
            
            <h4>Key Concepts:</h4>
            <ul style="color: #555; line-height: 1.8;">
                <li><strong>async:</strong> Define async function</li>
                <li><strong>await:</strong> Wait for async operation</li>
                <li><strong>asyncio:</strong> Async library</li>
            </ul>
        `
    },
    'unit5/lesson4.html': {
        title: 'Error Handling',
        content: `
            <h3>Error Handling</h3>
            <p>Handle exceptions gracefully in your code.</p>
            
            <h4>Try-Except:</h4>
            <div class="code-block">try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"Error: {e}")</div>
            
            <h4>Try-Except-Else-Finally:</h4>
            <div class="code-block">try:
    x = int("123")
except ValueError:
    print("Invalid input")
else:
    print(f"Number: {x}")
finally:
    print("Done")</div>
            
            <h4>Raise Exception:</h4>
            <div class="code-block">def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    print(f"Age: {age}")

check_age(-5)  # Raises ValueError</div>
        `
    }
};

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('overlay');
const hamburger = document.querySelector('.hamburger');
const closeSidebar = document.querySelector('.close-sidebar');
const unitCards = document.querySelectorAll('.unit-card');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadHome();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Unit cards
    unitCards.forEach(card => {
        card.addEventListener('click', () => {
            const unit = card.getAttribute('data-unit');
            loadUnit(unit);
        });
    });

    // Hamburger menu
    hamburger.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', closeSidebarMenu);
    overlay.addEventListener('click', closeSidebarMenu);
}

// Handle Navigation Click
function handleNavClick(e) {
    e.preventDefault();
    const unit = e.target.getAttribute('data-unit');
    
    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');

    if (unit === 'home') {
        loadHome();
    } else {
        loadUnit(unit);
    }
}

// Load Home Page
function loadHome() {
    // Update sections
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById('home').classList.add('active');

    // Update nav
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector('[data-unit="home"]').classList.add('active');
    
    closeSidebarMenu();
}

// Load Unit
function loadUnit(unit) {
    // Update sections
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(unit).classList.add('active');

    // Update nav
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`[data-unit="${unit}"]`).classList.add('active');

    // Load sidebar content
    loadSidebar(unit);
    sidebar.classList.add('open');
    if (window.innerWidth <= 768) {
        overlay.classList.add('show');
        hamburger.classList.add('active');
    }

    // Load content
    loadUnitContent(unit);
}

// Load Sidebar with Lessons
function loadSidebar(unit) {
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarContent = document.getElementById('sidebar-content');
    
    if (unitContent[unit]) {
        sidebarTitle.textContent = unitContent[unit].title;
        sidebarContent.innerHTML = '';

        unitContent[unit].lessons.forEach(lesson => {
            const lessonItem = document.createElement('div');
            lessonItem.className = 'lesson-item';
            lessonItem.textContent = lesson.title;
            lessonItem.addEventListener('click', () => {
                loadLesson(unit, lesson, lessonItem);
            });
            sidebarContent.appendChild(lessonItem);
        });
    }
}

// Load Unit Content (show first lesson by default)
function loadUnitContent(unit) {
    const contentDiv = document.getElementById(`${unit}-content`);
    const firstLesson = unitContent[unit]?.lessons[0];
    
    if (firstLesson) {
        loadLesson(unit, firstLesson, null);
    } else {
        contentDiv.innerHTML = `<div class="content-card"><p style="text-align: center; color: #999;">No lessons available for this unit yet.</p></div>`;
    }
}

// Load Individual Lesson
function loadLesson(unit, lesson, lessonItem) {
    const lessonKey = `${unit}/${lesson.name}`;
    const lesson_data = lessonContent[lessonKey];
    const contentDiv = document.getElementById(`${unit}-content`);
    
    if (lesson_data) {
        contentDiv.innerHTML = `<div class="content-card">${lesson_data.content}</div>`;
    } else {
        contentDiv.innerHTML = `<div class="content-card"><p class="warning">Content not found. Please select another item.</p></div>`;
    }
    
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach(item => item.classList.remove('active'));
    if (lessonItem) {
        lessonItem.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle Sidebar
function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
    hamburger.classList.toggle('active');
}

// Close Sidebar
function closeSidebarMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    hamburger.classList.remove('active');
}

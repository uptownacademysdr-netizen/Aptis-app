// --- 1. DATOS DE LA APLICACIÓN ---

// Estructura de tarjetas de ejemplo para las 4 categorías Aptis
const initialDecks = [
    {
        title: "Comida",
        icon: "🍴",
        cards: [
            // ----------------------------------------------------
            // 20 TARJETAS DE VERDURAS 
            // ----------------------------------------------------
            { front: "Aubergine (UK) / Eggplant (US)", back: "Berenjena", example: "Aubergine is often roasted with other vegetables." },
            { front: "Courgette (UK) / Zucchini (US)", back: "Calabacín", example: "We add sliced courgette to the pasta sauce." },
            { front: "Spinach", back: "Espinaca", example: "Spinach is rich in iron and vitamin K." },
            { front: "Asparagus", back: "Espárrago", example: "Grilled asparagus is a popular side dish." },
            { front: "Cabbage", back: "Col / Repollo", example: "They use cabbage to make coleslaw." },
            { front: "Beetroot", back: "Remolacha", example: "Beetroot gives the salad a bright colour." },
            { front: "Celery", back: "Apio", example: "Celery sticks are a crunchy, low-calorie snack." },
            { front: "Cauliflower", back: "Coliflor", example: "Cauliflower rice is a substitute for white rice." },
            { front: "Artichoke", back: "Alcachofa", example: "Artichoke hearts are delicious in salads." },
            { front: "Broccoli", back: "Brócoli", example: "Steam the broccoli for five minutes until tender." },
            { front: "Leek", back: "Puerro", example: "Leeks are similar to onions but milder in flavour." },
            { front: "Mushroom", back: "Champiñón / Seta", example: "Wild mushrooms can be tricky to identify." },
            { front: "Radish", back: "Rábano", example: "Radishes add a spicy crunch to the tacos." },
            { front: "Kale", back: "Col Rizada", example: "Kale is considered a 'superfood' by many people." },
            { front: "Green beans", back: "Judías verdes", example: "Green beans are best when they are young and tender." },
            { front: "Brussels sprouts", back: "Coles de Bruselas", example: "Many people dislike Brussels sprouts, but I love them." },
            { front: "Squash", back: "Calabaza / Calabacín (genérico)", example: "Winter squash is used to make pumpkin pie." },
            { front: "Turnip", back: "Nabo", example: "Turnips are root vegetables similar to radishes." },
            { front: "Sweet potato", back: "Boniato / Batata", example: "Sweet potato fries are a healthier alternative to regular fries." },
            { front: "Garlic", back: "Ajo", example: "Garlic is a key ingredient in Mediterranean cooking." },
            
            // ----------------------------------------------------
            // 20 TARJETAS DE HIDRATOS DE CARBONO 
            // ----------------------------------------------------
            { front: "Whole grain", back: "Grano integral", example: "Whole grain bread is rich in fiber." },
            { front: "Oat", back: "Avena", example: "I eat a bowl of oat porridge for breakfast." },
            { front: "Rice", back: "Arroz", example: "White rice is a staple food in many countries." },
            { front: "Pasta", back: "Pasta", example: "We're having pasta with tomato sauce tonight." },
            { front: "Bread", back: "Pan", example: "I bought a fresh loaf of bread." },
            { front: "Starch", back: "Almidón", example: "Potatoes are a major source of starch." },
            { front: "Sugar", back: "Azúcar", example: "Too much sugar is unhealthy." },
            { front: "Syrup", back: "Jarabe / Sirope", example: "She drizzled maple syrup on her pancakes." },
            { front: "Honey", back: "Miel", example: "Honey is a natural sweetener." },
            { front: "Quinoa", back: "Quinoa", example: "Quinoa is a complete protein." },
            { front: "Barley", back: "Cebada", example: "Barley is often used in soups and stews." },
            { front: "Corn", back: "Maíz", example: "Corn on the cob is a summer treat." },
            { front: "Cereal", back: "Cereal", example: "What kind of cereal do you prefer?" },
            { front: "Potato", back: "Patata / Papa", example: "Baked potato is a simple side dish." },
            { front: "Sweetener", back: "Edulcorante", example: "Artificial sweeteners are often used in diet drinks." },
            { front: "Legume", back: "Legumbre", example: "Beans and lentils are common legumes." },
            { front: "Fibre (UK) / Fiber (US)", back: "Fibra", example: "Eating enough fiber is essential for digestion." },
            { front: "Refined grains", back: "Granos refinados", example: "White flour is made from refined grains." },
            { front: "Complex carbohydrate", back: "Carbohidrato complejo", example: "Complex carbohydrates are digested slowly." },
            { front: "Simple carbohydrate", back: "Carbohidrato simple", example: "Fruit contains simple carbohydrates." },
            
            // 10 TARJETAS DE CONDIMENTOS 
            { front: "Black pepper", back: "Pimienta negra", example: "Add a pinch of black pepper to the soup." },
            { front: "Salt", back: "Sal", example: "Too much salt is bad for your heart." },
            { front: "Oregano", back: "Orégano", example: "Oregano is a common herb in Italian food." },
            { front: "Basil", back: "Albahaca", example: "I love the smell of fresh basil." },
            { front: "Cinnamon", back: "Canela", example: "Cinnamon is often used in desserts." },
            { front: "Turmeric", back: "Cúrcuma", example: "Turmeric gives curry its yellow color." },
            { front: "Garlic powder", back: "Ajo en polvo", example: "Use garlic powder for a stronger flavour." },
            { front: "Mustard", back: "Mostaza", example: "He put mustard and ketchup on his hotdog." },
            { front: "Vinegar", back: "Vinagre", example: "Vinegar is used to make pickles." },
            { front: "Ketchup", back: "Ketchup / Salsa de tomate", example: "Ketchup is a popular condiment for French fries." },

            // ----------------------------------------------------
            // 10 TARJETAS DE GRASAS
            // ----------------------------------------------------
            { front: "Olive oil", back: "Aceite de oliva", example: "Olive oil is a healthy fat used in Mediterranean cooking." },
            { front: "Butter", back: "Mantequilla", example: "I spread butter on my toast." },
            { front: "Margarine", back: "Margarina", example: "Margarine is often used as a butter substitute." },
            { front: "Lard", back: "Manteca de cerdo", example: "Lard is a traditional ingredient for pastry." },
            { front: "Vegetable oil", back: "Aceite vegetal", example: "Vegetable oil is often used for frying." },
            { front: "Cream", back: "Nata / Crema", example: "Whipped cream is topped with strawberries." },
            { front: "Avocado", back: "Aguacate", example: "Avocado contains healthy monounsaturated fats." },
            { front: "Ghee", back: "Ghee (Mantequilla clarificada)", example: "Ghee is popular in Indian cuisine." },
            { front: "Trans fat", back: "Grasa trans", example: "Avoid foods high in trans fat." },
            { front: "Saturated fat", back: "Grasa saturada", example: "Cheese and red meat contain saturated fat." },

            // ----------------------------------------------------
            // 20 TARJETAS DE PROTEÍNAS
            // ----------------------------------------------------
            { front: "Beef", back: "Carne de res / Vacuno", example: "Beef is a major source of protein." },
            { front: "Chicken breast", back: "Pechuga de pollo", example: "Chicken breast is lean protein." },
            { front: "Pork", back: "Carne de cerdo", example: "Pork chops are often grilled." },
            { front: "Lamb", back: "Cordero", example: "Roast lamb is a traditional dish." },
            { front: "Salmon", back: "Salmón", example: "Salmon is rich in omega-3 fatty acids." },
            { front: "Tuna", back: "Atún", example: "Canned tuna is a quick protein source." },
            { front: "Shrimp / Prawn", back: "Gamba / Camarón", example: "I ordered shrimp cocktail as a starter." },
            { front: "Egg white", back: "Clara de huevo", example: "Egg whites are almost pure protein." },
            { front: "Tofu", back: "Tofu", example: "Tofu is a plant-based protein staple." },
            { front: "Lentil", back: "Lenteja", example: "Lentils are a cheap and healthy source of protein." },
            { front: "Chickpea", back: "Garbanzo", example: "Hummus is made from chickpeas." },
            { front: "Whey protein", back: "Proteína de suero", example: "Athletes often use whey protein shakes." },
            { front: "Casein", back: "Caseína", example: "Casein is a slow-digesting milk protein." },
            { front: "Peanut", back: "Cacahuete / Maní", example: "Peanuts are high in protein and fat." },
            { front: "Turkey", back: "Pavo", example: "Turkey slices are common in sandwiches." },
            { front: "Cod", back: "Bacalao", example: "Cod is a white fish with low fat content." },
            { front: "Shellfish", back: "Marisco", example: "Clams and mussels are types of shellfish." },
            { front: "Ham", back: "Jamón", example: "Ham is cured pork leg." },
            { front: "Sausage", back: "Salchicha / Embutido", example: "We grilled sausages at the barbecue." },
            { front: "Dairy", back: "Lácteos", example: "Dairy products are sources of calcium and protein." },

            // ----------------------------------------------------
            // 20 TARJETAS DE BEBIDAS
            // ----------------------------------------------------
            { front: "Black coffee", back: "Café solo", example: "I prefer my coffee black, without sugar." },
            { front: "Decaffeinated coffee", back: "Café descafeinado", example: "Decaffeinated coffee is available at night." },
            { front: "Espresso", back: "Expreso", example: "An espresso is a strong shot of coffee." },
            { front: "Latte", back: "Café con leche (Latte)", example: "A latte is made with steamed milk." },
            { front: "Herbal tea", back: "Infusión de hierbas", example: "Chamomile is a popular herbal tea." },
            { front: "Iced tea", back: "Té helado", example: "Iced tea is refreshing in the summer." },
            { front: "Hot chocolate", back: "Chocolate caliente", example: "Hot chocolate is a perfect winter drink." },
            { front: "Sparkling water", back: "Agua con gas", example: "Sparkling water is sometimes called soda water." },
            { front: "Still water", back: "Agua sin gas", example: "Always keep a bottle of still water handy." },
            { front: "Orange juice", back: "Zumo de naranja", example: "Freshly squeezed orange juice is the best." },
            { front: "Smoothy / Smoothie", back: "Batido", example: "I blend fruits and yogurt for a smoothie." },
            { front: "Milkshake", back: "Batido de leche", example: "A chocolate milkshake is a sweet treat." },
            { front: "Fizzy drink / Soda", back: "Refresco con gas", example: "Fizzy drinks are high in sugar." },
            { front: "Pint", back: "Pinta (de cerveza)", example: "He ordered a pint of lager." },
            { front: "Wine", back: "Vino", example: "Red wine pairs well with beef." },
            { front: "Spirits / Liquor", back: "Bebidas espirituosas / Licor", example: "Whisky is a type of spirit." },
            { front: "Lemonade", back: "Limonada", example: "Homemade lemonade is tart and sweet." },
            { front: "Cocktail", back: "Cóctel", example: "They specialize in tropical cocktails." },
            { front: "Non-alcoholic", back: "Sin alcohol", example: "We offer several non-alcoholic options." },
            { front: "To quench your thirst", back: "Calmar/Saciar la sed", example: "This cold water will quench my thirst." }
        ]
    },
    {
        title: "Ropa y accesorios",
        icon: "👕",
        cards: [
            // ----------------------------------------------------
            // 5 TARJETAS INICIALES 
            // ----------------------------------------------------
            { front: "Sleeve", back: "Manga", example: "The sleeve of the jacket was torn." },
            { front: "Scarf", back: "Bufanda", example: "She wore a wool scarf to keep warm." },
            { front: "Casual wear", back: "Ropa informal", example: "Most offices allow casual wear on Fridays." },
            { front: "Jewellery", back: "Joyas", example: "She only wears simple jewellery." },
            { front: "Fit", back: "Ajuste / Talla", example: "These trousers don't fit me well." },
            
            // ----------------------------------------------------
            // 20 TARJETAS DE ROPA DE MUJER 💃
            // ----------------------------------------------------
            { front: "Dress", back: "Vestido", example: "She wore a red dress to the party." },
            { front: "Skirt", back: "Falda", example: "The long skirt swayed in the wind." },
            { front: "Blouse", back: "Blusa", example: "I need to iron my silk blouse." },
            { front: "High heels", back: "Tacones / Zapatos de tacón", example: "Wearing high heels for hours is tiring." },
            { front: "Leggings", back: "Mallas / Leggings", example: "She changed into leggings for her workout." },
            { front: "Jumpsuit", back: "Mono (prenda de una pieza)", example: "A jumpsuit is a comfortable choice for summer." },
            { front: "Cardigan", back: "Cárdigan / Rebeca", example: "She buttoned up her woolen cardigan." },
            { front: "Tights", back: "Medias / Pantis", example: "You should wear tights under that dress." },
            { front: "Peacoat", back: "Abrigo de paño (marinero)", example: "The navy peacoat is a timeless classic." },
            { front: "Bikini", back: "Bikini", example: "She bought a new bikini for the beach trip." },
            { front: "Maxi dress", back: "Vestido largo (hasta los tobillos)", example: "Maxi dresses are very fashionable this season." },
            { front: "Stilettos", back: "Zapatos de aguja", example: "Be careful walking in those stilettos." },
            { front: "Camisole", back: "Camisola / Camiseta interior de tirantes", example: "A camisole is perfect for layering." },
            { front: "Pencil skirt", back: "Falda de tubo", example: "The pencil skirt is a formal office item." },
            { front: "Handbag", back: "Bolso de mano", example: "She keeps her keys in her handbag." },
            { front: "Brooch", back: "Broche", example: "She pinned a vintage brooch to her coat." },
            { front: "Gloves", back: "Guantes", example: "Don't forget your gloves in the cold weather." },
            { front: "Waistcoat (UK) / Vest (US)", back: "Chaleco", example: "She wore a stylish waistcoat over her shirt." },
            { front: "Trainers (UK) / Sneakers (US)", back: "Zapatillas deportivas", example: "I prefer comfortable trainers for walking." },
            { front: "Pouch", back: "Bolsita / Monedero", example: "She used a small pouch for her makeup." },

            // ----------------------------------------------------
            // 20 TARJETAS DE ROPA DE HOMBRE 👔
            // ----------------------------------------------------
            { front: "Suit", back: "Traje", example: "He has to wear a suit for the business meeting." },
            { front: "Tie", back: "Corbata", example: "He adjusted his tie before the presentation." },
            { front: "Blazer", back: "Chaqueta de sport / Blazer", example: "A casual blazer works well with jeans." },
            { front: "Pocket square", back: "Pañuelo de bolsillo", example: "He added a pocket square for a touch of elegance." },
            { front: "Bow tie", back: "Pajarita", example: "A bow tie is mandatory for the black-tie event." },
            { front: "Cufflinks", back: "Gemelos", example: "He fastened his shirt with silver cufflinks." },
            { front: "Briefcase", back: "Maletín", example: "He carried his documents in a leather briefcase." },
            { front: "Tuxedo", back: "Esmoquin", example: "The groom wore a classic black tuxedo." },
            { front: "Loafers", back: "Mocasines", example: "Loafers are smart shoes for casual wear." },
            { front: "Polo shirt", back: "Polo", example: "He wore a navy blue polo shirt." },
            { front: "Sweater / Jumper", back: "Jersey / Suéter", example: "I bought a thick woolen sweater for winter." },
            { front: "Hoodie", back: "Sudadera con capucha", example: "He pulled up his hoodie to keep warm." },
            { front: "Chinos", back: "Pantalones chinos", example: "Chinos are more formal than jeans." },
            { front: "Beanie", back: "Gorro de lana (Beanie)", example: "He wore a beanie to protect his ears from the cold." },
            { front: "Belt", back: "Cinturón", example: "His leather belt matched his shoes." },
            { front: "Undershirt", back: "Camiseta interior", example: "He always wears an undershirt under his dress shirt." },
            { front: "Boxers", back: "Calzoncillos (Boxers)", example: "He prefers boxers to briefs for comfort." },
            { front: "Robe", back: "Bata", example: "He put on a silk robe after his shower." },
            { front: "Suspenders (US) / Braces (UK)", back: "Tirantes", example: "He wore suspenders instead of a belt." },
            { front: "Wellingtons (UK) / Rubber boots (US)", back: "Botas de agua", example: "You need wellingtons to walk through the mud." },

            // ----------------------------------------------------
            // 20 TARJETAS DE ROPA DE NIÑOS/NIÑAS 👶
            // ----------------------------------------------------
            { front: "Overalls / Dungarees", back: "Peto / Mono de trabajo (infantil)", example: "The toddler was playing in his denim overalls." },
            { front: "Onesie / Sleepsuit", back: "Pijama de una pieza / Pelele", example: "The baby is comfortable in his warm onesie." },
            { front: "Bib", back: "Babero", example: "Put on the bib before feeding the baby." },
            { front: "Nappy (UK) / Diaper (US)", back: "Pañal", example: "It's time for a nappy change." },
            { front: "Booties", back: "Patucos / Botitas de bebé", example: "The baby's feet are warm in the soft booties." },
            { front: "Pinafore dress", back: "Pichi / Vestido de peto", example: "The girl wore a checkered pinafore dress for school." },
            { front: "Grow suit", back: "Traje de crecimiento (para bebés)", example: "The grow suit has extra room for fast-growing babies." },
            { front: "Snowsuit", back: "Traje de nieve", example: "She wore a thick snowsuit to play outside." },
            { front: "Mittens", back: "Manoplas", example: "Mittens are warmer than gloves for small hands." },
            { front: "Hooded towel", back: "Toalla con capucha", example: "The child wrapped up in a hooded towel after swimming." },
            { front: "School uniform", back: "Uniforme escolar", example: "Wearing a school uniform is mandatory in this school." },
            { front: "Wellies", back: "Botas de agua (abreviado)", example: "He loves splashing in puddles with his wellies." },
            { front: "Tutu", back: "Tutú", example: "The girl wore a pink tutu for her ballet class." },
            { front: "Wellington boots", back: "Botas de agua", example: "The boy needed his wellington boots for the muddy field." },
            { front: "T-shirt", back: "Camiseta", example: "He spilled juice on his new T-shirt." },
            { front: "Shorts", back: "Pantalones cortos", example: "The kids wear shorts all summer." },
            { front: "Socks", back: "Calcetines", example: "Make sure you put on clean socks." },
            { front: "Cap", back: "Gorra", example: "He wears a baseball cap when playing outside." },
            { front: "Sandals", back: "Sandalias", example: "She prefers sandals in hot weather." },
            { front: "Pyjamas (UK) / Pajamas (US)", back: "Pijama", example: "He changed into his pyjamas before bedtime." },
        ]
    },
    {
        // CAMBIO: Categoría combinada de Verbos y Phrasal Verbs
        title: "Verbos y Phrasal Verbs", 
        icon: "🗣️", // Ícono cambiado a 🗣️ para representar más el habla/acción
        cards: [
            // ----------------------------------------------------
            // 200 VERBOS IMPRESCINDIBLES NIVEL B2
            // ----------------------------------------------------
            { front: "To anticipate", back: "Anticipar / Adelantarse", example: "We need to anticipate market changes." },
            { front: "To assert", back: "Afirmar / Aseverar", example: "He asserted his innocence strongly." },
            { front: "To assess", back: "Evaluar / Valorar", example: "The teacher assessed the students' progress." },
            { front: "To assure", back: "Asegurar / Garantizar", example: "I assure you the delivery will be on time." },
            { front: "To comprehend", back: "Comprender / Entender", example: "It is difficult to comprehend the scale of the universe." },
            { front: "To concede", back: "Conceder / Admitir", example: "She conceded that she might have been wrong." },
            { front: "To conduct", back: "Dirigir / Llevar a cabo", example: "The research was conducted by the university." },
            { front: "To converse", back: "Conversar", example: "They conversed quietly about their plans." },
            { front: "To convey", back: "Transmitir / Comunicar", example: "The report conveys a sense of urgency." },
            { front: "To devise", back: "Idear / Inventar", example: "They devised a new plan for the project." },
            { front: "To disclose", back: "Revelar / Divulgar", example: "The company refused to disclose its profits." },
            { front: "To displease", back: "Desagradar / Molestar", example: "His constant delays displeased the manager." },
            { front: "To endure", back: "Soportar / Aguantar", example: "She had to endure a lot of pain." },
            { front: "To envision", back: "Visualizar / Imaginar", example: "It's hard to envision the future of technology." },
            { front: "To establish", back: "Establecer / Fundar", example: "The factory was established in 1950." },
            { front: "To execute", back: "Ejecutar / Llevar a cabo", example: "The team executed the plan flawlessly." },
            { front: "To exhibit", back: "Exhibir / Mostrar", example: "The museum exhibits modern art." },
            { front: "To fluctuate", back: "Fluctuar / Variar", example: "The temperature has fluctuated throughout the day." },
            { front: "To foster", back: "Fomentar / Promover", example: "The school fosters a love of reading." },
            { front: "To hinder", back: "Obstaculizar / Impedir", example: "Bad weather hindered our progress." },
            { front: "To induce", back: "Inducir / Provocar", example: "The medication induced sleep in the patient." },
            { front: "To initiate", back: "Iniciar / Empezar", example: "He initiated the conversation about the salary." },
            { front: "To perceive", back: "Percibir / Darse cuenta", example: "She perceived a change in his attitude." },
            { front: "To postpone", back: "Aplazar / Posponer", example: "The meeting was postponed until next week." },
            { front: "To prevail", back: "Prevalecer / Predominar", example: "Justice eventually prevailed in the case." },
            { front: "To refute", back: "Refutar / Desmentir", example: "He refuted the claims made against him." },
            { front: "To resume", back: "Reanudar / Continuar", example: "The game resumed after the rain stopped." },
            { front: "To scrutinize", back: "Escudriñar / Examinar a fondo", example: "The documents were scrutinized by the committee." },
            { front: "To stipulate", back: "Estipular / Especificar", example: "The contract stipulates the terms of the agreement." },
            { front: "To surge", back: "Aumentar / Subir bruscamente", example: "Prices surged due to high demand." },
            { front: "To tackle", back: "Abordar / Afrontar", example: "We need to tackle this problem immediately." },
            { front: "To undertake", back: "Emprender / Acometer", example: "She undertook the task of organizing the event." },
            { front: "To validate", back: "Validar / Confirmar", example: "The data validated the scientist's hypothesis." },
            { front: "To yield", back: "Ceder / Producir (cosecha/beneficio)", example: "The garden yielded a good crop this year." },
            { front: "To abstain", back: "Abstenerse", example: "Employees must abstain from smoking inside the building." },
            { front: "To attain", back: "Alcanzar / Lograr", example: "He finally attained his goal of becoming a doctor." },
            { front: "To compel", back: "Obligar / Forzar", example: "The law compels drivers to wear a seatbelt." },
            { front: "To confine", back: "Confinar / Limitar", example: "The research was confined to a small area." },
            { front: "To delegate", back: "Delegar", example: "You must learn to delegate tasks to your team." },
            { front: "To derive", back: "Derivar / Obtener", example: "We derive pleasure from helping others." },
            { front: "To depict", back: "Representar / Describir", example: "The painting depicts a historical scene." },
            { front: "To dispel", back: "Disipar / Ahuyentar", example: "He tried to dispel her fears." },
            { front: "To disrupt", back: "Interrumpir / Perturbar", example: "The noise disrupted the meeting." },
            { front: "To elaborate", back: "Elaborar / Desarrollar", example: "Could you elaborate on that point?" },
            { front: "To encompass", back: "Abarcar / Incluir", example: "The study encompasses all aspects of the industry." },
            { front: "To entail", back: "Conllevar / Implicar", example: "The job entails a lot of travel." },
            { front: "To escalate", back: "Intensificar / Aumentar", example: "The situation escalated quickly." },
            { front: "To exert", back: "Ejercer (influencia/presión)", example: "The government exerts influence over the media." },
            { front: "To grapple", back: "Luchar / Lidar (con un problema)", example: "The company grapples with low sales." },
            { front: "To jeopardize", back: "Poner en peligro", example: "His actions jeopardized the entire project." },
            { front: "To merge", back: "Fusionar / Unir", example: "The two companies decided to merge." },
            { front: "To omit", back: "Omitir / Excluir", example: "She omitted the crucial details from her report." },
            { front: "To perturb", back: "Perturbar / Inquietar", example: "The sudden noise perturbed the class." },
            { front: "To pledge", back: "Prometer / Comprometerse", example: "He pledged his loyalty to the cause." },
            { front: "To preclude", back: "Excluir / Imposibilitar", example: "His injury precluded him from participating." },
            { front: "To recoil", back: "Retroceder / Echarse atrás", example: "He recoiled in horror at the sight." },
            { front: "To relinquish", back: "Renunciar / Abandonar", example: "She relinquished her control of the company." },
            { front: "To replicate", back: "Replicar / Reproducir", example: "The scientists replicated the experiment successfully." },
            { front: "To resent", back: "Odiar / Sentir resentimiento", example: "He resented his boss for making him work late." },
            { front: "To restrain", back: "Contener / Reprimir", example: "He had to restrain himself from shouting." },
            { front: "To revamp", back: "Renovar / Modernizar", example: "The old website needs a complete revamp." },
            { front: "To salvage", back: "Rescatar / Recuperar", example: "They managed to salvage some items from the fire." },
            { front: "To shun", back: "Evitar / Rehuir", example: "The community shunned him after the scandal." },
            { front: "To substantiate", back: "Justificar / Demostrar", example: "You must substantiate your claims with evidence." },
            { front: "To surmise", back: "Suponer / Conjeturar", example: "I surmise he left because he was bored." },
            { front: "To trespass", back: "Allanar / Entrar sin permiso", example: "The sign warned people not to trespass." },
            { front: "To undermine", back: "Socavar / Debilitar", example: "Criticism can undermine a person's confidence." },
            { front: "To uphold", back: "Mantener / Apoyar", example: "We must uphold the principles of democracy." },
            { front: "To vouch (for)", back: "Responder (por alguien)", example: "I can vouch for his honesty and integrity." },
            { front: "To withstand", back: "Resistir / Aguantar", example: "The bridge was built to withstand strong winds." },
            { front: "To abstain", back: "Abstenerse", example: "Employees must abstain from smoking inside the building." },
            { front: "To acknowledge", back: "Reconocer / Admitir", example: "He acknowledged his mistake publicly." },
            { front: "To allot", back: "Asignar / Repartir", example: "Each student was allotted a space for their project." },
            { front: "To articulate", back: "Articular / Expresar", example: "She struggled to articulate her feelings." },
            { front: "To baffle", back: "Desconcertar / Dejar perplejo", example: "The puzzle baffled even the experts." },
            { front: "To befall", back: "Suceder / Acontecer", example: "We hope no harm will befall them." },
            { front: "To circumvent", back: "Evadir / Eludir", example: "They tried to circumvent the rules." },
            { front: "To coerce", back: "Coaccionar / Forzar", example: "He was coerced into signing the confession." },
            { front: "To concur", back: "Estar de acuerdo / Coincidir", example: "The committee members concurred on the decision." },
            { front: "To condense", back: "Condensar / Resumir", example: "Please condense the report to one page." },
            { front: "To confide", back: "Confiar / Confesar", example: "She confided her secret to her best friend." },
            { front: "To contrive", back: "Ideárselas / Maquinar", example: "They contrived a clever escape plan." },
            { front: "To curb", back: "Frenar / Refrenar", example: "The government is trying to curb inflation." },
            { front: "To denote", back: "Denotar / Indicar", example: "The colour red often denotes danger." },
            { front: "To digress", back: "Divagar / Desviarse", example: "The speaker often digressed from the main topic." },
            { front: "To discern", back: "Discernir / Distinguir", example: "It is hard to discern the truth from the lies." },
            { front: "To dwindle", back: "Disminuir / Reducirse", example: "The population has been dwindling rapidly." },
            { front: "To elicit", back: "Suscitar / Provocar", example: "The survey elicited positive responses." },
            { front: "To elapse", back: "Transcurrir / Pasar (tiempo)", example: "A few hours elapsed before the rescue team arrived." },
            { front: "To embolden", back: "Envalentonar / Animar", example: "His success emboldened him to take more risks." },
            { front: "To emanate", back: "Emanar / Proceder de", example: "A strange light emanated from the window." },
            { front: "To exempt", back: "Eximir / Excluir", example: "Students were exempted from the final exam." },
            { front: "To exhort", back: "Exhortar / Incitar", example: "The leader exhorted the people to unity." },
            { front: "To forbear", back: "Abstenerse / Contenerse", example: "Please forbear from making loud noises." },
            { front: "To forge", back: "Forjar / Falsificar", example: "They worked hard to forge a new partnership." },
            { front: "To haphazard", back: "Hacer al azar", example: "The decisions were made in a haphazard manner." },
            { front: "To impede", back: "Impedir / Dificultar", example: "Bureaucracy often impedes progress." },
            { front: "To incur", back: "Incurrir / Contraer (deuda)", example: "The company incurred huge losses." },
            { front: "To infiltrate", back: "Infiltrarse", example: "The spy managed to infiltrate the enemy camp." },
            { front: "To instill", back: "Inculcar / Infundir", example: "Parents try to instill good values in their children." },
            { front: "To intervene", back: "Intervenir", example: "The police had to intervene to stop the fight." },
            { front: "To laud", back: "Alabar / Elogiar", example: "He was lauded for his bravery." },
            { front: "To mitigate", back: "Mitigar / Suavizar", example: "They implemented measures to mitigate the risk." },
            { front: "To obscure", back: "Oscurecer / Ocultar", example: "The heavy fog obscured the view." },
            { front: "To oscillate", back: "Oscilar / Vacilar", example: "His mood oscillates between joy and sadness." },
            { front: "To paraphrase", back: "Parafrasear", example: "Please paraphrase the main argument of the text." },
            { front: "To plummet", back: "Desplomarse / Caer en picado", example: "Stock prices plummeted after the news." },
            { front: "To precede", back: "Preceder / Anteceder", example: "The dark clouds preceded the storm." },
            { front: "To procure", back: "Procurar / Conseguir", example: "We need to procure funding for the expedition." },
            { front: "To propagate", back: "Propagar / Difundir", example: "The virus propagates rapidly in crowded areas." },
            { front: "To reimburse", back: "Reembolsar", example: "The company reimbursed him for his travel expenses." },
            { front: "To reprimand", back: "Reprender / Regañar", example: "The employee was reprimanded for being late." },
            { front: "To resuscitate", back: "Resucitar / Reanimar", example: "Paramedics tried to resuscitate the patient." },
            { front: "To sanction", back: "Sancionar / Autorizar", example: "The UN sanctioned trade against the rogue nation." },
            { front: "To sprawl", back: "Extenderse / Desparramarse", example: "The city sprawls out into the valley." },
            { front: "To stipulate", back: "Estipular / Especificar", example: "The contract stipulates the terms of the agreement." },
            { front: "To substantiate", back: "Justificar / Demostrar", example: "You must substantiate your claims with evidence." },
            { front: "To supplant", back: "Suplantar / Reemplazar", example: "Technology supplanted traditional methods." },
            { front: "To surmount", back: "Superar / Vencer", example: "She surmounted all the obstacles in her path." },
            { front: "To tantalize", back: "Atraer / Tentador", example: "The delicious smell tantalized the hungry children." },
            { front: "To transgress", back: "Transgredir / Violar", example: "He knowingly transgressed the rules." },
            { front: "To undermine", back: "Socavar / Debilitar", example: "Criticism can undermine a person's confidence." },
            { front: "To uphold", back: "Mantener / Apoyar", example: "We must uphold the principles of democracy." },
            { front: "To vouch (for)", back: "Responder (por alguien)", example: "I can vouch for his honesty and integrity." },
            { front: "To withstand", back: "Resistir / Aguantar", example: "The bridge was built to withstand strong winds." },
            { front: "To abstain", back: "Abstenerse", example: "Employees must abstain from smoking inside the building." },
            { front: "To acknowledge", back: "Reconocer / Admitir", example: "He acknowledged his mistake publicly." },
            { front: "To allot", back: "Asignar / Repartir", example: "Each student was allotted a space for their project." },
            { front: "To articulate", back: "Articular / Expresar", example: "She struggled to articulate her feelings." },
            { front: "To baffle", back: "Desconcertar / Dejar perplejo", example: "The puzzle baffled even the experts." },
            { front: "To befall", back: "Suceder / Acontecer", example: "We hope no harm will befall them." },
            { front: "To circumvent", back: "Evadir / Eludir", example: "They tried to circumvent the rules." },
            { front: "To coerce", back: "Coaccionar / Forzar", example: "He was coerced into signing the confession." },
            { front: "To concur", back: "Estar de acuerdo / Coincidir", example: "The committee members concurred on the decision." },
            { front: "To condense", back: "Condensar / Resumir", example: "Please condense the report to one page." },
            { front: "To confide", back: "Confiar / Confesar", example: "She confided her secret to her best friend." },
            { front: "To contrive", back: "Ideárselas / Maquinar", example: "They contrived a clever escape plan." },
            { front: "To curb", back: "Frenar / Refrenar", example: "The government is trying to curb inflation." },
            { front: "To denote", back: "Denotar / Indicar", example: "The colour red often denotes danger." },
            { front: "To digress", back: "Divagar / Desviarse", example: "The speaker often digressed from the main topic." },
            { front: "To discern", back: "Discernir / Distinguir", example: "It is hard to discern the truth from the lies." },
            { front: "To dwindle", back: "Disminuir / Reducirse", example: "The population has been dwindling rapidly." },
            { front: "To elicit", back: "Suscitar / Provocar", example: "The survey elicited positive responses." },
            { front: "To elapse", back: "Transcurrir / Pasar (tiempo)", example: "A few hours elapsed before the rescue team arrived." },
            { front: "To embolden", back: "Envalentonar / Animar", example: "His success emboldened him to take more risks." },
            { front: "To emanate", back: "Emanar / Proceder de", example: "A strange light emanated from the window." },
            { front: "To exempt", back: "Eximir / Excluir", example: "Students were exempted from the final exam." },
            { front: "To exhort", back: "Exhortar / Incitar", example: "The leader exhorted the people to unity." },
            { front: "To forbear", back: "Abstenerse / Contenerse", example: "Please forbear from making loud noises." },
            { front: "To forge", back: "Forjar / Falsificar", example: "They worked hard to forge a new partnership." },
            { front: "To haphazard", back: "Hacer al azar", example: "The decisions were made in a haphazard manner." },
            { front: "To impede", back: "Impedir / Dificultar", example: "Bureaucracy often impedes progress." },
            { front: "To incur", back: "Incurrir / Contraer (deuda)", example: "The company incurred huge losses." },
            { front: "To infiltrate", back: "Infiltrarse", example: "The spy managed to infiltrate the enemy camp." },
            { front: "To instill", back: "Inculcar / Infundir", example: "Parents try to instill good values in their children." },
            { front: "To intervene", back: "Intervenir", example: "The police had to intervene to stop the fight." },
            { front: "To laud", back: "Alabar / Elogiar", example: "He was lauded for his bravery." },
            { front: "To mitigate", back: "Mitigar / Suavizar", example: "They implemented measures to mitigate the risk." },
            { front: "To obscure", back: "Oscurecer / Ocultar", example: "The heavy fog obscured the view." },
            { front: "To oscillate", back: "Oscilar / Vacilar", example: "His mood oscillates between joy and sadness." },
            { front: "To paraphrase", back: "Parafrasear", example: "Please paraphrase the main argument of the text." },
            { front: "To plummet", back: "Desplomarse / Caer en picado", example: "Stock prices plummeted after the news." },
            { front: "To precede", back: "Preceder / Anteceder", example: "The dark clouds preceded the storm." },
            { front: "To procure", back: "Procurar / Conseguir", example: "We need to procure funding for the expedition." },
            { front: "To propagate", back: "Propagar / Difundir", example: "The virus propagates rapidly in crowded areas." },
            { front: "To reimburse", back: "Reembolsar", example: "The company reimbursed him for his travel expenses." },
            { front: "To reprimand", back: "Reprender / Regañar", example: "The employee was reprimanded for being late." },
            { front: "To resuscitate", back: "Resucitar / Reanimar", example: "Paramedics tried to resuscitate the patient." },
            { front: "To sanction", back: "Sancionar / Autorizar", example: "The UN sanctioned trade against the rogue nation." },
            { front: "To sprawl", back: "Extenderse / Desparramarse", example: "The city sprawls out into the valley." },
            { front: "To stipulate", back: "Estipular / Especificar", example: "The contract stipulates the terms of the agreement." },
            { front: "To substantiate", back: "Justificar / Demostrar", example: "You must substantiate your claims with evidence." },
            { front: "To supplant", back: "Suplantar / Reemplazar", example: "Technology supplanted traditional methods." },
            { front: "To surmount", back: "Superar / Vencer", example: "She surmounted all the obstacles in her path." },
            { front: "To tantalize", back: "Atraer / Tentador", example: "The delicious smell tantalized the hungry children." },
            { front: "To transgress", back: "Transgredir / Violar", example: "He knowingly transgressed the rules." },
            { front: "To traverse", back: "Atravesar / Recorrer", example: "They traversed the entire mountain range." },
            { front: "To tout", back: "Preconizar / Promocionar", example: "The critics touted the film as a masterpiece." },
            { front: "To unearth", back: "Desenterrar / Descubrir", example: "Archaeologists unearthed an ancient civilization." },
            { front: "To varnish", back: "Barnizar", example: "He applied a second coat of varnish to the wood." },
            { front: "To waive", back: "Renunciar / Eximir", example: "The bank agreed to waive the late fees." },
            { front: "To warrant", back: "Garantizar / Justificar", example: "The situation warrants immediate attention." },
            { front: "To wane", back: "Menguar / Disminuir", example: "His enthusiasm for the project began to wane." },
            { front: "To admonish", back: "Advertir / Reprender", example: "The teacher admonished the students for talking." },
            { front: "To alleviate", back: "Aliviar / Mitigar", example: "The medicine helped to alleviate the pain." },
            { front: "To atrophy", back: "Atrofiarse", example: "The unused muscle began to atrophy." },
            { front: "To censure", back: "Censurar / Reprobar", example: "The politician was censured for his misconduct." },
            { front: "To coalesce", back: "Unirse / Fusionarse", example: "The two groups will coalesce to form a new party." },
            { front: "To condone", back: "Condenar / Perdonar (algo malo)", example: "We cannot condone this type of behaviour." },
            { front: "To contravene", back: "Contravenir / Infringir", example: "The action contravened the terms of the treaty." },
            { front: "To corrode", back: "Corroer / Oxidar", example: "Rust slowly corroded the metal." },
            { front: "To defer", back: "Aplazar / Retrasar", example: "The decision was deferred until the next meeting." },
            { front: "To deprecate", back: "Depreciar / Criticar", example: "He deprecated his own efforts despite his success." },
            { front: "To disseminate", back: "Diseminar / Difundir", example: "The news was quickly disseminated across the globe." },
            { front: "To engender", back: "Engendrar / Producir", example: "The new policy engendered a lot of controversy." },
            { front: "To exhume", back: "Exhumar / Desenterrar", example: "The body was exhumed for further investigation." },
            { front: "To expunge", back: "Borrar / Eliminar", example: "The judge ordered that the comments be expunged from the record." },
            { front: "To extrapolate", back: "Extrapolar", example: "We can extrapolate the results to a larger population." },
            { front: "To galvanize", back: "Galvanizar / Estimular", example: "The crisis galvanized the nation into action." },
            { front: "To impugn", back: "Impugnar / Cuestionar", example: "He impugned the integrity of his opponent." },
            { front: "To incapacitate", back: "Incapacitar", example: "The injury incapacitated the athlete for months." },
            { front: "To liquidate", back: "Liquidar / Vender", example: "The company decided to liquidate its assets." },
            { front: "To obliterate", back: "Borrar / Aniquilar", example: "The city was obliterated by the bomb." },
            { front: "To pacify", back: "Pacificar / Calmar", example: "The officer tried to pacify the angry crowd." },
            { front: "To perturb", back: "Perturbar / Inquietar", example: "The sudden noise perturbed the class." },
            { front: "To placate", back: "Aplacar / Calmar", example: "He tried to placate his upset child with candy." },
            { front: "To prevaricate", back: "Prevaricar / Evadir la verdad", example: "The witness prevaricated under cross-examination." },
            { front: "To proliferate", back: "Proliferar / Multiplicarse", example: "Rumours began to proliferate rapidly." },
            { front: "To propitiate", back: "Propiciar / Calmar (a un dios, etc.)", example: "They offered a sacrifice to propitiate the gods." },
            { front: "To ratify", back: "Ratificar / Aprobar", example: "The treaty was ratified by the Senate." },
            { front: "To refute", back: "Refutar / Desmentir", example: "He refuted the claims made against him." },
            { front: "To remonstrate", back: "Protestar / Reprochar", example: "The parents remonstrated against the new school policy." },
            { front: "To repudiate", back: "Repudiar / Rechazar", example: "The group repudiated the violence of the protestors." },
            { front: "To sanction", back: "Sancionar / Autorizar", example: "The UN sanctioned trade against the rogue nation." },
            { front: "To sever", back: "Cortar / Romper (relación)", example: "The two countries decided to sever diplomatic ties." },
            { front: "To stifle", back: "Sofocar / Reprimir", example: "She tried to stifle a laugh during the serious meeting." },
            { front: "To substantiate", back: "Justificar / Demostrar", example: "You must substantiate your claims with evidence." },
            { front: "To supersede", back: "Reemplazar / Sustituir", example: "The new model supersedes the old one." },
            { front: "To tarry", back: "Demorarse / Retrasarse", example: "We can't tarry any longer; we must leave now." },
            { front: "To transgress", back: "Transgredir / Violar", example: "He knowingly transgressed the rules." },
            { front: "To traverse", back: "Atravesar / Recorrer", example: "They traversed the entire mountain range." },
            { front: "To tout", back: "Preconizar / Promocionar", example: "The critics touted the film as a masterpiece." },
            { front: "To unearth", back: "Desenterrar / Descubrir", example: "Archaeologists unearthed an ancient civilization." },
            { front: "To varnish", back: "Barnizar", example: "He applied a second coat of varnish to the wood." },
            { front: "To waive", back: "Renunciar / Eximir", example: "The bank agreed to waive the late fees." },
            { front: "To warrant", back: "Garantizar / Justificar", example: "The situation warrants immediate attention." },
            { front: "To wane", back: "Menguar / Disminuir", example: "His enthusiasm for the project began to wane." },
            { front: "To wreak", back: "Causar / Provocar (daño)", example: "The storm wreaked havoc on the coast." },
            { front: "To wreak", back: "Causar / Provocar (daño)", example: "The storm wreaked havoc on the coast." }, // Total 200 Verbos B2
            
            // ----------------------------------------------------
            // 20 PHRASAL VERBS COMUNES (MOVIDOS AQUÍ)
            // ----------------------------------------------------
            { front: "To break down", back: "Averiarse / Derribar / Desglosar", example: "The negotiation broke down over a small detail." },
            { front: "To call off", back: "Cancelar", example: "They had to call off the football match due to heavy rain." },
            { front: "To carry on", back: "Continuar / Seguir", example: "Please carry on with your work while I take this call." },
            { front: "To come across", back: "Encontrar/Toparse con (por casualidad)", example: "I came across an old photo album while cleaning." },
            { front: "To look up to", back: "Admirar / Respectar", example: "I look up to my older sister for her dedication." },
            { front: "To give up", back: "Rendirse / Dejar de hacer algo", example: "Never give up on your dreams, no matter how hard it gets." },
            { front: "To set up", back: "Establecer / Montar", example: "We need to set up the new office network before Monday." },
            { front: "To find out", back: "Averiguar / Descubrir", example: "We need to find out who is responsible for the error." },
            { front: "To run out of", back: "Quedarse sin", example: "We ran out of milk, so I need to go to the shop." },
            { front: "To put off", back: "Posponer / Desanimar", example: "Don't put off until tomorrow what you can do today." },
            { front: "To turn up", back: "Aparecer / Subir (volumen)", example: "He finally turned up an hour late to the party." },
            { front: "To take off", back: "Despegar / Quitarse (ropa)", example: "The plane took off smoothly at 8 AM." },
            { front: "To look into", back: "Investigar / Examinar", example: "The manager promised to look into the customer's complaint." },
            { front: "To make up", back: "Inventar / Reconciliarse", example: "He made up an excuse for being absent from the meeting." },
            { front: "To bring up", back: "Mencionar / Criar (a un niño)", example: "Don't bring up politics at dinner, please." },
            { front: "To go on", back: "Continuar / Suceder", example: "What's going on in the street? It's too noisy." },
            { front: "To hold on", back: "Esperar (en el teléfono) / Aguantar", example: "Please hold on a moment while I check the details." },
            { front: "To check out", back: "Comprobar / Echar un vistazo / Dejar (hotel)", example: "You should check out this new coffee shop." },
            { front: "To deal with", back: "Lidiar con / Ocuparse de", example: "The secretary deals with all the incoming calls." },
            { front: "To look after", back: "Cuidar de", example: "I have to look after my nephew this weekend." }
        ]
    },
    // --- CATEGORÍA DE QUIZ DE RESPUESTA MÚLTIPLE (20 EJERCICIOS DE SINÓNIMOS/ANTÓNIMOS con 4 opciones) ---
    {
        title: "Quiz de Vocabulario (Aptis)",
        icon: "❓",
        cards: [
            // SINÓNIMOS
            { 
                question: "Sinónimo de la palabra: 'SUBSTANTIAL'", 
                options: ["A) Minimal", "B) Considerable", "C) Fragile", "D) Excessive"], 
                correctIndex: 1, 
                rationale: "Substantial significa de gran tamaño o importancia. Sinónimo: Considerable.",
                type: "quiz"
            },
            { 
                question: "Sinónimo de la palabra: 'INITIALLY'", 
                options: ["A) Finally", "B) At first", "C) Subsequently", "D) Occasionally"], 
                correctIndex: 1, 
                rationale: "Initially significa al principio. Sinónimo: At first.",
                type: "quiz"
            },
            { 
                question: "Sinónimo de la palabra: 'COMPULSORY'", 
                options: ["A) Optional", "B) Mandatory", "C) Voluntary", "D) Temporary"], 
                correctIndex: 1, 
                rationale: "Compulsory significa obligatorio. Sinónimo: Mandatory.",
                type: "quiz"
            },
            { 
                question: "Sinónimo de la palabra: 'GENUINE'", 
                options: ["A) Fake", "B) Artificial", "C) Authentic", "D) Doubtful"], 
                correctIndex: 2, 
                rationale: "Genuine significa verdadero o real. Sinónimo: Authentic.",
                type: "quiz"
            },
            { 
                question: "Sinónimo de la palabra: 'ADAPT'", 
                options: ["A) Adjust", "B) Reject", "C) Stagnate", "D) Prevent"], 
                correctIndex: 0, 
                rationale: "Adapt significa ajustar o cambiar para un nuevo propósito. Sinónimo: Adjust.",
                type: "quiz"
            },
            { 
                question: "Sinónimo de la palabra: 'PRESUME'", 
                options: ["A) Doubting", "B) Assuming", "C) Proving", "D) Questioning"], 
                correctIndex: 1, 
                rationale: "Presume significa dar por sentado. Sinónimo: Assuming.",
                type: "quiz"
            },
            { 
                question: "Sinónimo de la palabra: 'HAZARDOUS'", 
                options: ["A) Safe", "B) Dangerous", "C) Beneficial", "D) Harmless"], 
                correctIndex: 1, 
                rationale: "Hazardous significa peligroso o arriesgado. Sinónimo: Dangerous.",
                type: "quiz"
            },
            { 
                question: "Sinónimo de la palabra: 'CATER (for)'", 
                options: ["A) Ignore", "B) Provide (for)", "C) Neglect", "D) Demand"], 
                correctIndex: 1, 
                rationale: "To cater for significa proveer o satisfacer una necesidad. Sinónimo: Provide (for).",
                type: "quiz"
            },
            { 
                question: "Sinónimo de la palabra: 'EFFICIENT'", 
                options: ["A) Wasteful", "B) Ineffective", "C) Productive", "D) Slow"], 
                correctIndex: 2, 
                rationale: "Efficient significa que logra resultados con el mínimo de recursos. Sinónimo: Productive.",
                type: "quiz"
            },
            { 
                question: "Sinónimo de la palabra: 'UTTERLY'", 
                options: ["A) Slightly", "B) Partially", "C) Completely", "D) Rarely"], 
                correctIndex: 2, 
                rationale: "Utterly significa completamente. Sinónimo: Completely.",
                type: "quiz"
            },
            
            // ANTÓNIMOS
            { 
                question: "Antónimo de la palabra: 'ARTIFICIAL'", 
                options: ["A) Genuine", "B) Synthetic", "C) Man-made", "D) Elaborate"], 
                correctIndex: 0, 
                rationale: "Artificial significa hecho por el hombre. Antónimo: Genuine (Auténtico/Genuino).",
                type: "quiz"
            },
            { 
                question: "Antónimo de la palabra: 'SCARCE'", 
                options: ["A) Abundant", "B) Limited", "C) Rare", "D) Sufficient"], 
                correctIndex: 0, 
                rationale: "Scarce significa escaso. Antónimo: Abundant (Abundante).",
                type: "quiz"
            },
            { 
                question: "Antónimo de la palabra: 'TRANSPARENT'", 
                options: ["A) Clear", "B) Opaque", "C) Obvious", "D) Shiny"], 
                correctIndex: 1, 
                rationale: "Transparent significa que deja pasar la luz o es claro. Antónimo: Opaque (Opaco).",
                type: "quiz"
            },
            { 
                question: "Antónimo de la palabra: 'VAGUE'", 
                options: ["A) Unclear", "B) Precise", "C) Ambiguous", "D) Direct"], 
                correctIndex: 1, 
                rationale: "Vague significa impreciso o ambiguo. Antónimo: Precise (Preciso).",
                type: "quiz"
            },
            { 
                question: "Antónimo de la palabra: 'ACCESSIBLE'", 
                options: ["A) Reachable", "B) Available", "C) Unattainable", "D) Simple"], 
                correctIndex: 2, 
                rationale: "Accessible significa que se puede alcanzar. Antónimo: Unattainable (Inalcanzable).",
                type: "quiz"
            },
            { 
                question: "Antónimo de la palabra: 'FLEXIBLE'", 
                options: ["A) Rigid", "B) Adaptable", "C) Pliable", "D) Soft"], 
                correctIndex: 0, 
                rationale: "Flexible significa adaptable. Antónimo: Rigid (Rígido).",
                type: "quiz"
            },
            { 
                question: "Antónimo de la palabra: 'DISCARD'", 
                options: ["A) Get rid of", "B) Retain", "C) Throw away", "D) Acquire"], 
                correctIndex: 1, 
                rationale: "Discard significa deshacerse de algo. Antónimo: Retain (Retener).",
                type: "quiz"
            },
            { 
                question: "Antónimo de la palabra: 'PERMANENT'", 
                options: ["A) Lasting", "B) Everlasting", "C) Temporary", "D) Final"], 
                correctIndex: 2, 
                rationale: "Permanent significa duradero. Antónimo: Temporary (Temporal).",
                type: "quiz"
            },
            { 
                question: "Antónimo de la palabra: 'MAJORITY'", 
                options: ["A) Bulk", "B) Minority", "C) Most", "D) Segment"], 
                correctIndex: 1, 
                rationale: "Majority significa la parte más grande o la mayor parte. Antónimo: Minority (Minoría).",
                type: "quiz"
            },
            { 
                question: "Antónimo de la palabra: 'CONCEAL'", 
                options: ["A) Hide", "B) Disguise", "C) Reveal", "D) Secure"], 
                correctIndex: 2, 
                rationale: "Conceal significa ocultar. Antónimo: Reveal (Revelar).",
                type: "quiz"
            },
        ]
    },
    {
        title: "Animales",
        icon: "🦁",
        cards: [
            // ----------------------------------------------------
            // 30 TARJETAS DE ANIMALES 🦁
            // ----------------------------------------------------
            { front: "Eagle", back: "Águila", example: "The eagle soared high above the mountains." },
            { front: "Otter", back: "Nutria", example: "Otters are playful animals that live near water." },
            { front: "Cheetah", back: "Guepardo", example: "The cheetah is the fastest land animal." },
            { front: "Squirrel", back: "Ardilla", example: "A squirrel hid a nut in the ground." },
            { front: "Owl", back: "Búho / Lechuza", example: "Owls are nocturnal birds." },
            { front: "Hedgehog", back: "Erizo", example: "The hedgehog curled into a ball when approached." },
            { front: "Stag / Deer", back: "Ciervo / Venado", example: "We saw a stag with large antlers in the forest." },
            { front: "Swallow", back: "Golondrina", example: "Swallows migrate south for the winter." },
            { front: "Toad", back: "Sapo", example: "A toad is similar to a frog but has rougher skin." },
            { front: "Octopus", back: "Pulpo", example: "The octopus uses ink to escape predators." },
            { front: "Mantis", back: "Mantis religiosa", example: "The praying mantis is a fascinating insect." },
            { front: "Wolf", back: "Lobo", example: "A wolf howled at the full moon." },
            { front: "Whale", back: "Ballena", example: "Blue whales are the largest animals on Earth." },
            { front: "Dolphin", back: "Delfín", example: "Dolphins are known for their intelligence and playful nature." },
            { front: "Kangaroo", back: "Canguro", example: "Kangaroo mothers carry their babies in a pouch." },
            { front: "Peacock", back: "Pavo real", example: "The peacock displayed its beautiful tail feathers." },
            { front: "Raven", back: "Cuervo", example: "Ravens are highly intelligent and can solve puzzles." },
            { front: "Seal", back: "Foca", example: "Seals often bask in the sun on the rocks." },
            { front: "Beaver", back: "Castor", example: "Beavers build dams across rivers." },
            { front: "Shark", back: "Tiburón", example: "The great white shark is a formidable predator." },
            { front: "Sloth", back: "Perezoso", example: "Sloths are famous for their slow movements." },
            { front: "Vulture", back: "Buitre", example: "Vultures are scavengers and help keep the environment clean." },
            { front: "Crocodile", back: "Cocodrilo", example: "The crocodile lurked just below the water's surface." },
            { front: "Rhinoceros / Rhino", back: "Rinoceronte", example: "Rhinoceros are endangered due to poaching." },
            { front: "Hippopotamus / Hippo", back: "Hipopótamo", example: "Hippos spend most of their day in the water." },
            { front: "Goat", back: "Cabra", example: "Goats are excellent climbers." },
            { front: "Donkey", back: "Burro / Asno", example: "The farmer used a donkey to carry the load." },
            { front: "Fawn", back: "Cervatillo", example: "A small fawn was walking next to its mother." },
            { front: "Tarantula", back: "Tarántula", example: "Despite their size, most tarantulas are harmless to humans." },
            { front: "Jellyfish", back: "Medusa", example: "Be careful not to touch a jellyfish at the beach." },
        ]
    }
];

// --- 2. GESTIÓN DEL ESTADO Y ELEMENTOS DEL DOM ---

let currentDeck = null;
let currentCardIndex = 0;
let isFlipped = false;
let showFrontInEnglish = true; 

// Elementos HTML
const dashboard = document.getElementById('dashboard');
const studyMode = document.getElementById('study-mode');
const decksContainer = document.getElementById('decks-container');
const flashcard = document.getElementById('flashcard');
const deckTitleLabel = document.getElementById('current-deck-title');
const progressText = document.getElementById('progress-text');
const frontText = document.getElementById('card-front-text');
const backText = document.getElementById('card-back-text');
const exampleText = document.getElementById('card-example-text');
const appSubtitle = document.getElementById('app-subtitle');
const trackingStatusBar = document.getElementById('tracking-status-bar');
const languageToggleButton = document.getElementById('btn-language-toggle');


// --- 3. FUNCIONES DE LÓGICA Y ALMACENAMIENTO ---

/** Guarda el estado actual de todos los mazos en localStorage. */
function saveDecks() {
    // Almacena solo la data esencial, no las funciones ni los elementos del DOM.
    // Usamos JSON.stringify para convertir el array de objetos JavaScript a texto (string).
    try {
        localStorage.setItem('aptisFlashcardDecks', JSON.stringify(initialDecks));
        // console.log("Datos guardados exitosamente en localStorage."); // Descomentar para debug
    } catch (e) {
        console.error("Error al guardar en localStorage:", e);
    }
}

/** Carga el estado de los mazos desde localStorage si existe. */
function loadDecks() {
    try {
        const storedDecks = localStorage.getItem('aptisFlashcardDecks');
        if (storedDecks) {
            // Usamos JSON.parse para convertir el texto almacenado de vuelta a objetos JavaScript.
            const loadedData = JSON.parse(storedDecks);
            
            // Reemplazar los datos iniciales con los datos guardados.
            // Esto asegura que la aplicación se inicie con el progreso del usuario.
            initialDecks.splice(0, initialDecks.length, ...loadedData); 
            // console.log("Datos cargados desde localStorage."); // Descomentar para debug
            return true; 
        }
    } catch (e) {
        console.error("Error al cargar o parsear datos de localStorage:", e);
    }
    return false; 
}


/** Renderiza la lista de mazos en la pantalla inicial (Dashboard) */
function renderDashboard() {
    decksContainer.innerHTML = '';
    initialDecks.forEach((deck, index) => {
        const div = document.createElement('div');
        
        // Clases de diseño 
        div.className = 'deck-card'; 
        
        div.onclick = () => openDeck(index); 
        
        // Inicializar el estado si no existe
        deck.cards.forEach(card => {
            if (!card.status) card.status = 'pending';
        });

        let totalCards = deck.cards.length;
        let learned = deck.cards.filter(c => c.status === 'learned').length;
        let unlearned = deck.cards.filter(c => c.status === 'unlearned').length;

        // Estructura interna de la tarjeta de mazo
        div.innerHTML = `
            <div class="deck-icon">${deck.icon}</div>
            <div class="deck-info-content">
                <div class="deck-title">${deck.title}</div>
                <div class="deck-count">${totalCards} tarjetas | 
                    <span style="color: #10b981;">Aprendidas: ${learned}</span> |
                    <span style="color: #ef4444;">Repasar: ${unlearned}</span>
                </div>
            </div>
            <div class="deck-action">Estudiar &gt;</div>
        `;
        decksContainer.appendChild(div);
    });
}

/** Cambia a la vista de estudio y carga el mazo seleccionado */
function openDeck(index) {
    currentDeck = initialDecks[index];
    currentCardIndex = 0;
    isFlipped = false;
    
    currentDeck.cards.forEach(card => {
        if (!card.status) card.status = 'pending';
    });

    dashboard.classList.add('hidden');
    studyMode.classList.remove('hidden');
    appSubtitle.textContent = `Estudiando: ${currentDeck.title}`;
    
    deckTitleLabel.textContent = currentDeck.title;
    updateCardDisplay();
    updateTrackingStatus(); 
}

/** Vuelve a la vista inicial de selección de mazos */
function showDashboard() {
    studyMode.classList.add('hidden');
    dashboard.classList.remove('hidden');
    appSubtitle.textContent = "Selecciona una categoría para empezar";
    currentDeck = null;
    saveDecks(); // Guardamos el progreso final antes de salir.
    renderDashboard();
}

/** Calcula y actualiza los contadores de Aprendido/No Aprendido */
function updateTrackingStatus() {
    if (!currentDeck) return;
    
    let totalCards = currentDeck.cards.length;
    let learned = currentDeck.cards.filter(c => c.status === 'learned').length;
    let unlearned = currentDeck.cards.filter(c => c.status === 'unlearned').length;
    let pending = totalCards - learned - unlearned;

    trackingStatusBar.innerHTML = `
        <div class="status-item status-pending">Restantes <span>${pending}</span></div>
        <div class="status-item status-learned">Aprendidas <span>${learned}</span></div>
        <div class="status-item status-unlearned">Repasar <span>${unlearned}</span></div>
    `;
}

/** * GESTIONA LA SELECCIÓN DE RESPUESTA EN EL QUIZ.
 * Pone una 'X' en la caja seleccionada y borra las demás.
 */
function selectAnswer(selectedElement) {
    // 1. Encontrar el contenedor principal de las opciones del quiz actual (card-front-text)
    const optionsContainer = selectedElement.closest('#card-front-text'); 
    
    // Si no encuentra el contenedor, salimos para evitar errores
    if (!optionsContainer) return;
    
    // 2. Deseleccionar todas las opciones dentro de ese contenedor
    optionsContainer.querySelectorAll('.quiz-option-line').forEach(line => {
        const box = line.querySelector('.selection-box');
        if (box) {
            box.style.backgroundColor = 'transparent';
            box.style.borderColor = '#333';
            box.textContent = '';
        }
    });

    // 3. Seleccionar la opción clicada
    const boxToSelect = selectedElement.querySelector('.selection-box');
    if (boxToSelect) {
        boxToSelect.style.backgroundColor = '#333';
        boxToSelect.style.borderColor = '#333';
        boxToSelect.style.color = 'white';
        boxToSelect.textContent = 'X';
    }
}


/** Rellena la tarjeta con el contenido de la carta actual */
function updateCardDisplay() {
    if (!currentDeck || currentDeck.cards.length === 0) {
        frontText.textContent = "Mazo Vacío";
        backText.textContent = "Añade más tarjetas para estudiar.";
        exampleText.textContent = "";
        progressText.textContent = "0 / 0";
        document.getElementById('btn-prev').disabled = true;
        document.getElementById('btn-next').disabled = true;
        return;
    }
    
    const card = currentDeck.cards[currentCardIndex];
    
    // Quita la clase de volteo para reiniciar la tarjeta
    flashcard.classList.remove('is-flipped');
    isFlipped = false;

    setTimeout(() => {
        
        // Limpiamos los contenedores por si traen HTML de un quiz anterior
        frontText.innerHTML = ''; 
        backText.innerHTML = '';
        exampleText.textContent = ''; 

        // --- LÓGICA DE QUIZ DE RESPUESTA MÚLTIPLE ---
        if (card.type === 'quiz') {
            
            // 1. Contenido del Frente (Pregunta + Opciones)
            let optionsHTML = card.options.map((option, index) => {
                
                // Estilo para el cuadro de selección
                const boxStyle = `
                    width: 20px; 
                    height: 20px; 
                    border: 2px solid #333; 
                    margin-right: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    color: white; 
                    cursor: pointer;
                    transition: all 0.1s;
                    box-sizing: border-box;
                    background-color: transparent;
                    font-size: 1em; /* Asegura que la X se vea bien */
                `;
                
                // Estilo para el texto de la opción (tipografía pequeña para adaptarse)
                const textStyle = `font-size: 0.9em; flex-grow: 1; text-align: left;`;
                
                return `
                    <div class="quiz-option-line" 
                         onclick="selectAnswer(this)" 
                         style="display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee; cursor: pointer;">
                        
                        <div class="selection-box" style="${boxStyle}"></div>
                        
                        <div class="option-text" style="${textStyle}">
                            <strong>${option}</strong>
                        </div>
                    </div>
                `;
            }).join('');
            
            // Reducción de fuente de la pregunta a 1.2em
            let frontContent = `<h3 style="margin-bottom: 20px; text-align: left; font-size: 1.2em;">${card.question}</h3>${optionsHTML}`;
            
            // 2. Contenido del Reverso (Respuesta Correcta + Razón)
            const correctAnswerText = card.options[card.correctIndex];
            let backContent = `
                <h3 style="color: #10b981; margin-bottom: 10px;">✅ Respuesta Correcta:</h3>
                <p style="font-size: 1.5em; font-weight: bold; margin-bottom: 15px;">
                    ${correctAnswerText}
                </p>
                <hr style="border-top: 1px solid #ddd; margin: 15px 0;">
                <p style="font-size: 0.9em; text-align: left;"><strong>Razón:</strong> ${card.rationale}</p>
            `;
            
            frontText.innerHTML = frontContent; 
            backText.innerHTML = backContent;   
            
            progressText.textContent = `Quiz ${currentCardIndex + 1} / ${currentDeck.cards.length}`;

        } else {
            // --- LÓGICA ESTÁNDAR DE FLASHCARD ---
            let frontContent;
            let backContent;
            
            if (showFrontInEnglish) {
                frontContent = card.front; 
                backContent = card.back;   
            } else {
                frontContent = card.back;   
                backContent = card.front; 
            }

            // Usamos innerHTML para reemplazar cualquier formato anterior (aunque sea solo texto)
            frontText.innerHTML = frontContent; 
            backText.innerHTML = backContent;
            
            // La frase de ejemplo en inglés SIEMPRE se muestra en el reverso de la tarjeta estándar.
            exampleText.textContent = card.example; 
            
            progressText.textContent = `${currentCardIndex + 1} / ${currentDeck.cards.length}`;
        }
        
        // Actualiza el estado de los botones de navegación
        document.getElementById('btn-prev').disabled = currentCardIndex === 0;
        document.getElementById('btn-next').disabled = currentCardIndex === currentDeck.cards.length - 1;
        
    }, 200);
}

/** Gira la tarjeta para mostrar la definición */
function flipCard() {
    flashcard.classList.toggle('is-flipped');
    isFlipped = !isFlipped;
}

/** Muestra la siguiente tarjeta en el mazo */
function nextCard() {
    if (currentCardIndex < currentDeck.cards.length - 1) {
        currentCardIndex++;
        updateCardDisplay();
    } else {
        // Opción: Recargar el mazo o volver al dashboard al finalizar
        alert("¡Has llegado al final del mazo! Volviendo al inicio.");
        showDashboard();
    }
}

/** Muestra la tarjeta anterior en el mazo */
function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCardDisplay();
    }
}

/** Marca la tarjeta actual como Aprendida y avanza a la siguiente */
function markAsLearned() {
    if (currentDeck && currentDeck.cards[currentCardIndex] && currentDeck.cards[currentCardIndex].type !== 'quiz') {
        currentDeck.cards[currentCardIndex].status = 'learned';
        updateTrackingStatus();
        saveDecks(); // 🔄 GUARDADO DE PROGRESO
        nextCard();
    }
}

/** Marca la tarjeta actual como Necesita Repaso y avanza a la siguiente */
function markAsUnlearned() {
    if (currentDeck && currentDeck.cards[currentCardIndex] && currentDeck.cards[currentCardIndex].type !== 'quiz') {
        currentDeck.cards[currentCardIndex].status = 'unlearned';
        updateTrackingStatus();
        saveDecks(); // 🔄 GUARDADO DE PROGRESO
        nextCard();
    }
}

/** Alterna el idioma que se muestra en el frente de la tarjeta */
function toggleLanguageOrder() {
    // Solo permitimos el cambio si no estamos en un mazo de Quiz, ya que su contenido es fijo.
    const isQuizDeck = currentDeck && currentDeck.cards[0] && currentDeck.cards[0].type === 'quiz';
    
    if (isQuizDeck) {
        languageToggleButton.textContent = 'Frente: ❓ Quiz Fijo';
        languageToggleButton.disabled = true;
        return;
    }
    
    languageToggleButton.disabled = false;
    showFrontInEnglish = !showFrontInEnglish; 
    
    if (showFrontInEnglish) {
        languageToggleButton.textContent = 'Frente: 🇬🇧 Inglés';
    } else {
        languageToggleButton.textContent = 'Frente: 🇪🇸 Español';
    }

    if (!studyMode.classList.contains('hidden')) {
        updateCardDisplay();
    }
}


/** Inicialización de la aplicación */
function init() {
    // 1. INTENTAR CARGAR DATOS GUARDADOS
    loadDecks(); 

    // Añadir el Event Listener para el botón de idioma 
    if (languageToggleButton) {
        languageToggleButton.addEventListener('click', toggleLanguageOrder);
    }
    
    // Configura el estado inicial y renderiza
    toggleLanguageOrder(); 
    renderDashboard();
}

// Escuchadores de teclado para navegación 
document.addEventListener('keydown', (e) => {
    if (studyMode.classList.contains('hidden') === false) {
        if (e.key === 'ArrowRight') nextCard();
        if (e.key === 'ArrowLeft') prevCard();
        if (e.key === ' ' || e.key === 'Enter') flipCard();
    }
});

// Guardado de seguridad cuando el usuario intenta cerrar o recargar la página
window.addEventListener('beforeunload', saveDecks);


// Iniciar la app al cargar el script
init();
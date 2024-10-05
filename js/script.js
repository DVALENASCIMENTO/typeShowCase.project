const fontGroups = {
    'Serifadas': {
        fonts: [
            'Times New Roman', 'Georgia', 'Garamond', 'Baskerville', 'Palatino Linotype',
            'Merryweather', 'Crimson Text', 'Playfair Display', 'Charter', 'Muli',
            'Noto Serif', 'Bitter', 'Lora', 'PT Serif', 'Cardo',
            'Tisa', 'Bodoni', 'Caslon', 'Minion Pro', 'Alegreya',
            'Freight Text', 'Arvo', 'Vollkorn', 'Source Serif Pro', 'Old Standard TT',
            'Cinzel', 'Gentium', 'Droid Serif', 'Libre Baskerville', 'Cormorant',
            'Spectral', 'Bitter', 'Stika', 'Vollkorn', 'Merriweather',
            'Overpass', 'Crimson Pro', 'Gloock', 'Libre Bodoni', 'Tisa',
            'Noto Serif Display', 'Pragati Narrow', 'Spectral', 'Hind', 'Poppins'
        ],
        description: "Fontes com serifas que conferem um toque clássico e elegante. Perfeitas para textos longos e impressos."
    },
    'Sem Serifas': {
        fonts: [
            'Arial', 'Helvetica', 'Verdana', 'Futura', 'Gill Sans',
            'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Poppins',
            'Source Sans Pro', 'Nunito', 'Avenir', 'Raleway', 'Noto Sans',
            'Proxima Nova', 'Droid Sans', 'Quicksand', 'Oswald', 'Barlow',
            'Ubuntu', 'Karla', 'Manrope', 'Inter', 'Fjalla One',
            'Rubik', 'Exo', 'Muli', 'Saira', 'Assistant',
            'Archivo', 'Titillium Web', 'Work Sans', 'Lexend', 'Cera Pro',
            'Noto Sans JP', 'DM Sans', 'Varela Round', 'Karla', 'Cabin'
        ],
        description: "Fontes sem serifas que oferecem um visual moderno e limpo, ideais para telas e designs minimalistas."
    },
    'Manuscritas': {
        fonts: [
            'Brush Script', 'Pacifico', 'Great Vibes', 'Dancing Script', 'Lobster',
            'Satisfy', 'Allura', 'Quintessential', 'Sacramento', 'Pinyon Script',
            'Alex Brush', 'Pinyon Script', 'Vidaloka', 'Dancing Script', 'Fascinate',
            'Grand Hotel', 'Rochester', 'Zeyada', 'Lobster Two', 'Great Vibes',
            'Sofia', 'Kalam', 'French Script MT', 'Lobster', 'Satisfy',
            'Sacramento', 'Kaushan Script', 'Cedarville Cursive', 'Nothing You Could Do', 'Giddyup Std',
            'Cherry Cream Soda', 'Niconne', 'Sacramento', 'Special Elite', 'Righteous',
            'Dancing Script', 'Lobster', 'Dancing Script', 'Patrick Hand', 'Zeyada'
        ],
        description: "Fontes que imitam a caligrafia, oferecendo um toque pessoal e artístico. Usadas em convites e design criativo."
    },
    'Decorativas': {
        fonts: [
            'Impact', 'Comic Sans MS', 'Lobster', 'Bebas Neue', 'Rock Salt',
            'Fjalla One', 'Playfair Display', 'Abril Fatface', 'Special Elite', 'Cinzel',
            'Dancing Script', 'Chewy', 'Alfa Slab One', 'Tangerine', 'Righteous',
            'Permanent Marker', 'Merienda', 'Nosifer', 'Faster One', 'Fugaz One',
            'Satisfy', 'Gloria Hallelujah', 'Major Mono Display', 'Sarpanch', 'Lobster Two',
            'Hanalei', 'Black Han Sans', 'Pinyon Script', 'Cherry Cream Soda', 'Bungee',
            'Righteous', 'Roboto Slab', 'Oswald', 'Cinzel Decorative', 'Abril Fatface',
            'Creepster', 'Acme', 'Gloock', 'Chewy', 'Righteous'
        ],
        description: "Fontes ousadas e criativas, perfeitas para títulos e projetos que exigem destaque visual."
    },
    'Monoespaçadas': {
        fonts: [
            'Courier New', 'Consolas', 'Lucida Console', 'Monaco', 'Inconsolata',
            'Source Code Pro', 'Fira Code', 'Menlo', 'Roboto Mono', 'Droid Sans Mono',
            'Hack', 'Oxygen Mono', 'PT Mono', 'Ubuntu Mono', 'Space Mono',
            'Cutive', 'Anonymous Pro', 'Lucida Sans Typewriter', 'Noto Mono', 'Courier Prime',
            'Source Sans Pro', 'Cousine', 'Overpass Mono', 'Alegreya Sans Mono', 'Fira Mono',
            'VT323', 'Droid Sans Mono', 'Andale Mono', 'IBM Plex Mono', 'Unica77',
            'Coda', 'Righteous', 'Karla', 'Russo One', 'Major Mono Display',
            'Galindo', 'Overpass', 'Open Sans', 'Noto Sans', 'DM Sans'
        ],
        description: "Fontes onde cada caractere ocupa a mesma largura, ideais para programação e contextos técnicos."
    },
    'Humanistas': {
        fonts: [
            'Gill Sans', 'Frutiger', 'Myriad Pro', 'Avenir', 'Segoe UI',
            'Univers', 'Optima', 'Lucida Grande', 'Arial Rounded', 'Palatino',
            'Humana', 'Segoe UI Historic', 'Gotham', 'Futura', 'Avenir Next',
            'Source Sans Pro', 'Helvetica Neue', 'FF Meta',
            'Museo Sans', 'Neue Haas Grotesk', 'FF Mark', 'Gotham Rounded', 'Circular Std',
            'Avenir', 'Noto Sans', 'Alegreya', 'Cera Pro', 'Hind',
            'Fira Sans', 'Avenir Next', 'Mulish', 'Open Sans', 'Noto Sans',
            'Inter', 'DM Sans', 'Roboto', 'Lexend', 'Poppins'
        ],
        description: "Fontes que imitam a escrita humana, oferecendo uma aparência mais orgânica e acessível."
    },
    'Geométricas': {
        fonts: [
            'Futura', 'Avenir', 'Gill Sans', 'Helvetica Neue', 'Century Gothic',
            'Bebas Neue', 'Raleway', 'Oswald', 'Noto Sans', 'Proxima Nova',
            'Poppins', 'Open Sans', 'Montserrat', 'Avenir Next', 'Rubik',
            'Lato', 'Fjalla One', 'Archivo', 'Ubuntu', 'Barlow',
            'Karla', 'Manrope', 'Oxygen', 'Roboto Condensed', 'Work Sans',
            'DM Sans', 'Fira Sans', 'Nunito Sans', 'Lexend', 'Saira',
            'Mulish', 'Assistant', 'Manrope', 'Karla', 'Overpass',
            'Noto Sans KR', 'Muli', 'Inter', 'Source Sans Pro', 'Varela Round',
            'Exo', 'Roboto Mono', 'Bitter', 'Oswald', 'Roboto Serif'
        ],
        description: "Fontes baseadas em formas geométricas simples, ideais para designs modernos e limpos."
    },
    'Vintage ou Retrô': {
        fonts: [
            'Bebas Neue', 'Lobster', 'Rockwell', 'Nostalgia', 'Raleway',
            'Pacifico', 'Playfair Display', 'Gloock', 'Cinzel', 'Abril Fatface',
            'Miriam Libre', 'Garamond', 'Lobster Two', 'Oswald', 'Libre Baskerville',
            'Fjalla One', 'Alegreya', 'Cinzel Decorative', 'Saira Stencil One', 'Old Standard TT',
            'Bodoni Moda', 'Coda', 'Exo 2', 'Abril Fatface', 'Harlow Solid Italic',
            'Special Elite', 'Parisienne', 'Merienda', 'Zeyada', 'Chewy',
            'Righteous', 'Acme', 'Acme', 'Hind', 'Salsa',
            'Lobster', 'Playfair Display', 'Great Vibes', 'Dancing Script', 'Sacramento'
        ],
        description: "Fontes que evocam estilos de design de épocas passadas, perfeitas para projetos nostálgicos."
    },
    'Condensadas e Expandidas': {
        fonts: [
            'Bebas Neue', 'Open Sans Condensed', 'Oswald', 'Anton', 'Exo 2',
            'Roboto Condensed', 'Arvo', 'Archivo', 'Gloock', 'Lato',
            'Righteous', 'Alegreya', 'Noto Sans', 'Montserrat', 'Lora',
            'Overpass', 'Titillium Web', 'Raleway', 'Fjalla One', 'Lexend',
            'Mulish', 'Inter', 'Barlow', 'Work Sans', 'Ubuntu',
            'Poppins', 'DM Sans', 'Coda', 'Muli', 'Quicksand',
            'Saira', 'Assistant', 'Fira Sans', 'Miriam Libre', 'Rubik',
            'Saira Condensed', 'Open Sans', 'Nunito', 'Source Sans Pro', 'Dosis'
        ],
        description: "Fontes que possuem largura reduzida (condensadas) ou aumentada (expandidas) em comparação com fontes padrão."
    }
};

const buttonsContainer = document.getElementById('buttons-container');
const fontSamples = document.getElementById('font-samples');

// Criação dos botões
for (const group in fontGroups) {
    const button = document.createElement('button');
    button.textContent = group;
    button.addEventListener('click', () => displayFonts(group));
    buttonsContainer.appendChild(button);
}

// Função para exibir as fontes do grupo selecionado
function displayFonts(group) {
    fontSamples.innerHTML = ''; // Limpa a área de amostras
    const fonts = fontGroups[group].fonts;
    const description = fontGroups[group].description;

    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'description';
    descriptionElement.textContent = description;
    fontSamples.appendChild(descriptionElement);

    fonts.forEach(font => {
        const fontSample = document.createElement('div');
        fontSample.className = 'font-sample';
        fontSample.innerHTML = `
            <h2 style="font-family: '${font}';">${font}</h2>
            <p style="font-family: '${font}';">Exemplo de texto em ${font}.<button class="copy-btn" data-font="${font}">Copiar</button></p>
        `;
        fontSamples.appendChild(fontSample);
    });

    // Adicionar funcionalidade de cópia
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => {
            const fontToCopy = button.dataset.font;
            navigator.clipboard.writeText(fontToCopy)
                .then(() => alert(`Fonte ${fontToCopy} copiada!`))
                .catch(err => console.error('Erro ao copiar: ', err));
        });
    });
}
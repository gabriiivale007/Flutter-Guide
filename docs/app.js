// Flutter Widget Documentation JavaScript

// Widget data
const widgetData = {
  scaffold: {
    name: 'Scaffold',
    category: 'Layout Base',
    description: 'Scaffold fornisce la struttura base per una schermata dell\'app, implementando il layout Material Design',
    attributes: {
      'appBar': 'Barra dell\'app in cima allo schermo',
      'body': 'Contenuto principale della schermata',
      'floatingActionButton': 'Pulsante d\'azione fluttuante',
      'drawer': 'Menu laterale scorrevole',
      'bottomNavigationBar': 'Barra di navigazione in fondo',
      'backgroundColor': 'Colore di sfondo dello scaffold',
      'resizeToAvoidBottomInset': 'Se ridimensionare per evitare la tastiera'
    },
    example: `Scaffold(
  appBar: AppBar(
    title: Text('La Mia App'),
  ),
  body: Center(
    child: Text('Contenuto principale'),
  ),
  floatingActionButton: FloatingActionButton(
    onPressed: () {},
    child: Icon(Icons.add),
  ),
)`,
    tips: [
      'Usa sempre Scaffold come widget radice per le schermate',
      'AppBar si integra automaticamente con Drawer',
      'floatingActionButtonLocation controlla la posizione del FAB'
    ]
  },
  container: {
    name: 'Container',
    category: 'Layout Base',
    description: 'Container è un widget versatile per decorare, posizionare e dimensionare il suo widget figlio',
    attributes: {
      'child': 'Widget figlio contenuto nel container',
      'padding': 'Spazio interno intorno al figlio',
      'margin': 'Spazio esterno intorno al container',
      'width': 'Larghezza del container',
      'height': 'Altezza del container',
      'color': 'Colore di sfondo',
      'decoration': 'Decorazione avanzata (bordi, ombre, gradienti)',
      'alignment': 'Allineamento del figlio all\'interno del container'
    },
    example: `Container(
  width: 200,
  height: 100,
  padding: EdgeInsets.all(16),
  margin: EdgeInsets.all(8),
  decoration: BoxDecoration(
    color: Colors.blue,
    borderRadius: BorderRadius.circular(8),
    boxShadow: [
      BoxShadow(
        color: Colors.grey,
        offset: Offset(2, 2),
        blurRadius: 4,
      ),
    ],
  ),
  child: Text('Contenuto'),
)`,
    tips: [
      'Non usare sia color che decoration insieme',
      'Usa BoxDecoration per decorazioni avanzate',
      'EdgeInsets fornisce varie opzioni per padding e margin'
    ]
  },
  row: {
    name: 'Row',
    category: 'Layout Flex',
    description: 'Row dispone i suoi figli orizzontalmente in una singola riga',
    attributes: {
      'children': 'Lista di widget figli da disporre orizzontalmente',
      'mainAxisAlignment': 'Allineamento lungo l\'asse principale (orizzontale)',
      'crossAxisAlignment': 'Allineamento lungo l\'asse trasversale (verticale)',
      'mainAxisSize': 'Quanto spazio occupare lungo l\'asse principale'
    },
    example: `Row(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  children: [
    Icon(Icons.home),
    Icon(Icons.search),
    Icon(Icons.person),
  ],
)`,
    tips: [
      'MainAxis per Row è orizzontale',
      'Usa Expanded per far occupare spazio disponibile ai figli',
      'Attenzione all\'overflow su schermi piccoli'
    ]
  },
  column: {
    name: 'Column',
    category: 'Layout Flex',
    description: 'Column dispone i suoi figli verticalmente in una singola colonna',
    attributes: {
      'children': 'Lista di widget figli da disporre verticalmente',
      'mainAxisAlignment': 'Allineamento lungo l\'asse principale (verticale)',
      'crossAxisAlignment': 'Allineamento lungo l\'asse trasversale (orizzontale)',
      'mainAxisSize': 'Quanto spazio occupare lungo l\'asse principale'
    },
    example: `Column(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text('Titolo'),
    Text('Sottotitolo'),
    ElevatedButton(
      onPressed: () {},
      child: Text('Azione'),
    ),
  ],
)`,
    tips: [
      'MainAxis per Column è verticale',
      'Usa SingleChildScrollView per contenuto che può traboccare',
      'CrossAxisAlignment.stretch allarga i figli per tutta la larghezza'
    ]
  },
  expanded: {
    name: 'Expanded',
    category: 'Layout Flex',
    description: 'Expanded fa espandere un figlio di Row, Column o Flex per riempire lo spazio disponibile',
    attributes: {
      'child': 'Widget figlio da espandere',
      'flex': 'Fattore di flessibilità (predefinito: 1)'
    },
    example: `Row(
  children: [
    Container(width: 50, height: 50, color: Colors.red),
    Expanded(
      flex: 2,
      child: Container(height: 50, color: Colors.green),
    ),
    Expanded(
      flex: 1,
      child: Container(height: 50, color: Colors.blue),
    ),
  ],
)`,
    tips: [
      'Expanded è un shortcut per Flexible con fit: FlexFit.tight',
      'Usa flex per controllare la proporzione dello spazio',
      'Non può essere usato fuori da Row, Column o Flex'
    ]
  },
  flexible: {
    name: 'Flexible',
    category: 'Layout Flex',
    description: 'Flexible permette a un figlio di occupare lo spazio disponibile ma non lo forza a farlo',
    attributes: {
      'child': 'Widget figlio da rendere flessibile',
      'flex': 'Fattore di flessibilità',
      'fit': 'FlexFit.tight (come Expanded) o FlexFit.loose'
    },
    example: `Row(
  children: [
    Flexible(
      flex: 2,
      fit: FlexFit.loose,
      child: Container(
        height: 50,
        color: Colors.blue,
        child: Text('Flessibile'),
      ),
    ),
    Container(width: 50, height: 50, color: Colors.red),
  ],
)`,
    tips: [
      'FlexFit.loose permette al figlio di essere più piccolo dello spazio assegnato',
      'FlexFit.tight forza il figlio a occupare tutto lo spazio',
      'Più controllo rispetto a Expanded'
    ]
  },
  text: {
    name: 'Text',
    category: 'Contenuto',
    description: 'Text visualizza una stringa di testo con uno stile singolo',
    attributes: {
      'data': 'Stringa di testo da visualizzare',
      'style': 'Stile del testo (TextStyle)',
      'textAlign': 'Allineamento del testo',
      'maxLines': 'Numero massimo di righe',
      'overflow': 'Come gestire il testo che trabocca'
    },
    example: `Text(
  'Ciao Flutter!',
  style: TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
    color: Colors.blue,
    letterSpacing: 1.2,
  ),
  textAlign: TextAlign.center,
  maxLines: 2,
  overflow: TextOverflow.ellipsis,
)`,
    tips: [
      'Usa TextOverflow.ellipsis per testo lungo',
      'TextStyle offre molte opzioni di personalizzazione',
      'maxLines controlla il numero di righe visualizzate'
    ]
  },
  image: {
    name: 'Image',
    category: 'Contenuto',
    description: 'Image visualizza un\'immagine da varie sorgenti',
    attributes: {
      'image': 'Sorgente dell\'immagine (AssetImage, NetworkImage, etc.)',
      'width': 'Larghezza dell\'immagine',
      'height': 'Altezza dell\'immagine',
      'fit': 'Come adattare l\'immagine alle dimensioni',
      'alignment': 'Allineamento dell\'immagine'
    },
    example: `// Immagine da asset
Image.asset(
  'assets/images/logo.png',
  width: 200,
  height: 100,
  fit: BoxFit.cover,
)

// Immagine da network
Image.network(
  'https://example.com/image.jpg',
  loadingBuilder: (context, child, progress) {
    if (progress == null) return child;
    return CircularProgressIndicator();
  },
)`,
    tips: [
      'BoxFit.cover mantiene aspect ratio e copre l\'area',
      'Usa loadingBuilder per mostrare indicatore di caricamento',
      'Aggiungi le immagini in pubspec.yaml per assets'
    ]
  },
  listview: {
    name: 'ListView',
    category: 'Liste',
    description: 'ListView crea una lista scorrevole di widget',
    attributes: {
      'children': 'Lista di widget figli (per ListView base)',
      'itemCount': 'Numero di elementi (per ListView.builder)',
      'itemBuilder': 'Funzione per costruire ogni elemento',
      'scrollDirection': 'Direzione dello scorrimento',
      'shrinkWrap': 'Se la lista deve occupare solo lo spazio necessario'
    },
    example: `// ListView.builder per liste dinamiche
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ListTile(
      leading: Icon(Icons.person),
      title: Text(items[index].name),
      subtitle: Text(items[index].description),
      onTap: () {
        // Azione al tap
      },
    );
  },
)`,
    tips: [
      'Usa ListView.builder per liste grandi per performance',
      'shrinkWrap: true quando ListView è in Column',
      'scrollDirection: Axis.horizontal per liste orizzontali'
    ]
  },
  gridview: {
    name: 'GridView',
    category: 'Liste',
    description: 'GridView crea una griglia scorrevole di widget',
    attributes: {
      'gridDelegate': 'Delegato che controlla il layout della griglia',
      'children': 'Lista di widget figli',
      'crossAxisCount': 'Numero di colonne (per GridView.count)',
      'crossAxisSpacing': 'Spazio orizzontale tra elementi',
      'mainAxisSpacing': 'Spazio verticale tra elementi'
    },
    example: `GridView.count(
  crossAxisCount: 2,
  crossAxisSpacing: 10,
  mainAxisSpacing: 10,
  children: List.generate(20, (index) {
    return Card(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.image, size: 40),
          Text('Item \$index'),
        ],
      ),
    );
  }),
)`,
    tips: [
      'GridView.count per numero fisso di colonne',
      'GridView.builder per prestazioni con molti elementi',
      'childAspectRatio controlla proporzioni degli elementi'
    ]
  },
  stack: {
    name: 'Stack',
    category: 'Posizionamento',
    description: 'Stack posiziona i suoi figli uno sopra l\'altro',
    attributes: {
      'children': 'Lista di widget figli da sovrapporre',
      'alignment': 'Allineamento predefinito per figli non posizionati',
      'fit': 'Come i figli non posizionati devono adattarsi allo Stack'
    },
    example: `Stack(
  alignment: Alignment.center,
  children: [
    Container(
      width: 200,
      height: 200,
      color: Colors.blue,
    ),
    Container(
      width: 100,
      height: 100,
      color: Colors.red,
    ),
    Positioned(
      top: 10,
      right: 10,
      child: Icon(Icons.star, color: Colors.yellow),
    ),
  ],
)`,
    tips: [
      'I figli successivi sono disegnati sopra i precedenti',
      'Usa Positioned per controllo preciso della posizione',
      'alignment si applica ai figli non posizionati'
    ]
  },
  positioned: {
    name: 'Positioned',
    category: 'Posizionamento',
    description: 'Positioned controlla la posizione di un figlio dentro uno Stack',
    attributes: {
      'top': 'Distanza dal bordo superiore',
      'bottom': 'Distanza dal bordo inferiore',
      'left': 'Distanza dal bordo sinistro',
      'right': 'Distanza dal bordo destro',
      'child': 'Widget figlio da posizionare'
    },
    example: `Stack(
  children: [
    Container(width: 200, height: 200, color: Colors.grey),
    Positioned(
      top: 20,
      left: 20,
      child: Container(
        width: 50,
        height: 50,
        color: Colors.red,
      ),
    ),
    Positioned(
      bottom: 10,
      right: 10,
      child: FloatingActionButton(
        mini: true,
        onPressed: () {},
        child: Icon(Icons.add),
      ),
    ),
  ],
)`,
    tips: [
      'Può essere usato solo dentro Stack',
      'Ometti un valore per lasciare quella dimensione libera',
      'Usa top/bottom insieme per controllare l\'altezza'
    ]
  },
  padding: {
    name: 'Padding',
    category: 'Posizionamento',
    description: 'Padding aggiunge spazio interno intorno al suo figlio',
    attributes: {
      'padding': 'EdgeInsets che specifica lo spazio interno',
      'child': 'Widget figlio da circondare con padding'
    },
    example: `Padding(
  padding: EdgeInsets.all(16.0),
  child: Text('Testo con padding'),
)

// Opzioni EdgeInsets
Padding(
  padding: EdgeInsets.symmetric(
    horizontal: 20,
    vertical: 10,
  ),
  child: Card(
    child: Text('Card con padding'),
  ),
)`,
    tips: [
      'EdgeInsets.all() per padding uguale su tutti i lati',
      'EdgeInsets.symmetric() per padding orizzontale/verticale',
      'EdgeInsets.only() per controllo specifico di ogni lato'
    ]
  },
  align: {
    name: 'Align',
    category: 'Posizionamento',
    description: 'Align posiziona il suo figlio all\'interno dei suoi limiti',
    attributes: {
      'alignment': 'Dove posizionare il figlio',
      'child': 'Widget figlio da allineare'
    },
    example: `Container(
  width: 200,
  height: 200,
  color: Colors.grey[300],
  child: Align(
    alignment: Alignment.topRight,
    child: Container(
      width: 50,
      height: 50,
      color: Colors.blue,
    ),
  ),
)`,
    tips: [
      'Alignment.center è il valore predefinito',
      'Usa Alignment(x, y) per posizioni personalizzate',
      'Valori da -1.0 a 1.0 per x e y'
    ]
  },
  center: {
    name: 'Center',
    category: 'Posizionamento',
    description: 'Center centra il suo figlio all\'interno dei suoi limiti',
    attributes: {
      'child': 'Widget figlio da centrare'
    },
    example: `Container(
  width: 200,
  height: 200,
  color: Colors.grey[300],
  child: Center(
    child: Text('Centrato'),
  ),
)`,
    tips: [
      'Equivale a Align(alignment: Alignment.center)',
      'Utile per centrare rapidamente un widget',
      'Eredita le dimensioni dal parent'
    ]
  },
  appbar: {
    name: 'AppBar',
    category: 'Navigazione',
    description: 'AppBar fornisce una barra dell\'applicazione in cima allo schermo',
    attributes: {
      'title': 'Titolo principale della barra',
      'leading': 'Widget a sinistra del titolo',
      'actions': 'Lista di azioni a destra',
      'backgroundColor': 'Colore di sfondo',
      'elevation': 'Ombra della barra'
    },
    example: `AppBar(
  title: Text('La Mia App'),
  leading: IconButton(
    icon: Icon(Icons.menu),
    onPressed: () {
      Scaffold.of(context).openDrawer();
    },
  ),
  actions: [
    IconButton(
      icon: Icon(Icons.search),
      onPressed: () {
        // Azione ricerca
      },
    ),
    IconButton(
      icon: Icon(Icons.more_vert),
      onPressed: () {
        // Menu opzioni
      },
    ),
  ],
)`,
    tips: [
      'Si integra automaticamente con Scaffold',
      'actions mostra le icone a destra',
      'leading viene impostato automaticamente con Drawer'
    ]
  },
  drawer: {
    name: 'Drawer',
    category: 'Navigazione',
    description: 'Drawer fornisce un menu laterale scorrevole',
    attributes: {
      'child': 'Widget contenuto nel drawer'
    },
    example: `Drawer(
  child: ListView(
    padding: EdgeInsets.zero,
    children: [
      DrawerHeader(
        decoration: BoxDecoration(
          color: Colors.blue,
        ),
        child: Text(
          'Menu',
          style: TextStyle(
            color: Colors.white,
            fontSize: 24,
          ),
        ),
      ),
      ListTile(
        leading: Icon(Icons.home),
        title: Text('Home'),
        onTap: () {
          Navigator.pop(context);
        },
      ),
      ListTile(
        leading: Icon(Icons.settings),
        title: Text('Impostazioni'),
        onTap: () {
          Navigator.pop(context);
        },
      ),
    ],
  ),
)`,
    tips: [
      'Usa DrawerHeader per intestazione decorata',
      'ListTile è perfetto per voci del menu',
      'Navigator.pop(context) chiude il drawer'
    ]
  },
  bottomnavigationbar: {
    name: 'BottomNavigationBar',
    category: 'Navigazione',
    description: 'BottomNavigationBar fornisce navigazione in fondo allo schermo',
    attributes: {
      'items': 'Lista di BottomNavigationBarItem',
      'currentIndex': 'Indice della tab attualmente selezionata',
      'onTap': 'Callback quando si tocca una tab',
      'type': 'Tipo di navigazione (fixed o shifting)'
    },
    example: `BottomNavigationBar(
  currentIndex: _selectedIndex,
  onTap: (index) {
    setState(() {
      _selectedIndex = index;
    });
  },
  items: [
    BottomNavigationBarItem(
      icon: Icon(Icons.home),
      label: 'Home',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.search),
      label: 'Cerca',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.person),
      label: 'Profilo',
    ),
  ],
)`,
    tips: [
      'Massimo 5 tab per UX ottimale',
      'BottomNavigationBarType.fixed per tab sempre visibili',
      'Gestisci lo stato currentIndex nel widget padre'
    ]
  },
  floatingactionbutton: {
    name: 'FloatingActionButton',
    category: 'Navigazione',
    description: 'FloatingActionButton fornisce un pulsante d\'azione fluttuante',
    attributes: {
      'onPressed': 'Callback quando viene premuto',
      'child': 'Widget figlio (solitamente un\'icona)',
      'backgroundColor': 'Colore di sfondo',
      'mini': 'Se deve essere più piccolo del normale'
    },
    example: `FloatingActionButton(
  onPressed: () {
    // Azione principale
  },
  child: Icon(Icons.add),
  backgroundColor: Colors.blue,
)

// FAB esteso
FloatingActionButton.extended(
  onPressed: () {},
  icon: Icon(Icons.add),
  label: Text('Aggiungi'),
)`,
    tips: [
      'Usa per l\'azione principale dello schermo',
      'floatingActionButtonLocation controlla la posizione',
      'FloatingActionButton.extended per etichetta con testo'
    ]
  }
};

// Search functionality
let searchIndex = [];

// Global variables
let searchInput, searchResults, sidebar, sidebarToggle, mainContent, breadcrumbs;
let currentSection = 'introduzione';

// Initialize search index
function initializeSearch() {
  searchIndex = [];
  
  // Add widgets to search index
  Object.keys(widgetData).forEach(key => {
    const widget = widgetData[key];
    searchIndex.push({
      id: key,
      title: widget.name,
      category: widget.category,
      description: widget.description,
      type: 'widget'
    });
    
    // Add attributes to search index
    Object.keys(widget.attributes).forEach(attr => {
      searchIndex.push({
        id: `${key}-${attr}`,
        title: `${widget.name}.${attr}`,
        category: widget.category,
        description: widget.attributes[attr],
        type: 'attribute',
        parentWidget: key
      });
    });
  });
}

// Search function
function performSearch(query) {
  if (!query.trim()) return [];
  
  const queryLower = query.toLowerCase();
  return searchIndex.filter(item => 
    item.title.toLowerCase().includes(queryLower) ||
    item.description.toLowerCase().includes(queryLower) ||
    item.category.toLowerCase().includes(queryLower)
  ).slice(0, 10);
}

// Navigate to section
function navigateToSection(sectionId) {
  console.log('Navigating to:', sectionId);
  
  // Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    targetSection.style.display = 'block';
    currentSection = sectionId;
  }
  
  // Update navigation
  updateNavigation(sectionId);
  updateBreadcrumbs(sectionId);
  
  // Hide search results
  if (searchResults) {
    searchResults.classList.add('hidden');
  }
  
  // Close mobile sidebar
  if (sidebar && window.innerWidth <= 768) {
    sidebar.classList.remove('open');
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  // Highlight code if Prism is available
  if (window.Prism) {
    setTimeout(() => Prism.highlightAll(), 100);
  }
}

// Update navigation active state
function updateNavigation(sectionId) {
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  navLinks.forEach(link => link.classList.remove('active'));
  
  const activeLink = document.querySelector(`a[data-section="${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Update breadcrumbs
function updateBreadcrumbs(sectionId) {
  if (!breadcrumbs) return;
  
  let breadcrumbText = '';
  
  if (sectionId === 'introduzione') {
    breadcrumbText = 'Introduzione';
  } else if (sectionId === 'stateless-vs-stateful') {
    breadcrumbText = 'StatelessWidget vs StatefulWidget';
  } else if (sectionId === 'tips') {
    breadcrumbText = 'Tips & Best Practices';
  } else if (sectionId === 'comparisons') {
    breadcrumbText = 'Confronti tra Widget';
  } else if (widgetData[sectionId]) {
    const widget = widgetData[sectionId];
    breadcrumbText = `${widget.category} > ${widget.name}`;
  }
  
  breadcrumbs.innerHTML = `<span class="breadcrumb-item active">${breadcrumbText}</span>`;
}

// Handle search
function handleSearch() {
  const query = searchInput.value.trim();
  
  if (!query) {
    searchResults.classList.add('hidden');
    return;
  }
  
  const results = performSearch(query);
  displaySearchResults(results);
}

// Display search results
function displaySearchResults(results) {
  if (!searchResults) return;
  
  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-result">Nessun risultato trovato</div>';
  } else {
    searchResults.innerHTML = results.map(result => {
      const typeIcon = result.type === 'widget' ? '🧩' : '⚙️';
      return `
        <div class="search-result" data-section-id="${result.parentWidget || result.id}">
          <div class="search-result-title">${typeIcon} ${result.title}</div>
          <div class="search-result-description">${result.description}</div>
        </div>
      `;
    }).join('');
    
    // Add click events to search results
    searchResults.querySelectorAll('.search-result').forEach(result => {
      result.addEventListener('click', () => {
        const sectionId = result.getAttribute('data-section-id');
        navigateToSection(sectionId);
      });
    });
  }
  
  searchResults.classList.remove('hidden');
}

// Generate widget sections
function generateWidgetSections() {
  const widgetSectionsContainer = document.getElementById('widget-sections');
  if (!widgetSectionsContainer) return;
  
  Object.keys(widgetData).forEach(key => {
    const widget = widgetData[key];
    const section = createWidgetSection(key, widget);
    widgetSectionsContainer.appendChild(section);
  });
}

// Create widget section
function createWidgetSection(key, widget) {
  const section = document.createElement('section');
  section.id = key;
  section.className = 'content-section widget-section';
  section.style.display = 'none';
  
  section.innerHTML = `
    <div class="content-header">
      <h1>${widget.name}</h1>
      <p class="lead">${widget.description}</p>
    </div>
    
    <div class="widget-description">
      <p><strong>Categoria:</strong> ${widget.category}</p>
      <p>${widget.description}</p>
    </div>
    
    <div class="card">
      <div class="card__body">
        <h2>Esempio Base</h2>
        <div class="code-block">
          <button class="copy-button" onclick="copyCode(this)">📋 Copia</button>
          <pre><code class="language-dart">${escapeHtml(widget.example)}</code></pre>
        </div>
      </div>
    </div>
    
    <div class="card">
      <div class="card__body">
        <h2>Attributi Principali</h2>
        <table class="attributes-table">
          <thead>
            <tr>
              <th>Attributo</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            ${Object.keys(widget.attributes).map(attr => `
              <tr>
                <td><code>${attr}</code></td>
                <td>${widget.attributes[attr]}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
    
    ${widget.tips && widget.tips.length > 0 ? `
    <div class="widget-tips">
      <h4>💡 Tips & Best Practices</h4>
      <ul>
        ${widget.tips.map(tip => `<li>${tip}</li>`).join('')}
      </ul>
    </div>
    ` : ''}
  `;
  
  return section;
}

// Copy code functionality
function copyCode(button) {
  const codeBlock = button.nextElementSibling.querySelector('code');
  const text = codeBlock.textContent;
  
  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.textContent;
    button.textContent = '✅ Copiato!';
    button.style.background = 'var(--color-success)';
    button.style.color = 'white';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
      button.style.color = '';
    }, 2000);
  }).catch(err => {
    console.error('Errore nella copia:', err);
    // Fallback per browser che non supportano clipboard API
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    const originalText = button.textContent;
    button.textContent = '✅ Copiato!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  });
}

// Escape HTML function
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Setup event listeners
function setupEventListeners() {
  // Get DOM elements first
  searchInput = document.getElementById('search-input');
  searchResults = document.getElementById('search-results');
  sidebar = document.getElementById('sidebar');
  sidebarToggle = document.getElementById('sidebar-toggle');
  mainContent = document.getElementById('main-content');
  breadcrumbs = document.getElementById('breadcrumbs');

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim()) {
        searchResults.classList.remove('hidden');
      }
    });
  }
  
  // Hide search results when clicking outside
  document.addEventListener('click', (e) => {
    if (searchInput && searchResults && 
        !searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.add('hidden');
    }
  });
  
  // Sidebar navigation
  const navLinks = document.querySelectorAll('.sidebar-nav a[data-section]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('data-section');
      navigateToSection(sectionId);
    });
  });
  
  // Sidebar toggle for mobile
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
  
  // Close sidebar when clicking on main content (mobile)
  if (mainContent) {
    mainContent.addEventListener('click', () => {
      if (window.innerWidth <= 768 && sidebar) {
        sidebar.classList.remove('open');
      }
    });
  }

  // Logo click to go home
  const logo = document.querySelector('.logo h1');
  if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => {
      navigateToSection('introduzione');
    });
  }
}

// Handle window resize
function handleResize() {
  if (window.innerWidth > 768 && sidebar) {
    sidebar.classList.remove('open');
  }
}

// Initialize app
function initializeApp() {
  console.log('Initializing app...');
  
  // Initialize search
  initializeSearch();
  
  // Generate widget sections
  generateWidgetSections();
  
  // Setup event listeners
  setupEventListeners();
  
  // Ensure introduction is visible by default
  setTimeout(() => {
    navigateToSection('introduzione');
  }, 100);
  
  // Initialize Prism.js
  if (window.Prism) {
    Prism.highlightAll();
  }
  
  console.log('App initialized');
}

// Make functions globally available
window.copyCode = copyCode;
window.navigateToSection = navigateToSection;

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

window.addEventListener('resize', handleResize);
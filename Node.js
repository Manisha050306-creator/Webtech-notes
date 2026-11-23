
const syllabusUnits = [
  {
    title: "Introduction to Internet and Web Technology",
    summary: "Internet, WWW, protocols, browsers and servers",
    topics: [
      {
        title: "History of Internet",
        content: "The Internet is a worldwide network of interconnected computers. It started with ARPANET in 1969, developed by the US Department of Defense. Later, TCP/IP became the standard communication protocol in 1983. The World Wide Web was introduced by Tim Berners-Lee in 1989.",
        key: "ARPANET, TCP/IP, 1983, Tim Berners-Lee, 1989.",
        example: "Using Wi-Fi to access websites is an example of Internet connectivity."
      },
      {
        title: "World Wide Web (WWW)",
        content: "WWW is a collection of interconnected web pages and resources available through the Internet. It uses HTTP or HTTPS to transfer information. Websites are accessed through web browsers using URLs.",
        key: "WWW, Web pages, HTTP, HTTPS, URL and hyperlinks.",
        example: "Google, Wikipedia and Amazon are examples of websites."
      },
      {
        title: "HTML",
        content: "HTML stands for HyperText Markup Language. It is used to create the structure of web pages. HTML uses tags and elements such as headings, paragraphs, images, links, tables and forms.",
        key: "HTML is a markup language, not a programming language. Common tags include h1, p, a, img and table.",
        example: "<h1>Welcome</h1> displays a main heading on a web page."
      },
      {
        title: "HTTP",
        content: "HTTP stands for HyperText Transfer Protocol. It is an application-layer protocol used for communication between web browsers and web servers. HTTPS is the secure version of HTTP.",
        key: "HTTP methods include GET, POST, PUT and DELETE. Common status codes include 200, 404 and 500.",
        example: "When you open a website, your browser sends an HTTP request to its server."
      },
      {
        title: "SMTP",
        content: "SMTP stands for Simple Mail Transfer Protocol. It is used to send emails from an email client to a mail server and between mail servers.",
        key: "SMTP is mainly used for sending emails.",
        example: "Gmail uses SMTP to send an email to another person."
      },
      {
        title: "POP3",
        content: "POP3 stands for Post Office Protocol version 3. It is used by email clients to retrieve emails from a mail server. Traditionally, it downloads messages to the local device.",
        key: "POP3 is an email receiving protocol.",
        example: "An email application downloads messages from the mail server using POP3."
      },
      {
        title: "MIME",
        content: "MIME stands for Multipurpose Internet Mail Extensions. It extends the email format to support attachments, images, audio, video and non-ASCII text.",
        key: "MIME allows different types of content to be sent through email.",
        example: "Sending a PDF document or image as an email attachment uses MIME."
      },
      {
        title: "IMAP",
        content: "IMAP stands for Internet Message Access Protocol. It allows users to access and manage emails directly on the mail server. Messages and folders can stay synchronized across multiple devices.",
        key: "IMAP keeps email synchronized across devices.",
        example: "Reading the same email on a phone and laptop using a synchronized mailbox."
      },
      {
        title: "DNS",
        content: "DNS stands for Domain Name System. It translates human-readable domain names into IP addresses so computers can locate servers on a network.",
        key: "DNS is commonly called the phonebook of the Internet.",
        example: "DNS translates google.com into an IP address."
      },
      {
        title: "Web Browsers and Web Servers",
        content: "A web browser is software used to access and display websites. A web server stores website resources and responds to browser requests.",
        key: "Browsers: Chrome, Firefox, Edge. Servers: Apache, Nginx.",
        example: "Chrome requests a webpage and a web server sends its HTML, CSS and JavaScript."
      }
    ]
  },
  {
    title: "HTML, CSS, JavaScript and XML",
    summary: "HTML elements, forms, CSS, JavaScript and XML",
    topics: [
      {
        title: "HTML Lists",
        content: "HTML lists organize information. Ordered lists use ol, unordered lists use ul and each list item uses li.",
        key: "ol = numbered list, ul = bulleted list, li = list item.",
        example: "<ul><li>HTML</li><li>CSS</li></ul>"
      },
      {
        title: "HTML Tables",
        content: "Tables display information in rows and columns. The table tag creates a table, tr creates a row, th creates a heading cell and td creates a data cell.",
        key: "table, tr, th and td are important tags.",
        example: "<table><tr><th>Name</th></tr><tr><td>Manisha</td></tr></table>"
      },
      {
        title: "HTML Images",
        content: "The img tag is used to display images on a webpage. The src attribute specifies the image path and alt provides alternative text.",
        key: "Important attributes: src, alt, width and height.",
        example: "<img src='photo.jpg' alt='My Photo'>"
      },
      {
        title: "HTML Forms",
        content: "Forms collect user information. Common elements include input, label, textarea, select, option and button.",
        key: "Important input types: text, password, email, radio and checkbox.",
        example: "<form><input type='text' placeholder='Enter name'><button>Submit</button></form>"
      },
      {
        title: "Frames",
        content: "Frames were used to divide a browser window into multiple sections, each showing a separate HTML document. The old frameset and frame elements are obsolete in HTML5. The iframe element can embed another page.",
        key: "iframe is used to embed another webpage.",
        example: "<iframe src='https://example.com' title='Example'></iframe>"
      },
      {
        title: "CSS",
        content: "CSS stands for Cascading Style Sheets. It controls the appearance and layout of HTML elements, including colors, fonts, spacing and responsive design.",
        key: "Types: Inline CSS, Internal CSS and External CSS.",
        example: "p { color: blue; font-size: 18px; }"
      },
      {
        title: "JavaScript",
        content: "JavaScript is a programming language used to make webpages interactive. It can validate forms, respond to clicks, update page content and communicate with servers.",
        key: "JavaScript supports variables, functions, conditions, loops and events.",
        example: "alert('Welcome to Web Technology');"
      },
      {
        title: "DHTML",
        content: "DHTML stands for Dynamic HTML. It combines HTML, CSS, JavaScript and the DOM to create interactive webpages whose content and appearance can change dynamically.",
        key: "DHTML is a combination of HTML, CSS, JavaScript and DOM.",
        example: "Changing the background color of a webpage after clicking a button."
      },
      {
        title: "DTD",
        content: "DTD stands for Document Type Definition. It defines the legal structure, elements and attributes of an XML document.",
        key: "DTD defines the structure and rules of XML documents.",
        example: "A DTD can specify that a book element must contain title and author."
      },
      {
        title: "XML Schema",
        content: "XML Schema, also called XSD, defines the structure, elements, attributes and data types allowed in an XML document.",
        key: "XSD supports data types and is written using XML syntax.",
        example: "An XSD can specify that age must be an integer."
      },
      {
        title: "DOM and SAX",
        content: "DOM stands for Document Object Model. It represents an XML document as a tree in memory. SAX is an event-based parser that reads XML sequentially without loading the complete document into memory.",
        key: "DOM: tree-based and memory-intensive. SAX: event-based and memory-efficient.",
        example: "DOM is useful for modifying XML nodes, while SAX is useful for processing large XML files."
      }
    ]
  }

,
{
  title: "Web Services and AJAX",
  summary: "SOAP, WSDL, UDDI, CORBA and AJAX",
  topics: [
    {
      title: "Web Services",
      content: "Web services are software systems that allow different applications to communicate over a network using standard web protocols. They support machine-to-machine communication.",
      key: "Platform-independent communication, interoperability and reusable services.",
      example: "A weather application gets weather information from an online weather service."
    },
    {
      title: "UDDI",
      content: "UDDI stands for Universal Description, Discovery and Integration. It is a directory service used to publish and discover web services.",
      key: "UDDI helps service providers publish services and users discover them.",
      example: "A company can register its web service in a UDDI directory."
    },
    {
      title: "SOAP",
      content: "SOAP stands for Simple Object Access Protocol. It is a messaging protocol used to exchange structured information between applications, usually using XML.",
      key: "SOAP uses XML messages and commonly works over HTTP.",
      example: "An application sends an XML SOAP request to a remote server."
    },
    {
      title: "WSDL",
      content: "WSDL stands for Web Services Description Language. It is an XML-based language that describes what a web service does, its operations and how to access it.",
      key: "WSDL describes service operations, messages and endpoints.",
      example: "A WSDL document explains how to call a payment web service."
    },
    {
      title: "Web Services Architecture",
      content: "Web services architecture generally includes a service provider, service requester and service registry. The provider creates a service, the requester uses it and the registry helps discover it.",
      key: "Main roles: Provider, Requester and Registry.",
      example: "A travel application discovers and uses a hotel booking service."
    },
    {
      title: "Developing and Deploying Web Services",
      content: "Development involves creating service operations, defining interfaces, implementing business logic and testing. Deployment makes the service available on a server for other applications.",
      key: "Steps: Design, Develop, Test, Deploy and Maintain.",
      example: "Deploying a student result API on a web server."
    },
    {
      title: "AJAX",
      content: "AJAX stands for Asynchronous JavaScript and XML. It allows webpages to exchange data with servers asynchronously without reloading the entire page.",
      key: "AJAX improves responsiveness and user experience.",
      example: "Google search suggestions appear while typing without refreshing the page."
    },
    {
      title: "CORBA",
      content: "CORBA stands for Common Object Request Broker Architecture. It is a standard that allows software objects written in different programming languages and running on different machines to communicate.",
      key: "CORBA supports communication between distributed objects.",
      example: "A Java application can communicate with a C++ object using CORBA."
    }
  ]
},
{
  title: "Web 2.0 and Web 3.0",
  summary: "Social web, semantic web, blockchain and modern technologies",
  topics: [
    {
      title: "Web 2.0",
      content: "Web 2.0 refers to the interactive and participatory generation of the web. Users can create, share and collaborate on online content.",
      key: "User-generated content, collaboration and interaction.",
      example: "Facebook, YouTube, blogs and Wikipedia."
    },
    {
      title: "Blogs",
      content: "A blog is a website or webpage where an individual or organization regularly publishes articles or posts, usually in reverse chronological order.",
      key: "Blogs support publishing, commenting and sharing.",
      example: "A technology blog publishing programming tutorials."
    },
    {
      title: "Wikis",
      content: "A wiki is a collaborative website that allows multiple users to create and edit connected pages.",
      key: "Collaborative content creation and editing.",
      example: "Wikipedia is a popular wiki."
    },
    {
      title: "Social Networks",
      content: "Social networking platforms allow people to create profiles, connect with others and share messages, photos and videos.",
      key: "Communication, networking and content sharing.",
      example: "Instagram, Facebook and LinkedIn."
    },
    {
      title: "RSS",
      content: "RSS stands for Really Simple Syndication. It is a web feed format that allows users to receive updates from websites without visiting them regularly.",
      key: "RSS provides automatic content updates.",
      example: "An RSS reader collects new articles from subscribed websites."
    },
    {
      title: "Ruby on Rails",
      content: "Ruby on Rails is an open-source web application framework written in Ruby. It follows the Model-View-Controller architecture and emphasizes convention over configuration.",
      key: "Ruby language, MVC architecture and rapid development.",
      example: "Developing a database-driven web application using Rails."
    },
    {
      title: "Open APIs",
      content: "An Open API is an interface that allows external developers to access the features or data of a software service under defined rules.",
      key: "APIs enable integration and reuse of services.",
      example: "A website uses a maps API to display locations."
    },
    {
      title: "Web 3.0 and Semantic Web",
      content: "Web 3.0 is associated with a more intelligent and connected web. The Semantic Web aims to make web data understandable to machines through structured descriptions and relationships.",
      key: "Semantic data, linked information and machine understanding.",
      example: "A knowledge system connects information about people, places and organizations."
    },
    {
      title: "Widgets and Mashups",
      content: "A widget is a small application that provides a specific function. A mashup combines data or services from multiple sources into one application.",
      key: "Widgets provide small features; mashups combine multiple services.",
      example: "A dashboard combining weather and map information."
    },
    {
      title: "RDF",
      content: "RDF stands for Resource Description Framework. It is a standard model for describing resources and their relationships using subject-predicate-object triples.",
      key: "RDF represents information as triples.",
      example: "Manisha — studies — Computer Science."
    },
    {
      title: "Web Information Systems",
      content: "Web Information Systems use web technologies to collect, store, process and present information to users.",
      key: "They combine web interfaces, data and information processing.",
      example: "An online university student management portal."
    },
    {
      title: "Search Engines",
      content: "Search engines help users find information on the Internet. They generally crawl webpages, index their content and rank results according to relevance.",
      key: "Main stages: Crawling, Indexing and Ranking.",
      example: "Google and Bing."
    },
    {
      title: "Recommender Systems",
      content: "Recommender systems suggest products, videos, music or other content based on user interests, behavior or similarities between users.",
      key: "Common approaches include collaborative filtering and content-based filtering.",
      example: "YouTube recommending videos based on watch history."
    },
    {
      title: "Blockchain Benefits",
      content: "Blockchain is a distributed digital ledger in which records are stored in linked blocks. It can provide transparency, traceability and tamper resistance.",
      key: "Decentralization, transparency and immutability.",
      example: "Tracking products through a supply chain."
    },
    {
      title: "Edge Computing",
      content: "Edge computing processes data close to where it is generated instead of sending everything to a distant cloud server.",
      key: "It can reduce latency and network traffic.",
      example: "A smart camera processes video locally."
    },
    {
      title: "Dark Mode",
      content: "Dark mode is a user interface theme that uses dark backgrounds and lighter text. It can improve comfort in low-light environments and is a common interface option.",
      key: "Dark backgrounds, readable contrast and user preference.",
      example: "A website offering a light and dark theme switch."
    }
  ]
},
{
  title: "Web 4.0 and Future Technologies",
  summary: "AI, IoT, AR/VR, smart web and 5G",
  topics: [
    {
      title: "Web 4.0",
      content: "Web 4.0 is a proposed vision of a more intelligent, connected and interactive web. It emphasizes AI, automation and communication between people and devices.",
      key: "Intelligence, connectivity, personalization and automation.",
      example: "An intelligent assistant that responds to user needs."
    },
    {
      title: "AI-Powered Personalized Content",
      content: "Artificial Intelligence can analyze user preferences and behavior to provide personalized recommendations, content and services.",
      key: "AI, machine learning, user behavior and personalization.",
      example: "A streaming platform suggesting movies based on viewing history."
    },
    {
      title: "Decentralized Web and Blockchain",
      content: "A decentralized web aims to reduce dependence on centralized platforms by using distributed networks and technologies such as blockchain.",
      key: "Distributed control, peer-to-peer systems and user ownership.",
      example: "A decentralized application running on a blockchain network."
    },
    {
      title: "Internet of Things (IoT)",
      content: "IoT refers to physical devices connected to the Internet that collect and exchange data using sensors and communication technologies.",
      key: "Connected devices, sensors and data exchange.",
      example: "Smart watches, smart lights and connected home appliances."
    },
    {
      title: "Augmented Reality and Virtual Reality",
      content: "Augmented Reality adds digital elements to the real-world environment. Virtual Reality creates a computer-generated immersive environment.",
      key: "AR enhances the real world; VR creates a virtual environment.",
      example: "AR navigation overlays directions on a camera view; VR headsets provide virtual experiences."
    },
    {
      title: "Smart Web",
      content: "The Smart Web uses intelligent technologies to provide more context-aware and responsive services. It can use AI and connected data to improve user interaction.",
      key: "Intelligence, context awareness and automation.",
      example: "A smart website displaying relevant information based on user activity."
    },
    {
      title: "Adaptive Interfaces",
      content: "Adaptive interfaces adjust their layout or behavior according to user needs, device type, screen size or context.",
      key: "Flexibility, accessibility and personalization.",
      example: "A responsive website changing its layout on a mobile phone."
    },
    {
      title: "Web Automation",
      content: "Web automation uses software tools and scripts to perform repetitive browser tasks automatically.",
      key: "Automation saves time and reduces repetitive manual work.",
      example: "Automatically filling and submitting a web form."
    },
    {
      title: "5G Technology",
      content: "5G is the fifth generation of mobile network technology. It offers higher data speeds, lower latency and support for a large number of connected devices.",
      key: "High speed, low latency and massive connectivity.",
      example: "Using 5G for real-time video communication and connected IoT devices."
    }
  ]
}
];


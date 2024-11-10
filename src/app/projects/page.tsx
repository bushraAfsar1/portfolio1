

const projects = [
    { title: 'Restuarant App', description: 'A digital menu app designed for in-restaurant use, allowing customers to browse a restaurant’s offerings and place orders from their homes. Built with javascript and use local storage to save users info. ' 
      
      , url: 'https://soft-cendol-30600f.netlify.app' },
    { title: 'Chat App', description: 'A private chat app that emphasizes user security and confidentiality. Built using React for the front end and Firebase for real-time messaging and authentication, this app allows users to create secure chat rooms where only invited members can join.   ', 
      url: 'https://64a7bdef1a13033f83e99bec--glittery-paprenjak-406c48.netlify.app/' },
      { title:'Rsume builder', description:'A skills-based resume builder that emphasizes strengths and achievements over traditional formatting. Users can Add their various skills, add project descriptions, and list key achievements. Built with Typescript and custom CSS',
         url:'https://dynamic-resume-fawn.vercel.app/'},
  
         { title:'Expense management', description:'A productivity-focused task management app that helps users organize and prioritize their tasks. Built with JS, this app allows users to add, delete or edit your task',
          url:'https://github.com/bushraAfsar1/ExpenseManagementSystem'}
        
  ];
  
  const Projects = () => {
    return (
      <>
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded shadow-md">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p>{project.description}</p>
                <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
              </div>
            ))}
          </div>
        </main>
      </>
    );
  };
  
  export default Projects;